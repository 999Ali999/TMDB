// import { Counter } from "./features/counter/Counter";
import { useGetUpcomingMoviesQuery } from "../services/movie";
// import MovieCard from "../components/MovieCard";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Grid,
  Pagination,
} from "@mui/material";

import { Link } from "react-router";
import MainCarousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading,
  } = useGetUpcomingMoviesQuery(page);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Container sx={{ pt: 10 }}>
      {/* <Counter /> */}
      <Box paddingTop={5}>
        <MainCarousel />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ pt: 5 }}>
        Upcoming Movies
      </Typography>
      {topRatedMoviesIsLoading ? (
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
      ) : topRatedMoviesError ? (
        <Typography variant="h6" color="error">
          An error has occurred
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {topRatedMovies?.results.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <MovieCard
                  image={movie.backdrop_path}
                  title={movie.title}
                  vote_average={movie.vote_average}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}

      <Pagination
        count={489}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </Container>
  );
};

export default HomePage;
