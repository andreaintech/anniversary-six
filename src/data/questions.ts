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
        question: '¿En qué año empezamos a salir?',
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
            { id: 'a', text: 'Fuimos al cine del Sambil' },
            { id: 'b', text: 'Fuimos a comer en Showcolatev' },
            { id: 'c', text: 'Fuimos a bailar en Various' },
            { id: 'd', text: 'Fuimos a comer a Charlotte' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q3',
        question: '¿Quién dio el primer paso?',
        options: [
            { id: 'a', text: 'Andrea' },
            { id: 'b', text: 'Arturo' },
            { id: 'c', text: 'Fue mutuo' },
            { id: 'd', text: 'Aún lo estamos discutiendo' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q4',
        question: '¿Qué solemos pedir para comer en casa?',
        options: [
            { id: 'a', text: 'Pizza' },
            { id: 'b', text: 'Arepa' },
            { id: 'c', text: 'Sushi' },
            { id: 'd', text: 'Comida mexicana' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q5',
        question: '¿Quién suele tardar más en arreglarse?',
        options: [
            { id: 'a', text: 'Andrea' },
            { id: 'b', text: 'Arturo' },
            { id: 'c', text: 'Depende del día' },
            { id: 'd', text: 'Siempre llegamos temprano igual' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q6',
        question: '¿Cuál de estos planes nos representa más?',
        options: [
            { id: 'a', text: 'Salir a rumbear' },
            { id: 'b', text: 'Viajar y conocer lugares' },
            { id: 'c', text: 'Videojuegos toda la noche' },
            { id: 'd', text: 'Noche de pelis y comida' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q7',
        question: '¿Cual fue la cancion que pedimos en el primer karaoke al que fuimos (en la hermandad)?',
        options: [
            { id: 'a', text: 'Colgando en tus manos' },
            { id: 'b', text: 'Hoy tengo ganas de ti' },
            { id: 'c', text: 'Mentiras' },
            { id: 'd', text: 'El duelo' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q8',
        question: '¿Cuál es la fecha de nuestro aniversario?',
        options: [
            { id: 'a', text: '07 de diciembre de 2018' },
            { id: 'b', text: '07 de diciembre de 2019' },
            { id: 'c', text: '17 de diciembre de 2019' },
            { id: 'd', text: '17 de diciembre de 2020' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q9',
        question: '¿En qué mes nos conocimos?',
        options: [
            { id: 'a', text: 'Agosto' },
            { id: 'b', text: 'Septiembre' },
            { id: 'c', text: 'Noviembre' },
            { id: 'd', text: 'Diciembre' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q10',
        question: '¿Cuál es nuestro lugar favorito para desconectarnos?',
        options: [
            { id: 'a', text: 'La playa' },
            { id: 'b', text: 'La montaña' },
            { id: 'c', text: 'El centro comercial' },
            { id: 'd', text: 'Visitar a la familia' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q11',
        question: '¿Quién es más probable que se quede dormido primero viendo una peli?',
        options: [
            { id: 'a', text: 'Andrea' },
            { id: 'b', text: 'Arturo' },
            { id: 'c', text: 'Los dos al mismo tiempo' },
            { id: 'd', text: 'Nunca nos dormimos' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q12',
        question: '¿Qué frase usamos más entre nosotros?',
        options: [
            { id: 'a', text: 'Te amo' },
            { id: 'b', text: 'Tengo hambre' },
            { id: 'c', text: '¿Qué vamos a comer?' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
    {
        id: 'q13',
        question: '¿Qué fue lo primero que me regalaste?',
        options: [
            { id: 'a', text: 'Un cachito' },
            { id: 'b', text: 'Una torta' },
            { id: 'c', text: 'Una empanada' },
            { id: 'd', text: 'Un chocolate' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q14',
        question: 'Cuando me escribiste por whatsapp por primera vez, ¿qué mensaje me escribiste?',
        options: [
            { id: 'a', text: 'Ah conoces a Maria Medina, preguntale por mi a ver si soy un loco de tinder' },
            { id: 'b', text: 'Te compre un cachito btw' },
            { id: 'c', text: 'Valencia esta listo apocalipsis pues' },
            { id: 'd', text: 'Hola linda' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q15',
        question: '¿Frase que soliamos decirnos?',
        options: [
            { id: 'a', text: 'Te estimo mucho' },
            { id: 'b', text: 'Te quiero por siempre' },
            { id: 'c', text: 'Somos mucho mas que dos' },
            { id: 'd', text: 'Somos dos locos enamorados' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q16',
        question: '¿Quien no queria tener a Nala al principio cuando nos dijeron que nos la iban a regalar?',
        options: [
            { id: 'a', text: 'Andrea' },
            { id: 'b', text: 'Arturo' },
            { id: 'c', text: 'Mi mamá' },
            { id: 'd', text: 'Tu mamá' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q17',
        question: 'Si tuviéramos que elegir un plan ahora mismo, ¿cuál sería?',
        options: [
            { id: 'a', text: 'Ir al centro comercial' },
            { id: 'b', text: 'Salir a comer algo rico' },
            { id: 'c', text: 'Ir a bailar a una discoteca' },
            { id: 'd', text: 'Ir a un karaoke' },
        ],
        correctOptionId: 'b',
    },
    {
        id: 'q18',
        question: '¿Quién dijo "te amo" por primera vez?',
        options: [
            { id: 'a', text: 'Andrea' },
            { id: 'b', text: 'Arturo' },
            { id: 'c', text: 'Ambos a la vez en persona' },
            { id: 'd', text: 'Ambos a la vez pero por whatsapp' },
        ],
        correctOptionId: 'a',
    },
    {
        id: 'q19',
        question: '¿Qué día nos vimos en persona por primera vez?',
        options: [
            { id: 'a', text: 'Jueves 01 de agosto de 2019' },
            { id: 'b', text: 'Jueves 08 de agosto de 2019' },
            { id: 'c', text: 'Miercoles 14 de agosto de 2019' },
            { id: 'd', text: 'Viernes 18 de septiembre de 2019' },
        ],
        correctOptionId: 'c',
    },
    {
        id: 'q20',
        question: 'Después de estos 6 años, ¿qué es lo mejor de todo?',
        options: [
            { id: 'a', text: 'Las risas' },
            { id: 'b', text: 'Los momentos difíciles que superamos' },
            { id: 'c', text: 'Lo mucho que hemos crecido juntos' },
            { id: 'd', text: 'Todas las anteriores' },
        ],
        correctOptionId: 'd',
    },
];

