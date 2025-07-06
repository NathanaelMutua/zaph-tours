import { AppBar, Stack, Toolbar, Typography, Drawer, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegCompass } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        height: "4rem",
        zIndex: 1000,
      }}
    >
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

        {/* The hamburger menu icon */}
        <Stack display={{ xs: "flex", sm: "flex", lg: "none" }} ml="auto">
          <TiThMenu onClick={() => setOpenDrawer(true)} />
        </Stack>

        {/* The Navigation links */}
        <Stack
          direction="row"
          spacing={3}
          ml="auto"
          alignItems="center"
          display={{ xs: "none", sm: "none", lg: "flex" }}
        >
          {/* My menu drawer */}
          <Box>
            <Drawer
              open={openDrawer}
              anchor="top"
              sx={{ zIndex: "200" }}
              onClose={(_e) => setOpenDrawer(false)}
            >
              <Box height="17rem" paddingBlock="4rem 1rem" paddingInline="1rem">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  color="#eb8a00"
                >
                  <Typography variant="h2" fontSize="1.5rem" fontWeight="bold">
                    Menu
                  </Typography>
                </Stack>
                <Stack pt={2} spacing={1}>
                  <Typography
                    variant="h6"
                    fontSize="1.1rem"
                    className="menu-link"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/"
                    >
                      Home
                    </Link>
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="1.1rem"
                    className="menu-link"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/destinations"
                    >
                      Destinations
                    </Link>
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="1.1rem"
                    className="menu-link"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/trips"
                    >
                      Trip Types
                    </Link>
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize="1.1rem"
                    className="menu-link"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </Typography>
                </Stack>
              </Box>
            </Drawer>
          </Box>
          <Typography>
            <Link
              to=""
              style={{ textDecoration: "none", color: "inherit" }}
              className="menu-link"
            >
              Home
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/destinations"
              style={{ textDecoration: "none", color: "inherit" }}
              className="menu-link"
            >
              Destinations
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/trips"
              style={{ textDecoration: "none", color: "inherit" }}
              className="menu-link"
            >
              Trip Types
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
              className="menu-link"
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
