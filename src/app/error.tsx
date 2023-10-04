"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-lg font-medium">Something went wrong</p>
      <button
        className="px-4 py-2 mt-4 text-lg font-medium text-white hover:bg-darkest-gray rounded-md bg-darkest-gray/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-opacity-75"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
