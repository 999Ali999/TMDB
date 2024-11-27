import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CircularProgress } from "@mui/material";

interface MainCardProps {
  image: string;
  title: string;
  vote_average: number;
}

export default function MovieCard({
  image,
  title,
  vote_average,
}: MainCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        height: "auto",
        // padding: "5px",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/original${image}`}
          loading="lazy"
        />
        <CardContent sx={{ paddingY: "5px" }}>
          <Box>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                "&:hover": {
                  textDecorationLine: "underline",
                },
              }}
              variant="button"
              component="div"
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Box>
              {/* <Rating
                name="read-only"
                sx={{ display: "flex", justifyContent: "center" }}
                // value={stars}
                readOnly
              /> */}
              <CircularProgress
                variant="determinate"
                value={vote_average * 10}
                color={vote_average > 7 ? "success" : "warning"}
              />
            </Box>
            <Box>
              <Typography
                sx={{ display: "flex", justifyContent: "center" }}
                variant="caption"
              >
                {/* {reviews} Reviews */}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              variant="body2"
              color="text.secondary"
            >
              {/* ${price} */}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
