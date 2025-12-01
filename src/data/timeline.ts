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
            '/timeline/2019-3.jpg'
            // Agrega más fotos aquí: '/timeline/2019-4.jpg', etc.
        ],
        anecdote: 'El año en que todo comenzó. Recuerdas cuando y como nos conocimos?',
        funFact: 'Me pediste ser tu novia en el Teatro Municipal de Valencia, vimos la obra El Cascanueces, te acuerdas? 🩰'
    },
    {
        id: '2020-01',
        date: '2020',
        title: 'Año de Dificultades',
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
        title: 'Nuevas Aventuras',
        images: [
            '/timeline/2021-1.jpg',
            '/timeline/2021-2.jpg',
            '/timeline/2021-3.jpg'
        ],
        anecdote: 'Cada día descubrimos algo nuevo el uno del otro.',
        funFact: 'Poco a poco la pandemia se iba errandicando y empezamos a vernos mas seguido. Valoro mucho cada momento que pasamos juntos, fue el primer año nuevo juntos 🎆'
    },
    {
        id: '2022-01',
        date: '2022',
        title: 'Año de Metas y Logros',
        images: [
            '/timeline/2022-1.jpg',
            '/timeline/2022-2.jpg',
            '/timeline/2022-3.jpg'
        ],
        anecdote: 'Los momentos simples se convirtieron en los más especiales.',
        funFact: 'Nos mudamos a juntos a nuestro primer hogar juntos. Fue un momento muy especial, nos sentiamos como en casa y a pesar de que al principio fue dificil, nos fuimos adaptando poco a poco. Tambien fue el año en el que fuimos a nuestras primeras bodas juntos 💒'
    },
    {
        id: '2023-01',
        date: '2023',
        title: 'Año de Logros',
        images: [
            '/timeline/2023-1.jpg',
            '/timeline/2023-2.jpg',
            '/timeline/2023-3.jpg'
        ],
        anecdote: 'Celebramos cada pequeño triunfo como si fuera el más grande.',
        funFact: 'Bailamos bajo la lluvia más veces de las que podemos contar! 💃🕺'
    },
    {
        id: '2024-01',
        date: '2024',
        title: 'El Presente',
        images: [
            '/timeline/2024-1.jpg',
            '/timeline/2024-2.jpg',
            '/timeline/2024-3.jpg'
        ],
        anecdote: 'Cada día es una nueva razón para sonreír cuando estoy contigo.',
        funFact: 'Este año rompimos nuestro récord de abrazos diarios! 🤗'
    },
    {
        id: '2025-01',
        date: '2025',
        title: 'El Futuro',
        images: [
            '/timeline/2025-1.jpg',
            '/timeline/2025-2.jpg'
        ],
        anecdote: 'Aún no sabemos qué nos depara, pero sabemos que será juntos.',
        funFact: '¡Las mejores aventuras están por venir! ✨'
    }
];

