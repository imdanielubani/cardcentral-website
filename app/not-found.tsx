import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-gray-500">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
}
