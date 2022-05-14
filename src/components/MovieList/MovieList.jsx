import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const fetchDescription = (movieId)=> {
        //console.log('movie clicked',movie)
        dispatch({ 
            type: 'MOVIE_GENRE',
            payload: movieId
        });
        history.push(`/details/${movieId}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="grid-container"  key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img  onClick={() => fetchDescription(movie.id)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;