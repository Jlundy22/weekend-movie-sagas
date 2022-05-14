import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
// 2 routes: MovieList has the movie titles and posters
// You are routed to the details page 
//when you click on any movie poster
function App() {
  return (
    <div className="App">
      <h1>Lund Theater 14</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <Details />
        </Route>
      </Router>
    </div>
  );
}


export default App;
