import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PlayCircle, Clock, Award } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "UI Design Fundamentals & Best Practice",
    progress: 65,
    totalLessons: 12,
    completedLessons: 8,
    duration: "2h 30m",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Advanced UI/UX Design Patterns",
    progress: 30,
    totalLessons: 15,
    completedLessons: 4,
    duration: "3h 45m",
    level: "Advanced"
  }
];

const Courses = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/50">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl md:text-2xl font-semibold">My Courses</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      <PlayCircle className="h-4 w-4" />
                      Continue Learning
                    </Button>
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

export default Courses;