import { useState } from "react";
import { AssessmentLanding } from "@/components/AssessmentLanding";
import { AssessmentFlow } from "@/components/AssessmentFlow";
import { AssessmentResults } from "@/components/AssessmentResults";

type AssessmentState = 'landing' | 'assessment' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AssessmentState>('landing');
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, number>>({});

  const handleStartAssessment = () => {
    setCurrentState('assessment');
  };

  const handleAssessmentComplete = (answers: Record<string, number>) => {
    setAssessmentAnswers(answers);
    setCurrentState('results');
  };

  const handleRestart = () => {
    setCurrentState('landing');
    setAssessmentAnswers({});
  };

  const handleBackToLanding = () => {
    setCurrentState('landing');
  };

  switch (currentState) {
    case 'landing':
      return <AssessmentLanding onStartAssessment={handleStartAssessment} />;
    case 'assessment':
      return (
        <AssessmentFlow 
          onComplete={handleAssessmentComplete}
          onBack={handleBackToLanding}
        />
      );
    case 'results':
      return (
        <AssessmentResults 
          answers={assessmentAnswers}
          onRestart={handleRestart}
        />
      );
    default:
      return <AssessmentLanding onStartAssessment={handleStartAssessment} />;
  }
};

export default Index;
