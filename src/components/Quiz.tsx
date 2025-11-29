import { useState } from 'react';
import { questions } from '../data/questions';
import { QuestionCard } from './QuestionCard';
import { ResultScreen } from './ResultScreen';

export function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const isAnswered = selectedOptionId !== null;

    const handleSelectOption = (optionId: string) => {
        setSelectedOptionId(optionId);
        setAnswers({
            ...answers,
            [currentQuestion.id]: optionId,
        });
    };

    const handleNext = () => {
        if (selectedOptionId === currentQuestion.correctOptionId) {
            setScore(score + 1);
        }

        if (isLastQuestion) {
            setShowResult(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOptionId(null);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedOptionId(null);
        setAnswers({});
        setScore(0);
        setShowResult(false);
    };

    if (showResult) {
        return <ResultScreen score={score} totalQuestions={questions.length} onRestart={handleRestart} />;
    }

    return (
        <QuestionCard
            question={currentQuestion}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleSelectOption}
            onNext={handleNext}
            isLastQuestion={isLastQuestion}
            isAnswered={isAnswered}
        />
    );
}
