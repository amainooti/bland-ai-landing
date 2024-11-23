import { ProgressIndicator } from "./ProgressIndicator";

export const HubCard = () => {
  return (
    <div className="mt-8">
      <div className="bg-[#F2FCE2] p-4 rounded-lg relative">
        <div className="glass p-6 rounded-xl relative">
          <span className="text-base font-semibold text-gray-800 mb-8 block">
            Hub
          </span>
          <ProgressIndicator />
        </div>
      </div> 
    </div>
  );
};
