import { Box, Card, Typography } from "@mui/material";

function EmbeddedMap() {
  return (
    <Box component="section" pt="3rem">
      <Card sx={{ padding: "2rem 1rem" }}>
        <Typography
          variant="h3"
          fontSize="1.8rem"
          fontWeight="bold"
          textTransform="capitalize"
          paddingInline="1rem"
        >
          Find us
        </Typography>
        <Box height="20rem" pt={2} marginInline={2}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8169121130177!2d36.82017067311134!3d-1.2837360356194585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5d63997f1%3A0xfb825e08591621ab!2sKimathi%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1751748623800!5m2!1sen!2ske"
            // width={600}
            // height={450}
            style={{
              border: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </Box>
      </Card>
    </Box>
  );
}

export default EmbeddedMap;
