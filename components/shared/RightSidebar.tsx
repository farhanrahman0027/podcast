"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Carousel from "./Carousel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const RightSidebar = () => {
  const router = useRouter();
  const { user } = useUser();
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);

  return (
    <section className="right_sidebar text-white-1">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-12">
          <UserButton />

          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold text-white-1">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </SignedIn>

      <section>
        <Header headerTitle="Fans like you" />
        <Carousel fansLikeDetail={topPodcasters!} />
      </section>

      <section className="flex flex-col gap-8 pt-12">
        <Header headerTitle="Top Podcasters" />
        <div className="flex flex-col gap-6">
          {topPodcasters?.slice(0, 4).map((podcaster) => (
            <div
              key={podcaster?._id}
              className="flex cursor-pointer justify-between"
              onClick={() => router.push(`/profile/${podcaster.clerkId}`)}
            >
              <figure className="flex items-center gap-2">
                <Image
                  src={podcaster.imageUrl}
                  alt={podcaster.name}
                  width={44}
                  height={44}
                  className="aspect-square rounded-lg"
                />
              </figure>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RightSidebar;
