import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PlayCircle, Clock, Award, BookOpen, Users } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "UI Design Fundamentals & Best Practice",
    progress: 65,
    totalLessons: 12,
    completedLessons: 8,
    duration: "2h 30m",
    level: "Intermediate",
    description:
      "Learn the core principles of UI design and best practices for creating intuitive user interfaces.",
    instructor: "Sarah Johnson",
    students: 1234,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Advanced UI/UX Design Patterns",
    progress: 30,
    totalLessons: 15,
    completedLessons: 4,
    duration: "3h 45m",
    level: "Advanced",
    description:
      "Master advanced UI/UX design patterns and learn how to implement them in real-world projects.",
    instructor: "Michael Chen",
    students: 892,
    rating: 4.9,
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<
    (typeof courses)[0] | null
  >(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleCourseClick = (course: (typeof courses)[0]) => {
    setSelectedCourse(course);
    setSheetOpen(true);
  };

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
              <Card
                key={course.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleCourseClick(course)}
              >
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>
                          {course.completedLessons} of {course.totalLessons}{" "}
                          lessons
                        </span>
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

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetContent className="w-full sm:max-w-[600px] overflow-y-auto">
              {selectedCourse && (
                <>
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-2xl">
                      {selectedCourse.title}
                    </SheetTitle>
                    <SheetDescription className="text-base">
                      {selectedCourse.description}
                    </SheetDescription>
                  </SheetHeader>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">
                          Course Progress
                        </span>
                        <span className="text-sm font-medium">
                          {selectedCourse.progress}%
                        </span>
                      </div>
                      <Progress
                        value={selectedCourse.progress}
                        className="h-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <BookOpen className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Lessons</span>
                        </div>
                        <p className="font-medium">
                          {selectedCourse.totalLessons} Lessons
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            Duration
                          </span>
                        </div>
                        <p className="font-medium">{selectedCourse.duration}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            Students
                          </span>
                        </div>
                        <p className="font-medium">{selectedCourse.students}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Course Content</h4>
                      <div className="space-y-2">
                        {Array.from({
                          length: selectedCourse.totalLessons,
                        }).map((_, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <PlayCircle className="h-4 w-4 text-gray-500" />
                              <span>Lesson {index + 1}</span>
                            </div>
                            {index < selectedCourse.completedLessons && (
                              <Award className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full gap-2">
                      <PlayCircle className="h-4 w-4" />
                      Continue Learning
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Courses;
