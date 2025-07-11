import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
  Chip,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { TripPackages } from "../data/TripPackages";

function TripPackagesGrid() {
  return (
    <Box
      component="section"
      padding="4rem 2rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        spacing={5}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        {TripPackages.map((tripPackage, idx) => (
          <Grid size={{ xs: 11, md: 8, lg: 6 }} key={idx}>
            <Card
              sx={{
                minHeight: "40vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pb={2}
                >
                  <Typography
                    variant="h3"
                    textTransform="capitalize"
                    fontSize="1.9rem"
                    fontWeight="bold"
                  >
                    {tripPackage.title}
                  </Typography>

                  {tripPackage.rating > 8 ? (
                    <Chip label="top rated" color="success" size="small" />
                  ) : tripPackage.rating > 6 ? (
                    <Chip label="popular" color="primary" size="small" />
                  ) : tripPackage.rating > 4 ? (
                    <Chip label="trending" color="warning" size="small" />
                  ) : (
                    <Chip label="new" color="default" />
                  )}
                </Stack>
                <Stack direction="row" justifyContent="space-between" pb="2rem">
                  <CardMedia
                    component="img"
                    image={tripPackage.image1}
                    alt="Trip Image 1"
                    sx={{
                      width: "48%",
                      height: "9rem",
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                  <CardMedia
                    component="img"
                    image={tripPackage.image2}
                    alt="Trip Image 2"
                    sx={{
                      width: "48%",
                      height: "9rem",
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                </Stack>
                <Typography>{tripPackage.description}</Typography>
                <Box display="flex" flexDirection="column" gap={1} pt={3}>
                  <Stack
                    width="100%"
                    padding="1rem"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ backgroundColor: "rgba(255, 132, 0, 0.1)" }}
                    borderRadius="5px"
                  >
                    <Typography variant="h4" fontSize="0.9rem">
                      Pricing
                    </Typography>
                    <Typography
                      variant="h4"
                      fontSize="1.1rem"
                      fontWeight="bold"
                      color="primary"
                    >
                      From ${tripPackage.pricing} per{" "}
                      {tripPackage.packageTarget}
                    </Typography>
                  </Stack>
                  <Stack
                    width="100%"
                    padding="1rem"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ backgroundColor: "rgba(123, 255, 0, 0.1)" }}
                    borderRadius="5px"
                  >
                    <Typography variant="h4" fontSize="0.9rem">
                      Offer
                    </Typography>
                    <Typography
                      variant="h4"
                      fontSize="0.9rem"
                      fontWeight="bold"
                      color="success"
                    >
                      {tripPackage.offer}
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  marginTop: "auto",
                  display: "flex",
                  gap: 2,
                  paddingBottom: "1rem",
                  textTransform: "capitalize",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ flexGrow: 1, textTransform: "capitalize" }}
                >
                  Book Now
                </Button>
                <Button
                  variant="contained"
                  sx={{ flexGrow: 1, textTransform: "capitalize" }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TripPackagesGrid;
