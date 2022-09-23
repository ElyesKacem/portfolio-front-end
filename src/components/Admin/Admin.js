import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import '../Portfolio/index.scss'
import ProjectCard from "../ProjectCard/ProjectCard";
import PostDialog from "../PostDialog/PostDialog";

function Admin() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    useEffect(() => {
        // console.log(window.location.href);
    
      return () => {
        
      }
    }, [])
    
  return (
    <React.Fragment>
       
        <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Admin".split("")}
                        idx={15}
                    />
                </h1>
                <Button onClick={handleClickOpen} variant="contained" color="success" style={{fontSize:'small',textTransform:'none'}}>
  Add new post
</Button>
<br />
<br />
                <Grid container spacing={3}>
                    <Grid item>
                        <ProjectCard/>

                    </Grid>
                    <Grid item>
                        <ProjectCard/>

                    </Grid>
                    <Grid item>
                        <ProjectCard/>
                    </Grid>
                    <Grid item>
                        <ProjectCard/>
                    </Grid>
                    <Grid item>
                        <ProjectCard/>
                    </Grid>
                </Grid>
                
            </div>
            <Loader type="pacman" />
            <PostDialog title={"Create new post"} handleClose={handleClose} open={open} />
    </React.Fragment>
  )
}

export default Admin