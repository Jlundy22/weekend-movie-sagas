import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

function Details() {

    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const url = window.location.hash;
        const lastSegment = url.split("/").pop();
        for (let movie of movies) {
            if (movie.id === Number(lastSegment)) {
                console.log('we have a match',movie)
                setMovie(movie)
            }
        }

    }, [genres]);


    console.log(movie);
    return (
        
        <div>
            <img src={movie.poster} />
            {movie.title}
            {movie.description}
            {genres.map(genre => (
                <li key={genre.name}>
                    {genre.name}
                </li>
            ))}
        </div>
    )
}

export default Details;