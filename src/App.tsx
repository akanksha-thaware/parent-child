import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from '@mui/icons-material/Google';
import Box from "@mui/material/Box";
import ButtonComp from "./atoms/Button";
import CheckBox from "./atoms/CheckBox";
import TextFieldComp from "./atoms/TextField";
import TypographyComp from "./atoms/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
function App() {
  return (
    <>
      <Box
      display='flex'
      justifyContent='center'
      sx={{height: '98vh'}}
      >
          <Card sx={{ width: "380px", marginTop: 2, padding: 3 }}>
            <CardContent>
              <Typography variant="h4" sx={{ mb: 1.5 }} fontSize="25px">
                Sign in
              </Typography>
              <TypographyComp
                variant="body2"
                text="Please enter your login credentials"
                color="text.secondary"
                fontSize="14px"
              />
              <TextFieldComp label="Email" />
              <TextFieldComp label="Password" />
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <CheckBox label="Remember me" color="rgba(0,0,0,0.6)" />
                <TypographyComp
                  variant="body2"
                  text="Forgot Password?"
                  fontSize="14px"
                  color="blue"
                />
              </Grid>
              <Box
                sx={{
                  width: "100%",
                  mb: "15px",
                  mt: "6px",
                }}
              >
                <ButtonComp variant="contained" text="Sign in" />
              </Box>
              <Box textAlign='center' sx={{mb: '10px'}}>or</Box>
              <Box
                sx={{
                  width: "100%",
                  mb: "15px",
                }}
              >
                <ButtonComp
                  variant="outlined"
                  text="Sign in with Google"
                  icon={<GoogleIcon />}
                  color="black"
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  mb: "15px",
                }}
              >
                <ButtonComp
                  variant="outlined"
                  text="Sign in with GitHub"
                  icon={<GitHubIcon />}
                  color="black"
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TypographyComp
                  variant="h6"
                  text="Don't have an account?"
                  fontSize="14px"
                  marginRight="5px"
                />
                  <TypographyComp
                  variant="h6"
                  text="Sign up"
                  fontSize="14px"
                  color="blue"
                />
              </Box>
            </CardContent>
          </Card>
          </Box>
    </>
  );
}

export default App;

