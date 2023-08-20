"use client";
import { Box, Typography } from "@mui/material";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
// export default async function Home() {
//   const session = await getServerSession(options);
//   return (
//     <Box sx={{ display: "grid", gap: 1 }}>
//       <Typography variant="h2" component="h2">
//         Welcome Dock Wave Web Store
//       </Typography>
//     </Box>
//   );
// }

import AppBar from "./components/AppBar";
import CommonTheme from "./components/MuiTheme";

export default function Home() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        paddingLeft: "300px",
        paddingTop: "130px",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: CommonTheme.palette.mode === "light" ? "#121212" : "#ffff",
        }}
      >
        Welcome to Home 👋
      </Typography>
    </Box>
  );
}
