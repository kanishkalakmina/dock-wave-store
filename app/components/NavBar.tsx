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
} from "@mui/material";
import Link from "next/link";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import logoItem from "./logo.svg";
import Image from "next/image";

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
    name: "Store files",
    link: "/files",
    icon: <CloudUploadOutlinedIcon />,
  },
  {
    id: 4,
    name: "Shedule mails",
    link: "/mails",
    icon: <MailOutlineOutlinedIcon />,
  },
  {
    id: 5,
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
      {sidebarmenu.map((menu) => (
        <ListItem disablePadding key={menu.id}>
          <MenuLink href={menu.link}>
            <ListItemButton sx={{ padding: "1.2rem 3rem", fontWeight: 500 }}>
              <ListItemIcon>
                {React.cloneElement(menu.icon, { style: { color: "#A586FD" } })}
              </ListItemIcon>
              <ListItemText
                primary={menu.name}
                primaryTypographyProps={{
                  style: { color: "#A2A2BF" },
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
    backgroundColor: "#ffff",
  }));

  return (
    <SideCard>
      <List>
        <Box p={6} sx={{ marginTop: "-53px" }}>
          <Image src={logoItem} alt="Bistec Care" />
        </Box>
        <SidebarMenu />
      </List>
    </SideCard>
  );
}

export default Sidebar;
