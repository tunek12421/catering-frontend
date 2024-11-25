import React from "react";

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* Fondo de superposición */}
    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onCancel}></div>

    {/* Contenedor del diálogo */}
    <div className="relative bg-white rounded-lg shadow-lg w-96 p-6">
      <p className="text-gray-700 text-lg mb-6">{message}</p>
      <div className="flex justify-end gap-4">
        <button
          onClick={onCancel}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirm}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmationDialog;
