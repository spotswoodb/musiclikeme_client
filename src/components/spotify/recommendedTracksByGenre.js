import React from "react";
import { useState } from 'react';
import axios from 'axios';

export default function RecommendedTracksByGenre({spotifyToken}) {

    const [recommendedCountryTracks, setRecommendedCountryTracks] = useState([])

    const getRecommendedCountryTracks = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/recommendations", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${spotifyToken}`,
            },
            params: {
                seed_genres: 'country'
            }
        })

        // console.log(data.tracks)
        setRecommendedCountryTracks(data.tracks)
    }

    const renderRecommendedCountryTracks = () => {
        return recommendedCountryTracks.map(track => (
            <div key={track.id}>
                <li>
                    {track.album.images.length ? <img width={"50%"} src={track.album.images[0].url} alt=""/> : <div>No image</div>}
                    {track.name}
                </li>
            </div>
        ))
    }

    return (
        <div>
            <button onClick={getRecommendedCountryTracks}>Click for Recommended Country Tracks</button>
            <ol>
                {renderRecommendedCountryTracks()}
            </ol>
        </div>
    )

}