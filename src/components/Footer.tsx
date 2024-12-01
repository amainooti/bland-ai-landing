export const Footer = () => {
  return (
    <div className="w-full py-16">
      <footer className="mx-auto w-[90%] max-w-[1200px] rounded-2xl bg-black px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-nimbus text-xl text-white">
            <span className="cursor-pointer font-nimbus">Bland</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
