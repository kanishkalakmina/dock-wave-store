import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
  useTheme,
  Card,
  List,
  ThemeProvider,
} from "@mui/material";
import Link from "next/link";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import logoItem from "./logo.svg";
import Image from "next/image";
import CommonTheme from "./MuiTheme";

const sidebarmenu = [
  { id: 1, name: "Home", link: "/", icon: <HomeOutlinedIcon /> },
  {
    id: 2,
    name: "Add notes",
    link: "/notes",
    icon: <EditNoteOutlinedIcon />,
  },
  {
    id: 3,
    name: "Add reminders",
    link: "/",
    icon: <DateRangeOutlinedIcon />,
  },
  {
    id: 4,
    name: "Store files",
    link: "/files",
    icon: <CloudUploadOutlinedIcon />,
  },

  {
    id: 5,
    name: "Shedule mails",
    link: "/mails",
    icon: <MailOutlineOutlinedIcon />,
  },
  {
    id: 6,
    name: "Signout",
    link: "/api/auth/signout",
    icon: <PowerSettingsNewOutlinedIcon />,
  },
];

const MenuLink = styled(Link)(({ theme }) => ({
  display: "block",
  width: "100%",
  textDecoration: "none",
}));

export function SidebarMenu() {
  return (
    <Box>
      {sidebarmenu.map((menu, index) => (
        <ListItem disablePadding key={menu.id}>
          <MenuLink href={menu.link}>
            <ListItemButton
              sx={{
                padding: "1.2rem 3rem",
                fontWeight: 500,
              }}
            >
              <ListItemIcon>
                {React.cloneElement(menu.icon, {
                  style: {
                    color:
                      CommonTheme.palette.mode === "light"
                        ? "A2A2BF"
                        : "#E1E1E1",
                    // index === sidebarmenu.length - 1 ? "#A586FD" : "#A586FD",
                  },
                })}
              </ListItemIcon>
              <ListItemText
                primary={menu.name}
                primaryTypographyProps={{
                  style: {
                    color:
                      CommonTheme.palette.mode === "light"
                        ? "A2A2BF"
                        : "#E1E1E1",
                    // index === sidebarmenu.length - 1 ? "red" : "#A2A2BF",
                  },
                }}
              />
            </ListItemButton>
          </MenuLink>
        </ListItem>
      ))}
    </Box>
  );
}

export function Sidebar() {
  const SideCard = styled(Card)(({ theme }) => ({
    width: "280px",
    height: "100vh",
    border: "none",
    boxShadow: "none",
    backgroundColor: CommonTheme.palette.mode === "light" ? "#ffff" : "#292929",
  }));

  return (
    <SideCard>
      <List>
        <Box p={6} sx={{ marginTop: "-53px" }}>
          {/* <Image src={logoItem} alt="Bistec Care" /> */}
        </Box>
        <SidebarMenu />
      </List>
    </SideCard>
  );
}

export default Sidebar;
