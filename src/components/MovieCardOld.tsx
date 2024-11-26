// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { truncateText } from "../utils/utils";

// interface MovieCardProps {
//   image: string;
//   title: string;
//   overview: string;
// }

// // Utility function to truncate text
// // src/utils/truncateText.ts

// export default function MovieCard({ image, title, overview }: MovieCardProps) {
//   const truncatedOverview = truncateText(overview, 80); // Adjust 100 to your desired character limit
//   const truncatedTitle = truncateText(title, 18); // Adjust 18 to your desired character limit

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         sx={{ height: 120 }}
//         image={`https://image.tmdb.org/t/p/original${image}`}
//         title={title}
//         loading="lazy"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {truncatedTitle}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           {truncatedOverview}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
