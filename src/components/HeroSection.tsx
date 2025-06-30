import { Stack, Typography, Button, Box } from "@mui/material";

function HeroSection() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: "url(/cliff-side.jpg)",
        backgroundPositionY: "start",
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
      minHeight="90vh"
      component="section"
      pt={7}
    >
      <Stack
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          width: { xl: "900px", lg: "800px", md: "600px", xs: "300px" },
        }}
        alignItems="center"
        justifyContent="center"
        component="div"
        textAlign="center"
        color="white"
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "4.5rem",
            textAlign: "center",
            fontWeight: "bold",
            width: { xl: "700px", lg: "600px", md: "400px", xs: "200px" },
          }}
        >
          The Best Safaris & Adventures
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
          Explore the wild beauty of Kenya with expertly crafted tours and
          unforgettable experiences
        </Typography>

        <Stack direction="row" spacing={2} mt={4}>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", padding: "0.5rem 1rem" }}
          >
            Explore Destinations
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", padding: "0.5rem 1rem" }}
          >
            Plan Your Trip
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default HeroSection;
