const API_BASE_URL = "http://localhost:5000/api";

// Fetch completo del Home
export const fetchHomeData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/home`);
    if (!response.ok) throw new Error("Error al obtener los datos de Home");
    return await response.json();
  } catch (error) {
    console.error("Error en fetchHomeData:", error);
    throw error;
  }
};

// Hero Section
export const updateHeroSection = async (hero) => {
  try {
    const response = await fetch(`${API_BASE_URL}/home/hero`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hero),
    });
    if (!response.ok) throw new Error("Error al actualizar la sección Hero");
    return await response.json();
  } catch (error) {
    console.error("Error en updateHeroSection:", error);
    throw error;
  }
};

// Urgency Section
export const updateUrgencySection = async (urgency) => {
  try {
    const response = await fetch(`${API_BASE_URL}/home/urgency`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(urgency),
    });
    if (!response.ok) throw new Error("Error al actualizar la sección Urgency");
    return await response.json();
  } catch (error) {
    console.error("Error en updateUrgencySection:", error);
    throw error;
  }
};

// Services
export const fetchServicesData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/home/services`);
    if (!response.ok) throw new Error("Error al obtener los servicios");
    return await response.json();
  } catch (error) {
    console.error("Error en fetchServicesData:", error);
    throw error;
  }
};

export const createService = async (service) => {
  try {
    const response = await fetch(`${API_BASE_URL}/home/services`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    });
    if (!response.ok) throw new Error("Error al crear el servicio");
    return await response.json();
  } catch (error) {
    console.error("Error en createService:", error);
    throw error;
  }
};

export const updateService = async (service) => {
  if (!service.id) {
    console.error("El servicio no tiene un ID válido para actualizar");
    throw new Error("ID inválido");
  }

  const response = await fetch(`${API_BASE_URL}/home/services`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(service),
  });

  if (!response.ok) {
    console.error("Error al actualizar el servicio");
    throw new Error("Error en la solicitud de actualización");
  }

  return await response.json();
};

export const deleteService = async (id) => {
  try {
    if (!id) throw new Error("El ID del servicio es requerido para eliminar");
    const response = await fetch(`${API_BASE_URL}/home/services/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el servicio");
  } catch (error) {
    console.error("Error en deleteService:", error);
    throw error;
  }
};

// Fetch completo del Menú
export const fetchMenuData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu`);
    if (!response.ok) throw new Error("Error al obtener los datos del menú");
    return await response.json();
  } catch (error) {
    console.error("Error en fetchMenuData:", error);
    throw error;
  }
};

export const addMenuItem = async (menuItem) => {
  try {
    const generatedId = `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const payload = {
      id: menuItem.id || generatedId,
      name: menuItem.name,
      description: menuItem.description,
      category: menuItem.category,
      price: parseFloat(menuItem.price),
      image: menuItem.image || "",
    };

    const response = await fetch(`${API_BASE_URL}/menu`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error al agregar el platillo: ${errorMessage}`);
      throw new Error("Error al agregar el elemento del menú");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en addMenuItem:", error);
    throw error;
  }
};

export const editMenuItem = async (menuItem) => {
  try {
    const payload = {
      ...menuItem,
      image: menuItem.image || "",
    };

    const response = await fetch(`${API_BASE_URL}/menu`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Error al editar el elemento del menú");
    return await response.json();
  } catch (error) {
    console.error("Error en editMenuItem:", error);
    throw error;
  }
};

export const deleteMenuItem = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar el elemento del menú");
  } catch (error) {
    console.error("Error en deleteMenuItem:", error);
    throw error;
  }
};

export const fetchMenuCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu/categories`);
    if (!response.ok) throw new Error("Error al obtener las categorías del menú");
    return await response.json();
  } catch (error) {
    console.error("Error en fetchMenuCategories:", error);
    throw error;
  }
};
