import Pagination from "@/components/Pagination";
import { Metadata } from "next";
import React from "react";

interface Props {
  searchParams: {
    page: string;
  };
}

export default function Home({ searchParams }: Props) {
  return (
    <>
      <h1 className="text-lg font-bold ">Home page</h1>
      <Pagination
        totalItems={100}
        pageSize={10}
        currentPage={Number(searchParams.page) || 1}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Posts App - Dashboard',
  description: 'View Dashboard',
};
