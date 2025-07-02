import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";

function Destinations() {
  return (
    <Box component="section">
      {/* The PageHeader that takes 2 parameters (title and description) */}
      {PageHeader(
        "Our Destinations",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, harum."
      )}
    </Box>
  );
}

export default Destinations;
