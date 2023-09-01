"use client";
import userImage from "../../assets/profile.png";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
const sidebarmenu = [
  { id: 1, name: "Home", link: "/" },
  {
    id: 2,
    name: "Notes",
    link: "/notes",
  },
  {
    id: 3,
    name: "Reminders",
    link: "/",
  },
  {
    id: 4,
    name: "Cloud Storage",
    link: "/files",
  },

  {
    id: 5,
    name: "Shedule Mails",
    link: "/mails",
  },
  {
    id: 6,
    name: "Signout",
    link: "/api/auth/signout",
  },
];
type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
type Props = {
  user: User;
  pagetype: string;
};
const userImg = {
  borderRadius: "100px",
};

export function Navigation({ user, pagetype }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar
      sx={{
        backdropFilter: "blur(10px)",
        position: "fixed",
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="info"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sidebarmenu.map((page) => (
              <Button
                key={page.id}
                href={page.link}
                sx={{
                  my: 2,
                  color: "#101418",
                  display: "block",
                  marginLeft: "1rem",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    textTransform: "none",
                    fontWeight: "bold",
                    fontFamily: "unset",
                  }}
                >
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              width={50}
              height={50}
              style={userImg}
              src={userImage}
              alt={""}
            />
            <Typography
              variant="body2"
              component="p"
              sx={{ marginLeft: "20px", color: "#101418" }}
            >
              {"Hi, " + user?.name}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
