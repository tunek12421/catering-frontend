import jsPDF from "jspdf";

// Función para convertir imágenes en Base64
const loadImageAsBase64 = (imagePath) =>
  new Promise((resolve, reject) => {
    console.log(`[DEBUG] Intentando cargar la imagen: ${imagePath}`);
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imagePath;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const base64Image = canvas.toDataURL("image/jpeg");
      console.log(`[DEBUG] Imagen convertida correctamente: ${imagePath}`);
      resolve(base64Image);
    };
    img.onerror = (err) => {
      console.error(`[ERROR] Error cargando la imagen desde ${imagePath}:`, err);
      reject(err);
    };
  });

  export const generateMenuPDF = async (menuData) => {
    console.log("[DEBUG] Iniciando generación del PDF...");
  
    if (!menuData || menuData.length === 0) {
      console.warn("[WARN] El menú no contiene datos.");
      alert("El menú no está disponible para descargar.");
      return;
    }
  
    // Cargar el logo de la empresa
    let logoBase64 = null;
    try {
      logoBase64 = await loadImageAsBase64("/assets/images/logo_pdf_catering.jpg");
    } catch (error) {
      console.error("[ERROR] No se pudo cargar el logo de la empresa:", error);
      alert("Error al cargar el logo. Verifique que el archivo logo_pdf_catering.jpg exista y sea accesible.");
      return;
    }
  
    const allImages = await Promise.all(
      menuData.map((dish) =>
        loadImageAsBase64(dish.image).catch((err) => {
          console.error(`[ERROR] No se pudo cargar la imagen para ${dish.name}:`, err);
          return null; // Retorna null si falla
        })
      )
    );
  
    if (allImages.includes(null)) {
      alert("No se puede generar el PDF porque algunas imágenes no están disponibles.");
      console.error("[ERROR] Una o más imágenes no se cargaron. Cancelando PDF.");
      return;
    }
  
    const doc = new jsPDF();
  
    // Fondo del encabezado
    doc.setFillColor(231, 245, 233); // Verde claro (green-light)
    doc.rect(0, 0, 210, 40, "F");
  
    // Dimensiones del logo (más pequeño y alineado)
    const logoWidth = 25;
    const logoHeight = 25;
    const logoX = 20; // Posición horizontal
    const logoY = 7.5; // Centrado verticalmente en el encabezado
  
    // Agregar el logo en el encabezado
    doc.addImage(logoBase64, "JPEG", logoX, logoY, logoWidth, logoHeight);
  
    // Título del menú con ajuste de posición
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(34, 47, 62); // Gris oscuro (gray-dark)
    doc.text("Menú Sabores de Altura", 105, 25, null, null, "center");
  
    let yOffset = 50;
  
    menuData.forEach((dish, index) => {
      if (yOffset > 270) {
        doc.addPage();
        yOffset = 20;
  
        // Fondo del encabezado en páginas adicionales
        doc.setFillColor(231, 245, 233);
        doc.rect(0, 0, 210, 40, "F");
  
        // Agregar el logo
        doc.addImage(logoBase64, "JPEG", logoX, logoY, logoWidth, logoHeight);
  
        // Título en páginas adicionales
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(24);
        doc.setTextColor(34, 47, 62);
        doc.text("Menú Sabores de Altura", 105, 25, null, null, "center");
      }
  
      const dishImage = allImages[index];
  
      // Imagen del platillo
      if (dishImage) {
        doc.addImage(dishImage, "JPEG", 10, yOffset, 40, 30);
      }
  
      // Nombre del platillo
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(44, 62, 80); // Gris oscuro (gray-dark)
      doc.text(`${index + 1}. ${dish.name}`, 55, yOffset + 10);
  
      // Descripción
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(72, 84, 96); // Tono neutro
      doc.text(`Descripción: ${dish.description}`, 55, yOffset + 20);
  
      // Categoría
      doc.setFontSize(12);
      doc.setTextColor(212, 175, 55); // Dorado (gold)
      doc.text(`Categoría: ${dish.category}`, 55, yOffset + 30);
  
      // Precio
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(39, 174, 96); // Verde para el precio
      doc.text(`Precio: ${dish.price}`, 55, yOffset + 40);
  
      yOffset += 50;
    });
  
    // Pie de página decorativo
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("© 2024 Sabores de Altura. Todos los derechos reservados.", 105, 290, null, null, "center");
  
    console.log("[DEBUG] Guardando archivo PDF...");
    doc.save("menu-sabores-de-altura.pdf");
  };
  
