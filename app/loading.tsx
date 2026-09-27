const Loading = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>

        <p className="mt-3 text-sm uppercase tracking-wider text-gray-400">
          Loading workouts...
        </p>
      </div>
    </div>
  );
};

export default Loading;