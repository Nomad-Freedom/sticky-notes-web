import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Note } from "../interfaces";

interface NoteProps {
  data: Note;
}

function Note({ data: { title, description, id } }: NoteProps) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, fontWeight: "bold" }}
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default Note;
