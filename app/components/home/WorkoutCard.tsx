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
  const { toggleSave, isSaved } = useFitLog();

  const saved = isSaved(workout.id);

  const handleSave = () => {
    toggleSave(workout.id);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#292c32] bg-[#111214] transition-all duration-300 hover:-translate-y-1 hover:border-[#3a3d43] hover:shadow-xl">

      {/* ================= IMAGE ================= */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1b1f]">

        <Link
          href={`/workout/${workout.id}`}
          className="block h-full"
        >
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>

        {/* Save Button */}
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            handleSave();
          }}
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition ${
            saved
              ? "text-[#ccff00]"
              : "text-white/80 hover:text-[#ccff00]"
          }`}
          aria-label={
            saved
              ? "Remove from saved"
              : "Save workout"
          }
        >
          <Heart
            size={18}
            strokeWidth={2}
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-7 py-7">

        {/* Muscle Groups */}
        <div className="mb-5 flex flex-wrap gap-2">

          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}

        </div>

        {/* Workout Name */}
        <Link href={`/workout/${workout.id}`}>
          <h3 className="text-[22px] font-extrabold uppercase leading-tight tracking-wide text-white transition-colors duration-200 hover:text-[#ccff00]">
            {workout.name}
          </h3>
        </Link>

        {/* Equipment */}
        <p className="mt-2 text-[15px] text-[#9ca0aa]">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-[#292c32]" />

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-[#9ca0aa]">

          {/* Duration */}
          <span className="flex items-center gap-2">
            <Clock3
              size={18}
              strokeWidth={1.8}
            />

            <span>
              {workout.duration} min
            </span>
          </span>

          {/* Calories */}
          <span className="flex items-center gap-2">
            <Flame
              size={18}
              strokeWidth={1.8}
              fill="currentColor"
            />

            <span>
              {workout.caloriesBurned} kcal
            </span>
          </span>

          {/* Rating */}
          <span className="flex items-center gap-2">
            <Star
              size={18}
              strokeWidth={1.8}
            />

            <span>
              {workout.rating}
            </span>
          </span>

        </div>
      </div>
    </article>
  );
};

export default WorkoutCard;