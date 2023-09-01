"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";

export default function AddNotes() {
  return (
    <>
      <Grid container spacing={2} style={{ padding: 20, marginTop: "50px" }}>
        <Typography>add notes here</Typography>
      </Grid>
    </>
  );
}
