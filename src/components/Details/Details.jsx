import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
 import { useHistory } from 'react-router-dom';

function Details() {
    const history = useHistory();
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

    const goBack = () => {
        history.push('/');
    }

    return (
        
        <div>
             <h1>{movie.title}</h1>
            <img src={movie.poster} />
           
           <p>{movie.description}</p> 
            <p>GENRES:</p>
            {genres.map(genre => (
                <li key={genre.name}>
                    {genre.name}
                </li>
            ))}
            <button onClick={() => goBack()}>Back</button>
        </div>
    )
}

export default Details;