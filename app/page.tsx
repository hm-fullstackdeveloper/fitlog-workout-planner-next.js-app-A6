// // "use client";

// // import { useEffect, useState } from "react";

// // import Hero from "./components/home/Hero";
// // import WorkoutGrid from "./components/home/WorkoutGrid";

// // import Loading from "./loading";

// // import { useFitLog } from "./context/FitLogContext";

// // import type { Workout } from "./types/workout";

// // const API_URL =
// //   "https://api.abcz.workers.dev/api/fitlog";

// // export default function Home() {
// //   const {
// //     workouts,
// //     setWorkouts,
// //   } = useFitLog();

// //   const [loading, setLoading] = useState(
// //     workouts.length === 0
// //   );

// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     // Already loaded
// //     if (workouts.length > 0) {
// //       setLoading(false);
// //       return;
// //     }

// //     const fetchWorkouts = async () => {
// //       try {
// //         setLoading(true);
// //         setError("");

// //         const response = await fetch(API_URL);

// //         if (!response.ok) {
// //           throw new Error(
// //             "Failed to fetch workouts"
// //           );
// //         }

// //         const data: Workout[] = await response.json();

// //         setWorkouts(data);
// //       } catch (error) {
// //         console.error(error);

// //         setError(
// //           "Unable to load workouts. Please try again."
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchWorkouts();
// //   }, [workouts.length, setWorkouts]);

// //   return (
// //     <main className="bg-[#0b0c0e] text-white">

// //       {/* Hero */}
// //       <Hero />

// //       {/* Library */}
// //       <section
// //         id="library"
// //         className="px-5 pb-20 sm:px-6 lg:px-8"
// //       >
// //         <div className="mx-auto max-w-7xl">

// //           {/* Heading */}
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
// //               The Library
// //             </h2>

// //             <p className="mt-2 text-sm text-gray-500">
// //               Twelve lifts covering every major muscle group.
// //             </p>
// //           </div>

// //           {/* Loading */}
// //           {loading && <Loading />}

// //           {/* Error */}
// //           {!loading && error && (
// //             <div className="rounded-xl border border-red-900 bg-red-950/30 p-6 text-center">
// //               <p className="text-sm text-red-400">
// //                 {error}
// //               </p>
// //             </div>
// //           )}

// //           {/* Workouts */}
// //           {!loading &&
// //             !error &&
// //             workouts.length > 0 && (
// //               <WorkoutGrid
// //                 workouts={workouts}
// //               />
// //             )}

// //         </div>
// //       </section>

// //     </main>
// //   );
// // }
// import WorkoutGrid from "./components/home/WorkoutGrid";
// import { getWorkouts } from "./api/workouts";

// export default async function HomePage() {
//   const workouts = await getWorkouts();

//   return (
//     <main>
//       {/* Hero */}
//       <section className="mx-auto max-w-7xl px-5 py-16">
//         <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-400">
//           Workout Library
//         </p>

//         <h1 className="max-w-3xl text-4xl font-bold uppercase text-white md:text-6xl">
//           Train With Intent. Log Every Set.
//         </h1>

//         <p className="mt-5 max-w-2xl text-gray-400">
//           FitLog is a dark, no-nonsense gym companion: pick a lift,
//           lock it into today's plan, and watch the week's work add up.
//         </p>
//       </section>

//       {/* Library */}
//       <section
//         id="library"
//         className="mx-auto max-w-7xl px-5 pb-20"
//       >
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold uppercase text-white">
//             The Library
//           </h2>

//           <p className="mt-2 text-gray-400">
//             Twelve lifts covering every major muscle group.
//           </p>
//         </div>

//         <WorkoutGrid workouts={workouts} />
//       </section>
//     </main>
//   );
// }



import Hero from "./components/home/Hero";
import WorkoutGrid from "./components/home/WorkoutGrid";
import { getWorkouts } from "./api/workouts";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main className="bg-[#0b0c0e] text-white">
      {/* Hero */}
      <Hero />

      {/* Library */}
      <section
        id="library"
        className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8"
      >
        <WorkoutGrid workouts={workouts} />
      </section>
    </main>
  );
}