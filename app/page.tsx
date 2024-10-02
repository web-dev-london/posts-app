import Pagination from "@/components/Pagination";
import { Metadata } from "next";
import React from "react";
import LatestPost from "./LatestPost";

interface Props {
  searchParams: {
    page: string;
  };
}

export default function Home({ searchParams }: Props) {
  return (
    <>
      <LatestPost />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Posts App - Dashboard',
  description: 'View Dashboard',
};
