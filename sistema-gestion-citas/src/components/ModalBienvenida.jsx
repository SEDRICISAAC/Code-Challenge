import PropTypes from 'prop-types'

const ModalBienvenida = ({ onCerrar }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-bold mb-4">
          Bienvenido a nuestra aplicación de gestión de citas
        </h2>
        <p className="text-gray-600 mb-4">
          Aquí puedes gestionar tus citas de forma sencilla y rápida.
        </p>
        <button
          onClick={onCerrar}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Empezar
        </button>
      </div>
    </div>
  )
}
ModalBienvenida.propTypes = {
  onCerrar: PropTypes.func.isRequired,
}

export default ModalBienvenida
