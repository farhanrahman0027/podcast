import Image from "next/image";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: {
  imgUrl: string;
  title: string;
  description: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image src={imgUrl} alt={title} width={174} height={174} />
      </figure>
    </div>
  );
};

export default PodcastCard;
