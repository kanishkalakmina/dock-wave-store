"use client";
import type { Metadata } from "next";
import AuthProvider from "./context/AuthProvider";
import { Box, Typography } from "@mui/material";
import Sidebar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import AppBar from "./components/AppBar";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import LandingPage from "./components/LandingPage";
export const metadata: Metadata = {
  title: "DOCKWAVE STORE",
  description: "To upload and store important files",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <AuthProvider>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Sidebar />
            </Box>
            <Box sx={{ flex: 1, backgroundColor: "#f8f8f8" }}>
              <AppBar user={session?.user} pagetype={""} />
              <MainContainer>{children}</MainContainer>
            </Box>
          </Box>
        </AuthProvider>
      ) : (
        <>
          <LandingPage />
        </>
      )}
    </>
  );
}
