import {
  Box,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { DestinationCollection } from "../data/DestinationCollection";
import { IoPersonOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

function DestinationsComponent() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }} padding="3rem 0">
      <Grid
        container
        spacing={3}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        {/* Filtering only the featured items to be displayed(all destinations are in one array) */}
        {DestinationCollection.map((destination, idx) => (
          <Grid
            size={{ xs: 11, sm: 6, md: 4, lg: 3.8 }}
            key={idx}
            position="relative"
          >
            <Card
              sx={{
                height: "30rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  position: "absolute",
                  top: "9rem",
                  left: "1rem",
                  zIndex: 100,
                  color: "#fff",
                }}
              >
                <Typography variant="h3" fontWeight="bold" fontSize="1.7rem">
                  {destination.location}
                </Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CiLocationOn />
                  <Typography variant="h6" fontSize="1rem">
                    Kenya
                  </Typography>
                </Stack>
              </Stack>
              <Stack component="div" height="13rem" width="100%">
                <CardMedia
                  component="img"
                  image={destination.image}
                  sx={{
                    objectFit: "cover",
                    height: "100%",
                    transition: "0.4s",
                  }}
                />
              </Stack>
              <Stack width="90%" textAlign="center">
                <CardContent>
                  <Typography variant="body2">
                    {destination.longDescription}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    bottom: "1rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box padding="1rem 0.5rem" width="90%">
                    <Stack direction="row" justifyContent="space-between">
                      <Box display="flex">
                        <RiGroupLine style={{ color: "#eb8a00" }} />
                        <Typography>Group Price</Typography>
                      </Box>
                      <Box>
                        <Typography>${destination.price}</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Box display="flex">
                        <IoPersonOutline style={{ color: "#eb8a00" }} />
                        <Typography>Individual Price</Typography>
                      </Box>
                      <Box>
                        <Typography>${destination.individualPrice}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      width: "90%",
                      textAlign: "center",
                    }}
                  >
                    View Details & Book
                  </Button>
                </CardActions>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DestinationsComponent;
