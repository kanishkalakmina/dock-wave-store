"use client";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
export default function Notes() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        paddingLeft: "300px",
        paddingTop: "100px",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="h4">
        Welcome to Notes 👋
      </Typography>
    </Box>
  );
}
