import { Box, Grid } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactCards from "./ContactCards";
import EmbeddedMap from "./EmbeddedMap";

function ContactSection() {
  return (
    <Box component="section" p="4rem 2rem">
      <Grid container spacing={5} justifyContent="center">
        <Grid size={{ xs: 11, md: 11, lg: 6 }}>
          <ContactForm />
        </Grid>
        <Grid size={{ xs: 11, md: 11, lg: 6 }}>
          <ContactCards />
        </Grid>
      </Grid>
      <EmbeddedMap />
    </Box>
  );
}

export default ContactSection;
