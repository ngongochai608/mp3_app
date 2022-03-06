import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

const Playing = () => {
  const { song, handleSetSong } = useContext(Songs);

    const handleClickNext = () => {
        handleSetSong(song.id + 1);
    }

    const handleClickPrev = () => {
        handleSetSong(song.id - 1);
    }

  return (
    <div>
      <AudioPlayer
        className="h-[6rem] playing-style"
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
};

export default Playing;
