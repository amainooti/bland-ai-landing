import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const features = [
  {
    title: "AWS Cloud Certification",
    description:
      "Practice for your certification with our artificial intelligence practice tests and exam tutorials",
    badge: "Cloud",
    sampleQuestion: {
      question: "Which AWS service is primarily used for storing objects?",
      options: ["Amazon S3", "Amazon EC2", "Amazon RDS", "Amazon DynamoDB"],
      correctAnswer: "Amazon S3",
      explanation:
        "Amazon S3 (Simple Storage Service) is AWS's object storage service that offers industry-leading scalability, data availability, security, and performance.",
    },
  },
  {
    title: "AWS Developer Associate Certification",
    description:
      "Practice for your certification with our artificial intelligence practice tests and exam tutorials",
    badge: "Developer",
    sampleQuestion: {
      question:
        "Which service would you use to deploy a containerized application?",
      options: ["AWS Lambda", "Amazon ECS", "Amazon S3", "Amazon RDS"],
      correctAnswer: "Amazon ECS",
      explanation:
        "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications.",
    },
  },
  {
    title: "SAT",
    description:
      "Practice for your certification with our artificial intelligence practice tests and exam tutorials",
    badge: "Education",
    sampleQuestion: {
      question: "If 3x + 7 = 22, what is the value of x?",
      options: ["3", "5", "7", "15"],
      correctAnswer: "5",
      explanation:
        "To solve for x: 3x + 7 = 22, subtract 7 from both sides: 3x = 15, then divide both sides by 3: x = 5",
    },
  },
  {
    title: "GRE",
    description:
      "Practice for your certification with our artificial intelligence practice tests and exam tutorials",
    badge: "Graduate",
    sampleQuestion: {
      question: "What is the antonym of 'ephemeral'?",
      options: ["Temporary", "Fleeting", "Permanent", "Brief"],
      correctAnswer: "Permanent",
      explanation:
        "'Ephemeral' means lasting for a very short time. Therefore, its antonym 'permanent' means lasting or remaining unchanged indefinitely.",
    },
  },
];

export const Features = () => {
  const [selectedExam, setSelectedExam] = useState(features[0]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Your personal AI tutor for exam preparation
          </h2>
          <p className="text-muted-foreground">
            Prepare for your final test with advanced certification questions to
            improve your chances of success with higher marks
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 animate-fade-up">
          {/* Question Display (Left Side) */}
          <div className="md:w-2/3">
            <Card className="p-8 h-full bg-gradient-to-br from-white to-gray-50">
              <div className="space-y-6">
                <h1 className=" text-[#767676] uppercase text-lg font-semibold">
                  Question
                </h1>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">
                    {selectedExam.sampleQuestion.question}
                  </h3>

                  <div className="space-y-3">
                    {selectedExam.sampleQuestion.options.map(
                      (option, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border ${
                            option === selectedExam.sampleQuestion.correctAnswer
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200"
                          }`}
                        >
                          {option}
                        </div>
                      )
                    )}
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="font-semibold mb-2">Correct Answer:</h4>
                    <p className="text-green-600 font-medium mb-4">
                      {selectedExam.sampleQuestion.correctAnswer}
                    </p>
                    <h4 className="font-semibold mb-2">Explanation:</h4>
                    <p className="text-gray-600">
                      {selectedExam.sampleQuestion.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Exam List (Right Side) */}
          <div className="md:w-1/3 space-y-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  selectedExam.title === feature.title
                    ? "border-primary bg-primary/5"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setSelectedExam(feature)}
              >
                <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 uppercase text-xs font-semibold">
                  {feature.badge}
                </Badge>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
