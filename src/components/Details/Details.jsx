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
            //loops to match to id stores in lastSegment 
            // to a movie id in the movies redux store
            if (movie.id === Number(lastSegment)) {
                console.log('we have a match', movie)
                //sets movie to the match
                setMovie(movie)
            }
        }

    }, [genres]);
    // pushes you back to the movie list page
    const goBack = () => {
        history.push('/');
    }

    return (

        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster} />

            <p className="description">{movie.description}</p>
            <div className="genre-container">
                <p className="genre-title">Genre(s):</p>
                    <ul>
                    {genres.map(genre => (
                        <li key={genre.name}>
                            {genre.name}
                        </li>
                    ))}
                    </ul>
            </div>
            <button onClick={() => goBack()}>Back</button>
        </div>
    )
}

export default Details;