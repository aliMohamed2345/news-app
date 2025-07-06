"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-background px-6 py-20">
      <div className="max-w-xl w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-primary text-white p-4 rounded-full shadow-lg animate-pulse">
            <FaNewspaper className="text-5xl" />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary mb-2">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page you&apos;re looking for doesn’t exist or has been
          moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gradient-warning-start to-gradient-warning-end text-white rounded-full font-semibold shadow hover:shadow-lg transition duration-300 hover:opacity-90"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
