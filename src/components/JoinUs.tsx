import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const JoinUs = () => {
  return (
    <section className="min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[120px] font-bold text-balance leading-none text-gray-200">
            Join the future of education
          </h1>

          <div className="pt-8">
            <Button
              size="lg"
              variant="default"
              className="bg-black transition-colors group hover:bg-gray-900 text-white rounded-full px-4 md:px-8 w-full md:w-auto"
            >
              Get early access{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
