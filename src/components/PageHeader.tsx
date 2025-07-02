import { Box, Stack, Typography } from "@mui/material";

// This will be the "Hero section/ intro" for all other pages apart from the HomePage
function PageHeader(title: string, description: string) {
  return (
    <Box
      minHeight="50vh"
      sx={{ backgroundColor: "rgb(0, 39, 94)" }}
      alignContent="center"
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "rgb(0, 39, 94)" }}
        color="#ffffff"
        p={4}
      >
        <Typography variant="h2" fontSize="4rem" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="h6" fontSize="1.5rem">
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}

export default PageHeader;
