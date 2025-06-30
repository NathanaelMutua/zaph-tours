import {
  Box,
  Grid,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function FeatureDestinations() {
  return (
    <Box
      component="section"
      minHeight="100vh"
      p="7rem 3rem"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Stack alignItems="center">
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Feature Destinations
        </Typography>
        <Typography variant="h6" fontSize="1.1rem" pb={2}>
          Discover Kenya's most spectacular locations
        </Typography>
      </Stack>
      <Grid container>
        <Grid size={3.5} height="23rem">
          <Card>
            <Stack component="div" height="10rem">
              <CardMedia
                component="img"
                image="/mount-kenya.jpg"
                sx={{ objectFit: "cover", height: "100%" }}
              />
            </Stack>
            <CardContent>
              <Typography variant="h3" fontSize="1.3rem" fontWeight="bold">
                Mt.Kenya
              </Typography>
              <Typography variant="body2">
                Experience the majesty of Africa's second-highest peak with
                breathtaking views and diverse wildlife.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureDestinations;
