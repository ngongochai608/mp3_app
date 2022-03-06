import { useState, useContext, useEffect } from "react";
import { Songs } from "../Context";

const ListSongs = () => {
  const title = document.querySelector('title')
  const { DataSongs, song, handleSetSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);

  const handlePlaySong = (song) => {
    setIdSong(song.id);
    handleSetSong(song.id);
    title.innerText = song.name;
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song])

  return (
    <div className="col-span-2  overflow-y-scroll list-songs">
      <table className="w-full text-gray-500">
        <thead>
          <tr>
            <th></th>
            <th className="text-left">Tên bài hát</th>
            <th className="text-left">Ca sỹ</th>
            <th>Tải xuống</th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              onClick={() => handlePlaySong(song)}
              key={index}
              className={`h-12 hover:bg-[#3A3344] ${
                idSong === song.id ? "bg-[#3A3344] text-white" : ""
              }`}
            >
              <td className="p-[10px]">
                <i className="fa fa-music"></i>
              </td>
              <td className="text-left">
                  <img className="w-[30px] h-[30px] inline-block mr-3 rounded" src={song.links.images[0].url} />
                    {song.name}
                </td>
              <td className="text-left">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSongs;
