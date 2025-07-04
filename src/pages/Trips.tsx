import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import TripPackagesGrid from "../components/TripPackagesGrid";

function Trips() {
  return (
    <Box component="section">
      {PageHeader(
        "Our Packages",
        "Choose from our diverse range of carefully crafted travel experiences"
      )}
      <TripPackagesGrid />
    </Box>
  );
}

export default Trips;
