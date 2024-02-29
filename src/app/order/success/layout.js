"use client";
import React, { Suspense } from "react";
import LoadingTankYou from "./loading";

const layout = ({ children }) => {
  return (
    <Suspense fallback={<LoadingTankYou />}>
      <section className="max-w-[1280px] w-full mx-auto p-6">
        {children}
      </section>
    </Suspense>
  );
};

export default layout;
