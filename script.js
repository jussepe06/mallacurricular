// Créditos oficiales de cada asignatura de Medicina
const creditos = {
  // Ciclo I
  'introduccion_biologia': 3,
  'introduccion_comunicacion': 2,
  'introduccion_estudios_medicos': 2,
  'introduccion_fisica': 3,
  'introduccion_matematica': 3,
  'introduccion_quimica': 3,
  'actividades_deportivas': 1,
  'informatica_educacion': 1,
  
  // Ciclo II
  'epistemologia_medica': 1,
  'lenguaje': 2,
  'matematica_aplicada': 3,
  'procedimientos_basicos': 2,
  'quimica_aplicada': 4,
  'biologia_celular': 4,
  'fisica_aplicada': 3,
  'ingles1': 1,
  
  // Ciclo III
  'anatomia_humana1': 6,
  'histologia_humana': 4,
  'embriologia_genetica': 4,
  'psicologia_medica': 3,
  'historia_medicina': 2,
  'ingles2': 1,
  
  // Ciclo IV
  'anatomia_humana2': 4,
  'bioquimica': 4,
  'fisiologia_humana1': 5,
  'bioestadistica': 3,
  'realidad_nacional': 2,
  
  // Ciclo V
  'fisiologia_humana2': 5,
  'epidemiologia': 5,
  'inmunologia_humana': 3,
  'microbiologia_parasitologia': 5,
  'diseno_investigacion': 3,
  'gestion_informacion': 1,
  
  // Ciclo VI
  'farmacologia': 5,
  'psicologia1': 4,
  'fisiopatologia': 3,
  'salud_publica1': 4,
  'bioetica': 3,
  'jurica_medica': 2,
  
  // Ciclo VII
  'semiologia_general': 8,
  'cardiologia': 4,
  'neumologia': 4,
  'laboratorio_clinico': 2,
  'diagnostico_imagen': 2,
  'nutricion': 3,
  
  // Ciclo VIII
  'hematologia': 4,
  'reumatologia': 4,
  'nefrologia': 4,
  'neurologia': 4,
  'patologia2': 3,
  'salud_mental': 4,
  
  // Ciclo IX
  'gastroenterologia': 4,
  'dermatologia': 4,
  'endocrinologia': 4,
  'infectologia': 4,
  'geriatria': 3,
  'medicina_rehabilitacion': 2,
  'terapeutica': 2,
  
  // Ciclo X
  'cirugia_general': 5,
  'cirugia_aparatodigestivo': 5,
  'especialidades_quirurgicas': 3,
  'cuidados_quirurgicos': 1,
  'tecnicas_operatorias': 4,
  'dolor_paliativos': 2,
  'otorrinolaringologia': 2,
  
  // Ciclo XI
  'pediatria1': 5,
  'pediatria2': 4,
  'neonatologia': 4,
  'emergencias_medicas': 5,
  'medicina_legal': 2,
  'genetica_medica': 2,
  
  // Ciclo XII
  'ginecologia': 5,
  'obstetricia': 5,
  'salud_publica2': 5,
  'medicina_familiar': 3,
  'gestion_servicios': 2,
  'telemedicina': 2,
  
  // Ciclo XIII-XIV (Internados)
  'internado1': 32,
  'internado2': 32,
  'trabajo_investigacion': 2,
  
  // Asignaturas electivas (ejemplos)
  'anatomia_aplicada': 2,
  'fisicoquimica_medica': 2,
  'software_estadistico': 2,
  'redaccion_cientifica': 2
};

// Prerrequisitos de cada asignatura
const prerequisitos = {
  // Ciclo II
  'epistemologia_medica': ['introduccion_estudios_medicos'],
  'matematica_aplicada': ['introduccion_matematica'],
  'procedimientos_basicos': ['introduccion_biologia'],
  'quimica_aplicada': ['introduccion_quimica'],
  'biologia_celular': ['introduccion_biologia'],
  'fisica_aplicada': ['introduccion_fisica'],
  
  // Ciclo III
  'anatomia_humana1': ['biologia_celular'],
  'histologia_humana': ['biologia_celular'],
  'embriologia_genetica': ['biologia_celular'],
  
  // Ciclo IV
  'anatomia_humana2': ['anatomia_humana1'],
  'bioquimica': ['quimica_aplicada', 'histologia_humana'],
  'fisiologia_humana1': ['anatomia_humana1', 'histologia_humana'],
  
  // Ciclo V
  'fisiologia_humana2': ['fisiologia_humana1'],
  'epidemiologia': ['bioestadistica'],
  'inmunologia_humana': ['fisiologia_humana1'],
  'microbiologia_parasitologia': ['fisiologia_humana1'],
  
  // Ciclo VI
  'farmacologia': ['fisiologia_humana2', 'bioquimica'],
  'fisiopatologia': ['fisiologia_humana2'],
  'salud_publica1': ['epidemiologia'],
  
  // Ciclo VII (todas requieren ciclos I-VI)
  'semiologia_general': ['fisiopatologia', 'farmacologia'],
  'cardiologia': ['semiologia_general'],
  'neumologia': ['semiologia_general'],
  
  // Ciclo VIII
  'hematologia': ['semiologia_general'],
  'reumatologia': ['semiologia_general'],
  'nefrologia': ['semiologia_general'],
  'neurologia': ['semiologia_general'],
  
  // Ciclo IX
  'gastroenterologia': ['hematologia', 'nefrologia', 'neurologia'],
  'dermatologia': ['hematologia', 'nefrologia', 'neurologia'],
  'endocrinologia': ['hematologia', 'nefrologia', 'neurologia'],
  
  // Ciclo X
  'cirugia_general': ['gastroenterologia', 'dermatologia'],
  'cirugia_aparatodigestivo': ['gastroenterologia', 'dermatologia'],
  
  // Ciclo XI
  'pediatria1': ['cirugia_general', 'cirugia_aparatodigestivo'],
  'pediatria2': ['pediatria1'],
  'neonatologia': ['pediatria1'],
  
  // Ciclo XII
  'ginecologia': ['pediatria1', 'pediatria2', 'neonatologia'],
  'obstetricia': ['pediatria1', 'pediatria2', 'neonatologia'],
  
  // Internados
  'internado1': ['ginecologia', 'obstetricia'],
  'internado2': ['internado1'],
  
  // Reglas especiales con créditos
  'internado1': function(aprobados, totalCreditos) {
    return totalCreditos >= 240; // Requiere 240 créditos aprobados
  }
};

// [Resto del código permanece igual...]
