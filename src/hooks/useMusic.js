import { useState } from "react"

const songs = [
    {
        id: 1,
        title: "Born-in-the-Wild-(JustNaija.com).mp3",
        artist: "Tems",
        url: "/songs/01-Tems-Born-in-the-Wild-(JustNaija.com).mp3 ",
          duration: "3:00"
    },
       {
        id: 2,
        title: "Interference-(JustNaija.com).mp3",
        artist: "Tems",
        url: "/songs/01-Tems-Interference-(JustNaija.com).mp3",
          duration: "3:00"
    },
       {
        id: 3,
        title: "Oshaprapra-ft-Shorae-Moore-(JustNaija.com).mp3",
        artist: "victony",
        url: "/songs/01-Victony-Oshaprapra-ft-Shorae-Moore-(JustNaija.com).mp3",
          duration: "3:00"
    },
     {
        id: 4,
        title: "OUAT-(JustNaija.com).mp3",
        artist: "Zerrydl",
        url: "/songs/01-Zerrydl-OUAT-(JustNaija.com).mp3",
          duration: "3:00"
    },
      {
        id: 5,
        title: "Strangers By Nature.mp3",
        artist: "Adele",
        url: "/songs/01. Strangers By Nature.mp3",
        duration: "3:00"
    },

];

export const useMusic = () => {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime ] = useState(0);
    const [duration, setDuration ] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);


    const handlePlaySong = (song, index) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
    };

    const nextTrack = () =>{
      setCurrentTrackIndex((prev) =>{
        const nextIndex = (prev + 1) % allSongs.length;
        setCurrentTrack(allSongs[nextIndex]);
        return nextIndex;

      });

    };

     const prevTrack = () =>{
      setCurrentTrackIndex((prev) =>{
        const nextIndex = prev == 0 ? allSongs.length - 1 : prev - 1;
        setCurrentTrack(allSongs[nextIndex]);
        return nextIndex;

      });

    };
    const formatTime = (time) => {
        if (isNaN(time) || time === undefined) return "0:00";
        const minutes = Math.floor(time / 60);
         const seconds = Math.floor(time % 60);

         return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    const play = () => setIsPlaying(true);
     const pause = () => setIsPlaying(false);

    return {allSongs, handlePlaySong, currentTrackIndex, currentTrack, currentTime,
        setCurrentTime, formatTime, duration, setDuration,nextTrack, prevTrack,
        play, pause, isPlaying,
    };
}