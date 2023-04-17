import { useState, useEffect } from 'react';

const SpotifyViewer = () => {
    const [timeAgo, setTimeAgo] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [current, setCurrent] = useState(true);
  
    const API_KEY = process.env.NEXT_PUBLIC_LAST_FM_KEY;
    const USERNAME = 'jlucher';
  
    useEffect(() => {
      const getRecentTracks = async () => {
        try {
          const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
          );
          const data = await response.json();
          const track = data.recenttracks.track[0];
  
          const nowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
          setCurrent(nowPlaying);
  
          const trackTitle = `${track.name} by ${track.artist['#text']}`;
          setSongTitle(trackTitle);
  
          if (!nowPlaying) {
            const lastPlayedDate = new Date(parseInt(track.date.uts) * 1000);
            const currentTime = new Date();
            const millisecondsDifference = currentTime.getTime() - lastPlayedDate.getTime();
            const minutesDifference = Math.floor(millisecondsDifference / (1000 * 60));
            const hoursDifference = Math.floor(minutesDifference / 60);
  
            if (minutesDifference < 60) {
              setTimeAgo(`${minutesDifference} minutes`);
            } else {
              setTimeAgo(`${hoursDifference} hours`);
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      getRecentTracks();
      const intervalId = setInterval(() => {
        getRecentTracks();
      }, 10000);
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="mt-10">
        <h3 className="text-3xl">{current ? "I'm Currently Listening To" : 'I Listened To'}</h3>
        <p>
          {current ? songTitle : `${songTitle} ${timeAgo} ago.`} <i className="fa-brands fa-spotify fa-xl text-pink-600"></i>
        </p>
      </div>
    );
  };

export default SpotifyViewer;
