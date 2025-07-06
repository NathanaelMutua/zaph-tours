import {
  Box,
  Grid,
  Stack,
  Typography,
  Card,
  Chip,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { DestinationCollection } from "../data/DestinationCollection";

function FeatureDestinations() {
  return (
    <Box
      component="section"
      minHeight="100vh"
      p="4rem 2rem"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Stack alignItems="center" textAlign="center" color="text.primary">
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Feature Destinations
        </Typography>
        <Typography variant="h6" fontSize="1.1rem" pb={8}>
          Discover Kenya's most spectacular locations
        </Typography>
      </Stack>
      <Grid
        container
        spacing={3}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        {/* Filtering only the featured items to be displayed(all destinations are in one array) */}
        {DestinationCollection.filter(
          (destination) => destination.featured
        ).map((destination, idx) => (
          <Grid
            size={{ xs: 12, sm: 9, md: 6, lg: 3.8 }}
            key={idx}
            position="relative"
          >
            <Card
              sx={{
                height: "25rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Chip
                color="secondary"
                label={`$${destination.price}`}
                sx={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  zIndex: 100,
                }}
              />
              <Stack component="div" height="13rem" width="100%">
                <CardMedia
                  component="img"
                  image={destination.image}
                  sx={{
                    objectFit: "cover",
                    height: "100%",
                    transition: "0.4s",
                  }}
                  className="feature-destination-image"
                />
              </Stack>
              <Stack width="95%" justifyContent="center">
                <CardContent>
                  <Typography
                    variant="h3"
                    fontSize="1.3rem"
                    fontWeight="bold"
                    pb={1}
                  >
                    {destination.location}
                  </Typography>
                  <Typography variant="body2">
                    {destination.shortDescription}
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
                    <IoLocationOutline />
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
        ))}
      </Grid>
    </Box>
  );
}

export default FeatureDestinations;
