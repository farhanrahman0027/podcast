import { EmptyStateProps } from "@/types";
import Image from "next/image";

const EmptyState = ({
  title,
  search,
  buttonLink,
  buttonText,
}: EmptyStateProps) => {
  return (
    <section className="flex-center size-full flex-col gap-3">
      <Image
        src="/icons/emptyState.svg"
        alt="emptyState"
        width={250}
        height={250}
      />
    </section>
  );
};

export default EmptyState;
