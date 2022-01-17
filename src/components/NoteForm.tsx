import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Note } from "../interfaces";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { Box } from "@mui/material";

interface NoteFormProps {
  data: Note;
  handleDelete: () => void;
}

function NoteForm({
  data: { title, description, id, color },
  handleDelete,
}: NoteFormProps) {
  return (
    <Card sx={{ width: "100%", backgroundColor: `${color}.main` }}>
      <Box
        sx={{
          paddingX: 2,
          backgroundColor: `${color}.dark`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="delete note"
          onClick={handleDelete}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="medium"
          edge="end"
          color="inherit"
          aria-label="delete note"
          onClick={handleDelete}
        >
          <SendIcon fontSize="small" />
        </IconButton>
      </Box>
      <CardContent>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            borderBottom: "1px solid rgba(0, 0, 0, .2)",
          }}
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

export default NoteForm;
