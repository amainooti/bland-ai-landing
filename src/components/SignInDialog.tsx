import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SignInDialog = ({ open, onOpenChange }: SignInDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 gap-0">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="px-6 py-6 flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-2">
            <span className="text-white font-bold text-xl font-nimbus">B</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome to Bland
          </h2>
          <p className="text-sm text-center text-muted-foreground">
            Login or Sign up easily in seconds with your
            <br />
            Google account to unlock the best of Bland AI
          </p>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-4">
          <Button
            variant="outline"
            className="w-full justify-center gap-2"
            onClick={() => {
              // Handle Google sign-in
              console.log("Google sign-in clicked");
            }}
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </Button>

          <div className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our{" "}
            <a href="#" className="underline hover:text-foreground">
              Terms of Service
            </a>{" "}
            and confirm you have read our{" "}
            <a href="#" className="underline hover:text-foreground">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="px-6 py-4 bg-muted/50 text-center text-sm">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </div>
      </DialogContent>
    </Dialog>
  );
};
