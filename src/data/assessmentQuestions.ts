export interface Question {
  id: string;
  section: 'psychometric' | 'technical' | 'wiscar';
  category: string;
  question: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  options: string[];
  scoringKey: number[];
}

export const assessmentQuestions: Question[] = [
  // Psychometric Section - Interest Scale
  {
    id: 'p1',
    section: 'psychometric',
    category: 'interest',
    question: 'How excited do you feel about the prospect of working with educational technology products?',
    type: 'likert',
    options: [
      'Not at all excited',
      'Slightly excited', 
      'Moderately excited',
      'Very excited',
      'Extremely excited'
    ],
    scoringKey: [1, 2, 3, 4, 5]
  },
  {
    id: 'p2',
    section: 'psychometric',
    category: 'interest',
    question: 'When you see new educational apps or platforms, how often do you find yourself analyzing their features and user experience?',
    type: 'likert',
    options: [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Always'
    ],
    scoringKey: [1, 2, 3, 4, 5]
  },
  {
    id: 'p3',
    section: 'psychometric',
    category: 'personality',
    question: 'You prefer to work on projects that:',
    type: 'multiple-choice',
    options: [
      'Have clear, defined outcomes and processes',
      'Allow for creative problem-solving and innovation',
      'Involve collaboration with diverse teams',
      'Focus on helping others learn and grow'
    ],
    scoringKey: [3, 4, 4, 5]
  },
  {
    id: 'p4',
    section: 'psychometric',
    category: 'motivation',
    question: 'What motivates you most about the idea of working in EdTech?',
    type: 'multiple-choice',
    options: [
      'Making a positive impact on education',
      'Working with cutting-edge technology',
      'Building products that scale globally',
      'Solving complex user problems'
    ],
    scoringKey: [5, 4, 4, 5]
  },
  {
    id: 'p5',
    section: 'psychometric',
    category: 'cognitive_style',
    question: 'When facing a complex problem, you typically:',
    type: 'multiple-choice',
    options: [
      'Break it down into smaller, manageable parts',
      'Look for patterns and connections',
      'Seek input from others before deciding',
      'Trust your intuition and act quickly'
    ],
    scoringKey: [5, 4, 4, 2]
  },

  // Technical Section
  {
    id: 't1',
    section: 'technical',
    category: 'aptitude',
    question: 'A learning platform has 10,000 users. If 25% use mobile apps, 45% use web browsers, and the rest use both, how many users use both platforms?',
    type: 'multiple-choice',
    options: [
      '2,500 users',
      '3,000 users', 
      '3,500 users',
      '4,500 users'
    ],
    scoringKey: [5, 1, 1, 1]
  },
  {
    id: 't2',
    section: 'technical',
    category: 'domain_knowledge',
    question: 'Which metric is MOST important for measuring learner engagement in an educational product?',
    type: 'multiple-choice',
    options: [
      'Total time spent on platform',
      'Number of logins per week',
      'Completion rate of learning modules',
      'User satisfaction scores'
    ],
    scoringKey: [3, 3, 5, 4]
  },
  {
    id: 't3',
    section: 'technical',
    category: 'product_thinking',
    question: 'Your EdTech app has high user acquisition but low retention. What should be your FIRST priority?',
    type: 'multiple-choice',
    options: [
      'Increase marketing spend to get more users',
      'Analyze user behavior to identify drop-off points',
      'Add more features to increase engagement',
      'Improve the user interface design'
    ],
    scoringKey: [1, 5, 2, 3]
  },
  {
    id: 't4',
    section: 'technical',
    category: 'agile',
    question: 'In an Agile development process, who is primarily responsible for prioritizing the product backlog?',
    type: 'multiple-choice',
    options: [
      'Scrum Master',
      'Product Owner',
      'Development Team',
      'Stakeholders'
    ],
    scoringKey: [2, 5, 2, 3]
  },
  {
    id: 't5',
    section: 'technical',
    category: 'scenario',
    question: 'You receive feedback that students find your math learning app too difficult. Teachers want more advanced features. How do you prioritize?',
    type: 'multiple-choice',
    options: [
      'Focus on student feedback - they are the primary users',
      'Prioritize teacher requests - they influence adoption',
      'Conduct user research with both groups to understand needs',
      'Create separate versions for different skill levels'
    ],
    scoringKey: [3, 2, 5, 4]
  },

  // WISCAR Section
  {
    id: 'w1',
    section: 'wiscar',
    category: 'will',
    question: 'How likely are you to persist with a challenging project even when facing significant obstacles?',
    type: 'likert',
    options: [
      'Very unlikely',
      'Unlikely',
      'Neutral',
      'Likely',
      'Very likely'
    ],
    scoringKey: [1, 2, 3, 4, 5]
  },
  {
    id: 'w2',
    section: 'wiscar',
    category: 'interest',
    question: 'How often do you read about trends in education technology or product management?',
    type: 'likert',
    options: [
      'Never',
      'Rarely',
      'Sometimes',
      'Often',
      'Very often'
    ],
    scoringKey: [1, 2, 3, 4, 5]
  },
  {
    id: 'w3',
    section: 'wiscar',
    category: 'skill',
    question: 'Rate your current experience with project management methodologies (Agile, Scrum, etc.)',
    type: 'likert',
    options: [
      'No experience',
      'Basic knowledge',
      'Some experience',
      'Experienced',
      'Expert level'
    ],
    scoringKey: [1, 2, 3, 4, 5]
  },
  {
    id: 'w4',
    section: 'wiscar',
    category: 'cognitive',
    question: 'When analyzing user data, how comfortable are you with identifying patterns and making data-driven decisions?',
    type: 'likert',
    options: [
      'Very uncomfortable',
      'Uncomfortable',
      'Neutral',
      'Comfortable',
      'Very comfortable'
    ],
    scoringKey: [1, 2, 3, 4, 5]
  },
  {
    id: 'w5',
    section: 'wiscar',
    category: 'ability_to_learn',
    question: 'How do you typically respond to constructive feedback about your work?',
    type: 'multiple-choice',
    options: [
      'I find it difficult to accept and prefer to stick to my approach',
      'I listen but rarely change my approach',
      'I consider it but only implement changes I agree with',
      'I actively seek feedback and adapt my approach accordingly'
    ],
    scoringKey: [1, 2, 3, 5]
  },
  {
    id: 'w6',
    section: 'wiscar',
    category: 'real_world',
    question: 'How comfortable would you be managing multiple stakeholders with conflicting priorities?',
    type: 'likert',
    options: [
      'Very uncomfortable',
      'Uncomfortable',
      'Neutral',
      'Comfortable',
      'Very comfortable'
    ],
    scoringKey: [1, 2, 3, 4, 5]
  }
];

export const sectionInfo = {
  psychometric: {
    name: 'Personality & Interest Assessment',
    description: 'Understanding your natural inclinations and motivations',
    totalQuestions: 5
  },
  technical: {
    name: 'Technical & Domain Knowledge',
    description: 'Evaluating your current skills and aptitude',
    totalQuestions: 5
  },
  wiscar: {
    name: 'WISCAR Readiness Framework',
    description: 'Comprehensive readiness evaluation across 6 dimensions',
    totalQuestions: 6
  }
};