"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Clock3, Flame, X } from "lucide-react";
import { toast } from "react-toastify";

import { useFitLog } from "../context/FitLogContext";
import type { Workout } from "../types/workout";
import Image from "next/image";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
  const { planIds, savedIds, removeFromPlan, removeFromSaved } = useFitLog();

  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [loading, setLoading] = useState(true);
  const [doneIds, setDoneIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  const plannedWorkouts = workouts.filter((workout) =>
    planIds.includes(workout.id)
  );

  const savedWorkouts = workouts.filter((workout) =>
    savedIds.includes(workout.id)
  );

  const currentWorkouts =
    activeTab === "plan" ? plannedWorkouts : savedWorkouts;

  const totalMinutes = plannedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plannedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleDone = (id: number) => {
    setDoneIds((current) => {
      if (current.includes(id)) return current;
      return [...current, id];
    });

    toast.success("Workout marked as done!");
  };

  const handleRemove = (id: number) => {
    removeFromPlan(id);
    toast.success("Workout removed from today's plan!");
  };

  const handleRemoveSaved = (id: number) => {
    removeFromSaved(id);
    toast.success("Workout removed from saved!");
  };

  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            MY WORKOUTS
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {planIds.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>

                
                    {/* Tabs */}
          <div className="mb-8 flex w-fit rounded-xl border border-gray-800 bg-[#15171c] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition ${
                activeTab === "plan"
                  ? "bg-[#252a33] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition ${
                activeTab === "saved"
                  ? "bg-[#252a33] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Saved
            </button>
          </div>



        {/* Loading */}
        {loading ? (
          <div className="flex min-h-80 items-center justify-center">
            <div className="text-center">
              <span className="loading loading-spinner loading-lg" />

              <p className="mt-3 text-sm uppercase tracking-wider text-gray-400">
                Loading workouts...
              </p>
            </div>
          </div>
        ) : currentWorkouts.length === 0 ? (
          /* Empty State */
          <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-gray-950 px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
                NOTHING HERE YET
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Your {activeTab === "plan" ? "plan" : "saved workouts"} is empty
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Browse the workout library and add exercises to your collection.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex rounded-xl bg-lime-400 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          /* Workout List */
          <div className="grid grid-cols-1 gap-5">
            {currentWorkouts.map((workout) => {
              const isDone = doneIds.includes(workout.id);

              return (
                <article
                  key={workout.id}
                  className={`flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-950 p-4 transition sm:flex-row sm:items-center ${
                    isDone ? "opacity-60" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48">
                    <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </div>
                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap gap-2">
                      {workout.muscleGroups.map((muscle) => (
                        <span
                          key={muscle}
                          className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-400"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>

                    <h2
                      className={`text-xl font-bold ${
                        isDone ? "line-through" : ""
                      }`}
                    >
                      {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {workout.equipment}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={15} />
                        {workout.duration} min
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Flame size={15} />
                        {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        {workout.sets} sets × {workout.reps}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 sm:w-52 sm:justify-end">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="rounded-lg border border-gray-700 px-4 py-2 text-xs font-bold uppercase text-white transition hover:border-lime-400 hover:text-lime-400"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleDone(workout.id)}
                          disabled={isDone}
                          className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${
                            isDone
                              ? "cursor-default bg-lime-400 text-black"
                              : "bg-lime-400 text-black hover:bg-lime-300"
                          }`}
                        >
                          <Check size={15} />
                          {isDone ? "Done" : "Mark as Done"}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRemove(workout.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition hover:border-red-500 hover:text-red-500"
                          aria-label="Remove from plan"
                        >
                          <X size={17} />
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleRemoveSaved(workout.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition hover:border-red-500 hover:text-red-500"
                        aria-label="Remove from saved"
                      >
                        <X size={17} />
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;