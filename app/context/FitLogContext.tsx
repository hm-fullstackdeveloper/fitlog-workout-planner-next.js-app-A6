
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface FitLogContextType {
  planIds: number[];
  savedIds: number[];
  doneIds: number[];

  addToPlan: (id: number) => boolean;
  removeFromPlan: (id: number) => void;

  saveWorkout: (id: number) => boolean;
  removeFromSaved: (id: number) => void;
  toggleSave: (id: number) => void;

  markAsDone: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  isDone: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [planIds, setPlanIds] = useState<number[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);

 
  const [isHydrated, setIsHydrated] = useState(false);

 
  // Load data from localStorage
  
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedDone = localStorage.getItem("fitlog-done");

    if (storedPlan) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlanIds(JSON.parse(storedPlan) as number[]);
    }

    if (storedSaved) {
      
      setSavedIds(JSON.parse(storedSaved) as number[]);
    }

    if (storedDone) {
     
      setDoneIds(JSON.parse(storedDone) as number[]);
    }

    
    setIsHydrated(true);
  }, []);

  
  // Save plan
 
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(planIds)
    );
  }, [planIds, isHydrated]);

  
  // Save saved workouts
  
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedIds)
    );
  }, [savedIds, isHydrated]);

  
  // Save completed workouts
  
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(
      "fitlog-done",
      JSON.stringify(doneIds)
    );
  }, [doneIds, isHydrated]);

  
  // Add workout to today's plan
  
  const addToPlan = (id: number) => {
    if (planIds.includes(id)) {
      return false;
    }

    if (planIds.length >= 5) {
      return false;
    }

    setPlanIds((current) => [...current, id]);

    return true;
  };

  
  // Remove workout from today's plan
 
  const removeFromPlan = (id: number) => {
    setPlanIds((current) =>
      current.filter((item) => item !== id)
    );

    
    setDoneIds((current) =>
      current.filter((item) => item !== id)
    );
  };

  
  // Save workout
  
  const saveWorkout = (id: number) => {
    if (savedIds.includes(id)) {
      return false;
    }

    setSavedIds((current) => [...current, id]);

    return true;
  };

  
  // Remove workout from saved
  
  const removeFromSaved = (id: number) => {
    setSavedIds((current) =>
      current.filter((item) => item !== id)
    );
  };

 
  // Toggle save
 
  const toggleSave = (id: number) => {
    if (savedIds.includes(id)) {
      setSavedIds((current) =>
        current.filter((item) => item !== id)
      );
    } else {
      setSavedIds((current) => [...current, id]);
    }
  };

  
  // Mark workout as done
  
  const markAsDone = (id: number) => {
    setDoneIds((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [...current, id];
    });
  };

  
  // Check if workout is in plan
  
  const isInPlan = (id: number) => {
    return planIds.includes(id);
  };

  
  // Check if workout is saved
  
  const isSaved = (id: number) => {
    return savedIds.includes(id);
  };

  
  // Check if workout is done
  
  const isDone = (id: number) => {
    return doneIds.includes(id);
  };

  return (
    <FitLogContext.Provider
      value={{
        planIds,
        savedIds,
        doneIds,

        addToPlan,
        removeFromPlan,

        saveWorkout,
        removeFromSaved,
        toggleSave,

        markAsDone,

        isInPlan,
        isSaved,
        isDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}

