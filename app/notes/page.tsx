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
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Link from "next/link";
const hardcodedData = [
  {
    title: "Card 1",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#fb7185",
  },
  {
    title: "Card 2",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#c026d3",
  },
  {
    title: "Card 3",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#6366f1",
  },
  {
    title: "Card 4",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#0891b2",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
  {
    title: "Card 5",
    date: "September 14, 2016",
    content: "This is the content of Card 1.",
    color: "#d97706",
  },
];

export default function Notes() {
  return (
    <>
      <Grid container spacing={2} style={{ padding: 20, marginTop: "50px" }}>
        {hardcodedData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ backgroundColor: data.color }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={data.title}
                subheader={data.date}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Link href={"/notes/edit"} style={{ textDecoration: "none" }}>
                  <IconButton aria-label="edit">
                    <CreateOutlinedIcon />
                  </IconButton>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link href={"/notes/add"} style={{ textDecoration: "none" }}>
        <Fab
          color="warning"
          aria-label="add"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
}
