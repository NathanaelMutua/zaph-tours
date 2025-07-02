import {
  Box,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import PageHeader from "../components/PageHeader";
import { DestinationCollection } from "../data/FeatureDestinations";

function Destinations() {
  return (
    <Box component="section">
      {/* The PageHeader that takes 2 parameters (title and description) */}
      {PageHeader(
        "Our Destinations",
        "Discover Kenya's most spectacular locations and create memories that last a lifetime"
      )}
      <Grid
        container
        spacing={3}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        {/* Filtering only the featured items to be displayed(all destinations are in one array) */}
        {DestinationCollection.map((destination, idx) => (
          <Grid
            size={{ xs: 11, sm: 6, md: 4, lg: 3.8 }}
            key={idx}
            position="relative"
          >
            <Card sx={{ height: "28rem" }}>
              <Stack
                sx={{
                  position: "absolute",
                  top: "9rem",
                  left: "1rem",
                  zIndex: 100,
                  color: "#fff",
                }}
              >
                <Typography variant="h3" fontWeight="bold" fontSize="1.7rem">
                  {destination.location}
                </Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CiLocationOn />
                  <Typography variant="h6" fontSize="1rem">
                    Kenya
                  </Typography>
                </Stack>
              </Stack>
              <Stack component="div" height="13rem">
                <CardMedia
                  component="img"
                  image={destination.image}
                  sx={{
                    objectFit: "cover",
                    height: "100%",
                    transition: "0.4s",
                  }}
                />
              </Stack>
              <Stack width="22rem" justifyContent="center">
                <CardContent>
                  <Typography variant="body2">
                    {destination.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Destinations;
