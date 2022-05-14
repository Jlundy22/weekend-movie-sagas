import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
 // renders all movie titles and posters 
 // from the database when the page loads
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    // this function runs when a movie poster 
    //is clicked on. A dispatch is sent root saga generator
    // in index.js
    // also pushes you to the details page 
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
            <h1>Movies</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="grid-container"  key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img class="img-list" onClick={() => fetchDescription(movie.id)} src={movie.poster} width='200px' height='300px' alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;