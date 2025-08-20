// app/auth/error/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ErrorMessage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <p className="text-red-500 flex items-center justify-center min-h-[80vh]">
      {error ? `Error: ${error}` : "Something went wrong"}
    </p>
  );
}

export default function AuthErrorPage() {
  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold mb-2">Authentication Error</h1>
      <Suspense fallback={<p>Loading error details...</p>}>
        <ErrorMessage />
      </Suspense>
    </div>
  );
}
