// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-modulos");
  const inputBusqueda = document.getElementById("input-busqueda");
  const selectDocente = document.getElementById("select-docente");
  const contador = document.getElementById("contador-modulos");
  const fillProgreso = document.getElementById("progreso-fill");
  const txtProgreso = document.getElementById("progreso-txt");
  const modal = document.getElementById("modal-ficha");
  const modalBody = document.getElementById("modal-body");
  const btnCerrarModal = document.getElementById("btn-cerrar-modal");

  // Estado guardado en LocalStorage
  let repasados = JSON.parse(localStorage.getItem("repasados_3dsb") || "[]");

  function guardarYActualizarProgreso() {
    localStorage.setItem("repasados_3dsb", JSON.stringify(repasados));
    const pct = Math.round((repasados.length / modulosData.length) * 100);
    fillProgreso.style.width = `${pct}%`;
    txtProgreso.textContent = `${repasados.length} de ${modulosData.length} repasados (${pct}%)`;
  }

  function renderModulos(lista) {
    contenedor.innerHTML = "";
    contador.textContent = `Mostrando ${lista.length} de ${modulosData.length} módulos`;

    if (lista.length === 0) {
      contenedor.innerHTML = `<p style="grid-column: 1/-1; color: var(--mut);">No se encontraron módulos coincidentes.</p>`;
      return;
    }

    lista.forEach((mod) => {
      const esRepasado = repasados.includes(mod.id);
      const card = document.createElement("article");
      card.className = "tarjeta";

      card.innerHTML = `
        <div>
          <span class="codigo">${mod.codigo}</span>
          <h3>${mod.nombre}</h3>
          <p class="docente">Docente: ${mod.docente}</p>
          <p class="resumen">${mod.resumen}</p>
        </div>
        <div class="acciones">
          <button class="btn btn-primary" data-ver="${mod.id}">Ver Ficha</button>
          <button class="btn btn-check ${esRepasado ? 'repasado' : ''}" data-repaso="${mod.id}">
            ${esRepasado ? '✓ Repasado' : 'Marcar Repasado'}
          </button>
        </div>
      `;

      contenedor.appendChild(card);
    });
  }

  function filtrarModulos() {
    const texto = inputBusqueda.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const docente = selectDocente.value;

    const filtrados = modulosData.filter((m) => {
      const nombreNorm = m.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const codNorm = m.codigo.toLowerCase();
      const coincideTexto = nombreNorm.includes(texto) || codNorm.includes(texto) || m.resumen.toLowerCase().includes(texto);
      const coincideDocente = docente === "todos" || m.docente === docente;

      return coincideTexto && coincideDocente;
    });

    renderModulos(filtrados);
  }

  function abrirFicha(id) {
    const mod = modulosData.find((m) => m.id === id);
    if (!mod) return;

    modalBody.innerHTML = `
      <span class="codigo">${mod.codigo}</span>
      <h2 style="color: var(--tx); margin-top: 4px;">${mod.nombre}</h2>
      <p class="docente" style="margin-bottom: 12px;">Docente: ${mod.docente}</p>
      <p class="resumen">${mod.resumen}</p>

      <div class="sec-ficha">
        <h4>Programas</h4>
        <p>${mod.programas.join(", ")}</p>
      </div>

      <div class="sec-ficha">
        <h4>Herramientas</h4>
        <p>${mod.herramientas.join(", ")}</p>
      </div>

      <div class="sec-ficha">
        <h4>Instrumentos de evaluación</h4>
        <p>${mod.instrumentos.join(", ")}</p>
      </div>

      <div class="sec-ficha">
        <h4>Recursos de estudio</h4>
        <ul>
          ${mod.recursos.map(r => `<li><a href="${r.url}" target="_blank" style="color:var(--cy);">${r.titulo}</a></li>`).join('')}
        </ul>
      </div>
    `;

    modal.showModal();
  }

  // Delegación de eventos para botones dinámicos
  contenedor.addEventListener("click", (e) => {
    const btnVer = e.target.closest("[data-ver]");
    const btnRepaso = e.target.closest("[data-repaso]");

    if (btnVer) {
      abrirFicha(btnVer.getAttribute("data-ver"));
    }

    if (btnRepaso) {
      const id = btnRepaso.getAttribute("data-repaso");
      if (repasados.includes(id)) {
        repasados = repasados.filter((itemId) => itemId !== id);
      } else {
        repasados.push(id);
      }
      guardarYActualizarProgreso();
      filtrarModulos();
    }
  });

  inputBusqueda.addEventListener("input", filtrarModulos);
  selectDocente.addEventListener("change", filtrarModulos);
  btnCerrarModal.addEventListener("click", () => modal.close());

  // Inicialización
  guardarYActualizarProgreso();
  renderModulos(modulosData);
});