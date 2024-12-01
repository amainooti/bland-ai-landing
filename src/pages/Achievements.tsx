import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { Award, Trophy, Target, Flame } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Fast Learner",
    description: "Complete 5 lessons in one day",
    icon: Flame,
    earned: true,
    progress: 100
  },
  {
    id: 2,
    title: "Quiz Master",
    description: "Score 100% in 3 consecutive quizzes",
    icon: Trophy,
    earned: false,
    progress: 66
  },
  {
    id: 3,
    title: "Course Champion",
    description: "Complete your first course",
    icon: Award,
    earned: true,
    progress: 100
  },
  {
    id: 4,
    title: "Goal Setter",
    description: "Set and achieve 5 learning goals",
    icon: Target,
    earned: false,
    progress: 40
  }
];

const Achievements = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/50">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl md:text-2xl font-semibold">Achievements</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`p-6 ${achievement.earned ? 'bg-blue-50' : ''}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full ${
                    achievement.earned ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  } mb-4`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{achievement.description}</p>
                  <div className="text-sm">
                    {achievement.earned ? (
                      <span className="text-blue-500">Earned!</span>
                    ) : (
                      <span className="text-gray-500">
                        Progress: {achievement.progress}%
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Achievements;