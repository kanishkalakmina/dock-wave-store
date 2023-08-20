"use client";
import {
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Card,
  Box,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import CustomizedSwitches from "./MuiDarkModeSwitch";

interface Props {
  title: string;
  body: string;
  bgcolor: string;
}
export default function NoteCard({ title, body, bgcolor }: Props) {
  return (
    <Card sx={{ width: 400, height: 300 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            bgcolor,
          }}
        >
          <div>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1">{body}</Typography>
          </div>
          <CardActions>
            <div style={{ marginLeft: "auto", marginBottom: "30px" }}>
              <IconButton aria-label="edit" sx={{ color: "blue" }}>
                <ModeEditOutlinedIcon />
              </IconButton>{" "}
              <IconButton aria-label="delete" sx={{ color: "red" }}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </div>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
