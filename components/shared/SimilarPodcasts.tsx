"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import LoaderSpinner from "./LoaderSpinner";

const SimilarPodcasts = ({
  podcast,
  podcastId,
}: {
  podcast: any;
  podcastId: Id<"podcasts">;
}) => {
  const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, {
    podcastId,
  });

  if (!similarPodcasts || !podcast) return <LoaderSpinner />;
  return (
    <section className="mt-8 flex flex-col gap-5">
      <h1 className="text-20 font-bold text-white-1">Similar Podcasts</h1>
    </section>
  );
};

export default SimilarPodcasts;
