import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const FormularioCita = ({ onSubmit, cita }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [errores, setErrores] = useState({})

  useEffect(() => {
    if (cita) {
      setName(cita.name)
      setDate(cita.date)
    }
  }, [cita])

  const validarFormulario = () => {
    const errores = {}
    const fechaActual = new Date()

    if (!name) {
      errores.name = 'El nombre del cliente es obligatorio.'
    }

    if (!date) {
      errores.date = 'La fecha y hora son obligatorias.'
    } else if (new Date(date) < fechaActual) {
      errores.date =
        'La fecha y hora no pueden ser anteriores a la fecha y hora actuales.'
    }

    return errores
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const erroresValidacion = validarFormulario()

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      return
    }

    setErrores({})
    onSubmit({ name, date })
    setName('')
    setDate('')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {cita ? 'Editar Cita' : 'Crear Cita'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">
            Nombre del cliente
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ingresa el nombre"
            required
          />
          {errores.name && (
            <p className="text-red-500 text-sm mt-1">{errores.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date">
            Fecha y hora
          </label>
          <input
            id="date"
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          {errores.date && (
            <p className="text-red-500 text-sm mt-1">{errores.date}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            {cita ? 'Guardar Cambios' : 'Crear Cita'}
          </button>
        </div>
      </form>
    </div>
  )
}

FormularioCita.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  cita: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
  }),
}

export default FormularioCita
