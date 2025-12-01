export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    images: string[]; // Array de imágenes para cada año
    anecdote: string;
    funFact: string;
}

export const timelineEvents: TimelineEvent[] = [
    {
        id: '2019-01',
        date: '2019',
        title: 'El año en el que nos conocimos',
        images: [
            '/timeline/2019-1.jpg',
            '/timeline/2019-2.jpg',
            '/timeline/2019-3.jpg',
            '/timeline/2019-4.jpg',
            '/timeline/2019-5.jpg'
        ],
        anecdote: 'El año en que todo comenzó. Recuerdas cuando y como nos conocimos?',
        funFact: 'Me pediste ser tu novia en el Teatro Municipal de Valencia, vimos la obra El Cascanueces, te acuerdas? 🩰'
    },
    {
        id: '2020-01',
        date: '2020',
        title: 'Un año de dificultades',
        images: [
            '/timeline/2020-1.jpg',
            '/timeline/2020-2.jpg',
            '/timeline/2020-3.jpg'
        ],
        anecdote: 'A pesar de todo lo que pasó en el mundo, nosotros seguimos juntos y más fuertes.',
        funFact: 'No pasamos tanto tiempo como queriamos debido a la pandemia, sin embargo cada vez que nos veiamos era un momento especial. Este fue el año en el que fuimos juntos a la playa, nuestro lugar favorito para desconectarnos 🌴'
    },
    {
        id: '2021-01',
        date: '2021',
        title: 'Nuevas aventuras',
        images: [
            '/timeline/2021-1.jpg',
            '/timeline/2021-2.jpg'
        ],
        anecdote: 'Cada día descubrimos algo nuevo el uno del otro.',
        funFact: 'Poco a poco la pandemia se iba errandicando y empezamos a vernos mas seguido. Valoro mucho cada momento que pasamos juntos, fue el primer año nuevo juntos 🎆'
    },
    {
        id: '2022-01',
        date: '2022',
        title: 'Un año de metas y logros',
        images: [
            '/timeline/2022-1.jpg',
            '/timeline/2022-2.jpg',
            '/timeline/2022-3.jpg',
            '/timeline/2022-4.jpg',
            '/timeline/2022-5.jpg',
            '/timeline/2022-6.jpg',
            '/timeline/2022-7.jpg',
            '/timeline/2022-8.jpg'
        ],
        anecdote: 'Los momentos simples se convirtieron en los más especiales.',
        funFact: 'Nos mudamos a juntos a nuestro primer hogar juntos. Fue un momento muy especial, nos sentiamos como en casa y a pesar de que al principio fue dificil, nos fuimos adaptando poco a poco. Tambien fue el año en el que fuimos a nuestras primeras bodas juntos 💒'
    },
    {
        id: '2023-01',
        date: '2023',
        title: 'Un año con algunas adversidades',
        images: [
            '/timeline/2023-1.jpg',
            '/timeline/2023-2.jpg',
            '/timeline/2023-3.jpg',
            '/timeline/2023-4.jpg'
        ],
        anecdote: 'Este año fue un poco dificil (laboralmente hablando), sin embargo siempre nos apoyamos mutuamente para vencer las adversidades',
        funFact: 'Lo importante es que nos fuimos adaptando a las nuevas circunstancias y nos ayudamos mutuamente a seguir adelante 💪🏽'
    },
    {
        id: '2024-01',
        date: '2024',
        title: 'Un buen año',
        images: [
            '/timeline/2024-1.jpg',
            '/timeline/2024-2.jpg',
            '/timeline/2024-3.jpg',
            '/timeline/2024-4.jpg',
            '/timeline/2024-5.jpg'
        ],
        anecdote: 'Cada día es una nueva razón para sonreír cuando estoy contigo.',
        funFact: 'Este año fue uno de los más exitosos, nos sentiamos muy bien en nuestros trabajos y tuvimos muchas salidas con amistades y festejos en familia y con compañeros de trabajo 🍻'
    },
    {
        id: '2025-01',
        date: '2025',
        title: 'Un año agridulce lleno de cambios',
        images: [
            '/timeline/2025-1.jpg',
            '/timeline/2025-2.jpg',
            '/timeline/2025-3.jpg',
            '/timeline/2025-4.jpg',
            '/timeline/2025-5.jpg',
            '/timeline/2025-6.jpg',
            '/timeline/2025-7.jpg',
            '/timeline/2025-8.jpg',
            '/timeline/2025-9.jpg',
            '/timeline/2025-10.jpg'
        ],
        anecdote: 'Fue un año dificil con la perdida de un ser querido muy cercano (mi mami), sin embargo valoro mucho todo el esfuerzo y apoyo que me ofreciste',
        funFact: 'Por otro lado tambien hubo muchas celebraciones, principalmente por la graduacion de mi hermana Fabi, mas bodas y celebraciones de cumpleaños con amigos y familiares y tu siempre has estado presente. A pesar de que han habido altas y bajas en tu trabajo, yo se que siempre lo has hecho con mucho esfuerzo y dedicacion y se que conseguiras pronto tu trabajo soñado, no dudes nunca de tus capacidades. Recuerda que aún no sabemos qué nos depara el futuro, pero sabemos que será juntos. Estoy segura que las mejores aventuras están por venir! ✨'
    }
];

