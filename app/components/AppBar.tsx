"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Box,
  ThemeProvider,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Image from "next/image";
import userImage from "../../assets/profile.png";
import CommonTheme from "./MuiTheme";
import CustomizedSwitches from "./MuiDarkModeSwitch";
import ControlledSwitches from "./MuiDarkModeSwitch";

import Switch from "@mui/material/Switch";
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
const style = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "350px",
  height: "100vh",
  boxShadow: 24,
};
export function Navigation({ user, pagetype }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [darkMode, setDarkMode] = React.useState(true);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={CommonTheme}>
      <AppBar
        sx={{
          backgroundColor:
            CommonTheme.palette.mode === "light" ? "transparent" : "121212",
          color: CommonTheme.palette.mode === "light" ? "black" : "#ffff",
          boxShadow: "none",
          py: 2,
        }}
        position="static"
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Button
              variant="text"
              disableRipple
              sx={{ padding: "1rem" }}
              onClick={handleOpen}
            >
              <MenuOutlinedIcon />
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Typography
              variant="h4"
              component="h4"
              sx={{ marginLeft: "24px" }}
            ></Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginRight: "24px" }}
            >
              {"Hi, " + user?.name}
            </Typography>
            <Box
              sx={{ width: "50px", height: "50px", overflow: "hidden", mr: 2 }}
            >
              <Image
                width={50}
                height={50}
                style={userImg}
                src={userImage}
                alt={""}
              />
            </Box>
            <CustomizedSwitches
              darkMode={false}
              handleDarkModeToggle={handleDarkModeToggle}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navigation;
