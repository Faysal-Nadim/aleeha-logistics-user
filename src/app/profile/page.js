"use client";
import withAuth from "@components/withAuth";
import PersoalDetails from "./personal-details/page";

const page = () => {
  return <PersoalDetails />;
};

export default withAuth(page);
