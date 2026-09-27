"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useFitLog } from "../../context/FitLogContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  // Get plan and saved data from Context

  const { planIds, savedIds } = useFitLog();

const planCount = planIds.length;
const savedCount = savedIds.length;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">

            <Image
              src="/logo.png"
              alt="FitLog"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />

            <span className="text-xl font-bold tracking-tight text-white">
              FITLOG
            </span>

          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className={`text-sm font-semibold transition ${
              pathname === "/"
                ? "brand-text-colure"
                : "text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold transition ${
              pathname === "/my-plan"
                ? "brand-text-colure"
                : "text-white"
            }`}
          >
            My Plan
          </Link>

        </div>

        {/* Desktop Plan / Saved */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            <span>Plan</span>

            <span className="brand-hover-text flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-gray-900">
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-gray-800 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            <span>Saved</span>

            <span className="brand-hover-text flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-100 px-1 text-xs font-bold text-gray-700">
              {savedCount}
            </span>
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-800 bg-black md:hidden">

          <div className="mx-auto flex max-w-7xl flex-col px-5 py-5">

            {/* Mobile Links */}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`border-b border-gray-800 py-4 text-sm font-semibold ${
                pathname === "/"
                  ? "brand-text-colure"
                  : "text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setIsMenuOpen(false)}
              className={`border-b border-gray-800 py-4 text-sm font-semibold ${
                pathname === "/my-plan"
                  ? "brand-text-colure"
                  : "text-white"
              }`}
            >
              My Plan
            </Link>

            {/* Mobile Counters */}
            <div className="flex gap-3 pt-5">

              {/* Mobile Plan */}
              <Link
                href="/my-plan"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-sm font-semibold text-white"
              >
                <span>Plan</span>

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-gray-900">
                  {planCount}
                </span>
              </Link>

              {/* Mobile Saved */}
              <Link
                href="/my-plan"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-700 px-4 py-3 text-sm font-semibold text-white"
              >
                <span>Saved</span>

                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-100 px-1 text-xs font-bold text-gray-700">
                  {savedCount}
                </span>
              </Link>

            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;