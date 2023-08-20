"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NoteCard from "../components/NoteCards";
import { Button, Grid, IconButton, Modal } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { NoteModal } from "../components/NoteModal";
const title = "Trip to Kandy";
const body =
  "Last Monday we went on a trip to Kandy. We gathered at the bus.Last Monday we went on a trip to Kandy. We gathered at the bus.Last Monday we went on a trip to Kandy. We gathered at the bus.Last Monday we went on a trip to Kandy. We gathered at the bus.Last Monday we went on a trip to Kandy. We gathered at the bus.";
const color = "#ffff";
export default function Notes() {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h3" component="h3">
        <Button
          endIcon={<AddOutlinedIcon />}
          sx={{ color: "green", fontSize: "17px", fontWeight: "bold" }}
        >
          Add Notes
        </Button>
      </Typography>

      <NoteCard title={title} body={body} bgcolor={color} />
    </Box>
  );
}
