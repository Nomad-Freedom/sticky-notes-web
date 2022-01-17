import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Note } from "../interfaces";
import {
  getTime,
  isToday,
  isYesterday,
  getDateAndTime,
} from "../utils/dateTime";
import Box from "@mui/material/Box";

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
    <Card sx={{ width: "100%", backgroundColor: `${color}.main` }}>
      <Box sx={{ height: "0.75rem", backgroundColor: `${color}.dark` }}></Box>
      <CardContent sx={{ paddingTop: "0.5rem" }}>
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
