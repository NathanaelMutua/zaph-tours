import { Stack, Box, Typography, Grid } from "@mui/material";

function AboutSection() {
  return (
    <Box minHeight="100vh" pt={7} alignContent="center" justifyContent="center">
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid size={5}>
          <Box justifyContent="center">
            <Typography
              variant="h2"
              pb={2}
              sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
            >
              About Zaph Tours
            </Typography>
            <Typography variant="body1">
              For over a decade, Zaph Tours has been Kenya's premier travel
              company, specializing in exceptional safari experiences and
              adventure tours. We pride ourselves on creating unforgettable
              journeys that showcase the natural beauty and cultural richness of
              East Africa.
              <br />
              <br />
              Our expert guides, comfortable accommodations, and carefully
              planned itineraries ensure that every moment of your adventure is
              extraordinary. From the snow-capped peaks of Mt. Kenya to the
              pristine beaches of the coast, we bring you the very best of
              Kenya.
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              pt={3}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "1.8rem",
                    color: "#eb8a00",
                  }}
                >
                  600+
                </Typography>
                <Typography>Happy Clients</Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "1.8rem",
                    color: "#eb8a00",
                  }}
                >
                  100+
                </Typography>
                <Typography>Destinations</Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "1.8rem",
                    color: "#eb8a00",
                  }}
                >
                  10+
                </Typography>
                <Typography>Years Experience</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid size={5} component="div">
          <img
            src="/monkey.jpg"
            alt="image of monkey waving their hand"
            className="about-sect-img"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;
