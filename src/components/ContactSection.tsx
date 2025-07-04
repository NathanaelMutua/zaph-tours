import { Box, Grid } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactCards from "./ContactCards";

function ContactSection() {
  return (
    <Box component="section" p="4rem 2rem">
      <Grid container spacing={5}>
        <Grid size={{ md: 11, lg: 6 }}>
          <ContactForm />
        </Grid>
        <Grid size={{ md: 11, lg: 6 }}>
          <ContactCards />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactSection;
