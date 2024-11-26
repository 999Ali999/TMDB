// import { Counter } from "./features/counter/Counter";
import { useGetPopularMoviesQuery } from "../services/movie";
import MovieCard from "../components/MovieCard";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import { Link } from "react-router";
import MainCarousel from "../components/Carousel";

const HomePage = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

  return (
    <Container sx={{ pt: 10 }}>
      {/* <Counter /> */}
      <Box>
        <MainCarousel />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ pt: 5 }}>
        Popular Movies
      </Typography>
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
        <Grid container spacing={3}>
          {data?.results.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <MovieCard
                  image={movie.backdrop_path}
                  title={movie.title}
                  overview={movie.overview}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
