import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Target, ChevronRight, Clock, Award } from "lucide-react";

interface AssessmentLandingProps {
  onStartAssessment: () => void;
}

export const AssessmentLanding = ({ onStartAssessment }: AssessmentLandingProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Career Assessment</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Should I Learn<br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              EdTech Product Specialist?
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover if you have the skills, mindset, and passion to excel as an EdTech Product Specialist. 
            Get personalized insights and career guidance based on your assessment results.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>20-30 minutes</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span>Comprehensive Analysis</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Career Guidance</span>
            </div>
          </div>

          <Button 
            onClick={onStartAssessment}
            size="lg"
            variant="hero"
            className="text-lg px-8 py-6 h-auto"
          >
            Start Your Assessment
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* What You'll Discover */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What You'll Discover</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-white/90 mb-4" />
                <CardTitle className="text-white">Skill Assessment</CardTitle>
                <CardDescription className="text-white/80">
                  Evaluate your technical aptitude, product management knowledge, and EdTech domain expertise
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Users className="w-12 h-12 text-white/90 mb-4" />
                <CardTitle className="text-white">Personality Fit</CardTitle>
                <CardDescription className="text-white/80">
                  Discover if your personality traits align with successful EdTech product specialists
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-white/90 mb-4" />
                <CardTitle className="text-white">Career Guidance</CardTitle>
                <CardDescription className="text-white/80">
                  Get personalized recommendations for your learning path and career development
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Role Overview */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">About EdTech Product Specialists</CardTitle>
            <CardDescription className="text-white/80 text-center text-lg">
              Bridge the gap between education and technology
            </CardDescription>
          </CardHeader>
          <CardContent className="text-white/90">
            <p className="text-lg leading-relaxed mb-6">
              EdTech Product Specialists manage digital learning products from conception through delivery, 
              ensuring they meet learner needs, market demands, and pedagogical standards. They collaborate 
              with engineers, educators, designers, and marketers to optimize product effectiveness.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Typical Career Paths:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• EdTech Product Specialist</li>
                  <li>• Product Manager (Education Technology)</li>
                  <li>• Learning Technology Consultant</li>
                  <li>• Instructional Product Designer</li>
                  <li>• Digital Learning Analyst</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Key Skills Required:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Analytical and strategic thinking</li>
                  <li>• User-centered design mindset</li>
                  <li>• Agile project management</li>
                  <li>• Data-driven decision making</li>
                  <li>• Strong communication skills</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};