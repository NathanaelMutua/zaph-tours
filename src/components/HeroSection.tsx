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
          width: { xl: "950px", lg: "850px", md: "600px", xs: "340px" },
        }}
        alignItems="center"
        justifyContent="center"
        component="div"
        textAlign="center"
        color="white"
      >
        <Typography
          variant="h1"
          pb={2}
          sx={{
            fontSize: {
              xs: "1.9rem",
              sm: "2.5.1rem",
              md: "3.5rem",
              lg: "4.5rem",
            },
            textAlign: "center",
            fontWeight: "bold",
            width: {
              xl: "800px",
              lg: "700px",
              md: "500px",
              sm: "400px",
              xs: "300px",
            },
          }}
        >
          The Best Safaris & Adventures
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.8rem",
              lg: "1.9rem",
            },
          }}
        >
          Explore the wild beauty of Kenya with expertly crafted tours and
          unforgettable experiences
        </Typography>

        <Stack
          direction={{ sx: "column", md: "row", lg: "row" }}
          gap={3}
          mt={6}
        >
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", padding: "0.5rem 1rem" }}
          >
            Explore Destinations
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              padding: "0.5rem 1rem",
              border: "2px solid",
              color: "whitesmoke",
            }}
          >
            Plan Your Trip
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default HeroSection;
