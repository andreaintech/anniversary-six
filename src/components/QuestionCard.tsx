// src/components/QuestionCard.tsx
import type { QuizQuestion } from '../data/questions';

type Props = {
    question: QuizQuestion;
    selectedOptionId: string | null;
    onSelectOption: (optionId: string) => void;
    onNext: () => void;
    isLastQuestion: boolean;
    isAnswered: boolean;
};

export function QuestionCard({
    question,
    selectedOptionId,
    onSelectOption,
    onNext,
    isLastQuestion,
    isAnswered,
}: Props) {
    return (
        <div className="question-card">
            <h2>{question.question}</h2>

            <ul>
                {question.options.map((option) => (
                    <li key={option.id}>
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
