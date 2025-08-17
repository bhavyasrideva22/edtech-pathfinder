import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Brain, 
  Target, 
  BookOpen, 
  Users, 
  Lightbulb,
  ChevronRight,
  RefreshCw,
  Download,
  Award
} from "lucide-react";

interface AssessmentResultsProps {
  answers: Record<string, number>;
  onRestart: () => void;
}

interface ScoreBreakdown {
  psychometric: {
    interest: number;
    personality: number;
    motivation: number;
    cognitive: number;
    overall: number;
  };
  technical: {
    aptitude: number;
    domain: number;
    product: number;
    overall: number;
  };
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
    overall: number;
  };
  confidence: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
}

export const AssessmentResults = ({ answers, onRestart }: AssessmentResultsProps) => {
  // Calculate scores based on answers
  const calculateScores = (): ScoreBreakdown => {
    // This is a simplified scoring algorithm
    const psychometricScores = [
      answers['p1'] || 0,
      answers['p2'] || 0,
      answers['p3'] || 0,
      answers['p4'] || 0,
      answers['p5'] || 0
    ];
    
    const technicalScores = [
      answers['t1'] || 0,
      answers['t2'] || 0,
      answers['t3'] || 0,
      answers['t4'] || 0,
      answers['t5'] || 0
    ];

    const wiscarScores = [
      answers['w1'] || 0,
      answers['w2'] || 0,
      answers['w3'] || 0,
      answers['w4'] || 0,
      answers['w5'] || 0,
      answers['w6'] || 0
    ];

    const psychometricAvg = (psychometricScores.reduce((a, b) => a + b, 0) / psychometricScores.length) * 20;
    const technicalAvg = (technicalScores.reduce((a, b) => a + b, 0) / technicalScores.length) * 20;
    const wiscarAvg = (wiscarScores.reduce((a, b) => a + b, 0) / wiscarScores.length) * 20;
    
    const overallScore = (psychometricAvg + technicalAvg + wiscarAvg) / 3;
    
    let recommendation: 'Yes' | 'Maybe' | 'No' = 'No';
    if (overallScore >= 75) recommendation = 'Yes';
    else if (overallScore >= 55) recommendation = 'Maybe';

    return {
      psychometric: {
        interest: psychometricScores[0] * 20,
        personality: psychometricScores[1] * 20,
        motivation: psychometricScores[2] * 20,
        cognitive: psychometricScores[3] * 20,
        overall: psychometricAvg
      },
      technical: {
        aptitude: technicalScores[0] * 20,
        domain: technicalScores[1] * 20,
        product: technicalScores[2] * 20,
        overall: technicalAvg
      },
      wiscar: {
        will: wiscarScores[0] * 20,
        interest: wiscarScores[1] * 20,
        skill: wiscarScores[2] * 20,
        cognitive: wiscarScores[3] * 20,
        ability: wiscarScores[4] * 20,
        realWorld: wiscarScores[5] * 20,
        overall: wiscarAvg
      },
      confidence: overallScore,
      recommendation
    };
  };

  const scores = calculateScores();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'result-excellent';
    if (score >= 60) return 'result-good';
    return 'result-needs';
  };

  const getRecommendationBadge = () => {
    switch (scores.recommendation) {
      case 'Yes':
        return <Badge className="bg-success text-success-foreground">Recommended</Badge>;
      case 'Maybe':
        return <Badge className="bg-warning text-warning-foreground">Consider with Development</Badge>;
      case 'No':
        return <Badge className="bg-destructive text-destructive-foreground">Not Recommended</Badge>;
    }
  };

  const getPersonalizedInsights = () => {
    const insights = [];
    
    if (scores.psychometric.overall >= 75) {
      insights.push("Strong natural alignment with EdTech product roles");
    }
    if (scores.technical.overall >= 75) {
      insights.push("Excellent technical foundation for product management");
    } else if (scores.technical.overall < 60) {
      insights.push("Consider developing technical product management skills");
    }
    
    if (scores.wiscar.skill < 60) {
      insights.push("Focus on building core product management competencies");
    }
    
    return insights;
  };

  const getNextSteps = () => {
    if (scores.recommendation === 'Yes') {
      return [
        "Enroll in advanced EdTech product management courses",
        "Join EdTech product communities and networks",
        "Start building a portfolio of product case studies",
        "Consider mentorship from experienced EdTech product managers"
      ];
    } else if (scores.recommendation === 'Maybe') {
      return [
        "Strengthen foundational product management skills",
        "Gain hands-on experience with agile methodologies",
        "Develop data analysis and user research capabilities",
        "Build understanding of educational technology landscape"
      ];
    } else {
      return [
        "Explore alternative roles in education or technology",
        "Consider instructional design or educational content roles",
        "Develop core business and analytical skills",
        "Reassess interests and career alignment"
      ];
    }
  };

  return (
    <div className="min-h-screen bg-assessment-bg p-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Assessment Complete</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Your EdTech Product Specialist Assessment Results</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            {getRecommendationBadge()}
            <div className="text-2xl font-bold text-primary">
              {Math.round(scores.confidence)}% Confidence Score
            </div>
          </div>
        </div>

        {/* Overall Summary */}
        <Card className="mb-8 bg-gradient-card border-border/50 shadow-smooth">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Overall Assessment Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(scores.psychometric.overall)}%
                </div>
                <div className="text-sm text-muted-foreground">Personality Fit</div>
                <Progress value={scores.psychometric.overall} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(scores.technical.overall)}%
                </div>
                <div className="text-sm text-muted-foreground">Technical Readiness</div>
                <Progress value={scores.technical.overall} className="mt-2" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.round(scores.wiscar.overall)}%
                </div>
                <div className="text-sm text-muted-foreground">WISCAR Framework</div>
                <Progress value={scores.wiscar.overall} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* WISCAR Framework Details */}
          <Card className="bg-gradient-card border-border/50 shadow-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                WISCAR Framework Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'Will (Persistence)', score: scores.wiscar.will },
                { label: 'Interest (Curiosity)', score: scores.wiscar.interest },
                { label: 'Skill (Current Abilities)', score: scores.wiscar.skill },
                { label: 'Cognitive (Learning Capacity)', score: scores.wiscar.cognitive },
                { label: 'Ability to Learn', score: scores.wiscar.ability },
                { label: 'Real-World Alignment', score: scores.wiscar.realWorld }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={item.score} className="w-24" />
                    <span className={`text-sm font-semibold text-${getScoreColor(item.score)}`}>
                      {Math.round(item.score)}%
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Personalized Insights */}
          <Card className="bg-gradient-card border-border/50 shadow-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Personalized Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getPersonalizedInsights().map((insight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{insight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Guidance */}
        <Card className="mb-8 bg-gradient-card border-border/50 shadow-smooth">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Learning Path
                </h4>
                <ul className="space-y-2">
                  {getNextSteps().map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Related Career Paths
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• EdTech Product Specialist</li>
                  <li>• Product Manager (Education Technology)</li>
                  <li>• Learning Technology Consultant</li>
                  <li>• Instructional Product Designer</li>
                  <li>• Digital Learning Analyst</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button onClick={onRestart} variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Retake Assessment
          </Button>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
};