import { Metadata } from "next";
import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-lg font-bold ">Home page</h1>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Posts App - Dashboard',
  description: 'View Dashboard',
};
