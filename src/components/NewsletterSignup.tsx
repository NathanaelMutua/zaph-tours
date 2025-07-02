import { Box, Stack, TextField, Typography, Button } from "@mui/material";

function NewsletterSignup() {
  return (
    <Box
      maxHeight="100vh"
      padding="3rem"
      sx={{ backgroundColor: "#1976D2", color: "#ffffff" }}
      component="section"
    >
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h2" fontWeight="bold" fontSize="2.3rem">
          Stay Updated
        </Typography>
        <Typography variant="h6" fontSize="1rem">
          Subscribe to our newsletter for weekly updates on safaris, adventures,
          and exclusive offers
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          height="5rem"
          m="1rem 0"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            label="Enter your email address"
            size="small"
            type="text"
            sx={{
              border: "none",
              width: "20rem",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
            }}
          ></TextField>
          <Button
            variant="contained"
            sx={{
              color: "#1976d2",
              backgroundColor: "#ffffff",
              textTransform: "capitalize",
              fontWeight: "600",
              minHeight: "2.6rem",
            }}
          >
            Subscribe
          </Button>
        </Stack>
        <Typography variant="body2" fontSize=".8rem">
          No spam, just amazing travel content and exclusive deals!
        </Typography>
      </Stack>
    </Box>
  );
}

export default NewsletterSignup;
