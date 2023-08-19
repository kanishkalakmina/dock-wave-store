import { Box, Typography } from "@mui/material";

export default function Notes() {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h2" component="h2">
        Add Notes
      </Typography>
    </Box>
  );
}
