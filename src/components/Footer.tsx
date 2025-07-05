import { Stack, Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegCompass } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";

function Footer() {
  return (
    <Stack
      minHeight="50vh"
      sx={{ backgroundColor: "rgb(0, 39, 94)" }}
      alignItems="center"
      color="#ffffff"
      component="section"
    >
      <Grid
        container
        padding="3rem 1rem"
        justifyContent="space-between"
        rowSpacing={3}
        width="100%"
      >
        <Grid size={{ xs: 11, md: 4, lg: 3 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Stack direction="row" alignItems="center" spacing={1} pb={2}>
              <FaRegCompass size={30} color="#eb8a00" />
              <Stack>
                <Typography variant="h2" fontWeight="bold" fontSize="1.2rem">
                  Zaph Tours
                </Typography>
                <Typography variant="caption" fontSize=".7rem">
                  Best Safaris & Adventures
                </Typography>
              </Stack>
            </Stack>
          </Link>
          <Box>
            <Typography variant="body2" fontSize="0.9rem">
              Experience the magic of Kenya with our expertly crafted safari and
              adventure tours. Creating unforgettable memories since 2010.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 11, md: 3, lg: 2 }}>
          <Stack>
            <Typography
              variant="h3"
              fontSize="1.2rem"
              fontWeight="bold"
              pb={2}
              color="#eb8a00"
            >
              Quick Links
            </Typography>
            <Typography variant="h6" fontSize="0.9rem">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#ffffff" }}
                className="footer-link"
              >
                Home
              </Link>
            </Typography>
            <Typography variant="h6" fontSize="0.9rem">
              <Link
                to="/destinations"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                }}
                className="footer-link"
              >
                Destinations
              </Link>
            </Typography>
            <Typography variant="h6" fontSize="0.9rem">
              <Link
                to="/trips"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  transition: "0.3s",
                }}
                className="footer-link"
              >
                Trip types
              </Link>
            </Typography>
            <Typography variant="h6" fontSize="0.9rem">
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  transition: "0.3s",
                }}
                className="footer-link"
              >
                Contact
              </Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 11, md: 3, lg: 2 }}>
          <Typography
            variant="h3"
            fontSize="1.2rem"
            fontWeight="bold"
            pb={2}
            color="#eb8a00"
          >
            Popular destinations
          </Typography>
          <Typography variant="h6" fontSize="0.9rem">
            Mt. Kenya
          </Typography>
          <Typography variant="h6" fontSize="0.9rem">
            Mt. Ruwenzori
          </Typography>
          <Typography variant="h6" fontSize="0.9rem">
            Tsavo National Park
          </Typography>
          <Typography variant="h6" fontSize="0.9rem">
            Nairobi National Park
          </Typography>
          <Typography variant="h6" fontSize="0.9rem">
            Coastal Kenya
          </Typography>
          <Typography variant="h6" fontSize="0.9rem">
            Lake Nakuru
          </Typography>
        </Grid>
        <Grid size={{ xs: 11, md: 6, lg: 2 }}>
          <Typography
            variant="h3"
            fontSize="1.2rem"
            fontWeight="bold"
            pb={2}
            color="#eb8a00"
          >
            Contact Info
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <FaMapPin />
            <Typography variant="h6" fontSize="0.8rem">
              Nairobi, Kenya
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <FaSquarePhone />
            <Typography variant="h6" fontSize="0.8rem">
              +254 000 000 000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <HiOutlineMail />
            <Typography variant="h6" fontSize="0.8rem">
              zaphtours@info.co.ke
            </Typography>
          </Box>
          <Stack
            direction="row"
            color="#eb8a00"
            alignItems="center"
            fontSize="1.1rem"
            spacing={1.4}
            pt={2}
          >
            <LuFacebook
              href="https://www.linkedin.com/in/nathanaelmutua/"
              style={{ cursor: "pointer" }}
            />
            <SlSocialLinkedin
              href="https://www.linkedin.com/in/nathanaelmutua/"
              style={{ cursor: "pointer" }}
            />
            <BsTwitterX
              href="https://github.com/NathanaelMutua"
              style={{ cursor: "pointer" }}
            />
            <FaInstagram
              href="https://github.com/NathanaelMutua"
              style={{ cursor: "pointer" }}
            />
          </Stack>
        </Grid>
      </Grid>
      <hr style={{ width: "90vw" }} />
      <Box>
        <Typography variant="body2" p={2} textAlign="center">
          &copy; 2025 Nash Tech. All rights reserved. | Zaph Tours - Best
          Safaris and Adventures in Kenya
        </Typography>
      </Box>
    </Stack>
  );
}

export default Footer;
