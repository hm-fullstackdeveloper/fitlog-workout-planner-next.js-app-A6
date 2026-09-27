# 💪 FitLog — Workout Library

FitLog is a modern, responsive workout library and daily workout planning application built with Next.js.

It allows users to explore workouts, view detailed workout information, add exercises to today's plan, save workouts for later, mark workouts as completed, and manage their workout plan easily.

---

## 🚀 Live Project

🔗 **Live Link:**  
Add your deployed project link here.

🔗 **GitHub Repository:**  
Add your GitHub repository link here.

---

## 📌 Project Overview

FitLog is designed as a dark, minimal, and focused workout companion.

Users can:

- Browse a complete workout library
- Explore workout details
- Add workouts to today's plan
- Save workouts for later
- Track planned workout statistics
- Mark workouts as completed
- Remove workouts from their plan
- Sort workouts by duration, calories, or rating
- Keep their plan and saved workouts after refreshing the page

The application is fully responsive and works across mobile, tablet, and desktop devices.

---

## ✨ Key Features

### 🏋️ Workout Library

- Displays all available workouts from the FitLog API
- Responsive workout card layout
- Workout image and muscle category tags
- Equipment information
- Duration, calories, and rating statistics
- Direct navigation to workout details

### 📋 Today's Plan

- Add workouts to today's plan
- Maximum of 5 workouts can be added
- Live Plan counter in the navbar
- Exercises, Minutes, and Calories summary
- Remove workouts from the plan
- Mark workouts as completed

### ❤️ Saved Workouts

- Save workouts for later
- Live Saved counter in the navbar
- View saved workouts from the My Plan page
- Remove saved workouts when no longer needed

### 📖 Workout Details

Each workout has a dedicated details page containing:

- Large workout image
- Workout name
- Description
- Muscle group tags
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions
- Add to Today's Plan button
- Save for Later button

### 🔔 Toast Notifications

Users receive feedback when performing important actions such as:

- Adding a workout
- Saving a workout
- Marking a workout as done
- Removing a workout
- Reaching the 5-workout plan limit

### 🔎 Workout Sorting

The workout library can be sorted by:

- Duration
- Calories
- Rating

### 💾 Local Storage

Plan, saved, and completed workout information is stored in the browser's localStorage so the user's data can survive a page refresh.

### 📱 Responsive Design

The application is designed for:

- Mobile
- Tablet
- Desktop

The workout grid, navbar, hero section, details page, My Plan page, and footer adapt to different screen sizes.

### ❌ 404 Page

A custom 404 page is included for unknown or invalid routes.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js | Application framework and routing |
| React | Building UI components |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| Lucide React | UI icons |
| React Toastify | Toast notifications |
| Next Image | Optimized image rendering |
| Browser localStorage | Persisting plan and saved data |
| FitLog API | Workout data source |

---

## 🔌 API

FitLog uses the following API:

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog