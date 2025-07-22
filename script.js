// Créditos oficiales de cada ramo
const creditos = {
  // Ciclo I
  'fundamentos1': 2, 'quimica': 3, 'biologia': 3, 'mate': 3, 'fisica': 3,
  'educacion1': 2, 'cfg1': 1, 'ingles1': 1,
  
  // Ciclo II
  'integracion1': 2, 'bioquimica': 4, 'biodesarrollo': 4, 'histologia': 4,
  'anatomia': 6, 'ingles2': 1, 'cs_sociales1': 3,
  
  // Ciclo III
  'fundamentos2': 6, 'fisiologia': 4, 'medicina1': 4, 'cs_sociales2': 5,
  'educacion2': 2, 'ingles3': 1,
  
  // Ciclo IV
  'anatomia': 4, 'bioquimica': 4, 'fisiologia': 5, 'biodesarrollo': 3,
  'saludcom1': 2,
  
  // Ciclo V
  'fisiologia_sis': 5, 'medicina2': 5, 'inmunologia': 3, 'agentes': 5,
  'investigacion1': 3, 'gestion1': 1,
  
  // Ciclo VI
  'farmacologia': 5, 'pediatria1': 4, 'fisiopato': 3, 'saludcom2': 4,
  'investigacion2': 3, 'cs_sociales3': 2,
  
  // Ciclo VII
  'clinica_medica1': 8, 'cardiologia': 4, 'neumologia': 4, 'laboratorio': 2,
  'diagnostico': 2, 'nutricion': 3,
  
  // Ciclo VIII
  'hematologia': 4, 'reumatologia': 4, 'nefrologia': 4, 'neurologia': 4,
  'patologia2': 3, 'saludmental': 4,
  
  // Ciclo IX
  'gastroenterologia': 4, 'dermatologia': 4, 'endocrinologia': 4,
  'infectologia': 4, 'geriatria': 3, 'rehabilitacion': 2, 'terapeutica': 2,
  
  // Ciclo X
  'cirugia1': 5, 'cirugia2': 5, 'especialidades': 3, 'cuidados': 1,
  'anestesiologia': 4, 'dolor': 2, 'otorrino': 2,
  
  // Ciclo XI
  'pediatria2': 5, 'pediatria3': 4, 'neonatologia': 4, 'emergencias': 5,
  'medlegal': 2, 'genetica': 2,
  
  // Ciclo XII
  'ginecologia': 5, 'obstetricia': 5, 'saludpublica2': 5,
  'medfamiliacomunitaria': 3, 'gestion2': 2, 'telemedicina': 2,
  
  // Internado
  'internado1': 32, 'internado2': 32, 'trabajoinvestigacion': 2
};

// Prerrequisitos de cada ramo
const prerequisitos = {
  // Ciclo II
  'integracion1': ['fundamentos1'],
  'bioquimica': ['quimica'],
  'biodesarrollo': ['biologia'],
  'histologia': ['biologia'],
  'anatomia': ['biologia'],
  
  // Ciclo III
  'fundamentos2': ['anatomia', 'histologia'],
  'fisiologia': ['bioquimica'],
  'medicina1': ['fisiologia'],
  
  // Ciclo IV
  'anatomia': ['fundamentos2'],
  'fisiologia': ['fundamentos2'],
  
  // Ciclo V
  'fisiologia_sis': ['fisiologia'],
  'medicina2': ['medicina1'],
  'inmunologia': ['fisiologia'],
  'agentes': ['bioquimica'],
  
  // Ciclo VI
  'farmacologia': ['fisiologia_sis'],
  'pediatria1': ['medicina2'],
  'fisiopato': ['fisiologia_sis'],
  
  // Ciclo VII
  'clinica_medica1': ['fisiopato', 'farmacologia'],
  'cardiologia': ['clinica_medica1'],
  'neumologia': ['clinica_medica1'],
  
  // Ciclo VIII
  'hematologia': ['clinica_medica1'],
  'reumatologia': ['clinica_medica1'],
  
  // Ciclo IX
  'gastroenterologia': ['hematologia', 'nefrologia'],
  'dermatologia': ['hematologia', 'nefrologia'],
  
  // Ciclo X
  'cirugia1': ['gastroenterologia', 'dermatologia'],
  'cirugia2': ['gastroenterologia', 'dermatologia'],
  
  // Ciclo XI
  'pediatria2': ['cirugia1', 'cirugia2'],
  'pediatria3': ['pediatria2'],
  
  // Ciclo XII
  'ginecologia': ['pediatria3'],
  'obstetricia': ['pediatria3'],
  
  // Internado
  'internado1': ['ginecologia', 'obstetricia'],
  'internado2': ['internado1']
};

// Funciones para guardar y cargar progreso
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerrequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    // Reglas especiales para internado
    if (destino === 'internado1') {
      puedeDesbloquear = puedeDesbloquear && totalCreditos >= 240;
    }

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) elem.classList.remove('bloqueado');
      else elem.classList.add('bloqueado');
    } else {
      elem.classList.remove('bloqueado');
    }
  }
}

function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  // Cargar aprobados existentes
  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
    ramo.addEventListener('click', aprobar);
  });

  // Actualizar estado inicial
  actualizarDesbloqueos();
});
