import React, { useState, useEffect } from 'react'

const API_KEY = 'AIzaSyDEc047qDtqEJ65W0Tge6vs34A6jnubkfU',
    BASE_URL = 'https://www.googleapis.com/youtube/v3/',
    maxResults = 4,
    order = "viewCount";


const Recomendaciones = (props) => {

    let q = "music",
        //location = "6.321097%2C%20-10.807359",
        location = (props.location[0].lat + "%2C%20" + props.location[0].lng),
        locationRadius = "1000km";

    let finalURLuno = `${BASE_URL}search?part=snippet&location=${location}&locationRadius=${locationRadius}&maxResults=${maxResults}&order=${order}&q=${q}&type=video&key=${API_KEY}`;

    const [resultyt, setResultyt] = useState([]);

    useEffect(() => {
       traerVideos()
    }, [location]);

    const traerVideos = () => {
        fetch(finalURLuno)
            .then((response) => response.json())
            .then((responseJson) => {
                setResultyt(responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId))
                console.log("location-probando:  ", props.location[0].lat, "%2C%20", props.location[0].lng )
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            {
                resultyt.map((link, i) => {
                    let frame = <div key={i}><iframe width="300" height="150" src={link}></iframe></div>
                    return frame;
                })
            }
        </div>
    );
}

export default Recomendaciones;
