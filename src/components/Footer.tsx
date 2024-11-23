export const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-4 w-full md:w-3/4">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
          <div className="font-nimbus text-xl">
            <span className="cursor-pointer">Bland</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex gap-4 md:gap-8 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Twitter/X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
