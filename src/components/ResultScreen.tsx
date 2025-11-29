// src/components/ResultScreen.tsx

type Props = {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
};

function getMessage(score: number, total: number): string {
    const ratio = score / total;

    if (ratio === 1) {
        return '¡Lo sabes TODO sobre nosotros! 💖';
    }

    if (ratio >= 0.6) {
        return '¡Nos conoces muy bien, casi perfectx! ✨';
    }

    return 'Tenemos muchas anécdotas para seguir recordando juntos 🥰';
}

export function ResultScreen({ score, totalQuestions, onRestart }: Props) {
    return (
        <div className="result-screen">
            <h2>Resultado</h2>
            <p>
                Respondiste correctamente {score} de {totalQuestions} preguntas.
            </p>
            <p>{getMessage(score, totalQuestions)}</p>

            <button type="button" onClick={onRestart}>
                Volver a jugar
            </button>
        </div>
    );
}
