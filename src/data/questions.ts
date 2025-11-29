export type QuizOption = {
    id: string;
    text: string;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
    correctOptionId: string;
};

export const questions: QuizQuestion[] = [
    {
        id: 'q1',
        question: '¿En qué año empezamos a salir oficialmente?',
        options: [
            { id: 'a', text: '2017' },
            { id: 'b', text: '2018' },
            { id: 'c', text: '2019' },
            { id: 'd', text: '2020' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q2',
        question: '¿Qué hicimos en nuestra primera cita?',
        options: [
            { id: 'a', text: 'Fuimos al cine' },
            { id: 'b', text: 'Fuimos a comer' },
            { id: 'c', text: 'Fuimos a bailar' },
            { id: 'd', text: 'Nos quedamos en casa viendo una peli' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q3',
        question: '¿Quién dio el primer paso?',
        options: [
            { id: 'a', text: 'Yo' },
            { id: 'b', text: 'Él' },
            { id: 'c', text: 'Fue mutuo' },
            { id: 'd', text: 'Aún lo estamos discutiendo' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q4',
        question: '¿Cuál es nuestra comida favorita para pedir juntos?',
        options: [
            { id: 'a', text: 'Pizza' },
            { id: 'b', text: 'Hamburguesas' },
            { id: 'c', text: 'Sushi' },
            { id: 'd', text: 'Comida venezolana' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q5',
        question: '¿Quién suele tardar más en arreglarse?',
        options: [
            { id: 'a', text: 'Yo' },
            { id: 'b', text: 'Él' },
            { id: 'c', text: 'Depende del día' },
            { id: 'd', text: 'Siempre llegamos temprano igual' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q6',
        question: '¿Cuál de estos planes nos representa más?',
        options: [
            { id: 'a', text: 'Noche de pelis y comida' },
            { id: 'b', text: 'Salir a rumbear' },
            { id: 'c', text: 'Viajar y conocer lugares' },
            { id: 'd', text: 'Videojuegos toda la noche' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q7',
        question: '¿Cuál es la red flag más grande si uno de los dos la hace?',
        options: [
            { id: 'a', text: 'Olvidar nuestro aniversario' },
            { id: 'b', text: 'No contestar mensajes todo el día' },
            { id: 'c', text: 'Comer sin avisar al otro' },
            { id: 'd', text: 'Ver la serie sin el otro' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q8',
        question: '¿Qué cosa hago que siempre lo hace reír?',
        options: [
            { id: 'a', text: 'Mis caras raras' },
            { id: 'b', text: 'Mis bailes random' },
            { id: 'c', text: 'Mis chistes malos' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q9',
        question: '¿En qué mes es nuestro aniversario?',
        options: [
            { id: 'a', text: 'Octubre' },
            { id: 'b', text: 'Noviembre' },
            { id: 'c', text: 'Diciembre' },
            { id: 'd', text: 'Enero' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q10',
        question: '¿Cuál es nuestro lugar favorito para desconectarnos?',
        options: [
            { id: 'a', text: 'La playa' },
            { id: 'b', text: 'La montaña' },
            { id: 'c', text: 'El centro comercial' },
            { id: 'd', text: 'La casa, con aire acondicionado' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q11',
        question: '¿Quién es más probable que se quede dormido primero viendo una peli?',
        options: [
            { id: 'a', text: 'Yo' },
            { id: 'b', text: 'Él' },
            { id: 'c', text: 'Los dos al mismo tiempo' },
            { id: 'd', text: 'Nunca nos dormimos' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q12',
        question: '¿Qué frase usamos más entre nosotros?',
        options: [
            { id: 'a', text: 'Te extraño' },
            { id: 'b', text: 'Tengo hambre' },
            { id: 'c', text: '¿Qué vamos a ver?' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q13',
        question: '¿Qué detalle me dio que nunca olvidaré?',
        options: [
            { id: 'a', text: 'Una carta' },
            { id: 'b', text: 'Un peluche' },
            { id: 'c', text: 'Una salida sorpresa' },
            { id: 'd', text: 'Algo hecho a mano' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q14',
        question: 'Si fuéramos personajes de una serie, ¿qué tipo sería?',
        options: [
            { id: 'a', text: 'Romántica' },
            { id: 'b', text: 'Comedia romántica' },
            { id: 'c', text: 'Drama intenso' },
            { id: 'd', text: 'Acción' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q15',
        question: '¿Quién manda más memes durante el día?',
        options: [
            { id: 'a', text: 'Yo' },
            { id: 'b', text: 'Él' },
            { id: 'c', text: 'Estamos empatados' },
            { id: 'd', text: 'Casi nunca mandamos memes' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q16',
        question: '¿Cuál es la mejor parte de nuestros domingos?',
        options: [
            { id: 'a', text: 'Dormir hasta tarde' },
            { id: 'b', text: 'Comer juntos' },
            { id: 'c', text: 'Ver series/pelis' },
            { id: 'd', text: 'Estar juntitos, no importa el plan' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q17',
        question: 'Si tuviéramos que elegir un plan ahora mismo, ¿cuál sería?',
        options: [
            { id: 'a', text: 'Maratón de nuestra serie' },
            { id: 'b', text: 'Salir a comer algo rico' },
            { id: 'c', text: 'Ir a bailar' },
            { id: 'd', text: 'Dar una vuelta sin rumbo' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q18',
        question: '¿Quién suele decir "te amo" primero en el día?',
        options: [
            { id: 'a', text: 'Yo' },
            { id: 'b', text: 'Él' },
            { id: 'c', text: 'Depende del día' },
            { id: 'd', text: 'Siempre a la vez' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q19',
        question: '¿Cuál es nuestro superpoder como pareja?',
        options: [
            { id: 'a', text: 'Reírnos de todo' },
            { id: 'b', text: 'Apoyarnos siempre' },
            { id: 'c', text: 'Sobrevivir a cualquier plan loco' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q20',
        question: 'Después de estos 6 años, ¿qué es lo mejor de todo?',
        options: [
            { id: 'a', text: 'Las risas' },
            { id: 'b', text: 'Los momentos difíciles que superamos' },
            { id: 'c', text: 'Lo mucho que hemos crecido juntos' },
            { id: 'd', text: 'Que seguimos eligiéndonos cada día' },
        ],
        correctOptionId: 'd',
    },
];

