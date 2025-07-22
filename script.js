// Script completo y detallado para la malla interactiva de Medicina Humana USMP
// Este script incluye todos los cursos desde el ciclo 1 al 14 con prerrequisitos reales según el plan de estudios

const prerrequisitos = {
  // CICLO 2
  epistemologia: ['informatica'],
  lenguaje: ['comunicacion'],
  matematica_salud: ['logica'],
  procedimientos: ['biologia'],
  quimica_aplicada: ['quimica'],
  biologia_celular: ['biologia'],
  fisica_aplicada: ['fisica'],
  ingles2: ['ingles1'],

  // CICLO 3
  anatomia1: ['quimica_aplicada', 'biologia_celular', 'fisica_aplicada'],
  histologia: ['quimica_aplicada', 'biologia_celular', 'fisica_aplicada'],
  embriologia: ['quimica_aplicada', 'biologia_celular', 'fisica_aplicada'],
  psicologia: ['lenguaje'],
  historia_medicina: ['lenguaje'],
  ingles3: ['ingles2'],

  // CICLO 4
  anatomia2: ['anatomia1'],
  bioquimica: ['histologia'],
  fisiologia1: ['embriologia'],
  bioestadistica: ['matematica_salud'],
  realidad_nacional: ['historia_medicina'],

  // CICLO 5
  fisiologia2: ['fisiologia1'],
  epidemiologia: ['bioestadistica'],
  inmunologia: ['fisiologia1'],
  microbiologia: ['fisiologia1'],
  diseno_investigacion: ['bioestadistica'],
  gestion_info: ['ingles2'],

  // CICLO 6
  farmacologia: ['inmunologia', 'microbiologia'],
  patologia1: ['inmunologia', 'microbiologia'],
  fisiopatologia: ['fisiologia2'],
  salud_publica1: ['epidemiologia'],
  bioetica: ['realidad_nacional'],
  lectura_critica: ['diseno_investigacion'],

  // CICLO 7
  semiologia: ['anatomia2', 'fisiopatologia', 'patologia1'],
  cardiologia: ['semiologia'],
  neumologia: ['semiologia'],
  lab_clinico: ['semiologia'],
  diagnostico_imagen: ['semiologia'],
  nutricion: ['semiologia'],

  // CICLO 8
  hematologia: ['semiologia'],
  reumatologia: ['semiologia'],
  nefrologia: ['semiologia'],
  neurologia: ['semiologia'],
  patologia2: ['patologia1'],
  salud_mental: ['semiologia'],

  // CICLO 9
  gastro: ['hematologia', 'nefrologia', 'neurologia'],
  dermatologia: ['hematologia', 'nefrologia', 'neurologia'],
  endocrino: ['hematologia', 'nefrologia', 'neurologia'],
  infectologia: ['hematologia', 'nefrologia', 'neurologia'],
  geriatria: ['reumatologia'],
  rehabilitacion: ['reumatologia'],

  // CICLO 10
  cirugia_general: ['gastro', 'endocrino', 'infectologia'],
  cirugia_locomotor: ['gastro', 'endocrino', 'infectologia'],
  esp_quirurgicas: ['gastro', 'endocrino', 'infectologia'],
  casos_quirurgicos: ['dermatologia'],
  anestesiologia: ['dermatologia'],
  oncologia: ['dermatologia'],

  // CICLO 11
  pediatria1: ['cirugia_general', 'cirugia_locomotor'],
  pediatria2: ['pediatria1'],
  neonatologia: ['cirugia_general', 'cirugia_locomotor'],
  emergencias: ['esp_quirurgicas'],
  medicina_legal: ['esp_quirurgicas'],
  genetica: ['esp_quirurgicas'],

  // CICLO 12
  ginecologia: ['pediatria1', 'pediatria2', 'neonatologia'],
  obstetricia: ['pediatria1', 'pediatria2', 'neonatologia'],
  salud_publica2: ['medicina_legal'],
  medicina_familiar: ['medicina_legal'],
  gestion_salud: ['medicina_legal'],
  telesalud: ['medicina_legal'],

  // CICLO 13–14
  internado2: ['internado1'],
  investigacion: ['internado1']
};

function aprobar(id) {
  const curso = document.getElementById(id);
  if (!curso || curso.classList.contains('bloqueado')) return;
  curso.classList.toggle('aprobado');
  guardarEstado();
  actualizarDesbloqueos();
}

function guardarEstado() {
  const cursos = document.querySelectorAll('.ramo');
  const estado = {};
  cursos.forEach(curso => {
    estado[curso.id] = curso.classList.contains('aprobado');
  });
  localStorage.setItem('estadoMallaMedicina', JSON.stringify(estado));
}

function cargarEstado() {
  const estado = JSON.parse(localStorage.getItem('estadoMallaMedicina'));
  if (!estado) return;
  Object.entries(estado).forEach(([id, aprobado]) => {
    const curso = document.getElementById(id);
    if (curso && aprobado) curso.classList.add('aprobado');
  });
}

function desbloquearCursosSinRequisitos() {
  const todosLosCursos = document.querySelectorAll('.ramo');
  todosLosCursos.forEach(curso => {
    const id = curso.id;
    if (!prerrequisitos.hasOwnProperty(id)) {
      curso.classList.remove('bloqueado');
    }
  });
}

function actualizarDesbloqueos() {
  Object.entries(prerrequisitos).forEach(([cursoId, requisitos]) => {
    const curso = document.getElementById(cursoId);
    const todosCumplidos = requisitos.every(id => {
      const prer = document.getElementById(id);
      return prer && prer.classList.contains('aprobado');
    });
    if (curso) {
      if (todosCumplidos) {
        curso.classList.remove('bloqueado');
      } else {
        curso.classList.add('bloqueado');
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  desbloquearCursosSinRequisitos();
  actualizarDesbloqueos();
});

