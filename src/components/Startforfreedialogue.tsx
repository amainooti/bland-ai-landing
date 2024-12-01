import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StartForFreeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StartForFreeDialog = ({
  open,
  onOpenChange,
}: StartForFreeDialogProps) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // This is where we'll add the Google OAuth logic later
    console.log("Google sign-in clicked");
    onOpenChange(false);
    navigate("/dashboard");
  };

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

        <div className="px-6 py-12 flex flex-col items-center space-y-6">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Start for Free
            </h2>
            <p className="text-sm text-muted-foreground">
              Create your account in seconds and start
              <br />
              learning with Bland AI today
            </p>
          </div>
        </div>

        <div className="px-6 pb-12">
          <Button
            variant="outline"
            className="w-full justify-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </Button>
        </div>

        <div className="px-6 py-4 bg-muted/50 text-center text-sm">
          By continuing, you agree to our Terms of Service
          <br />
          and Privacy Policy
        </div>
      </DialogContent>
    </Dialog>
  );
};
