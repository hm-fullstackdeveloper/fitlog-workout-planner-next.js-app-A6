import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-black px-5 py-20 text-white">
      <div className="w-full max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/10">
          <Dumbbell className="text-lime-400" size={34} />
        </div>

        {/* 404 */}
        <p className="mt-8 text-7xl font-black tracking-tight text-lime-400 sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-3xl font-black uppercase sm:text-4xl">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          The workout or page you are looking for does not exist or may have
          been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
        >
          <ArrowLeft size={18} />
          Back to workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;