import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  return (
    <div className="add-movie-form">
      <TextField
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
        label="Poster"
        // placeholder = "Poster"
        onChange={(event) => setPoster(event.target.value)}
        variant="outlined" />
      <TextField
        label="Rating"
        //placeholder = "Rating" 
        onChange={(event) => setRating(event.target.value)}
        variant="outlined" />
      <TextField
        label="Summary"
        // placeholder = "Summary"
        onChange={(event) => setSummary(event.target.value)}
        variant="outlined" />
      <TextField
        type="text"
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
        variant="outlined" />
      {/* <button onClick = {() => console.log(name, poster, rating, summary)}>Add Movie</button> */}
      {/* Copy the movieList and add new movie to it */}
      <Button
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };

          setMovieList([...movieList, newMovie]);
          history.push("/movies");
        }}
        variant="contained"
      >
        Add Sports Event</Button>
    </div>
  );
}
