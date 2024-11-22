import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { HubCard } from "./hub/HubCard";

const scheduleItems = [
  {
    title: "AWS Cloud Test 3",
    time: "8:00 - 10:00 AM",
    color: "bg-blue-100",
    borderColor: "border-l-4 border-blue-500",
  },
  {
    title: "Hub Discussion",
    time: "12:30 - 1:00 PM",
    color: "bg-orange-50",
    borderColor: "border-l-4 border-orange-500",
  },
];

const placeholderImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
];

const avatarPositions = [
  { size: 48, radius: 35, angle: 0 },
  { size: 48, radius: 35, angle: 90 },
  { size: 48, radius: 35, angle: 180 },
  { size: 48, radius: 35, angle: 270 },
  { size: 32, radius: 25, angle: 45 },
  { size: 32, radius: 25, angle: 135 },
  { size: 24, radius: 20, angle: 225 },
  { size: 24, radius: 20, angle: 315 },
];

export const Community = () => {
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drawConnections = () => {
      const container = networkRef.current;
      if (!container) return;

      const avatars = container.querySelectorAll(".avatar-circle");
      const svg = container.querySelector("svg");
      if (!svg) return;

      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      avatars.forEach((avatar1, i) => {
        const rect1 = avatar1.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        avatars.forEach((avatar2, j) => {
          if (i < j) {
            const rect2 = avatar2.getBoundingClientRect();
            const line = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "line"
            );

            const x1 = rect1.left + rect1.width / 2 - containerRect.left;
            const y1 = rect1.top + rect1.height / 2 - containerRect.top;
            const x2 = rect2.left + rect2.width / 2 - containerRect.left;
            const y2 = rect2.top + rect2.height / 2 - containerRect.top;

            line.setAttribute("x1", x1.toString());
            line.setAttribute("y1", y1.toString());
            line.setAttribute("x2", x2.toString());
            line.setAttribute("y2", y2.toString());
            line.setAttribute("stroke", "#e5e7eb");
            line.setAttribute("stroke-width", "1");
            line.setAttribute("stroke-dasharray", "4");

            svg.appendChild(line);
          }
        });
      });
    };

    drawConnections();
    window.addEventListener("resize", drawConnections);

    return () => {
      window.removeEventListener("resize", drawConnections);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Stay on course</h2>
          <p className="text-gray-600">
            Belong to a community of like-minded individuals on the same path
            and keep track of your study progress in all areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Community Support Card */}
          <Card className="p-8 bg-[#f5f5f5]">
            <h3 className="text-xl font-semibold mb-4">
              Community Support & Discussion Forums
            </h3>
            <p className="text-gray-600 mb-6">
              Join a community of fellow test-takers, share tips, and ask
              questions in moderated forums. Learn from others' experiences and
              stay motivated through peer interaction.
            </p>
            <div ref={networkRef} className="relative h-[300px]">
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 1 }}
              ></svg>
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 2 }}
              >
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-black font-bold">B</span>
                </div>
              </div>
              {avatarPositions.map((position, i) => (
                <div
                  key={i}
                  className="avatar-circle absolute rounded-full overflow-hidden animate-float"
                  style={{
                    width: `${position.size}px`,
                    height: `${position.size}px`,
                    left: `${
                      50 +
                      position.radius *
                        Math.cos((position.angle * Math.PI) / 180)
                    }%`,
                    top: `${
                      50 +
                      position.radius *
                        Math.sin((position.angle * Math.PI) / 180)
                    }%`,
                    animationDelay: `${i * 0.2}s`,
                    zIndex: 2,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <img
                    src={`${placeholderImages[i]}?w=${position.size * 2}&h=${
                      position.size * 2
                    }&fit=crop&auto=format`}
                    alt={`Community member ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* AI-Driven Goal Setting Card */}
          <Card className="p-8 bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">
              AI-Driven Goal Setting
            </h3>
            <p className="text-gray-600 mb-6">
              Set exam dates, desired scores, and daily study goals. The
              platform provides reminders and progress updates to help you stay
              on track. Keeps you organized and focused on achieving your goals.
            </p>
            <div className="space-y-4">
              {scheduleItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} ${item.borderColor} p-4 rounded-lg`}
                >
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
              ))}
              <HubCard />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
