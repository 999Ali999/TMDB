// import { Counter } from "./features/counter/Counter";
import { useGetPopularMoviesQuery } from "./services/movie";
import MovieCard from "./components/MovieCard";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import Header from "./components/Header";

function App() {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

  return (
    <Box>
      <Header />
      <Container sx={{ pt: 10 }}>
        {/* <Counter /> */}
        <Typography variant="h4" component="h1" gutterBottom>
          Popular Movies
        </Typography>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
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
                <MovieCard
                  image={movie.backdrop_path}
                  title={movie.title}
                  overview={movie.overview}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default App;
