import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movieList }) {
  const { id } = useParams(); // extracting parameter from the URL
  console.log(id, movieList);

  const movie = movieList[id];
  const history = useHistory();
  return (
    <div>
      {/* right click the youtube vedio and give copy embed code  */}
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating} </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          // onClick = {() => history.push("/movies")}
          // onClick = {() => history.goForward()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
