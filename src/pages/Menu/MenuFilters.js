import React, { forwardRef, useState } from "react";

// Usamos forwardRef para aceptar la referencia desde el componente padre
const MenuFilters = forwardRef(({ onFilterChange }, ref) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, category });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ search, category: e.target.value });
  };

  return (
    <div
      ref={ref} // Vinculamos el ref al contenedor principal
      className="sticky top-0 bg-white shadow-md py-4 px-6 z-10"
    >
      <div className="flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Buscar platillo..."
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/3"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/3"
        >
          <option value="">Todas las Categorías</option>
          <option value="entradas">Entradas</option>
          <option value="platos_fuertes">Platos Fuertes</option>
          <option value="postres">Postres</option>
          <option value="bebidas">Bebidas</option>
        </select>
      </div>
    </div>
  );
});

export default MenuFilters;
