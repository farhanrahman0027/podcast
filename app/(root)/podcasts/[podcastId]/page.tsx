import Image from "next/image";

const PodcastDetails = ({
  params: { podcastId },
}: {
  params: { podcastId: string };
}) => {
  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currently Playing</h1>
        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            alt="headphone"
            width={24}
            height={24}
          />
        </figure>
      </header>
    </section>
  );
};

export default PodcastDetails;
