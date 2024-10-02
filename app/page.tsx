import prisma from "@/prisma/client";
import { Metadata } from "next";
import PostSummary from "./PostSummary";
import React from "react";
import PostChart from "./PostChart";



export default async function Home() {
  const open = await prisma.post.count({
    where: {
      status: "OPEN"
    }
  })

  const inProgress = await prisma.post.count({
    where: {
      status: "IN_PROGRESS"
    }
  })

  const closed = await prisma.post.count({
    where: {
      status: "CLOSED"
    }
  })

  return (
    <>
      {/* <PostSummary
        open={open}
        inProgress={inProgress}
        closed={closed}
      /> */}
      <PostChart
        open={open}
        inProgress={inProgress}
        closed={closed}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Posts App - Dashboard',
  description: 'View Dashboard',
};
