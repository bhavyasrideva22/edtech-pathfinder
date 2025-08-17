import { Progress } from "@/components/ui/progress";

interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
}

export const AssessmentProgress = ({ currentStep, totalSteps, sectionName }: AssessmentProgressProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{sectionName}</h2>
          <p className="text-sm text-muted-foreground">
            Question {currentStep} of {totalSteps}
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-primary">
            {Math.round(progressPercentage)}% Complete
          </div>
        </div>
      </div>
      
      <Progress 
        value={progressPercentage} 
        className="h-3"
      />
    </div>
  );
};