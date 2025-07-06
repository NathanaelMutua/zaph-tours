import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";

function ContactCards() {
  return (
    <Box component="section">
      <Card sx={{ padding: "1rem 2rem", marginBottom: "2rem" }}>
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
              color="primary"
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
              color="primary"
            >
              Phone
            </Typography>
            <Typography variant="body1" fontSize="0.9rem">
              +254 700 000 000
              <br />
              +254 718 796 084
              <br />
              +254 00 0000000 (Office)
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
              color="primary"
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
      <Card sx={{ padding: "2rem 3rem", mb: "2rem" }}>
        <Stack direction="row" display="flex" alignItems="start" gap={1}>
          <MdAccessTime style={{ fontSize: "1.3rem", marginTop: "0.2rem" }} />
          <Stack width="50%">
            <Typography
              variant="h4"
              fontSize="1.3rem"
              fontWeight="bold"
              textTransform="capitalize"
              pb={1.5}
              color="primary"
            >
              Office hours
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              paddingBottom="0.5rem"
              paddingInline="2rem"
            >
              <Typography variant="h5" fontWeight="bold" fontSize="1rem">
                Day
              </Typography>
              <Typography variant="h5" fontWeight="bold" fontSize="1rem">
                Time
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" fontSize="1rem">
                Monday - Friday:
              </Typography>
              <Typography variant="body2" fontSize="1rem">
                8.00-7.00pm
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" fontSize="1rem">
                Saturday:
              </Typography>
              <Typography variant="body2" fontSize="1rem">
                9.00-5.00pm
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" fontSize="1rem">
                Sunday:
              </Typography>
              <Typography variant="body2" fontSize="1rem">
                Closed
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
      <Card sx={{ padding: "2rem 3rem" }}>
        <Typography
          variant="h4"
          fontSize="1.3rem"
          fontWeight="bold"
          textTransform="capitalize"
          pb={1.5}
        >
          Follow Us
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 11, md: 6 }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "capitalize" }}
              startIcon={<LuFacebook />}
              href="https://github.com/NathanaelMutua"
              target="_blank"
            >
              Facebook
            </Button>
          </Grid>
          <Grid size={{ xs: 11, md: 6 }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "capitalize" }}
              startIcon={<GrInstagram />}
              href="https://github.com/NathanaelMutua"
              target="_blank"
            >
              instagram
            </Button>
          </Grid>
          <Grid size={{ xs: 11, md: 6 }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "capitalize" }}
              startIcon={<BsTwitterX />}
              href="https://www.linkedin.com/in/nathanaelmutua/"
              target="_blank"
            >
              twitter
            </Button>
          </Grid>
          <Grid size={{ xs: 11, md: 6 }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "capitalize" }}
              startIcon={<SlSocialLinkedin />}
              href="https://www.linkedin.com/in/nathanaelmutua/"
              target="_blank"
            >
              linkedIn
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default ContactCards;
