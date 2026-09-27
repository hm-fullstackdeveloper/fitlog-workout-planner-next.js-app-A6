const Footer = () => {
  return (
    <footer className="border-t border-[#181a1f] bg-[#090a0c]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          {/* FitLog Icon */}
          <svg
            width="32"
            height="20"
            viewBox="0 0 40 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            {/* Left plates */}
            <rect
              x="0"
              y="7"
              width="6"
              height="14"
              rx="1.5"
              fill="#C6FF00"
            />

            <rect
              x="6"
              y="3"
              width="6"
              height="22"
              rx="1.5"
              fill="#C6FF00"
            />

            {/* Bar */}
            <rect
              x="10"
              y="11"
              width="20"
              height="6"
              rx="2"
              fill="#C6FF00"
            />

            {/* Right plates */}
            <rect
              x="28"
              y="3"
              width="6"
              height="22"
              rx="1.5"
              fill="#C6FF00"
            />

            <rect
              x="34"
              y="7"
              width="6"
              height="14"
              rx="1.5"
              fill="#C6FF00"
            />
          </svg>

          {/* FITLOG */}
          <span className="text-[22px] font-extrabold leading-none tracking-tight text-white">
            FITLOG
          </span>
        </div>

        {/* Right: Copyright */}
        <p className="text-center text-[15px] text-gray-600 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;