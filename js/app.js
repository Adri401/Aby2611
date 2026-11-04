// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("contenedor-modulos");
  const inputSearch = document.getElementById("search-input");
  const selectDocent = document.getElementById("select-filter");
  const fillProgress = document.getElementById("progress-fill");
  const txtProgress = document.getElementById("progress-txt");
  const modal = document.getElementById("modal-ficha");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.getElementById("close-modal");

  let completed = JSON.parse(localStorage.getItem("repasados_3dsb_v2") || "[]");

  function updateProgress() {
    localStorage.setItem("repasados_3dsb_v2", JSON.stringify(completed));
    const pct = Math.round((completed.length / modulosData.length) * 100);
    fillProgress.style.width = `${pct}%`;
    txtProgress.textContent = `${completed.length} de ${modulosData.length} repasados (${pct}%)`;
  }

  function render(list) {
    container.innerHTML = "";
    if (list.length === 0) {
      container.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-mut);">No se encontraron módulos.</p>`;
      return;
    }

    list.forEach((mod) => {
      const isDone = completed.includes(mod.id);
      const isArcides = mod.docente.includes("Arcides");
      const card = document.createElement("article");
      card.className = `card ${isArcides ? 'docente-arcides' : ''}`;

      card.innerHTML = `
        <div>
          <span class="card-code">${mod.codigo}</span>
          <h3 class="card-title">${mod.nombre}</h3>
          <p class="card-docent">Docente: <strong>${mod.docente}</strong></p>
          <p class="card-desc">${mod.resumen}</p>
        </div>
        <div class="btn-group">
          <button class="btn btn-primary" data-ver="${mod.id}">Ver Ficha</button>
          <button class="btn btn-check ${isDone ? 'completed' : ''}" data-done="${mod.id}">
            ${isDone ? '✓ Repasado' : 'Marcar'}
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function filterData() {
    const query = inputSearch.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const docent = selectDocent.value;

    const filtered = modulosData.filter((m) => {
      const nameNorm = m.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const codeNorm = m.codigo.toLowerCase();
      const matchText = nameNorm.includes(query) || codeNorm.includes(query);
      const matchDocent = docent === "all" || m.docente === docent;
      return matchText && matchDocent;
    });

    render(filtered);
  }

  function openModal(id) {
    const mod = modulosData.find((m) => m.id === id);
    if (!mod) return;

    modalBody.innerHTML = `
      <span class="card-code">${mod.codigo}</span>
      <h2 style="margin-top:4px;">${mod.nombre}</h2>
      <p class="card-docent" style="margin-bottom:14px;">Docente: ${mod.docente}</p>
      
      <div class="modal-section">
        <h4>Programas</h4>
        <p>${mod.programas.join(", ")}</p>
      </div>
      <div class="modal-section">
        <h4>Herramientas</h4>
        <p>${mod.herramientas.join(", ")}</p>
      </div>
      <div class="modal-section">
        <h4>Instrumentos</h4>
        <p>${mod.instrumentos.join(", ")}</p>
      </div>
      <div class="modal-section">
        <h4>Recursos</h4>
        <ul>
          ${mod.recursos.map(r => `<li><a href="${r.url}" target="_blank" style="color:var(--border-cy);">${r.titulo}</a></li>`).join('')}
        </ul>
      </div>
    `;
    modal.showModal();
  }

  container.addEventListener("click", (e) => {
    const btnVer = e.target.closest("[data-ver]");
    const btnDone = e.target.closest("[data-done]");

    if (btnVer) openModal(btnVer.getAttribute("data-ver"));
    if (btnDone) {
      const id = btnDone.getAttribute("data-done");
      completed = completed.includes(id) ? completed.filter(i => i !== id) : [...completed, id];
      updateProgress();
      filterData();
    }
  });

  inputSearch.addEventListener("input", filterData);
  selectDocent.addEventListener("change", filterData);
  closeModal.addEventListener("click", () => modal.close());

  updateProgress();
  render(modulosData);
});