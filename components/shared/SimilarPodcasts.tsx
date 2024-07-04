"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import LoaderSpinner from "./LoaderSpinner";
import PodcastCard from "./PodcastCard";
import EmptyState from "./EmptyState";

const SimilarPodcasts = ({ podcastId }: { podcastId: Id<"podcasts"> }) => {
  const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, {
    podcastId,
  });

  return (
    <section className="mt-8 flex flex-col gap-5">
      <h1 className="text-20 font-bold text-white-1">Similar Podcasts</h1>

      {similarPodcasts && similarPodcasts.length > 0 ? (
        <div className="podcast_grid">
          {similarPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                imgUrl={imageUrl}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={_id}
              />
            )
          )}
        </div>
      ) : (
        <>
          <EmptyState
            title="No similar podcasts found"
            buttonLink="/discover"
            buttonText="Discover more podcasts"
          />
        </>
      )}
    </section>
  );
};

export default SimilarPodcasts;
