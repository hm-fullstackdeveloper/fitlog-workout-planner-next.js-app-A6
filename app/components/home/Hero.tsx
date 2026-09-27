import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 py-12 sm:px-6 md:py-16 lg:flex-row lg:justify-between lg:px-8 lg:py-20">
        {/* Left Content */}
        <div className="w-full max-w-2xl text-center lg:text-left">
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-bold tracking-[0.2em] brand-text-colure">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            TRAIN WITH INTENT.LOG
            <br />
             EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-500 sm:text-base lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="#library"
              className="inline-flex items-center gap-2 rounded-lg brand-bg-colure px-6 py-3.5 text-sm font-bold uppercase text-black transition hover:opacity-90"
            >
              Browse Workouts
              <ArrowDown size={17} />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-md lg:max-w-lg">
          <Image
            src="/banner.png"
            alt="Workout training"
            width={600}
            height={500}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;