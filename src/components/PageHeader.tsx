import { Box, Stack, Typography } from "@mui/material";

// This will be the "Hero section/ intro" for all other pages apart from the HomePage
function PageHeader(title: string, description: string) {
  return (
    <Box
      minHeight="50vh"
      sx={{ backgroundColor: "rgb(0, 39, 94)" }}
      alignContent="center"
    >
      <Stack alignItems="center" justifyContent="center" color="#ffffff" p={4}>
        <Typography
          variant="h2"
          fontSize={{
            xs: "2rem",
            sm: "2rem",
            md: "3rem",
            lg: "4rem",
          }}
          fontWeight="bold"
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          fontSize={{
            xs: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "1.5rem",
          }}
          textAlign="center"
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}

export default PageHeader;
