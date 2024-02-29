"use client";
import React, { Suspense } from "react";
import LoadingAboutUs from "./loading";

const layout = ({ children }) => {
  return (
    <Suspense fallback={<LoadingAboutUs />}>
      <section className="max-w-[1280px] w-full mx-auto p-6">
        {children}
      </section>
    </Suspense>
  );
};

export default layout;
