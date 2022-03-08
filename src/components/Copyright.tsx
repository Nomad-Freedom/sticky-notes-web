import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Box } from "@mui/system";

export default function Copyright() {
  return (
    <Box component="footer" sx={{ marginTop: 2 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {" by "}
        <MuiLink color="inherit" href="https://mui.com/">
          Benny Hernandez
        </MuiLink>
      </Typography>
    </Box>
  );
}
