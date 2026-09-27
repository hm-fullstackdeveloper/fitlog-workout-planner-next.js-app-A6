// // "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import {
//   ArrowLeft,
//   Clock3,
//   Flame,
//   Star,
// } from "lucide-react";

// import { getWorkout } from "../../api/workouts";
// import WorkoutActions from "../../components/workout/WorkoutActions";


// interface WorkoutDetailsPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function WorkoutDetailsPage({
//   params,
// }: WorkoutDetailsPageProps) {


// //   const { id } = await params;

// //   const workout = await getWorkout(id);


// const { id } = await params;

// let workout;

// try {
//   workout = await getWorkout(id);
// } catch {
//   notFound();
// }


  
//   return (
//     <main className="mx-auto max-w-7xl px-5 py-10">
      
//       {/* Back */}
//       <Link
//         href="/"
//         className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
//       >
//         <ArrowLeft size={18} />
//         Back to workouts
//       </Link>

//       {/* Details */}
//       <section className="grid gap-10 lg:grid-cols-2">

//         {/* Image */}
//         <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-900">
//           <Image
//             src={workout.image}
//             alt={workout.name}
//             fill
//             priority
//             className="object-cover"
//             sizes="(max-width: 1024px) 100vw, 50vw"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <div className="mb-4 flex flex-wrap gap-2">
//             {workout.muscleGroups.map((muscle) => (
//               <span
//                 key={muscle}
//                 className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
//               >
//                 {muscle}
//               </span>
//             ))}
//           </div>

//           <h1 className="text-4xl font-bold uppercase text-white md:text-5xl">
//             {workout.name}
//           </h1>

//           <p className="mt-5 leading-7 text-gray-400">
//             {workout.description}
//           </p>

//           {/* Specs */}
//           <div className="mt-8 grid grid-cols-2 gap-3">
            
//             <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
//               <p className="text-xs uppercase text-gray-500">
//                 Equipment
//               </p>

//               <p className="mt-1 text-sm font-semibold text-white">
//                 {workout.equipment}
//               </p>
//             </div>

//             <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
//               <p className="text-xs uppercase text-gray-500">
//                 Difficulty
//               </p>

//               <p className="mt-1 text-sm font-semibold text-white">
//                 {workout.difficulty}
//               </p>
//             </div>

//             <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
//               <p className="text-xs uppercase text-gray-500">
//                 Sets
//               </p>

//               <p className="mt-1 text-sm font-semibold text-white">
//                 {workout.sets}
//               </p>
//             </div>

//             <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
//               <p className="text-xs uppercase text-gray-500">
//                 Reps
//               </p>

//               <p className="mt-1 text-sm font-semibold text-white">
//                 {workout.reps}
//               </p>
//             </div>

//           </div>

//           {/* Stats */}
//           <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-400">

//             <span className="flex items-center gap-2">
//               <Clock3 size={17} />
//               {workout.duration} min
//             </span>

//             <span className="flex items-center gap-2">
//               <Flame size={17} />
//               {workout.caloriesBurned} kcal
//             </span>

//             <span className="flex items-center gap-2">
//               <Star
//                 size={17}
//                 fill="currentColor"
//               />
//               {workout.rating}
//             </span>

//           </div>
            
//                 <WorkoutActions workoutId={workout.id} />

//         </div>
//       </section>

//       {/* Instructions */}
//       <section className="mt-14">
//         <h2 className="text-2xl font-bold uppercase text-white">
//           Instructions
//         </h2>

//         <ol className="mt-6 space-y-4">
//           {workout.instructions.map((instruction, index) => (
//             <li
//               key={instruction}
//               className="flex gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4"
//             >
//               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
//                 {index + 1}
//               </span>

//               <p className="text-sm leading-6 text-gray-300">
//                 {instruction}
//               </p>
//             </li>
//           ))}
//         </ol>
//       </section>

//     </main>
//   );
// }



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