const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/:id', (req, res) => {
  const queryText = `select genres.name from genres
  join movies_genres on genres.id = movies_genres.genre_id
  join movies on movies.id = movies_genres.movie_id
  where movies.id = $1`;
  queryValues = [req.params.id];

  pool.query(queryText, queryValues)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;