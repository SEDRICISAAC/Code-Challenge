import axios from 'axios'
import { useState, useEffect } from 'react'
import ListaCita from './components/ListaCita'
import FormularioCita from './components/FormularioCita'
import ModalBienvenida from './components/ModalBienvenida'
import ModalConfirmacion from './components/ModalConfirmacion'

const App = () => {
  const [citas, setCitas] = useState([])
  const [alerta, setAlerta] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [citaActual, setCitaActual] = useState(null)
  const [citaAEliminar, setCitaAEliminar] = useState(null)
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/citas')
      .then((response) => {
        setCitas(response.data)
        setCargando(false)
      })
      .catch((error) => {
        console.error('Error al obtener las citas:', error)
        setCargando(false)
      })
  }, [])

  const mostrarAlerta = (mensaje, tipo = 'success') => {
    setAlerta({ mensaje, tipo })
    setTimeout(() => {
      setAlerta(null)
    }, 3000)
  }
  const agregarCita = (cita) => {
    axios
      .post('http://localhost:3000/api/citas', cita)
      .then((response) => {
        setCitas([...citas, response.data])
        mostrarAlerta('Cita creada exitosamente.', 'success')
      })
      .catch((error) => {
        console.error('Error al crear la cita:', error)
      })
  }

  const actualizarCita = (citaActualizada) => {
    axios
      .put(
        `http://localhost:3000/api/citas/${citaActualizada.id}`,
        citaActualizada
      )
      .then((response) => {
        const citasActualizadas = citas.map((cita) =>
          cita.id === citaActualizada.id ? response.data : cita
        )
        setCitas(citasActualizadas)
        setCitaActual(null)
        mostrarAlerta('Cita actualizada exitosamente.', 'success')
      })
      .catch(() => {
        mostrarAlerta('Error al actualizar la cita.', 'danger')
      })
  }

  const confirmarEliminar = () => {
    if (citaAEliminar) {
      axios
        .delete(`http://localhost:3000/api/citas/${citaAEliminar}`)
        .then(() => {
          const citasActualizadas = citas.filter(
            (cita) => cita.id !== citaAEliminar
          )
          setCitas(citasActualizadas)
          mostrarAlerta('Cita eliminada exitosamente.', 'success')
        })
        .catch((error) => {
          console.error('Error al eliminar la cita:', error)
          mostrarAlerta('Error al eliminar la cita.', 'danger')
        })
        .finally(() => {
          setCitaAEliminar(null)
        })
    }
  }

  const manejarSubmit = (cita) => {
    if (citaActual) {
      actualizarCita({ ...citaActual, ...cita })
    } else {
      agregarCita(cita)
    }
  }

  const manejarEditar = (cita) => {
    setCitaActual(cita)
  }
  const manejarEliminar = (id) => {
    setCitaAEliminar(id)
  }
  const cerrarModalBienvenida = () => {
    setMostrarBienvenida(false)
  }

  return (
    <div>
      <h2 className="text-2xl text-center mt-20 font-bold mb-6 text-gray-800">
        Sistema de gestion de Citas
      </h2>

      {alerta && (
        <div
          className={`p-4 mb-4 rounded-md text-center ${
            alerta.tipo === 'danger' ? 'bg-red-500' : 'bg-green-500'
          } text-white`}>
          {alerta.mensaje}
        </div>
      )}
      <FormularioCita onSubmit={manejarSubmit} cita={citaActual} />

      {cargando ? (
        <div className="text-center">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin mx-auto mb-4"></div>
          <p>Cargando citas...</p>
        </div>
      ) : (
        <ListaCita
          citas={citas}
          onEdit={manejarEditar}
          onDelete={manejarEliminar}
        />
      )}
      {mostrarBienvenida && (
        <ModalBienvenida onCerrar={cerrarModalBienvenida} />
      )}

      {citaAEliminar && (
        <ModalConfirmacion
          mensaje="¿Estás seguro que deseas eliminar esta cita?"
          onConfirmar={confirmarEliminar}
          onCancelar={() => setCitaAEliminar(null)}
        />
      )}
    </div>
  )
}

export default App
