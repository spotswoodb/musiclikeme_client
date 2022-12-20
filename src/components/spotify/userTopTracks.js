import React from "react";
import { useState } from 'react';
import axios from 'axios';


export default function UserTopTracks({spotifyToken}) {
    
    const [userTopTracks, setUserTopTracks] = useState([])

    const getUserTopTracks = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${spotifyToken}`,
            },
            params: {
                time_range: 'long_term'
            }
        })
    
        // console.log(data.items)
        setUserTopTracks(data.items)
      } 

    const renderUserTopTracks = () => {

        return userTopTracks.map(track => (
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
            <button onClick={getUserTopTracks}>Click for your top tracks</button>
            <ol>
                {renderUserTopTracks()}
            </ol>
        </div>
      )
}