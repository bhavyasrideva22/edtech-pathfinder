import { useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { AssessmentProgress } from "./AssessmentProgress";
import { assessmentQuestions, sectionInfo } from "@/data/assessmentQuestions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface AssessmentFlowProps {
  onComplete: (answers: Record<string, number>) => void;
  onBack: () => void;
}

export const AssessmentFlow = ({ onComplete, onBack }: AssessmentFlowProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentSectionIndex, setSectionIndex] = useState(0);

  const sections = ['psychometric', 'technical', 'wiscar'] as const;
  const currentSection = sections[currentSectionIndex];
  const sectionQuestions = assessmentQuestions.filter(q => q.section === currentSection);
  const currentQuestion = sectionQuestions[currentQuestionIndex];

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentSectionIndex < sections.length - 1) {
      // Move to next section
      setSectionIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Assessment complete
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentSectionIndex > 0) {
      // Move to previous section
      setSectionIndex(prev => prev - 1);
      const prevSectionQuestions = assessmentQuestions.filter(q => q.section === sections[currentSectionIndex - 1]);
      setCurrentQuestionIndex(prevSectionQuestions.length - 1);
    }
  };

  const canGoBack = currentSectionIndex > 0 || currentQuestionIndex > 0;
  const totalQuestionsAnswered = Object.keys(answers).length;
  const totalQuestions = assessmentQuestions.length;

  // Section transition screen
  if (currentQuestionIndex === 0 && currentSectionIndex > 0 && !answers[currentQuestion?.id]) {
    return (
      <div className="min-h-screen bg-assessment-bg p-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card border-border/50 shadow-smooth text-center">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {sectionInfo[currentSection].name}
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  {sectionInfo[currentSection].description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {sectionInfo[currentSection].totalQuestions} Questions
                  </div>
                  <p className="text-muted-foreground">
                    Ready to continue with the next section?
                  </p>
                </div>
                <Button onClick={() => setAnswers(prev => ({ ...prev, [`section_${currentSection}_started`]: 1 }))}>
                  Start Section
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-assessment-bg p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={canGoBack ? handlePrevious : onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {canGoBack ? 'Previous' : 'Back to Start'}
          </Button>
          
          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              Progress: {totalQuestionsAnswered} / {totalQuestions} questions
            </div>
          </div>
        </div>

        <AssessmentProgress
          currentStep={currentQuestionIndex + 1}
          totalSteps={sectionQuestions.length}
          sectionName={sectionInfo[currentSection].name}
        />

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          onNext={handleNext}
          selectedAnswer={answers[currentQuestion.id]}
        />
      </div>
    </div>
  );
};