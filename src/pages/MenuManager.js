import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import FormModal from "../components/FormModal";
import ConfirmationDialog from "../components/ConfirmationDialog";
import {
  fetchMenuData,
  fetchMenuCategories,
  addMenuItem,
  editMenuItem,
  deleteMenuItem,
} from "../services/apiService";

const MenuManager = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItemId, setDeletingItemId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [menuItems, menuCategories] = await Promise.all([
          fetchMenuData(),
          fetchMenuCategories(),
        ]);
        setMenuData(menuItems);
        setCategories(menuCategories);
      } catch (error) {
        console.error("Error al cargar los datos del menú:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleAdd = async (item) => {
    try {
      const newItem = await addMenuItem(item);
      console.log("Platillo agregado al estado:", newItem);
  
      setMenuData((prev) => [
        ...prev,
        {
          ...newItem,
          image: newItem.image || "",
          category: newItem.category || "Sin categoría",
        },
      ]);
      setEditingItem(null);
    } catch (error) {
      console.error("Error al agregar el platillo:", error);
    }
  };
  

  const handleEdit = async (item) => {
    try {
      const updatedItem = await editMenuItem(item);
      setMenuData((prev) =>
        prev.map((i) => (i.id === updatedItem.id ? updatedItem : i))
      );
      setEditingItem(null);
    } catch (error) {
      console.error("Error al editar el platillo:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMenuItem(deletingItemId);
      setMenuData((prev) => prev.filter((item) => item.id !== deletingItemId));
      setDeletingItemId(null);
    } catch (error) {
      console.error("Error al eliminar el platillo:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Cargando menú...</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Gestión del Menú</h1>
      <button
        onClick={() => setEditingItem({})}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 mb-4"
      >
        Agregar Platillo
      </button>
      <Table
        data={menuData}
        columns={["name", "category", "price", "image"]}
        renderImage={(src) => (
          <img
            src={src}
            alt="Imagen del platillo"
            className="h-16 w-16 object-cover rounded-md"
          />
        )}
        onEdit={(item) => setEditingItem({ ...item })} // Asegúrate de pasar un objeto nuevo
        onDelete={(item) => setDeletingItemId(item.id)}
      />
      {editingItem && (
        <FormModal
          item={editingItem}
          onSave={editingItem.id ? handleEdit : handleAdd} // Distingue entre agregar y editar
          onCancel={() => setEditingItem(null)}
          categories={categories}
        />
      )}
      {deletingItemId && (
        <ConfirmationDialog
          message="¿Estás seguro de eliminar este platillo?"
          onConfirm={handleDelete}
          onCancel={() => setDeletingItemId(null)}
        />
      )}
    </div>
  );
};

export default MenuManager;
