import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FileUpload from "react-mui-fileuploader"
import { Grid, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function PostDialog(props) {

  const theme = createTheme();
  const [postFile, setPostFile] = React.useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      userLink: data.get('userLink'),
      codeLink: data.get('codeLink'),
      videoLink: data.get('videoLink'),
      downloadLink: data.get('downloadLink'),
      uploadedFile: postFile[0],
      hide: (data.get('hide') ? true : false),
    });
  }


  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5">
                  {props.title}
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        name="title"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="userLink"
                        label="Demo link"
                        name="userLink"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="codeLink"
                        label="Code source"
                        type="url"
                        id="codeLink"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="videoLink"
                        label="Video link"
                        type="url"
                        id="videoLink"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="downloadLink"
                        label="Download link"
                        type="url"
                        id="downloadLink"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox name="hide"
                          id="hide" value="true" color="primary" />}
                        label="Hide content."

                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FileUpload
                        title={"Choice the file"}
                        multiFile={false}
                        header="Drag to drop"
                        leftLabel="or"
                        rightLabel="to select files"
                        buttonLabel="click here"
                        buttonRemoveLabel="Remove all"
                        errorSizeMessage={'fill it or move it to use the default error message'}
                        bannerProps={{ elevation: 0, variant: "outlined" }}
                        containerProps={{ elevation: 0, variant: "outlined" }}
                        onFilesChange={setPostFile}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create
                  </Button>

                </Box>
              </Box>

            </Container>
          </ThemeProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Disagree</Button>
          <Button onClick={props.handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>

      </Dialog>
    </React.Fragment>
  );
}
