import { Stack, Box, Card, Typography, Grid, CardContent } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { TravelerReviews } from "../data/TravelerReviews";

function Testimonials() {
  return (
    <Stack alignItems="center" minHeight="70vh" p="3rem">
      <Box textAlign="center" color="text.primary">
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
        <Grid
          container
          spacing={2}
          rowSpacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {TravelerReviews.map((review, idx) => (
            <Grid
              size={{ xs: 11, sm: 6, md: 5, lg: 4 }}
              height="15rem"
              key={idx}
            >
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
                    "{review.description}"
                  </Typography>
                  <Stack direction="row" color="rgb(255, 217, 0)">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </Stack>
                  <Typography variant="h4" fontSize="1rem" fontWeight="bold">
                    {review.firstName} {review.lastName}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="0.8rem"
                    color="rgb(111, 111, 111)"
                  >
                    {review.city}, {review.country}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Testimonials;
