import { Box, Typography } from "@mui/material";

export default function Files() {
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
        Welcome to Files 👋
      </Typography>
    </Box>
  );
}
