import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const progressData = [
  { date: "2024-01", hours: 12 },
  { date: "2024-02", hours: 18 },
  { date: "2024-03", hours: 15 },
  { date: "2024-04", hours: 22 },
];

const ProgressPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/50">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl md:text-2xl font-semibold">
              Learning Progress
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completed Courses</span>
                    <span>4/12</span>
                  </div>
                  <Progress value={33} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completed Lessons</span>
                    <span>24/48</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Quiz Performance</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Study Time</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      stroke="#4F46E5"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ProgressPage;
