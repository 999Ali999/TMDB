import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
