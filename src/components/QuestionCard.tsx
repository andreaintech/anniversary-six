// src/components/QuestionCard.tsx
import type { QuizQuestion } from '../data/questions';

type Props = {
    readonly question: QuizQuestion;
    readonly selectedOptionId: string | null;
    readonly onSelectOption: (optionId: string) => void;
    readonly onNext: () => void;
    readonly isLastQuestion: boolean;
    readonly isAnswered: boolean;
    readonly currentQuestionNumber: number;
    readonly totalQuestions: number;
};

export function QuestionCard({
    question,
    selectedOptionId,
    onSelectOption,
    onNext,
    isLastQuestion,
    isAnswered,
    currentQuestionNumber,
    totalQuestions,
}: Props) {
    const progress = (currentQuestionNumber / totalQuestions) * 100;

    return (
        <div className="question-card">
            <div className="question-progress">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="progress-text" style={{ color: '#FFFFFF' }}>
                    Pregunta {currentQuestionNumber} de {totalQuestions}
                </span>
            </div>
            <h2>{question.question}</h2>

            <ul>
                {question.options.map((option, index) => (
                    <li key={option.id} style={{ marginBottom: index < question.options.length - 1 ? '1.5rem' : '0' }}>
                        <button
                            type="button"
                            onClick={() => onSelectOption(option.id)}
                            className={option.id === selectedOptionId ? 'selected' : ''}
                        >
                            {option.text}
                        </button>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                onClick={onNext}
                disabled={!isAnswered}
            >
                {isLastQuestion ? 'Ver resultado' : 'Siguiente'}
            </button>
        </div>
    );
}
