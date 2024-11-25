import React, { useState, useEffect } from "react";

const FormModal = ({ item = {}, onSave, onCancel, categories = [] }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    // Inicializar los datos del formulario al abrir el modal
    setFormData({
      id: item.id || "",
      name: item.name || "",
      description: item.description || "",
      category: item.category || "",
      price: item.price || "",
      image: item.image || "",
    });
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.description || !formData.category || !formData.price) {
      setError("Por favor, completa todos los campos obligatorios.");
      return false;
    }
    if (isNaN(formData.price) || formData.price <= 0) {
      setError("El precio debe ser un número mayor a 0.");
      return false;
    }
    setError("");
    return true;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generar ID automáticamente si no existe (solo al agregar)
    const newFormData = { ...formData, id: formData.id || `id_${Date.now()}` };
    onSave(newFormData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">
          {formData.id ? "Editar Platillo" : "Agregar Platillo"}
        </h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm mb-4">{error}</div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="description">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="category">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="price">
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              step="0.01"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="image">
              Imagen
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-700"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Vista previa"
                className="mt-4 w-32 h-32 object-cover rounded-md border shadow-md"
              />
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
