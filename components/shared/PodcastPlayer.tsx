"use client";

import { cn } from "@/lib/utils";
import { useAudio } from "@/providers/AudioProvider";
import { Progress } from "../ui/progress";
import { useState } from "react";

const PodcastPlayer = () => {
  const { audio } = useAudio();
  const [currentTime, setCurrentTime] = useState(10);
  const [duration, setDuration] = useState(100);

  return (
    <div
      className={cn("sticky bottom-0 left-0 flex size-full flex-col", {
        hidden: !audio?.audioUrl,
      })}
    >
      <h1 className="text-white-1 text-xl">{audio?.title}</h1>
      <Progress
        value={(currentTime / duration) * 100}
        className="w-full"
        max={duration}
      />
    </div>
  );
};

export default PodcastPlayer;
