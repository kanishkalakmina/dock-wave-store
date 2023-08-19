import { Box, Typography } from "@mui/material";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
export default async function Home() {
  const session = await getServerSession(options);
  return (
    <Box sx={{ display: "grid", gap: 1 }}>
      <Typography variant="h2" component="h2">
        Welcome Dock Wave Web Store
      </Typography>
    </Box>
  );
}
