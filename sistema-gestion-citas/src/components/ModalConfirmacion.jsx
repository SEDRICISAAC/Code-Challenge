import PropTypes from 'prop-types'

const ModalConfirmacion = ({ mensaje, onConfirmar, onCancelar }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h2 className="text-lg font-semibold mb-4">{mensaje}</h2>
        <div className="flex justify-around">
          <button
            onClick={onConfirmar}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Confirmar
          </button>
          <button
            onClick={onCancelar}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
ModalConfirmacion.propTypes = {
  mensaje: PropTypes.string.isRequired,
  onConfirmar: PropTypes.func.isRequired,
  onCancelar: PropTypes.func.isRequired,
}

export default ModalConfirmacion
