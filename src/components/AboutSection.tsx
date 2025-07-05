import { Stack, Box, Typography, Grid } from "@mui/material";

function AboutSection() {
  return (
    <Box
      component="section"
      minHeight="60vh"
      pt={7}
      pb={7}
      alignContent="center"
      justifyContent="center"
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid size={{ xs: 11, md: 9, lg: 5 }}>
          <Box justifyContent="center">
            <Typography
              variant="h2"
              pb={2}
              sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
            >
              About Zaph Tours
            </Typography>
            <Typography variant="body1">
              Zaph Tours Kenya Zaph Tours has been Kenya's leading travel and
              public transit escort for over ten years. company known for
              delivering outstanding safari experiences and adventure tours. We
              specialize in memorable trips that highlight the beauty of and
              richness of culture in East Africa.
              <br />
              <br />
              Our knowledgeable guides, great accommodation, delicious meals and
              attentive leadership result in an experience not to be missed.
              planned itineraries mean that every second of your adventure is
              extraordinary. From the glacier-capped summit of Mt. Kenya to the
              idyllic shore, we deliver a combination of the finest of Kenya.
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
        <Grid size={{ xs: 11, md: 9, lg: 5 }} component="div">
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
