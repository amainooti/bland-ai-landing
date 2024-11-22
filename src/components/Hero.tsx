import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-3">
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" />
                <AvatarFallback>TB</AvatarFallback>
              </Avatar>
            </div>
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
              Join over 120+ users across the globe
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-gray-900">
            Prepare for tests with <span>Artificial Intelligence</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart study strategies to ace your AWS, SAT, GRE, and GMAT exams
            with artificial intelligence tools.
          </p>

          <Button
            size="lg"
            className="bg-gray-900 rounded-full px-4 hover:bg-gray-800 transition-colors group"
          >
            Get early access
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="pt-12">
            <p className="text-sm text-gray-600 mb-4">
              Trusted by over 16,000 companies and millions of learners around
              the world
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
