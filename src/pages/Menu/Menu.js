import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MenuHero from "./MenuHero";
import MenuFilters from "./MenuFilters";
import MenuList from "./MenuList";
import MenuDetailModal from "./MenuDetailModal";
import { fetchMenuData } from "../../services/dataService";
import { generateMenuPDF } from "../../services/pdfGenerator";
import defaultMenuData from "../../services/defaultMenuData";

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [loading, setLoading] = useState(true);

  // Referencia exclusiva para el contenedor de los filtros
  const menuFiltersRef = useRef(null);

  useEffect(() => {
    const loadMenuData = async () => {
      try {
        const data = await fetchMenuData();
        setMenuData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setMenuData(defaultMenuData);
        setFilteredData(defaultMenuData);
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  // Función para desplazarse directamente al contenedor de los filtros
  const scrollToMenuFilters = () => {
    if (menuFiltersRef.current) {
      menuFiltersRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFilterChange = (filters) => {
    const filtered = menuData.filter((dish) =>
      filters.category
        ? dish.category === filters.category
        : dish.name.toLowerCase().includes(filters.search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const closeModal = () => {
    setSelectedDish(null);
  };

  const downloadMenuPDF = async () => {
    try {
      await generateMenuPDF(menuData);
    } catch (error) {
      console.error("[ERROR] Falló la generación del PDF:", error);
      alert("Ocurrió un error al intentar generar el menú en PDF.");
    }
  };

  return (
    <motion.main
      className="min-h-screen bg-beige-light pt-16"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {!loading && (
        <MenuHero
          scrollToMenu={scrollToMenuFilters} // Vinculamos al botón "Explorar Menú"
          menuData={menuData}
          downloadMenuPDF={downloadMenuPDF}
        />
      )}

      {!loading && (
        <>
          {/* Contenedor exclusivo para los filtros con el ref */}
          <div ref={menuFiltersRef}>
            <MenuFilters onFilterChange={handleFilterChange} />
          </div>
          {/* Lista de platillos */}
          <MenuList dishes={filteredData} onSelectDish={handleDishSelect} />
        </>
      )}

      {selectedDish && (
        <MenuDetailModal dish={selectedDish} onClose={closeModal} />
      )}

      {loading && <div className="text-center py-20">Cargando menú...</div>}
    </motion.main>
  );
};

export default Menu;
