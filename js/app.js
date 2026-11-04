
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-modulos");

  if (!contenedor || typeof modulosData === "undefined") {
    console.error("No se encontraron los datos o el contenedor en el DOM.");
    return;
  }

  // Pintar los módulos desde los datos
  modulosData.forEach((mod) => {
    const card = document.createElement("article");
    card.className = "tarjeta-modulo";

    card.innerHTML = `
      <h3>${mod.nombre}</h3>
      <span class="docente">Docente: ${mod.docente}</span>
      <p class="resumen">${mod.resumen}</p>
      <div class="detalles">
        <p><strong>Programas:</strong> ${mod.programas.join(", ")}</p>
        <p><strong>Herramientas:</strong> ${mod.herramientas.join(", ")}</p>
      </div>
    `;

    contenedor.appendChild(card);
  });
});