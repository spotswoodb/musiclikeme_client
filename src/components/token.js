import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import UserTopTracks from './userTopTracks';
import SearchPopularTracks from './searchPopularTracks'

function Token() {

    const spotifyApi = new SpotifyWebApi();
    
    const getTokenFromUrl = () => {
        return window.location.hash.substring(1).split("&").reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
    };

    const [spotifyToken, setSpotifyToken] = useState("");
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        console.log("This is what we derived from the URL: ", getTokenFromUrl())
        const spotifyToken = getTokenFromUrl().access_token
        window.location.hash = ""
        console.log("This is our Spotify token", spotifyToken);

        if (spotifyToken) {
            setSpotifyToken(spotifyToken)
            spotifyApi.setAccessToken(spotifyToken)
            spotifyApi.getMe()
            .then((user) => {
                console.log(user)
            })
            setLoggedIn(true)
        }
    })


    return (
        <div>
            <h1>Token Page</h1>
            {!loggedIn && <a href="http://localhost:8888">Login to Spotify</a>}
            {loggedIn ? <UserTopTracks spotifyToken={spotifyToken} /> : <h2>Login To View Your Top Tracks</h2>}
            {loggedIn ? <SearchPopularTracks spotifyToken={spotifyToken} /> : <h2>Login To Search Top Tracks</h2>}

        </div>
    )
}

export default Token;