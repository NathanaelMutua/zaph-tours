import { Box, Grid } from "@mui/material";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <Box component="section" p="4rem 2rem">
      <Grid container spacing={5}>
        <Grid size={{ md: 11, lg: 6 }}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactSection;
