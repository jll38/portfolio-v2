import { useState, useEffect } from 'react';
import Image from 'next/image';

const SpotifyViewer = () => {
    const [timeAgo, setTimeAgo] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [songImg, setSongImg] = useState('');
    const [current, setCurrent] = useState(true);
    const [playingStatusChanged, setPlayingStatusChanged] = useState(false);

    const API_KEY = process.env.NEXT_PUBLIC_LAST_FM_KEY;
    const USERNAME = 'jlucher';

    useEffect(() => {
        const getTrackInfo = async (artist, trackName) => {
            try {
                const response = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${encodeURIComponent(
                        artist
                    )}&track=${encodeURIComponent(trackName)}&format=json`
                );
                const data = await response.json();
                return data.track.duration;
            } catch (error) {
                console.error(error);
                return 0;
            }
        };

        const getRecentTracks = async () => {
            try {
                const response = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
                );
                const data = await response.json();
                const track = data.recenttracks.track[0];
                const thumbnailUrl = track.image.find(
                    (image) => image.size === 'large'
                )['#text'];

                const nowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
                if (current !== nowPlaying) {
                    setCurrent(nowPlaying);
                    setPlayingStatusChanged(true);
                    if (!nowPlaying) {
                        const trackDuration = await getTrackInfo(track.artist['#text'], track.name);
                        const lastPlayedDate = new Date((parseInt(track.date.uts) * 1000) + parseInt(trackDuration));
                        const currentTime = new Date();
                        const millisecondsDifference = currentTime.getTime() - lastPlayedDate.getTime();
                        let minutesDifference = Math.floor(millisecondsDifference / (1000 * 60));
                        const hoursDifference = Math.floor(minutesDifference / 60);
                        if (minutesDifference <= 0) 
                        { 
                            minutesDifference = 1;
                        }
                        if (minutesDifference < 60) {
                            setTimeAgo(`${minutesDifference} minutes`);
                        } else {
                            setTimeAgo(`${hoursDifference} hours`);
                        }
                    }
                } else {
                    setPlayingStatusChanged(false);
                }

                const trackTitle = `${track.name} by ${track.artist['#text']}`;
                setSongTitle(trackTitle);
                setSongImg(thumbnailUrl);
            } catch (error) {
                console.error(error);
            }
        };

        getRecentTracks();
        const intervalId = setInterval(() => {
            getRecentTracks();
        }, 10000);
        return () => clearInterval(intervalId);
    }, [playingStatusChanged]);

    useEffect(() => {
        if (!current) {
            const updateTimeAgo = () => {
                const timeParts = timeAgo.split(' ');
                let newValue = parseInt(timeParts[0]) + 1;
                setTimeAgo(`${newValue} ${timeParts[1]}`);
            };

            const timeAgoInterval = setInterval(updateTimeAgo, 60000);
            return () => clearInterval(timeAgoInterval);
        }
    }, [current, timeAgo]);


    return (
        <div className="mt-10">
            <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 font-bold"><i className="fa-brands fa-spotify fa-md text-purple-600"></i> {current ? "I'm Currently Listening To" : 'I Last Listened To'}  </h3>
            <p>
                {current ? songTitle : `${songTitle} ${timeAgo} ago.`}
            </p>
        </div>
    );
};

export default SpotifyViewer;
