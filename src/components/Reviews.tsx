import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { useGetMovieReviewsByIdQuery } from "../services/movie";

import { Box, CircularProgress } from "@mui/material";

interface ReviewsProps {
  movieId: string;
}

const Reviews = ({ movieId }: ReviewsProps) => {
  const { data, error, isLoading } = useGetMovieReviewsByIdQuery(movieId);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {isLoading && (
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
      )}
      {error && (
        <Typography variant="h6" color="error">
          An error has occurred
        </Typography>
      )}
      {data?.results.map((review) => (
        <List
          key={review.id}
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={review.author}
                src={
                  review.author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w276_and_h350_face/${review.author_details.avatar_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                }
              />
            </ListItemAvatar>
            <ListItemText
              primary={review.author}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {review.author_details.name}
                  </Typography>
                  {` — ${review.content}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </List>
  );
};

export default Reviews;
