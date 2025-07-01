import { Stack, Box, Card, Typography, Grid, CardContent } from "@mui/material";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <Stack alignItems="center" minHeight="70vh" p="3rem">
      <Box textAlign="center">
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize="2.5rem"
          textTransform="capitalize"
        >
          what our travelers say
        </Typography>
        <Typography variant="h6" fontSize="1.1rem" pb={3}>
          Real experiences from real adventurers
        </Typography>
      </Box>
      <Stack>
        <Grid container>
          <Grid size={5} height="15rem">
            <Card sx={{ height: "100%", padding: "1rem" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: ".5rem",
                }}
              >
                <Typography variant="body1" fontSize="1rem">
                  "Professional guides, amazing wildlife sightings, and perfect
                  organization. Highly recommended!"
                </Typography>
                <Stack direction="row" color="rgb(255, 217, 0)">
                  <FaStar />
                </Stack>
                <Typography variant="h4" fontSize="1rem" fontWeight="bold">
                  David Mwangi
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="0.8rem"
                  color="rgb(111, 111, 111)"
                >
                  Mombasa, Kenya
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Testimonials;
