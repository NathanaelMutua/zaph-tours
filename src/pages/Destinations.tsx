import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import DestinationsComponent from "../components/DestinationsComponent";
import DestinationCallToAction from "../components/DestinationCallToAction";

function Destinations() {
  return (
    <Box component="section">
      {/* The PageHeader that takes 2 parameters (title and description) */}
      {PageHeader(
        "Our Destinations",
        "Discover Kenya's most spectacular locations and create memories that last a lifetime"
      )}
      <DestinationsComponent />
      <DestinationCallToAction />
    </Box>
  );
}

export default Destinations;
