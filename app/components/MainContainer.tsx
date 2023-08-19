"use client";
import { styled } from "@mui/material";

const Main = styled("main")(({ theme }) => ({
  padding: "1rem",
}));

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Main>{children}</Main>;
}
