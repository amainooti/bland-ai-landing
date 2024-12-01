import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";

const mockData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1900 },
  { name: "Mar", value: 1400 },
  { name: "Apr", value: 1600 },
  { name: "May", value: 1700 },
  { name: "Jun", value: 1500 },
  { name: "Jul", value: 2000 },
  { name: "Aug", value: 1800 },
  { name: "Sep", value: 1900 },
  { name: "Oct", value: 1700 },
  { name: "Nov", value: 1900 },
];

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/50">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <SidebarTrigger />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-sm text-gray-500 mb-2">Avg Quiz Score</h3>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-semibold">82%</span>
                <span className="text-red-500 text-sm">-10%</span>
              </div>
              <div className="mt-4 space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Highest Score</span>
                    <span>92.50%</span>
                  </div>
                  <Progress value={92.5} className="bg-blue-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Lowest Score</span>
                    <span>64.25%</span>
                  </div>
                  <Progress value={64.25} className="bg-orange-100" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm text-gray-500 mb-2">Total Time Spent</h3>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-semibold">12 Hours</span>
                <span className="text-red-500 text-sm">-12.00%</span>
              </div>
              <div className="mt-4">
                <div className="text-sm mb-2">This Week</div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-16 rounded ${
                        i === 3 ? "bg-blue-500" : "bg-gray-100"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm text-gray-500 mb-2">Weekly Streak</h3>
              <div className="text-2xl font-semibold mb-4">5 Days</div>
              <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center ${
                      i < 3 ? "text-blue-500" : "text-gray-300"
                    }`}
                  >
                    <div className="text-sm mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        i < 3 ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 mb-8">
            <h3 className="text-lg font-semibold mb-6">
              Monthly Course Enrollments & Completion Rates
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Course Progress</h3>
                <div className="flex gap-4">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className="text-sm text-gray-500">Action</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">AngularJS</div>
                      <div className="text-sm text-gray-500">Web Design</div>
                    </div>
                  </div>
                  <Progress value={50} className="w-[200px]" />
                  <span className="text-sm">Ongoing</span>
                  <button className="text-sm text-blue-500">Resume</button>
                </div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
