import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bell, Moon, Globe } from "lucide-react";

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50/50">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl md:text-2xl font-semibold">Settings</h1>
          </div>

          <div className="max-w-3xl space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" defaultValue="user@example.com" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">Display Name</Label>
                  <Input type="text" id="name" defaultValue="John Doe" />
                </div>
                <Button>Save Changes</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Preferences</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span className="font-medium">Notifications</span>
                      <span className="text-sm text-gray-500">Get notified about course updates</span>
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span className="font-medium">Dark Mode</span>
                      <span className="text-sm text-gray-500">Toggle dark mode theme</span>
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span className="font-medium">Language</span>
                      <span className="text-sm text-gray-500">Choose your preferred language</span>
                    </div>
                  </div>
                  <select className="rounded-md border px-3 py-2">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;