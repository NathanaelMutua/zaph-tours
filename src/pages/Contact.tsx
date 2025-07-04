import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";

function Contact() {
  return (
    <Box component="section">
      {PageHeader(
        "Contact Us",
        "Ready to start your Kenyan adventure? Get in touch with our travel experts"
      )}
      <ContactSection />
    </Box>
  );
}

export default Contact;
