import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Movie } from "../types/movie";
import type { Cast } from "../types/cast";
import { Review } from "../types/review";

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
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          accept: "application/json",
        },
      }),
      keepUnusedDataFor: 60, // Cache the data for 60 seconds
    }),

    getUpcomingMovies: builder.query<{ results: Movie[] }, number>({
      query: (page) => ({
        url: "movie/upcoming",
        params: {
          page: page,
        },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          accept: "application/json",
        },
      }),
    }),

    getMovieDetailsById: builder.query<Movie, string>({
      query: (movieId) => ({
        url: `movie/${movieId}`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          accept: "application/json",
        },
      }),
    }),

    getMovieCreditsById: builder.query<{ cast: Cast[] }, string>({
      query: (movieId) => ({
        url: `movie/${movieId}/credits`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          accept: "application/json",
        },
      }),
    }),

    getMovieReviewsById: builder.query<{ results: Review[] }, string>({
      query: (movieId) => ({
        url: `movie/${movieId}/reviews`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          accept: "application/json",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPopularMoviesQuery,
  useGetMovieDetailsByIdQuery,
  useGetMovieCreditsByIdQuery,
  useGetMovieReviewsByIdQuery,
  useGetUpcomingMoviesQuery,
} = movieApi;
