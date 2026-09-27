import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-gray-900 bg-[#090a0c]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog"
            width={20}
            height={20}
            className="h-4 w-4 object-contain"
          />

          <span className="text-[10px] font-bold uppercase tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-[9px] text-gray-600 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;