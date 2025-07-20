const courses = [
    { id: "english1", name: "English I", semester: 1, credits: 0, type: "Oblig.", prerequisites: [], period: "2025-01" },
    { id: "fund_prog", name: "Fundamentos de Programación", semester: 1, credits: 3, type: "Oblig.", prerequisites: [], period: "2023-01" },
    { id: "fund_digital", name: "Fundamentos en Competencias Digitales", semester: 1, credits: 0, type: "Oblig.", prerequisites: [], period: "2025-01" },
    { id: "leng_com1", name: "Lenguaje y Comunicación I", semester: 1, credits: 0, type: "Oblig.", prerequisites: [], period: "2025-01" },
    { id: "matematica", name: "Matemática", semester: 1, credits: 0, type: "Oblig.", prerequisites: [], period: "2025-01" },
    { id: "niv_ingles", name: "Nivelación en Inglés", semester: 1, credits: 0, type: "Oblig.", prerequisites: [], period: "2025-00" },
    { id: "niv_leng", name: "Nivelación en Lenguaje y Comunicación", semester: 1, credits: 0, type: "Oblig.", prerequisites: [], period: "2025-00" },
    { id: "niv_mat", name: "Nivelación en Matemática", semester: 1, credits: 0, type: "Oblig.", prerequisites: [], period: "2025-00" },
    { id: "realidad_nac", name: "Realidad Nacional y Globalización", semester: 1, credits: 3, type: "Oblig.", prerequisites: [], period: "2023-01" },
    { id: "adm_negocios", name: "Administración para los Negocios", semester: 2, credits: 3, type: "Oblig.", prerequisites: [], period: "2023-02" },
    { id: "calculo_var", name: "Cálculo de una Variable", semester: 2, credits: 4, type: "Oblig.", prerequisites: ["matematica"], period: "2025-01" },
    { id: "english2", name: "English II", semester: 2, credits: 0, type: "Oblig.", prerequisites: ["english1"], period: "2025-01" },
    { id: "leng_com2", name: "Lenguaje y Comunicación II", semester: 2, credits: 0, type: "Oblig.", prerequisites: ["leng_com1"], period: "2025-01" },
    { id: "mat_disc", name: "Matemática Discreta", semester: 2, credits: 2, type: "Oblig.", prerequisites: ["matematica"], period: "2023-02" },
    { id: "prog_oo1", name: "Programación Orientada a Objetos I", semester: 2, credits: 0, type: "Oblig.", prerequisites: ["fund_prog"], period: "2025-01" },
    { id: "english3", name: "English III", semester: 3, credits: 5, type: "Oblig.", prerequisites: ["english2"], period: "2025-01" },
    { id: "ing_soft1", name: "Ingeniería de Software I", semester: 3, credits: 2, type: "Oblig.", prerequisites: [], period: "2024-02" },
    { id: "prin_eco", name: "Principios de Economía", semester: 3, credits: 3, type: "Oblig.", prerequisites: [], period: "2023-02" },
    { id: "prog_estr_datos", name: "Programación y Estructuras de Datos", semester: 3, credits: 4, type: "Oblig.", prerequisites: ["fund_prog"], period: "2025-00" },
    { id: "teoria_comp", name: "Teoría de Computación", semester: 3, credits: 3, type: "Oblig.", prerequisites: ["calculo_var"], period: "2025-01" },
    { id: "alg_lin_comp", name: "Álgebra Lineal Computacional", semester: 3, credits: 4, type: "Oblig.", prerequisites: ["matematica"], period: "2024-02" },
    { id: "english4", name: "English IV", semester: 4, credits: 5, type: "Oblig.", prerequisites: ["english3"], period: "2025-01" },
    { id: "estadistica", name: "Estadística Descriptiva e Inferencia Estadística", semester: 4, credits: 0, type: "Oblig.", prerequisites: ["matematica"], period: "2025-01" },
    { id: "estr_datos_av", name: "Estructura de Datos Avanzada", semester: 4, credits: 0, type: "Oblig.", prerequisites: ["prog_estr_datos"], period: "" },
    { id: "ux", name: "Experiencia de Usuario (UX)", semester: 4, credits: 2, type: "Oblig.", prerequisites: ["prog_estr_datos"], period: "2025-01" },
    { id: "fund_cont_fin", name: "Fundamentos Contables y Financieros", semester: 4, credits: 3, type: "Oblig.", prerequisites: [], period: "2024-01" },
    { id: "ger_datos1", name: "Gerenciamiento de Datos I", semester: 4, credits: 4, type: "Oblig.", prerequisites: ["prog_estr_datos"], period: "2025-01" },
    { id: "ger_datos2", name: "Gerenciamiento de Datos II", semester: 5, credits: 0, type: "Oblig.", prerequisites: ["ger_datos1"], period: "" },
    { id: "ing_soft2", name: "Ingeniería de Software II", semester: 5, credits: 2, type: "Oblig.", prerequisites: ["ing_soft1"], period: "2025-01" },
    { id: "inter_hum_comp", name: "Interacción Humano Computador", semester: 5, credits: 4, type: "Oblig.", prerequisites: [], period: "2024-02" },
    { id: "marketing", name: "Marketing", semester: 5, credits: 3, type: "Oblig.", prerequisites: ["adm_negocios"], period: "2024-01" },
    { id: "prog_oo2", name: "Programación Orientada a Objetos II", semester: 5, credits: 4, type: "Oblig.", prerequisites: ["prog_oo1"], period: "2025-01" },
    { id: "etica", name: "Ética y Ciudadanía", semester: 5, credits: 3, type: "Oblig.", prerequisites: ["realidad_nac"], period: "2024-01" },
    { id: "alg_disenio", name: "Análisis y Diseño de Algoritmos", semester: 6, credits: 0, type: "Oblig.", prerequisites: ["prog_oo2"], period: "" },
    { id: "ing_soft3", name: "Ingeniería de Software III", semester: 6, credits: 0, type: "Oblig.", prerequisites: ["ing_soft2"], period: "" },
    { id: "met_inv_cient", name: "Metodología de la Investigación Científica", semester: 6, credits: 4, type: "Oblig.", prerequisites: ["estadistica"], period: "2024-02" },
    { id: "proc_dig_sen", name: "Procesamiento Digital de Señales", semester: 6, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "prog_compet", name: "Programación Competitiva", semester: 6, credits: 0, type: "Oblig.", prerequisites: ["prog_oo2"], period: "" },
    { id: "robotica1", name: "Robótica I", semester: 6, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "sist_op", name: "Sistemas Operativos", semester: 6, credits: 0, type: "Oblig.", prerequisites: ["teoria_comp"], period: "" },
    { id: "gest_sosten", name: "Bases para la Gestión Estratégica de la Sostenibilidad", semester: 7, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "compiladores", name: "Compiladores", semester: 7, credits: 0, type: "Oblig.", prerequisites: ["teoria_comp"], period: "" },
    { id: "cult_transf", name: "Cultural Transformation for Digital Transformation", semester: 7, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "des_plataf", name: "Desarrollo Basado en Plataformas", semester: 7, credits: 0, type: "Oblig.", prerequisites: ["prog_oo2"], period: "" },
    { id: "fund_liderazgo", name: "Fundamentos del Liderazgo Sostenible", semester: 7, credits: 3, type: "Oblig.", prerequisites: ["etica"], period: "2025-01" },
    { id: "gest_sist_inf", name: "Gestión de Sistemas de Información", semester: 7, credits: 0, type: "Oblig.", prerequisites: ["ger_datos2"], period: "" },
    { id: "proc_img_dig", name: "Procesamiento de Imágenes Digitales", semester: 7, credits: 0, type: "Elect.", prerequisites: ["proc_dig_sen"], period: "" },
    { id: "redes_tel1", name: "Redes y Telecomunicaciones I", semester: 7, credits: 0, type: "Oblig.", prerequisites: ["sist_op"], period: "" },
    { id: "robotica2", name: "Robótica II", semester: 7, credits: 0, type: "Elect.", prerequisites: ["robotica1"], period: "" },
    { id: "agentes_int", name: "Agentes Inteligentes", semester: 8, credits: 0, type: "Oblig.", prerequisites: ["prog_oo2"], period: "" },
    { id: "cloud_bus", name: "Cloud Business", semester: 8, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "cloud_comp", name: "Cloud Computing", semester: 8, credits: 0, type: "Oblig.", prerequisites: ["redes_tel1"], period: "" },
    { id: "gest_proy_comp", name: "Gestión de Proyectos para Computación", semester: 8, credits: 0, type: "Oblig.", prerequisites: ["met_inv_cient"], period: "" },
    { id: "gest_emp_sost", name: "Gestión Empresarial Sostenible", semester: 8, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "oport_neg", name: "Oportunidades de Negocios", semester: 8, credits: 0, type: "Oblig.", prerequisites: ["prin_eco", "fund_cont_fin", "marketing"], period: "" },
    { id: "redes_tel2", name: "Redes y Telecomunicaciones II", semester: 8, credits: 0, type: "Elect.", prerequisites: ["redes_tel1"], period: "" },
    { id: "seg_inf", name: "Seguridad de la Información", semester: 8, credits: 0, type: "Oblig.", prerequisites: ["alg_disenio"], period: "" },
    { id: "vision_comp", name: "Visión Computacional", semester: 8, credits: 0, type: "Elect.", prerequisites: ["proc_img_dig"], period: "" },
    { id: "bus_iot", name: "Business and Internet of Things", semester: 9, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "comp_soc", name: "Computación en la Sociedad", semester: 9, credits: 0, type: "Oblig.", prerequisites: [], period: "" },
    { id: "gest_empr_socio", name: "Gestión de Emprendimientos Socioambientales", semester: 9, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "iot", name: "Internet of Things", semester: 9, credits: 0, type: "Oblig.", prerequisites: ["redes_tel1"], period: "" },
    { id: "proy_comp1", name: "Proyecto para Computación I", semester: 9, credits: 0, type: "Oblig.", prerequisites: ["gest_proy_comp"], period: "" },
    { id: "redes_tel3", name: "Redes y Telecomunicaciones III", semester: 9, credits: 0, type: "Elect.", prerequisites: ["redes_tel2"], period: "" },
    { id: "tec_emerg", name: "Tecnologías Emergentes", semester: 9, credits: 0, type: "Oblig.", prerequisites: ["cloud_comp"], period: "" },
    { id: "top_proc_leng", name: "Tópicos en Procesamiento de Lenguaje Natural", semester: 9, credits: 0, type: "Elect.", prerequisites: ["vision_comp"], period: "" },
    { id: "vis_datos", name: "Visualización de Datos", semester: 9, credits: 0, type: "Oblig.", prerequisites: ["des_plataf"], period: "" },
    { id: "ai_bus", name: "Artificial Intelligence for Business", semester: 10, credits: 0, type: "Elect.", prerequisites: ["cloud_bus", "bus_iot"], period: "" },
    { id: "big_data", name: "Big Data y Analítica de Datos", semester: 10, credits: 0, type: "Oblig.", prerequisites: ["cloud_comp"], period: "" },
    { id: "des_neg_elec", name: "Desarrollo de Negocios Electrónicos", semester: 10, credits: 0, type: "Oblig.", prerequisites: ["tec_emerg"], period: "" },
    { id: "empr_innov", name: "Emprendimiento e Innovación Tecnológica", semester: 10, credits: 0, type: "Oblig.", prerequisites: ["gest_proy_comp"], period: "" },
    { id: "estr_sist_inf", name: "Estrategias de Sistemas de Información", semester: 10, credits: 0, type: "Oblig.", prerequisites: [], period: "" },
    { id: "gest_ciberseg", name: "Gestión de la Ciberseguridad", semester: 10, credits: 0, type: "Elect.", prerequisites: ["redes_tel3"], period: "" },
    { id: "gest_sec_pub", name: "Gestión del Sector Público y Sociedad Civil para el Desarrollo Sostenible", semester: 10, credits: 0, type: "Elect.", prerequisites: [], period: "" },
    { id: "proy_comp2", name: "Proyecto para Computación II", semester: 10, credits: 0, type: "Oblig.", prerequisites: ["proy_comp1"], period: "" },
    { id: "top_anal_datos", name: "Tópicos en Analítica de Datos No Estructurados", semester: 10, credits: 0, type: "Elect.", prerequisites: [], period: "" }
];

