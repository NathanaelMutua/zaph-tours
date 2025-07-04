import { Box, Card, Stack, Typography } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

function ContactCards() {
  return (
    <Box component="section">
      <Card sx={{ padding: "1rem 2rem" }}>
        <Box>
          <Typography
            variant="h3"
            fontSize="1.8rem"
            fontWeight="bold"
            textTransform="capitalize"
            paddingInline="1rem"
            paddingTop="0.5rem"
            paddingBottom="1rem"
          >
            contact information
          </Typography>
        </Box>
        <Stack
          direction="row"
          display="flex"
          alignItems="start"
          gap={1}
          padding="0 1rem"
        >
          <IoLocationOutline
            style={{ fontSize: "1.3rem", marginTop: "0.2rem" }}
          />
          <Stack sx={{ border: "2px solid rem" }} pb={2}>
            <Typography
              variant="h4"
              fontSize="1.3rem"
              fontWeight="bold"
              pb={1.5}
            >
              Address
            </Typography>
            <Typography variant="body1" fontSize="0.9rem">
              Zaph Tours Office
              <br />
              Kimathi Street, CBD
              <br />
              Nairobi, Kenya
              <br />
              P.O. Box 12345-00100
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          display="flex"
          alignItems="start"
          gap={1}
          padding="0 1rem"
        >
          <FaPhone style={{ fontSize: "1.3rem", marginTop: "0.2rem" }} />
          <Stack sx={{ border: "2px solid rem" }} pb={2}>
            <Typography
              variant="h4"
              fontSize="1.3rem"
              fontWeight="bold"
              pb={1.5}
            >
              Phone
            </Typography>
            <Typography variant="body1" fontSize="0.9rem">
              +254 700 123 456
              <br />
              +254 733 987 654
              <br />
              +254 20 1234567 (Office)
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          display="flex"
          alignItems="start"
          gap={1}
          padding="0 1rem"
        >
          <MdOutlineEmail style={{ fontSize: "1.3rem", marginTop: "0.2rem" }} />
          <Stack sx={{ border: "2px solid rem" }} pb={2}>
            <Typography
              variant="h4"
              fontSize="1.3rem"
              fontWeight="bold"
              pb={1.5}
            >
              Email
            </Typography>
            <Typography variant="body1" fontSize="0.9rem">
              info@zaphtours.co.ke
              <br />
              bookings@zaphtours.co.ke
              <br />
              support@zaphtours.co.ke
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export default ContactCards;
