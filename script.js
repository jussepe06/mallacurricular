// Script completo con desbloqueo automático de cursos según prerrequisitos reales de Medicina Humana USMP

const prerrequisitos = {
  // Semestre 2
  epistemologia: ['informatica'],
  lenguaje: ['comunicacion'],
  matematica_salud: ['logica'],
  procedimientos: ['biologia'],
  quimica_aplicada: ['quimica'],
  biologia_celular: ['biologia'],
  fisica_aplicada: ['fisica'],
  ingles2: ['ingles1'],

  // Semestre 3
  anatomia1: ['quimica_aplicada', 'biologia_celular', 'fisica_aplicada'],
  histologia: ['quimica_aplicada', 'biologia_celular', 'fisica_aplicada'],
  embriologia: ['quimica_aplicada', 'biologia_celular', 'fisica_aplicada'],
  psicologia: ['lenguaje'],
  historia_medicina: ['lenguaje'],
  ingles3: ['ingles2'],

  // Semestre 4
  anatomia2: ['anatomia1'],
  bioquimica: ['histologia'],
  fisiologia1: ['embriologia'],
  bioestadistica: ['matematica_salud'],
  realidad_nacional: ['historia_medicina'],

  // Semestre 5
  fisiologia2: ['fisiologia1'],
  epidemiologia: ['bioestadistica'],
  inmunologia: ['fisiologia1'],
  microbiologia: ['fisiologia1'],
  diseno_investigacion: ['bioestadistica'],
  gestion_info: ['ingles2'],

  // Semestre 6
  farmacologia: ['inmunologia', 'microbiologia'],
  patologia1: ['inmunologia', 'microbiologia'],
  fisiopatologia: ['fisiologia2'],
  salud_publica1: ['epidemiologia'],
  bioetica: ['realidad_nacional'],
  lectura_critica: ['diseno_investigacion'],

  // Semestre 7
  semiologia: ['patologia1'],
  cardiologia: ['semiologia'],
  neumologia: ['semiologia'],
  lab_clinico: ['semiologia'],
  diagnostico_imagen: ['semiologia'],
  nutricion: ['semiologia'],

  // Semestre 8
  hematologia: ['semiologia'],
  reumatologia: ['semiologia'],
  nefrologia: ['semiologia'],
  neurologia: ['semiologia'],
  patologia2: ['semiologia'],
  salud_mental: ['semiologia'],

  // Semestre 9
  gastro: ['hematologia', 'nefrologia', 'neurologia'],
  dermatologia: ['hematologia', 'nefrologia', 'neurologia'],
  endocrino: ['hematologia', 'nefrologia', 'neurologia'],
  infectologia: ['hematologia', 'nefrologia', 'neurologia'],
  geriatria: ['reumatologia'],
  rehabilitacion: ['reumatologia'],

  // Semestre 10
  cirugia_general: ['gastro', 'endocrino', 'infectologia'],
  cirugia_locomotor: ['gastro', 'endocrino', 'infectologia'],
  esp_quirurgicas: ['gastro', 'endocrino', 'infectologia'],
  casos_quirurgicos: ['dermatologia'],
  anestesiologia: ['dermatologia'],
  oncologia: ['dermatologia'],

  // Semestre 11
  pediatria1: ['cirugia_general', 'cirugia_locomotor'],
  pediatria2: ['pediatria1'],
  neonatologia: ['cirugia_general', 'cirugia_locomotor'],
  emergencias: ['esp_quirurgicas'],
  medicina_legal: ['esp_quirurgicas'],
  genetica: ['esp_quirurgicas'],

  // Semestre 12
  ginecologia: ['pediatria1', 'pediatria2', 'neonatologia'],
  obstetricia: ['pediatria1', 'pediatria2', 'neonatologia'],
  salud_publica2: ['medicina_legal'],
  medicina_familiar: ['medicina_legal'],
  gestion_salud: ['medicina_legal'],
  telesalud: ['medicina_legal'],

  // Semestre 13 y 14
  internado2: ['internado1'],
  investigacion: ['internado1']
};

function aprobar(id) {
  const curso = document.getElementById(id);
  if (!curso || curso.classList.contains('bloqueado')) return;

  // Alternar clase aprobado
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
    if (curso && aprobado) {
      curso.classList.add('aprobado');
    }
  });
}

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

window.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  actualizarDesbloqueos();
  console.log("Script interactivo de Medicina Humana USMP cargado correctamente.");
});
