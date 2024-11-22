import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";

export const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when element becomes visible
            setTimeout(() => {
              setProgress(65);
            }, 100);
            // Disconnect observer after animation starts
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative mt-4" ref={progressRef}>
      <Progress
        value={progress}
        className="h-8 rounded-full bg-white transition-all duration-1000 ease-in-out"
        indicatorClassName="bg-[#E3FFA8] rounded-full transition-all duration-1000 ease-in-out"
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600 font-medium">
        {progress}%
      </span>
      {/* Dot and line positioned at progress edge */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex items-center transition-all duration-1000 ease-in-out"
        style={{ left: `${progress}%` }}
      >
        <div className="w-3 h-3 bg-gray-800 rounded-full relative">
          <div className="w-[2px] h-12 bg-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      {/* Remaining percentage slashes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-end">
          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className="h-8 w-[1px] bg-gray-200 transform rotate-45 mx-[2px]"
              style={{
                opacity: 0.5,
                marginLeft: `${index * 2}px`,
                display: index * 3 < 100 - progress ? "block" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