const curriculumDiv = document.getElementById('curriculum');
const approvedCourses = new Set();

function renderCurriculum() {
    curriculumDiv.innerHTML = '';
    const semesters = [...new Set(courses.map(c => c.semester))];
    
    semesters.forEach(semester => {
        const semesterDiv = document.createElement('div');
        semesterDiv.className = 'semester';
        semesterDiv.innerHTML = `<h2>Semestre ${semester}</h2>`;
        const coursesDiv = document.createElement('div');
        coursesDiv.className = 'courses';
        
        courses.filter(c => c.semester === semester).forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'course';
            courseDiv.innerHTML = `
                <p><strong>${course.name}</strong></p>
                <p>Créditos: ${course.credits}</p>
                <p>Tipo: ${course.type}</p>
                <p>Periodo: ${course.period}</p>
            `;
            courseDiv.dataset.id = course.id;
            
            if (approvedCourses.has(course.id)) {
                courseDiv.classList.add('approved');
            } else if (!isUnlocked(course)) {
                courseDiv.classList.add('locked');
            }
            
            courseDiv.addEventListener('click', () => toggleCourseStatus(course));
            coursesDiv.appendChild(courseDiv);
        });
        
        semesterDiv.appendChild(coursesDiv);
        curriculumDiv.appendChild(semesterDiv);
    });
}

function isUnlocked(course) {
    return course.prerequisites.every(prereq => approvedCourses.has(prereq));
}

function toggleCourseStatus(course) {
    if (!isUnlocked(course)) return;
    
    if (approvedCourses.has(course.id)) {
        approvedCourses.delete(course.id);
    } else {
        approvedCourses.add(course.id);
    }
    
    renderCurriculum();
}

renderCurriculum();
