"use client";

import EmptyState from "@/components/shared/EmptyState";
import LoaderSpinner from "@/components/shared/LoaderSpinner";
import PodcastCard from "@/components/shared/PodcastCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Discover = () => {
  const podcastData = useQuery(api.podcasts.getPodcastBySearch, { search: "" });

  return (
    <div className="flex flex-col gap-9">
      Searchbar...
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">Discover</h1>

        {podcastData ? (
          <>
            {podcastData.length > 0 ? (
              <div className="podcast_grid">
                {podcastData?.map(
                  ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                    <PodcastCard
                      key={_id}
                      imgUrl={imageUrl!}
                      title={podcastTitle}
                      description={podcastDescription}
                      podcastId={_id}
                    />
                  )
                )}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
};

export default Discover;
