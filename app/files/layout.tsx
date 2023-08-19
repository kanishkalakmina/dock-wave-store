"use client";
import type { Metadata } from "next";
import { Box } from "@mui/material";
export const metadata: Metadata = {
  title: "DOCKWAVE STORE",
  description: "To upload and store important files",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: { xs: "none", md: "block" } }}></Box>
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );
}
