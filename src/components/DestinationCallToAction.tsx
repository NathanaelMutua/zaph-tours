import { Box, Stack, Typography, Button } from "@mui/material";

function DestinationCallToAction() {
  return (
    <Box
      minHeight="50vh"
      sx={{
        backgroundColor: "#1976D2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack alignItems="center" color="#fff" gap={2} textAlign="center">
        <Typography variant="h3" fontWeight="bold" fontSize="2rem">
          Ready For The Adventure?
        </Typography>
        <Typography variant="h6" fontSize="1.1rem">
          Let our expert team help you plan the perfect safari or adventure tour
          tailored to your preferences
        </Typography>
        <Stack direction="row" gap={4}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#eb8a00",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#fff",
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            View Trip Types
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default DestinationCallToAction;
