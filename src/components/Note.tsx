import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Note } from "../interfaces";
import {
  getTime,
  isToday,
  isYesterday,
  getDateAndTime,
} from "../utils/dateTime";

interface NoteProps {
  data: Note;
}

function Note({
  data: { title, description, id, color, created_at },
}: NoteProps) {
  const today = isToday(created_at);
  const yesterday = isYesterday(created_at);
  const otherDay = today === false && yesterday === false;

  return (
    <Card sx={{ width: "100%", backgroundColor: `${color}` }}>
      <CardContent>
        {today && (
          <Typography align="right" variant="caption" component={"p"}>
            today @ {getTime(created_at)}
          </Typography>
        )}
        {yesterday && (
          <Typography align="right" variant="caption" component={"p"}>
            yesterday @ {getTime(created_at)}
          </Typography>
        )}
        {otherDay && (
          <Typography align="right" variant="caption" component={"p"}>
            {getDateAndTime(created_at)}
          </Typography>
        )}

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

export default Note;
