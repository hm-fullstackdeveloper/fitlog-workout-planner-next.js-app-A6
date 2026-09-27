
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock3,
  Flame,
  Star,
} from "lucide-react";

import { getWorkout } from "../../api/workouts";
import WorkoutActions from "../../components/workout/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">

      {/* ================= BACK ================= */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft size={17} />
        Back to workouts
      </Link>

      {/* ================= DETAILS ================= */}
      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">

        {/* ================= IMAGE ================= */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-[#151619]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col">

          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-[#92959d]">
            {workout.description}
          </p>

          {/* ================= SPECS ================= */}
          <div className="mt-6 overflow-hidden rounded-xl border border-[#282b31] bg-[#151619]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#282b31] px-4 py-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-[#858992]">
                Equipment
              </p>

              <p className="text-[11px] text-gray-300">
                {workout.equipment}
              </p>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#282b31] px-4 py-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-[#858992]">
                Difficulty
              </p>

              <p className="text-[11px] text-gray-300">
                {workout.difficulty}
              </p>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#282b31] px-4 py-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-[#858992]">
                Sets
              </p>

              <p className="text-[11px] text-gray-300">
                {workout.sets}
              </p>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#282b31] px-4 py-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-[#858992]">
                Reps
              </p>

              <p className="text-[11px] text-gray-300">
                {workout.reps}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#282b31] px-4 py-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-[#858992]">
                Duration
              </p>

              <p className="text-[11px] text-gray-300">
                {workout.duration} min
              </p>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#282b31] px-4 py-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-[#858992]">
                Calories
              </p>

              <p className="text-[11px] text-gray-300">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-[#858992]">
                Rating
              </p>

              <p className="flex items-center gap-1 text-[11px] text-gray-300">
                {workout.rating}
              </p>
            </div>

          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-5">

            <h2 className="text-[12px] font-extrabold uppercase tracking-wide text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2.5">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-3 text-[10px] leading-5 text-[#9b9ea6]"
                >
                  <span className="shrink-0 text-[#747780]">
                    {index + 1}.
                  </span>

                  <p>
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>

          </div>

          {/* ================= ACTIONS ================= */}
          <div className="mt-5">
            <WorkoutActions workoutId={workout.id} />
          </div>

        </div>
      </section>
    </main>
  );
}