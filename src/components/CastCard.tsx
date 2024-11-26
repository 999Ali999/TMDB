import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetMovieCreditsByIdQuery } from "../services/movie";

interface CastCardProps {
  movieId: string;
}

export default function CastCard({ movieId }: CastCardProps) {
  const { data, error, isLoading } = useGetMovieCreditsByIdQuery(movieId);

  if (isLoading) {
    return (
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
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        An error has occurred while fetching credits
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Top Billed Cast
      </Typography>

      <Box
        sx={{ display: "flex", overflowX: "scroll", gap: 3, paddingBottom: 2 }}
      >
        {data?.cast.map((cast) => (
          <Card key={cast.id} sx={{ minWidth: 180 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w276_and_h350_face/${cast.profile_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                }
                alt={cast.name}
                loading="lazy"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                  {cast.name}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {cast.character}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}
