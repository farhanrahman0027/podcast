import Image from "next/image";
import { Input } from "../ui/input";

const Searchbar = () => {
  return (
    <div className="relative mt-8 block">
      <Input />
      <Image
        src="/icons/search.svg"
        alt="search"
        width={20}
        height={20}
        className="absolute left-4 top-3.5"
      />
    </div>
  );
};

export default Searchbar;
