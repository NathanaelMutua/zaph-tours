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
import { IoLocationOutline } from "react-icons/io5";
import { DestinationCollection } from "../data/DestinationCollection";
import { IoPersonSharp } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

function DestinationsComponent() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }} padding="4rem 2rem">
      <Grid
        container
        spacing={4}
        rowSpacing={5}
        justifyContent="center"
        alignItems="center"
      >
        {/* Filtering only the featured items to be displayed(all destinations are in one array) */}
        {DestinationCollection.map((destination, idx) => (
          <Grid
            size={{ xs: 12, sm: 9, md: 6, lg: 4 }}
            key={idx}
            position="relative"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                minHeight: "32rem",
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
                  <IoLocationOutline />
                  <Typography variant="h6" fontSize="1rem">
                    Kenya
                  </Typography>
                </Stack>
              </Stack>
              <Stack component="div" height="15rem" width="100%">
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
                      <Box display="flex" alignItems="center" gap="1rem">
                        <RiGroupLine style={{ color: "#eb8a00" }} />
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          fontSize="0.8rem"
                        >
                          Group Price
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          fontSize="1.2rem"
                          color="primary"
                        >
                          ${destination.price}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Box display="flex" alignItems="center" gap="1rem">
                        <IoPersonSharp style={{ color: "#eb8a00" }} />
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          fontSize="0.8rem"
                        >
                          Individual Price
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          fontSize="1.2rem"
                        >
                          ${destination.individualPrice}
                        </Typography>
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
