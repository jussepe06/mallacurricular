// script.js with updated course names for Medicina Humana
const creditos = {
  'fundamentos1': 3,
  'quimica': 3,
  'biologia': 6,
  'mate': 2,
  'fisica': 2,
  'educacion1': 4,
  'cs_sociales1': 6,
  'cfg1': 2,
  'ingles1': 3,
  'saludcom1': 4,
  'bioquimica': 3,
  'biodesarrollo': 4,
  'fisiologia': 4,
  'anatomia': 5,
  'histologia': 3,
  'integracion1': 2,
  'cfg2': 2,
  'ingles2': 3,
  'fundamentos2': 4,
  'medicina1': 4,
  'pediatria1': 4,
  'fisiologia_sis': 5,
  'inmunologia': 3,
  'agentes': 3,
  'cs_sociales2': 5,
  'ingles3': 3,
  'pediatria2': 3,
  'medicina2': 3,
  'cirugia1': 5,
  'fisiopato': 5,
  'infectologia': 3,
  'farmacologia': 4,
  'integracion2': 3,
  'investigacion1': 3,
  'clinica_pediatrica1': 5,
  'clinica_medica1': 5,
  'clinica_quirurgica1': 5,
  'clinica_gineco': 5,
  'clinica_saludcom': 4,
  'modulo1': 4,
  'pediatria3': 4,
  'saludcom2': 6,
  'medicina_pat': 4,
  'gestion1': 4,
  'educacion2': 3,
  'investigacion2': 5,
  'cs_sociales3': 4,
  'cfg3': 2,
  'enfermeria_mq': 6,
  'reproduccion': 2,
  'cirugia_pat': 5,
  'gestion2': 5,
  'investigacion3': 6,
  'cs_sociales4': 4,
  'clinica_pediatrica2': 5,
  'clinica_medica2': 4,
  'clinica_quirurgica2': 5,
  'alto_riesgo': 4,
  'clinica_mq': 4,
  'modulo2': 5,
  'seminario1': 2,
  'internado_pediatria': 10,
  'internado_medicina': 10,
  'internado_quirurgico': 10,
  'internado_gineco': 10,
  'internado_electivo': 15,
  'seminario2': 3,
  'ingles4': 3,
  'internado_electivo1': 15
};

const prerequisitos = {
  'integracion1': ['fundamentos1'],
  'bioquimica': ['quimica', 'biologia'],
  'anatomia': ['biologia'],
  'fisiologia': ['biologia', 'fisica'],
  'biodesarrollo': ['biologia'],
  'histologia': ['biologia'],
  'investigacion1': ['mate', 'fisica'],
  'educacion2': ['educacion1'],
  'inmunologia': ['fisiologia'],
  'cs_sociales2': ['cs_sociales1'],
  'ingles2': ['ingles1'],
  'saludcom1': [],
  'fundamentos2': ['fisiologia', 'anatomia', 'histologia', 'integracion1'],
  'medicina1': ['fisiologia', 'anatomia', 'histologia', 'biodesarrollo', 'integracion1'],
  'pediatria1': ['fisiologia', 'anatomia', 'histologia', 'biodesarrollo', 'integracion1'],
  'fisiologia_sis': ['fisiologia'],
  'agentes': ['fisiologia', 'anatomia', 'histologia'],
  'cs_sociales3': ['cs_sociales2'],
  'ingles3': ['ingles2'],
  'pediatria2': ['pediatria1', 'fisiologia_sis', 'agentes'],
  'medicina2': ['medicina1', 'fisiologia_sis'],
  'cirugia1': ['histologia', 'fisiologia_sis'],
  'fisiopato': ['fisiologia_sis'],
  'infectologia': ['agentes'],
  'farmacologia': ['fisiologia_sis', 'bioquimica'],
  'integracion2': ['fisiologia_sis','fundamentos2'],
  'clinica_pediatrica1': ['pediatria2', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_medica1': ['medicina2', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_quirurgica1': ['medicina2', 'cirugia1', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_gineco': ['medicina2', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_saludcom': ['integracion2'],
  'modulo1': [],
  'pediatria3': ['farmacologia', 'fisiopato', 'medicina2'],
  'saludcom2': ['saludcom1'],
  'medicina_pat': ['medicina2', 'farmacologia', 'fisiopato'],
  'gestion1': ['investigacion1'],
  'investigacion2': ['investigacion1'],
  'enfermeria_mq': ['pediatria3', 'medicina_pat'],
  'reproduccion': ['fisiologia_sis'],
  'cirugia_pat': ['clinica_quirurgica1'],
  'gestion2': ['gestion1'],
  'investigacion3': ['investigacion2'],
  'cs_sociales4': ['cs_sociales3'],
  'clinica_pediatrica2': ['pediatria3', 'enfermeria_mq'],
  'clinica_medica2': ['medicina_pat', 'enfermeria_mq'],
  'clinica_quirurgica2': ['medicina_pat', 'cirugia_pat', 'saludcom2'],
  'alto_riesgo': ['medicina_pat', 'enfermeria_mq'],
  'clinica_mq': ['cirugia_pat', 'enfermeria_mq'],
  'modulo2': ['modulo1'],
  'seminario1': ['investigacion3'],
  'internado_pediatria': ['clinica_pediatrica2'],
  'internado_medicina': ['clinica_medica2', 'alto_riesgo'],
  'internado_quirurgico': ['clinica_quirurgica2'],
  'internado_gineco': ['clinica_mq'],
  'internado_electivo': [],
  'internado_electivo1': [],
  'seminario2': ['seminario1'],
  'ingles4': ['ingles3']
};

// Rest of the script.js remains the same
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

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    if (destino === 'modulo1') {
      puedeDesbloquear = totalCreditos >= 90;
    }
    if (destino === 'modulo2') {
      puedeDesbloquear = aprobados.includes('modulo1') && totalCreditos >= 170;
    }
    if (destino === 'internado_electivo' || destino === 'internado_electivo1') {
      puedeDesbloquear = totalCreditos >= 240;
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

window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
  });

  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });

  actualizarDesbloqueos();
});
