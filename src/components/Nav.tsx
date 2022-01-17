import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";

export default function () {
  const { push } = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="h2"
            sx={{ cursor: "pointer" }}
            onClick={() => push("/")}
          >
            Sticky Notes
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="add note"
            sx={{ marginLeft: "auto" }}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
