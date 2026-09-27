"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Heart,
  Star,
} from "lucide-react";

import { useFitLog } from "../../context/FitLogContext";

import type { Workout } from "../../types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const {
    toggleSave,
    isSaved,
  } = useFitLog();

  const saved = isSaved(workout.id);

  const handleSave = () => {
    toggleSave(workout.id);
  };

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-800 bg-[#111214] transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl">

      {/* Image */}
      <Link
        href={`/workout/${workout.id}`}
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">

          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Difficulty */}
          <span className="absolute left-3 top-3 rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
            {workout.difficulty}
          </span>

          {/* Save */}
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();

              handleSave();
            }}
            className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 transition ${
              saved
                ? "text-[#ccff00]"
                : "text-white hover:text-[#ccff00]"
            }`}
            aria-label={
              saved
                ? "Remove from saved"
                : "Save workout"
            }
          >
            <Heart
              size={17}
              fill={saved ? "currentColor" : "none"}
            />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">

        {/* Muscle groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#25272b] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-300"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <Link href={`/workout/${workout.id}`}>
          <h3 className="text-base font-bold uppercase tracking-wide text-white transition hover:text-[#ccff00]">
            {workout.name}
          </h3>
        </Link>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-800 pt-4 text-xs text-gray-400">

          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star
              size={14}
              fill="currentColor"
            />
            {workout.rating}
          </span>

        </div>
      </div>
    </article>
  );
};

export default WorkoutCard;