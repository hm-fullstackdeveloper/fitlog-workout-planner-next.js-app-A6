"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import type { Workout } from "../../types/workout";

interface WorkoutGridProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const copiedWorkouts = [...workouts];

    if (sortBy === "duration") {
      return copiedWorkouts.sort(
        (a, b) => a.duration - b.duration
      );
    }

    if (sortBy === "calories") {
      return copiedWorkouts.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      return copiedWorkouts.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return copiedWorkouts;
  }, [workouts, sortBy]);

  return (
    <div>
      {/* Library Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-3xl sm font-black uppercase text-white">
            THE LIBRARY
          </p>

          <h2 className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-500 sm:text-base lg:mx-0">
            Twelve lifts covering every major muscle group.
          </h2>
        </div>

      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutGrid;