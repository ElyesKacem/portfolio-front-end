import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./index.scss";
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>
                    {/* {renderPortfolio(portfolio)} */}
                </div>
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
        </>
    );
}

export default Portfolio;