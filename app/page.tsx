import prisma from "@/prisma/client";
import { Metadata } from "next";
import PostSummary from "./PostSummary";
import PostChart from "./PostChart";
import LatestPost from "./LatestPost";
import React from "react";
import { Flex, Grid } from "@chakra-ui/react";



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
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 2, md: 5 }}
      >
        <Flex
          flexDir={'column'}
          gap={5}
        >
          <PostSummary
            open={open}
            inProgress={inProgress}
            closed={closed}
          />
          <PostChart
            open={open}
            inProgress={inProgress}
            closed={closed}
          />
        </Flex>
        <LatestPost />
      </Grid>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Posts App - Dashboard',
  description: 'View Dashboard',
};
