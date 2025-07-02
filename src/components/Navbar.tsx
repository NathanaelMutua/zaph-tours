import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegCompass } from "react-icons/fa6";

function Navbar() {
  return (
    <AppBar sx={{ top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <Toolbar>
        {/* Zaph Brand Logo and Title */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
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

        {/* The Navigation links */}
        <Stack direction="row" spacing={3} ml="auto" alignItems="center">
          <Typography>
            <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/destinations"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Destinations
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/trips"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Trip Types
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
