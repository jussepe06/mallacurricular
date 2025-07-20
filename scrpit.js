document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const curriculumData = [
        // Primer año
        {
            year: 1,
            semester: 1,
            courses: [
                { code: "ENGLISH I", name: "ENGLISH I", credits: 0, requirements: ["NIVELACIÓN EN INGLÉS"], opens: ["ENGLISH II"] },
                { code: "FUNDAMENTOS DE PROGRAMACIÓN", name: "FUNDAMENTOS DE PROGRAMACIÓN", credits: 3, requirements: [], opens: ["PROGRAMACIÓN ORIENTADA A OBJETOS I", "PROGRAMACIÓN Y ESTRUCTURAS DE DATOS"] },
                { code: "FUNDAMENTOS EN COMPETENCIAS DIGITALES", name: "FUNDAMENTOS EN COMPETENCIAS DIGITALES", credits: 0, requirements: [], opens: [] },
                { code: "LENGUAJE Y COMUNICACIÓN I", name: "LENGUAJE Y COMUNICACIÓN I", credits: 0, requirements: ["NIVELACIÓN EN LENGUAJE Y COMUNICACIÓN"], opens: ["LENGUAJE Y COMUNICACIÓN II"] },
                { code: "MATEMÁTICA", name: "MATEMÁTICA", credits: 0, requirements: ["NIVELACIÓN EN MATEMÁTICA"], opens: ["CÁLCULO DE UNA VARIABLE", "MATEMÁTICA DISCRETA", "ÁLGEBRA LINEAL COMPUTACIONAL", "ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA"] },
                { code: "NIVELACIÓN EN INGLÉS", name: "NIVELACIÓN EN INGLÉS", credits: 0, requirements: [], opens: ["ENGLISH I"] },
                { code: "NIVELACIÓN EN LENGUAJE Y COMUNICACIÓN", name: "NIVELACIÓN EN LENGUAJE Y COMUNICACIÓN", credits: 0, requirements: [], opens: ["LENGUAJE Y COMUNICACIÓN I"] },
                { code: "NIVELACIÓN EN MATEMÁTICA", name: "NIVELACIÓN EN MATEMÁTICA", credits: 0, requirements: [], opens: ["MATEMÁTICA"] },
                { code: "REALIDAD NACIONAL Y GLOBALIZACIÓN", name: "REALIDAD NACIONAL Y GLOBALIZACIÓN", credits: 3, requirements: [], opens: ["ÉTICA Y CIUDADANÍA (ÉTICA)"] }
            ]
        },
        {
            year: 1,
            semester: 2,
            courses: [
                { code: "ADMINISTRACIÓN PARA LOS NEGOCIOS", name: "ADMINISTRACIÓN PARA LOS NEGOCIOS", credits: 3, requirements: [], opens: ["MARKETING"] },
                { code: "CÁLCULO DE UNA VARIABLE", name: "CÁLCULO DE UNA VARIABLE", credits: 4, requirements: ["MATEMÁTICA"], opens: ["TEORÍA DE COMPUTACIÓN"] },
                { code: "ENGLISH II", name: "ENGLISH II", credits: 0, requirements: ["ENGLISH I"], opens: ["ENGLISH III"] },
                { code: "LENGUAJE Y COMUNICACIÓN II", name: "LENGUAJE Y COMUNICACIÓN II", credits: 0, requirements: ["LENGUAJE Y COMUNICACIÓN I"], opens: [] },
                { code: "MATEMÁTICA DISCRETA", name: "MATEMÁTICA DISCRETA", credits: 2, requirements: ["MATEMÁTICA"], opens: [] },
                { code: "PROGRAMACIÓN ORIENTADA A OBJETOS I", name: "PROGRAMACIÓN ORIENTADA A OBJETOS I", credits: 0, requirements: ["FUNDAMENTOS DE PROGRAMACIÓN"], opens: ["PROGRAMACIÓN ORIENTADA A OBJETOS II", "ANÁLISIS Y DISEÑO DE ALGORITMOS", "PROGRAMACIÓN COMPETITIVA", "DESARROLLO BASADO EN PLATAFORMAS", "AGENTES INTELIGENTES"] }
            ]
        },
        // Segundo año
        {
            year: 2,
            semester: 1,
            courses: [
                { code: "ENGLISH III", name: "ENGLISH III", credits: 5, requirements: ["ENGLISH II"], opens: ["ENGLISH IV"] },
                { code: "INGENIERÍA DE SOFTWARE I", name: "INGENIERÍA DE SOFTWARE I", credits: 2, requirements: [], opens: ["INGENIERÍA DE SOFTWARE II"] },
                { code: "PRINCIPIOS DE ECONOMÍA", name: "PRINCIPIOS DE ECONOMÍA", credits: 3, requirements: [], opens: ["OPORTUNIDADES DE NEGOCIOS"] },
                { code: "PROGRAMACIÓN Y ESTRUCTURAS DE DATOS", name: "PROGRAMACIÓN Y ESTRUCTURAS DE DATOS", credits: 4, requirements: ["FUNDAMENTOS DE PROGRAMACIÓN"], opens: ["ESTRUCTURA DE DATOS AVANZADA", "EXPERIENCIA DE USUARIO (UX)", "GERENCIAMIENTO DE DATOS I"] },
                { code: "TEORÍA DE COMPUTACIÓN", name: "TEORÍA DE COMPUTACIÓN", credits: 3, requirements: ["CÁLCULO DE UNA VARIABLE"], opens: ["SISTEMAS OPERATIVOS", "COMPILADORES"] },
                { code: "ÁLGEBRA LINEAL COMPUTACIONAL", name: "ÁLGEBRA LINEAL COMPUTACIONAL", credits: 4, requirements: ["MATEMÁTICA"], opens: [] }
            ]
        },
        {
            year: 2,
            semester: 2,
            courses: [
                { code: "ENGLISH IV", name: "ENGLISH IV", credits: 5, requirements: ["ENGLISH III"], opens: [] },
                { code: "ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA", name: "ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA", credits: 0, requirements: ["MATEMÁTICA"], opens: ["METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA"] },
                { code: "ESTRUCTURA DE DATOS AVANZADA", name: "ESTRUCTURA DE DATOS AVANZADA", credits: 0, requirements: ["PROGRAMACIÓN Y ESTRUCTURAS DE DATOS"], opens: [] },
                { code: "EXPERIENCIA DE USUARIO (UX)", name: "EXPERIENCIA DE USUARIO (UX)", credits: 2, requirements: ["PROGRAMACIÓN Y ESTRUCTURAS DE DATOS"], opens: [] },
                { code: "FUNDAMENTOS CONTABLES Y FINANCIEROS", name: "FUNDAMENTOS CONTABLES Y FINANCIEROS", credits: 3, requirements: [], opens: ["OPORTUNIDADES DE NEGOCIOS"] },
                { code: "GERENCIAMIENTO DE DATOS I", name: "GERENCIAMIENTO DE DATOS I", credits: 4, requirements: ["PROGRAMACIÓN Y ESTRUCTURAS DE DATOS"], opens: ["GERENCIAMIENTO DE DATOS II"] }
            ]
        },
        // Tercer año
        {
            year: 3,
            semester: 1,
            courses: [
                { code: "GERENCIAMIENTO DE DATOS II", name: "GERENCIAMIENTO DE DATOS II", credits: 0, requirements: ["GERENCIAMIENTO DE DATOS I"], opens: ["GESTIÓN DE SISTEMAS DE INFORMACIÓN"] },
                { code: "INGENIERÍA DE SOFTWARE II", name: "INGENIERÍA DE SOFTWARE II", credits: 2, requirements: ["INGENIERÍA DE SOFTWARE I"], opens: ["INGENIERÍA DE SOFTWARE III"] },
                { code: "INTERACCIÓN HUMANO COMPUTADOR", name: "INTERACCIÓN HUMANO COMPUTADOR", credits: 4, requirements: [], opens: [] },
                { code: "MARKETING", name: "MARKETING", credits: 3, requirements: ["ADMINISTRACIÓN PARA LOS NEGOCIOS"], opens: ["OPORTUNIDADES DE NEGOCIOS"] },
                { code: "PROGRAMACIÓN ORIENTADA A OBJETOS II", name: "PROGRAMACIÓN ORIENTADA A OBJETOS II", credits: 4, requirements: ["PROGRAMACIÓN ORIENTADA A OBJETOS I"], opens: ["ANÁLISIS Y DISEÑO DE ALGORITMOS", "PROGRAMACIÓN COMPETITIVA", "DESARROLLO BASADO EN PLATAFORMAS", "AGENTES INTELIGENTES"] },
                { code: "ÉTICA Y CIUDADANÍA (ÉTICA)", name: "ÉTICA Y CIUDADANÍA (ÉTICA)", credits: 3, requirements: ["REALIDAD NACIONAL Y GLOBALIZACIÓN"], opens: ["FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE"] }
            ]
        },
        {
            year: 3,
            semester: 2,
            courses: [
                { code: "ANÁLISIS Y DISEÑO DE ALGORITMOS", name: "ANÁLISIS Y DISEÑO DE ALGORITMOS", credits: 0, requirements: ["PROGRAMACIÓN ORIENTADA A OBJETOS II"], opens: ["SEGURIDAD DE LA INFORMACIÓN"] },
                { code: "INGENIERÍA DE SOFTWARE III", name: "INGENIERÍA DE SOFTWARE III", credits: 0, requirements: ["INGENIERÍA DE SOFTWARE II"], opens: [] },
                { code: "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", name: "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", credits: 4, requirements: ["ESTADÍSTICA DESCRIPTIVA E INFERENCIA ESTADÍSTICA"], opens: ["GESTIÓN DE PROYECTOS PARA COMPUTACIÓN"] },
                { code: "PROCESAMIENTO DIGITAL DE SEÑALES", name: "PROCESAMIENTO DIGITAL DE SEÑALES", credits: 0, requirements: [], opens: ["PROCESAMIENTO DE IMÁGENES DIGITALES"] },
                { code: "PROGRAMACIÓN COMPETITIVA", name: "PROGRAMACIÓN COMPETITIVA", credits: 0, requirements: ["PROGRAMACIÓN ORIENTADA A OBJETOS II"], opens: [] },
                { code: "ROBÓTICA I", name: "ROBÓTICA I", credits: 0, requirements: [], opens: ["ROBÓTICA II"] },
                { code: "SISTEMAS OPERATIVOS", name: "SISTEMAS OPERATIVOS", credits: 0, requirements: ["TEORÍA DE COMPUTACIÓN"], opens: ["REDES Y TELECOMUNICACIONES I"] }
            ]
        },
        // Cuarto año
        {
            year: 4,
            semester: 1,
            courses: [
                { code: "BASES PARA LA GESTIÓN ESTRATÉGICA DE LA SOSTENIBILIDAD", name: "BASES PARA LA GESTIÓN ESTRATÉGICA DE LA SOSTENIBILIDAD", credits: 0, requirements: [], opens: [] },
                { code: "COMPILADORES", name: "COMPILADORES", credits: 0, requirements: ["TEORÍA DE COMPUTACIÓN"], opens: [] },
                { code: "CULTURAL TRANSFORMATION FOR DIGITAL TRANSFORMATION", name: "CULTURAL TRANSFORMATION FOR DIGITAL TRANSFORMATION", credits: 0, requirements: [], opens: [] },
                { code: "DESARROLLO BASADO EN PLATAFORMAS", name: "DESARROLLO BASADO EN PLATAFORMAS", credits: 0, requirements: ["PROGRAMACIÓN ORIENTADA A OBJETOS II"], opens: ["VISUALIZACIÓN DE DATOS"] },
                { code: "FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE", name: "FUNDAMENTOS DEL LIDERAZGO SOSTENIBLE", credits: 3, requirements: ["ÉTICA Y CIUDADANÍA (ÉTICA)"], opens: [] },
                { code: "GESTIÓN DE SISTEMAS DE INFORMACIÓN", name: "GESTIÓN DE SISTEMAS DE INFORMACIÓN", credits: 0, requirements: ["GERENCIAMIENTO DE DATOS II"], opens: [] },
                { code: "PROCESAMIENTO DE IMÁGENES DIGITALES", name: "PROCESAMIENTO DE IMÁGENES DIGITALES", credits: 0, requirements: ["PROCESAMIENTO DIGITAL DE SEÑALES"], opens: ["VISIÓN COMPUTACIONAL"] },
                { code: "REDES Y TELECOMUNICACIONES I", name: "REDES Y TELECOMUNICACIONES I", credits: 0, requirements: ["SISTEMAS OPERATIVOS"], opens: ["CLOUD COMPUTING", "INTERNET OF THINGS", "REDES Y TELECOMUNICACIONES II"] },
                { code: "ROBÓTICA II", name: "ROBÓTICA II", credits: 0, requirements: ["ROBÓTICA I"], opens: [] }
            ]
        },
        {
            year: 4,
            semester: 2,
            courses: [
                { code: "AGENTES INTELIGENTES", name: "AGENTES INTELIGENTES", credits: 0, requirements: ["PROGRAMACIÓN ORIENTADA A OBJETOS II"], opens: [] },
                { code: "CLOUD BUSINESS", name: "CLOUD BUSINESS", credits: 0, requirements: [], opens: ["ARTIFICIAL INTELLIGENCE FOR BUSINESS"] },
                { code: "CLOUD COMPUTING", name: "CLOUD COMPUTING", credits: 0, requirements: ["REDES Y TELECOMUNICACIONES I"], opens: ["TECNOLOGÍAS EMERGENTES", "BIG DATA Y ANALÍTICA DE DATOS"] },
                { code: "GESTIÓN DE PROYECTOS PARA COMPUTACIÓN", name: "GESTIÓN DE PROYECTOS PARA COMPUTACIÓN", credits: 0, requirements: ["METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA"], opens: ["PROYECTO PARA COMPUTACIÓN I"] },
                { code: "GESTIÓN EMPRESARIAL SOSTENIBLE", name: "GESTIÓN EMPRESARIAL SOSTENIBLE", credits: 0, requirements: [], opens: [] },
                { code: "OPORTUNIDADES DE NEGOCIOS", name: "OPORTUNIDADES DE NEGOCIOS", credits: 0, requirements: ["PRINCIPIOS DE ECONOMÍA", "FUNDAMENTOS CONTABLES Y FINANCIEROS", "MARKETING"], opens: [] },
                { code: "REDES Y TELECOMUNICACIONES II", name: "REDES Y TELECOMUNICACIONES II", credits: 0, requirements: ["REDES Y TELECOMUNICACIONES I"], opens: ["GESTIÓN DE LA CIBERSEGURIDAD", "REDES Y TELECOMUNICACIONES III"] },
                { code: "SEGURIDAD DE LA INFORMACIÓN", name: "SEGURIDAD DE LA INFORMACIÓN", credits: 0, requirements: ["ANÁLISIS Y DISEÑO DE ALGORITMOS"], opens: [] },
                { code: "VISIÓN COMPUTACIONAL", name: "VISIÓN COMPUTACIONAL", credits: 0, requirements: ["PROCESAMIENTO DE IMÁGENES DIGITALES"], opens: ["TÓPICOS EN PROCESAMIENTO DE LENGUAJE NATURAL"] }
            ]
        },
        // Quinto año
        {
            year: 5,
            semester: 1,
            courses: [
                { code: "BUSINESS AND INTERNET OF THINGS", name: "BUSINESS AND INTERNET OF THINGS", credits: 0, requirements: [], opens: ["ARTIFICIAL INTELLIGENCE FOR BUSINESS"] },
                { code: "COMPUTACIÓN EN LA SOCIEDAD", name: "COMPUTACIÓN EN LA SOCIEDAD", credits: 0, requirements: [], opens: [] },
                { code: "GESTIÓN DE EMPRENDIMIENTOS SOCIOAMBIENTALES", name: "GESTIÓN DE EMPRENDIMIENTOS SOCIOAMBIENTALES", credits: 0, requirements: [], opens: [] },
                { code: "INTERNET OF THINGS", name: "INTERNET OF THINGS", credits: 0, requirements: ["REDES Y TELECOMUNICACIONES I"], opens: [] },
                { code: "PROYECTO PARA COMPUTACIÓN I", name: "PROYECTO PARA COMPUTACIÓN I", credits: 0, requirements: ["GESTIÓN DE PROYECTOS PARA COMPUTACIÓN"], opens: ["PROYECTO PARA COMPUTACIÓN II"] },
                { code: "REDES Y TELECOMUNICACIONES III", name: "REDES Y TELECOMUNICACIONES III", credits: 0, requirements: ["REDES Y TELECOMUNICACIONES II"], opens: ["GESTIÓN DE LA CIBERSEGURIDAD"] },
                { code: "TECNOLOGÍAS EMERGENTES", name: "TECNOLOGÍAS EMERGENTES", credits: 0, requirements: ["CLOUD COMPUTING"], opens: ["DESARROLLO DE NEGOCIOS ELECTRÓNICOS"] },
                { code: "TÓPICOS EN PROCESAMIENTO DE LENGUAJE NATURAL", name: "TÓPICOS EN PROCESAMIENTO DE LENGUAJE NATURAL", credits: 0, requirements: ["VISIÓN COMPUTACIONAL"], opens: [] },
                { code: "VISUALIZACIÓN DE DATOS", name: "VISUALIZACIÓN DE DATOS", credits: 0, requirements: ["DESARROLLO BASADO EN PLATAFORMAS"], opens: [] }
            ]
        },
        {
            year: 5,
            semester: 2,
            courses: [
                { code: "ARTIFICIAL INTELLIGENCE FOR BUSINESS", name: "ARTIFICIAL INTELLIGENCE FOR BUSINESS", credits: 0, requirements: ["CLOUD BUSINESS", "BUSINESS AND INTERNET OF THINGS"], opens: [] },
                { code: "BIG DATA Y ANALÍTICA DE DATOS", name: "BIG DATA Y ANALÍTICA DE DATOS", credits: 0, requirements: ["CLOUD COMPUTING"], opens: [] },
                { code: "DESARROLLO DE NEGOCIOS ELECTRÓNICOS", name: "DESARROLLO DE NEGOCIOS ELECTRÓNICOS", credits: 0, requirements: ["TECNOLOGÍAS EMERGENTES"], opens: [] },
                { code: "EMPRENDIMIENTO E INNOVACIÓN TECNOLÓGICA", name: "EMPRENDIMIENTO E INNOVACIÓN TECNOLÓGICA", credits: 0, requirements: ["GESTIÓN DE PROYECTOS PARA COMPUTACIÓN"], opens: [] },
                { code: "ESTRATEGIAS DE SISTEMAS DE INFORMACIÓN", name: "ESTRATEGIAS DE SISTEMAS DE INFORMACIÓN", credits: 0, requirements: [], opens: [] },
                { code: "GESTIÓN DE LA CIBERSEGURIDAD", name: "GESTIÓN DE LA CIBERSEGURIDAD", credits: 0, requirements: ["REDES Y TELECOMUNICACIONES III"], opens: [] },
                { code: "GESTIÓN DEL SECTOR PÚBLICO Y SOCIEDAD CIVIL PARA EL DESARROLLO SOSTENIBLE", name: "GESTIÓN DEL SECTOR PÚBLICO Y SOCIEDAD CIVIL PARA EL DESARROLLO SOSTENIBLE", credits: 0, requirements: [], opens: [] },
                { code: "PROYECTO PARA COMPUTACIÓN II", name: "PROYECTO PARA COMPUTACIÓN II", credits: 0, requirements: ["PROYECTO PARA COMPUTACIÓN I"], opens: [] },
                { code: "TÓPICOS EN ANALÍTICA DE DATOS NO ESTRUCTURADOS", name: "TÓPICOS EN ANALÍTICA DE DATOS NO ESTRUCTURADOS", credits: 0, requirements: [], opens: [] }
            ]
        }
    ];

    // Estado de la aplicación
    let state = {
        completedCourses: JSON.parse(localStorage.getItem('completedCourses')) || [],
        unlockedCourses: JSON.parse(localStorage.getItem('unlockedCourses')) || getInitialUnlockedCourses()
    };

    // Elementos del DOM
    const gridContainer = document.getElementById('grid-container');
    const resetBtn = document.getElementById('reset-btn');
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');

    // Inicializar la aplicación
    function init() {
        renderCurriculum();
        updateProgress();
        setupEventListeners();
    }

    // Obtener cursos iniciales desbloqueados (sin requisitos)
    function getInitialUnlockedCourses() {
        const unlocked = [];
        curriculumData.forEach(yearData => {
            yearData.courses.forEach(course => {
                if (course.requirements.length === 0) {
                    unlocked.push(course.code);
                }
            });
        });
        return unlocked;
    }

    // Renderizar toda la malla curricular
    function renderCurriculum() {
        gridContainer.innerHTML = '';
        
        curriculumData.forEach(yearData => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';
            
            const semesterTitle = `${yearData.year}° Año - Semestre ${yearData.semester}`;
            semesterElement.innerHTML = `
                <div class="semester-header">
                    <h2>${semesterTitle}</h2>
                </div>
                <div class="courses-container" id="courses-${yearData.year}-${yearData.semester}"></div>
            `;
            
            gridContainer.appendChild(semesterElement);
            
            const coursesContainer = document.getElementById(`courses-${yearData.year}-${yearData.semester}`);
            yearData.courses.forEach(course => {
                renderCourse(course, coursesContainer);
            });
        });
    }

    // Renderizar un curso individual
    function renderCourse(course, container) {
        const isCompleted = state.completedCourses.includes(course.code);
        const isUnlocked = state.unlockedCourses.includes(course.code);
        const isLocked = !isUnlocked && !isCompleted;
        
        const courseElement = document.createElement('div');
        courseElement.className = `course ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
        courseElement.dataset.code = course.code;
        
        // Mostrar requisitos solo si no están cumplidos
        const requirementsHtml = course.requirements.map(req => {
            const isFulfilled = state.completedCourses.includes(req);
            return `<div class="requirement ${isFulfilled ? 'fulfilled' : ''}">${req}</div>`;
        }).join('');
        
        courseElement.innerHTML = `
            <div class="course-title">${course.name}</div>
            <div class="course-code">${course.code}</div>
            <div class="course-credits">${course.credits} CR</div>
            ${course.requirements.length > 0 ? `<div class="requirements">${requirementsHtml}</div>` : ''}
        `;
        
        container.appendChild(courseElement);
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Click en curso
        document.querySelectorAll('.course:not(.locked)').forEach(course => {
            course.addEventListener('click', function() {
                const courseCode = this.dataset.code;
                toggleCourseCompletion(courseCode);
            });
        });
        
        // Botón de reinicio
        resetBtn.addEventListener('click', resetProgress);
    }

    // Alternar estado de completado de un curso
    function toggleCourseCompletion(courseCode) {
        const index = state.completedCourses.indexOf(courseCode);
        
        if (index === -1) {
            // Marcar como completado
            state.completedCourses.push(courseCode);
            
            // Desbloquear cursos que este abre
            const course = findCourseByCode(courseCode);
            if (course && course.opens) {
                course.opens.forEach(openedCourse => {
                    if (!state.unlockedCourses.includes(openedCourse)) {
                        state.unlockedCourses.push(openedCourse);
                    }
                });
            }
        } else {
            // Desmarcar como completado
            state.completedCourses.splice(index, 1);
            
            // Verificar si hay cursos que dependan de este
            // (No implementado completamente por simplicidad)
        }
        
        // Guardar estado y volver a renderizar
        saveState();
        renderCurriculum();
        updateProgress();
        setupEventListeners(); // Reconfigurar event listeners después de renderizar
    }

    // Encontrar curso por código
    function findCourseByCode(code) {
        for (const yearData of curriculumData) {
            const found = yearData.courses.find(c => c.code === code);
            if (found) return found;
        }
        return null;
    }

    // Actualizar barra de progreso
    function updateProgress() {
        const totalCourses = curriculumData.reduce((sum, year) => sum + year.courses.length, 0);
        const completedCount = state.completedCourses.length;
        const percentage = Math.round((completedCount / totalCourses) * 100);
        
        progressText.textContent = `${percentage}% completado`;
        progressFill.style.width = `${percentage}%`;
    }

    // Reiniciar progreso
    function resetProgress() {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
            state.completedCourses = [];
            state.unlockedCourses = getInitialUnlockedCourses();
            saveState();
            renderCurriculum();
            updateProgress();
            setupEventListeners();
        }
    }

    // Guardar estado en localStorage
    function saveState() {
        localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
        localStorage.setItem('unlockedCourses', JSON.stringify(state.unlockedCourses));
    }

    // Iniciar la aplicación
    init();
});
