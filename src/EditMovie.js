import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

export function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movie);

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();

  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined" />
      {/* <input
             type = "text"
             onChange = {(event) => setName(event.target.value)}
             placeholder = "Name"
              /> */}
      <TextField
        value={poster}
        label="Poster"
        // placeholder = "Poster"
        onChange={(event) => setPoster(event.target.value)}
        variant="outlined" />
      <TextField
        value={rating}
        label="Rating"
        //placeholder = "Rating" 
        onChange={(event) => setRating(event.target.value)}
        variant="outlined" />
      <TextField
        value={summary}
        label="Summary"
        // placeholder = "Summary"
        onChange={(event) => setSummary(event.target.value)}
        variant="outlined" />
      <TextField
        value={trailer}
        type="text"
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
        variant="outlined" />
      {/* <button onClick = {() => console.log(name, poster, rating, summary)}>Add Movie</button> */}
      {/* Copy the movieList and add new movie to it */}
      <Button
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };
          const copyMovieList = [...movieList];
          copyMovieList[id] = updatedMovie;
          setMovieList(copyMovieList);
          history.push("/movies");
        }}
        variant="contained"
        
        color="success"
      >
        Save
      </Button>
    </div>
  );
}
