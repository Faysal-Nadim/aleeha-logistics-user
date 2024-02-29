"use client";
import ClientDashboardNav from "@components/navbar/ClientDashboardNav";
import "@styles/globals.css";
import { Suspense } from "react";
import LoadingProfile from "./loading";

export default function ProfileLayout({ children }) {
  return (
    <section className="max-w-[1280px] mx-auto w-full  flex justify-between gap-10 items-start p-6">
      {/* w-[337px] */}
      <div className="lg:w-1/4 sm:w-0 lg:block sm:hidden">
        <ClientDashboardNav />
      </div>

      {/* NEVIGATION PAGE LOADER DIV */}

      <Suspense fallback={<LoadingProfile />}>
        <div className="lg:w-3/4 sm:w-full">{children}</div>
      </Suspense>
    </section>
  );
}
