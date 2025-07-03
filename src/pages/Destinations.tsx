import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import DestinationsComponent from "../components/DestinationsComponent";

function Destinations() {
  return (
    <Box component="section">
      {/* The PageHeader that takes 2 parameters (title and description) */}
      {PageHeader(
        "Our Destinations",
        "Discover Kenya's most spectacular locations and create memories that last a lifetime"
      )}
      <DestinationsComponent />
    </Box>
  );
}

export default Destinations;
