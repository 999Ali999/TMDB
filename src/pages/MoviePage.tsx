import { useParams } from "react-router-dom";
import { useGetMovieDetailsByIdQuery } from "../services/movie";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import CastCard from "../components/CastCard";
import Reviews from "../components/Reviews";

function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>();
  const { data, error, isLoading } = useGetMovieDetailsByIdQuery(movieId || "");

  return (
    <Box>
      <Container sx={{ pt: 10 }}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "101vh",
              paddingTop: 10,
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="h6" color="error">
            An error has occurred
          </Typography>
        ) : (
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {data!.title}
            </Typography>
            <img
              src={`https://image.tmdb.org/t/p/original${data!.backdrop_path}`}
              alt={data!.title}
              style={{ width: "100%", borderRadius: "8px" }}
              loading="lazy"
            />
            <Typography variant="button">{data!.overview}</Typography>
          </Box>
        )}

        <Box sx={{ paddingTop: 5 }}>
          <CastCard movieId={movieId || ""} />
        </Box>

        <Box sx={{ paddingTop: 5 }}>
          <Reviews movieId={movieId || ""} />
        </Box>
      </Container>
    </Box>
  );
}

export default MovieDetails;
