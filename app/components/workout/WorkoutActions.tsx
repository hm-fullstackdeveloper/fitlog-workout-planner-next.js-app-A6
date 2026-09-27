"use client";

import { Check, Heart, Plus } from "lucide-react";
import { toast } from "react-toastify";

import { useFitLog } from "../../context/FitLogContext";

interface WorkoutActionsProps {
  workoutId: number;
}

const WorkoutActions = ({
  workoutId,
}: WorkoutActionsProps) => {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const addedToPlan = isInPlan(workoutId);
  const saved = isSaved(workoutId);

  const handleAddToPlan = () => {
    if (addedToPlan) {
      toast.info("Workout is already in today's plan.");
      return;
    }

    const added = addToPlan(workoutId);

    if (added) {
      toast.success("Added to today's plan!");
    } else {
      toast.warning(
        "Today's plan is full. Maximum 5 workouts."
      );
    }
  };

  const handleSave = () => {
    if (saved) {
      toast.info("Workout is already saved.");
      return;
    }

    const savedSuccessfully = saveWorkout(workoutId);

    if (savedSuccessfully) {
      toast.success("Saved for later!");
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      {/* Today's Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold uppercase transition ${
          addedToPlan
            ? "cursor-default bg-lime-400 text-black"
            : "bg-lime-400 text-black hover:bg-lime-300"
        }`}
      >
        <Plus size={18} />

        {addedToPlan
          ? "Added to today's plan"
          : "Add to today's plan"}
      </button>

      {/* Saved */}
      <button
        type="button"
        onClick={handleSave}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold uppercase transition ${
          saved
            ? "border-lime-400 text-lime-400"
            : "border-gray-700 text-white hover:border-lime-400 hover:text-lime-400"
        }`}
      >
        {saved ? (
          <Check size={18} />
        ) : (
          <Heart size={18} />
        )}

        {saved ? "Saved" : "Save for later"}
      </button>

    </div>
  );
};

export default WorkoutActions;