import {
  Box,
  Grid,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";

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
        <Typography variant="h6" fontSize="1.1rem" pb={10}>
          Discover Kenya's most spectacular locations
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        <Grid size={3.8}>
          <Card sx={{ height: "24rem" }}>
            <Stack component="div" height="13rem">
              <CardMedia
                component="img"
                image="/mount-kenya.jpg"
                sx={{ objectFit: "cover", height: "100%" }}
              />
            </Stack>
            <Stack width="22rem" justifyContent="center">
              <CardContent>
                <Typography
                  variant="h3"
                  fontSize="1.3rem"
                  fontWeight="bold"
                  pb={1}
                >
                  Mt.Kenya
                </Typography>
                <Typography variant="body2">
                  Experience the majesty of Africa's second-highest peak with
                  breathtaking views and diverse wildlife.
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingInline: "1rem",
                }}
              >
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CiLocationOn />
                  <Typography
                    variant="h6"
                    fontSize="1rem"
                    color="rgb(111, 111, 111)"
                  >
                    Kenya
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureDestinations;
