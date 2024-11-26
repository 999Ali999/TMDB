import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie } from "../types/movie";

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<{ results: Movie[] }, void>({
      query: () => ({
        url: "movie/popular",
        params: {
          language: "en-US",
          page: 1,
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDIyNWEwNTY4ZGRkNzljMTE3OWY0ZTU3OGIzNGJiNiIsIm5iZiI6MTczMjU3NDMyNi43MTkzMzc1LCJzdWIiOiI2NjE2YzViNDI5YzYyNjAxNjNhMWViZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cm_Ztdk91slYQtx-TTKEbDHPLHZYKIILZ6NsW3CtaZs",
          accept: "application/json",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPopularMoviesQuery } = movieApi;
