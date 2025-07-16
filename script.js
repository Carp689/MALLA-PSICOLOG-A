const ramos = [
    // Primer año
    { nombre: "Psicología y su contexto profesional", catedra: "I" },
    { nombre: "Filosofía y epistemología", catedra: "II" },
    { nombre: "Bases para el desarrollo cognitivo", catedra: "III" },
    { nombre: "Investigación científica", catedra: "IV" },
    { nombre: "Fundamentos de las ciencias", catedra: "V" },
    { nombre: "Biología y comportamiento", catedra: "VI" },
    { nombre: "Comunicación efectiva y resolución de problemas", catedra: "VII" },
    // Segundo semestre
    { nombre: "Teoría y sistemas psicológicos", catedra: "VIII", prerequisitos: ["Psicología y su contexto profesional"] },
    { nombre: "Psicología general", catedra: "IX" },
    { nombre: "Sociedad y ciencia sociales", catedra: "X" },
    { nombre: "Psicología y cultura", catedra: "XI" },
    { nombre: "Fundamento de las matemáticas", catedra: "XII" },
    { nombre: "Introducción a la neurociencia", catedra: "XIII", prerequisitos: ["Biología y comportamiento"] },
    { nombre: "Trabajo en equipo y liderazgo", catedra: "XIV" },
    // Segundo año
    { nombre: "Ciclo vital y desarrollo humano I", catedra: "XV" },
    { nombre: "Psicología del aprendizaje", catedra: "XVI", prerequisitos: ["Teoría y sistemas psicológicos"] },
    { nombre: "Motivación, afectividad y sexualidad", catedra: "XVII" },
    { nombre: "Psicología social I", catedra: "XVIII" },
    { nombre: "Bioestadística", catedra: "XIX", prerequisitos: ["Fundamento de las matemáticas"] },
    { nombre: "Neurociencia y cognición", catedra: "XX", prerequisitos: ["Introducción a la neurociencia"] },
    { nombre: "Derechos humanos y ciudadanía", catedra: "XXI" },
    // Segundo semestre
    { nombre: "Ciclo vital y desarrollo humano II", catedra: "XXII", prerequisitos: ["Ciclo vital y desarrollo humano I"] },
    { nombre: "Inteligencia y cognición", catedra: "XXIII", prerequisitos: ["Neurociencia y cognición"] },
    { nombre: "Teorías y sistemas psicológicos", catedra: "XXIV" },
    { nombre: "Psicología de la personalidad", catedra: "XXV", prerequisitos: ["Motivación, afectividad y sexualidad"] },
    { nombre: "Teorías y sistemas psicológicos", catedra: "XXVI" },
    { nombre: "Psicología social II", catedra: "XXVII", prerequisitos: ["Psicología social I"] },
    { nombre: "Teorías y sistemas psicológicos", catedra: "XXVIII" },
    { nombre: "Metodología de la investigación", catedra: "XXIX", prerequisitos: ["Bioestadística"] },
    { nombre: "Práctica de observación", catedra: "XXX", prerequisitos: ["Psicología general", "Psicología social I"] },
    { nombre: "Optativo I", catedra: "XXXI" },
    // Tercer año
    { nombre: "Ciclo vital y desarrollo humano III", catedra: "XXXII", prerequisitos: ["Ciclo vital y desarrollo humano II"] },
    { nombre: "Psicopatología", catedra: "XXXIII", prerequisitos: ["Psicología de la personalidad"] },
    { nombre: "Medición y evaluación psicológica", catedra: "XXXIV", prerequisitos: ["Bioestadística"] },
    { nombre: "Psicología de la comunicación", catedra: "XXXV", prerequisitos: ["Psicología social II"] },
    { nombre: "Investigación cuantitativa", catedra: "XXXVI", prerequisitos: ["Metodología de la investigación"] },
    { nombre: "Práctica de comunicación con el cliente-usuario", catedra: "XXXVII", prerequisitos: ["Práctica de observación", "Psicología social II"] },
    { nombre: "Desarrollo humano sostenible", catedra: "XXXVIII" },
    // Segundo semestre
    { nombre: "Salud mental y psiquiatría", catedra: "XXXIX", prerequisitos: ["Psicopatología"] },
    { nombre: "Estrategias de evaluación de funciones cognitivas", catedra: "XL", prerequisitos: ["Inteligencia y cognición"] },
    { nombre: "Medición y evaluación psicológica", catedra: "XLI" },
    { nombre: "Estrategias de evaluación de la personalidad", catedra: "XLII", prerequisitos: ["Medición y evaluación psicológica", "Psicología de la personalidad"] },
    { nombre: "Estrategias de promoción y prevención psicosocial", catedra: "XLIII", prerequisitos: ["Psicología social II"] },
    { nombre: "Investigación cualitativa", catedra: "XLIV", prerequisitos: ["Metodología de la investigación"] },
    { nombre: "Práctica de evaluación psicológica", catedra: "XLV", prerequisitos: ["Práctica de comunicación con el cliente-usuario"] },
    { nombre: "Optativo II", catedra: "XLVI" },
    // Cuarto año
    { nombre: "Psicología clínica", catedra: "XLVII", prerequisitos: ["Estrategias de evaluación de la personalidad"] },
    { nombre: "Salud mental y psiquiatría", catedra: "XLVIII" },
    { nombre: "Psicología educacional", catedra: "XLIX", prerequisitos: ["Estrategias de evaluación de funciones cognitivas"] },
    { nombre: "Psicología organizacional", catedra: "L", prerequisitos: ["Psicología de la comunicación"] },
    { nombre: "Psicología comunitaria", catedra: "LI", prerequisitos: ["Estrategias de promoción y prevención psicosocial"] },
    { nombre: "Seminario de grado I", catedra: "LII", prerequisitos: ["Investigación cualitativa", "Investigación cuantitativa"] },
    { nombre: "Práctica de habilidades del psicólogo", catedra: "LIII", prerequisitos: ["Práctica de evaluación psicológica"] },
    { nombre: "Optativo III", catedra: "LIV" },
    // Segundo semestre
    { nombre: "Teorías de la psicoterapia", catedra: "LV", prerequisitos: ["Psicología clínica"] },
    { nombre: "Intervención psicoeducativa", catedra: "LVI", prerequisitos: ["Práctica de evaluación psicológica"] },
    { nombre: "Gestión de recursos humanos", catedra: "LVII", prerequisitos: ["Psicología organizacional"] },
    { nombre: "Modelos de intervención psicosocial", catedra: "LVIII", prerequisitos: ["Psicología comunitaria"] },
    { nombre: "Seminario de grado II", catedra: "LIX", prerequisitos: ["Seminario de grado I"] },
    { nombre: "Práctica de intervención I", catedra: "LX", prerequisitos: ["Práctica de habilidades del psicólogo"] },
    { nombre: "Deontología profesional", catedra: "LXI" },
    // Quinto año
    { nombre: "Seminario de integración disciplinar", catedra: "LXII", prerequisitos: ["Gestión de recursos humanos", "Intervención psicoeducativa"] },
    { nombre: "Teorías de la psicoterapia", catedra: "LXIII" },
    { nombre: "Tópicos emergentes en psicología", catedra: "LXIV", prerequisitos: ["Seminario de grado II"] },
    { nombre: "Psicología y derecho", catedra: "LXV", prerequisitos: ["Modelos de intervención psicosocial"] },
    { nombre: "Políticas públicas y psicología", catedra: "LXVI", prerequisitos: ["Psicología comunitaria"] },
    { nombre: "Psicología educacional", catedra: "LXVII" },
    { nombre: "Elaboración y evaluación de proyectos", catedra: "LXVIII", prerequisitos: ["Seminario de grado II"] },
    { nombre: "Práctica de intervención II", catedra: "LXIX", prerequisitos: ["Práctica de intervención I"] },
    // Segundo semestre
    { nombre: "Práctica profesional", catedra: "LXX", prerequisitos: ["Todos los ramos"] },
    { nombre: "Examen de título", catedra: "LXXI", prerequisitos: ["Todos los ramos"] },
];

function crearMalla() {
    const mallaDiv = document.getElementById('malla');
    ramos.forEach((ramo) => {
        const ramoDiv = document.createElement('div');
        ramoDiv.classList.add('ramo');
        ramoDiv.textContent = `${ramo.nombre} (Cátedra ${ramo.catedra})`;
        
        ramoDiv.addEventListener('click', () => {
            ramoDiv.classList.toggle('aprobado');
        });

        mallaDiv.appendChild(ramoDiv);
    });
}

document.addEventListener('DOMContentLoaded', crearMalla);
