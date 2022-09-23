import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80"
        style={{height:'100%'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{textTransform:'none',fontSize:'medium'}}>Demo</Button>
        <Button style={{textTransform:'none',color:'green',fontSize:'medium'}}>Code</Button>
        <Button style={{textTransform:'none',color:'red',fontSize:'medium'}}>Video</Button>
        <Button style={{textTransform:'none',color:'orange',fontSize:'medium'}}>Download</Button>
      </CardActions>
    </Card>
  );
}
