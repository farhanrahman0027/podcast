const PodcastDetails = ({
  params: { podcastId },
}: {
  params: { podcastId: string };
}) => {
  return <p className="text-white-1">Podcast Details for: {podcastId}</p>;
};

export default PodcastDetails;
