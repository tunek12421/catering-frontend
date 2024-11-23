import defaultMenuData from "./defaultMenuData";
const API_BASE_URL = "http://localhost:5000/api"; // Cambiar según el backend

/**
 * Obtiene los mensajes y otros datos desde la base de datos.
 * @returns {Promise<Object>} Datos cargados desde la API.
 */
export const fetchHomeData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/home`);
    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos del home:", error);
    throw error;
  }
};

export const fetchServicesData = async () => {
  // Aquí implementarías la lógica para obtener los datos de tu API o servicio externo.
  // Por ahora, simularemos un retraso y lanzaremos un error para usar los datos por defecto.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula un error al obtener los datos
      reject("Error al obtener los datos de servicios.");
    }, 1000);
  });
};

export const fetchMenuData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.1; // Simula fallos en el 10% de los casos
      if (shouldFail) {
        reject(new Error("Error al cargar los datos del menú"));
      } else {
        resolve([...defaultMenuData]); // Asegúrate de devolver un array
      }
    }, 1000);
  });
};
