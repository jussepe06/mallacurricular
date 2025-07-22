// Script actualizado para la malla de Medicina Humana USMP

// Función para aprobar o desaprobar un curso
function aprobar(id) {
  const curso = document.getElementById(id);
  if (!curso || curso.classList.contains("bloqueado")) return;

  curso.classList.toggle("aprobado");
  guardarEstado();
  actualizarDesbloqueos();
}

// Guardar el estado en localStorage
function guardarEstado() {
  const cursos = document.querySelectorAll('.ramo');
  const estado = {};
  cursos.forEach(curso => {
    estado[curso.id] = curso.classList.contains('aprobado');
  });
  localStorage.setItem('estadoMallaMedicina', JSON.stringify(estado));
}

// Cargar el estado desde localStorage
function cargarEstado() {
  const estado = JSON.parse(localStorage.getItem('estadoMallaMedicina'));
  if (!estado) return;

  Object.entries(estado).forEach(([id, aprobado]) => {
    const curso = document.getElementById(id);
    if (curso && aprobado) {
      curso.classList.add('aprobado');
    }
  });
}

// Estructura básica de prerrequisitos (puedes ampliar más adelante)
const prerrequisitos = {
  anatomia2: ['anatomia1'],
  fisiologia2: ['fisiologia1'],
  ingles2: ['ingles1'],
  ingles3: ['ingles2'],
  ingles4: ['ingles3'],
  bioquimica: ['quimica_aplicada'],
  fisica_aplicada: ['fisica'],
  biologia_celular: ['biologia'],
  microbiologia: ['fisiologia1'],
  inmunologia: ['fisiologia1'],
  farmaco: ['inmunologia', 'microbiologia'],
  patologia2: ['patologia1'],
  cirugia_general: ['gastro', 'endocrino', 'infectologia'],
  oncologia: ['dermatologia'],
};

function actualizarDesbloqueos() {
  Object.entries(prerrequisitos).forEach(([cursoId, requisitos]) => {
    const curso = document.getElementById(cursoId);
    const cumplidos = requisitos.every(id => {
      const c = document.getElementById(id);
      return c && c.classList.contains('aprobado');
    });
    if (curso && cumplidos) {
      curso.classList.remove('bloqueado');
    }
  });
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  actualizarDesbloqueos();
  console.log("Script de malla Medicina Humana USMP cargado correctamente.");
});
