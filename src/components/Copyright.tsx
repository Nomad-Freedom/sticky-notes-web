import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Box } from "@mui/system";

export default function Copyright() {
  return (
    <Box
      component="footer"
      sx={{ position: "fixed", bottom: "0", width: "100%" }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://mui.com/">
          Your Website
        </MuiLink>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
