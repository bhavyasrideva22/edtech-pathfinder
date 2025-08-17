import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/assessmentQuestions";
import { useState } from "react";

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, answerIndex: number) => void;
  onNext: () => void;
  selectedAnswer?: number;
}

export const QuestionCard = ({ question, onAnswer, onNext, selectedAnswer }: QuestionCardProps) => {
  const [localAnswer, setLocalAnswer] = useState<number | undefined>(selectedAnswer);

  const handleAnswerSelect = (answerIndex: number) => {
    setLocalAnswer(answerIndex);
    onAnswer(question.id, answerIndex);
  };

  const handleNext = () => {
    if (localAnswer !== undefined) {
      onNext();
    }
  };

  const getLikertButtonVariant = (index: number) => {
    if (localAnswer === index) return "default";
    return "outline";
  };

  const getMultipleChoiceButtonVariant = (index: number) => {
    if (localAnswer === index) return "default";
    return "outline";
  };

  return (
    <Card className="max-w-3xl mx-auto bg-gradient-card border-border/50 shadow-smooth">
      <CardHeader>
        <CardTitle className="text-xl font-semibold leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.type === 'likert' && (
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={getLikertButtonVariant(index)}
                className="h-auto p-4 text-left justify-start"
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                    {localAnswer === index && (
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </Button>
            ))}
          </div>
        )}

        {question.type === 'multiple-choice' && (
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={getMultipleChoiceButtonVariant(index)}
                className="h-auto p-4 text-left justify-start"
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded border-2 border-primary flex items-center justify-center">
                    {localAnswer === index && (
                      <div className="w-3 h-3 bg-primary"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </Button>
            ))}
          </div>
        )}

        <div className="flex justify-end pt-6">
          <Button 
            onClick={handleNext}
            disabled={localAnswer === undefined}
            className="px-8"
          >
            Next Question
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};