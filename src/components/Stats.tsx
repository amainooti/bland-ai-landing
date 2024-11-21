import React from "react";
import statsImage from "@/assets/statsImage.png";

export const Stats: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex mx-auto justify-center flex-col md:flex-row gap-10 p-6 max-w-6xl">
          {/* Left Section - Stats Image */}
          <div className="flex-1">
            <img
              src={statsImage}
              alt="Stats visualization showing scores and progress"
              className="w-full h-auto object-contain md:max-h-[600px]"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Leverage AI</h2>
            <p className="text-gray-500 text-xl mb-6">
              Get tailored exam practice
            </p>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FeatureItem
                title="Real-Time Feedback"
                description="Get instant explanations for correct answers, detailed feedback on mistakes, and tips to improve."
              />
              <FeatureItem
                title="Skill Improvement"
                description="AI suggests resources, study materials, and topics to focus on. Targeted learning boosts efficiency and ensures continuous improvement."
              />
              <FeatureItem
                title="Question Bank with Explanations"
                description="Access a large repository of exam-specific questions, each with in-depth explanations and references to study materials."
              />
              <FeatureItem
                title="Adaptive Learning Paths"
                description="As you improve, the platform adjusts your study plan dynamically, introducing advanced topics and challenging questions to keep you progressing."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <div className="relative flex flex-col">
    <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
    {/* Dotted line */}
    <div className="absolute -left-6 top-0 h-full border-l-2 border-dotted border-gray-300 hidden md:block"></div>
  </div>
);
