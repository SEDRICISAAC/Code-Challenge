const express = require('express')
const router = express.Router()

let citas = []

const validarCita = (cita) => {
  const errores = []

  if (!cita.name || typeof cita.name !== 'string' || cita.name.trim() === '') {
    errores.push(
      'El nombre del cliente es obligatorio y debe ser una cadena de texto.'
    )
  }

  const fechaCita = new Date(cita.date)
  const fechaActual = new Date()

  if (!cita.date || isNaN(fechaCita.getTime())) {
    errores.push('La fecha y hora son obligatorias y deben ser válidas.')
  } else if (fechaCita < fechaActual) {
    errores.push(
      'La fecha y hora no pueden ser anteriores a la fecha y hora actuales.'
    )
  }

  return errores
}
router.get('/citas', (req, res) => {
  res.json(citas)
})

router.post('/citas', (req, res) => {
  const nuevaCita = req.body
  nuevaCita.id = citas.length + 1
  citas.push(nuevaCita)
  res.status(201).json(nuevaCita)
})

router.put('/citas/:id', (req, res) => {
  const citaId = parseInt(req.params.id)
  const index = citas.findIndex((cita) => cita.id === citaId)
  if (index !== -1) {
    citas[index] = { ...citas[index], ...req.body }
    res.json(citas[index])
  } else {
    res.status(404).send('Cita no encontrada')
  }
})

router.delete('/citas/:id', (req, res) => {
  const citaId = parseInt(req.params.id)
  citas = citas.filter((cita) => cita.id !== citaId)
  res.status(204).send()
})

module.exports = router
