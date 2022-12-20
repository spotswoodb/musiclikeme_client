import React from "react";
import { useState } from 'react';
import axios from 'axios';


export default function SearchPopularTracks({spotifyToken}) {

    const [searchKey, setSearchKey] = useState("")

    const searchPopularTracks = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${spotifyToken}`
          },
          params: {
            q: searchKey,
            type: 'track',
            // popularity: '>50'
          }
        })
        console.log(data.tracks.items)
        // setArtists(data.artists.items)
        
    
    }

    // const renderTopTracks = () => {

    //     return tracks.map(track => (
    //         <div key={track.id}>
    //             <li>
    //                 {track.album.images.length ? <img width={"50%"} src={track.album.images[0].url} alt=""/> : <div>No image</div>}
    //                 {track.name}
    //             </li>
    //         </div>
    //     ))
    // }

    return (
        <div>
            <form onSubmit={searchPopularTracks}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>
        </div>
    )

}