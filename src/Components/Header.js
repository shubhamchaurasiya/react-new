import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },
    media: {
      height: 300,
    },
  });

const Header = () => {
    const baseurl = "https://finalspaceapi.com/api/v0/character/?limit=12";
    const [post, setPost] = React.useState([]);

    React.useEffect( () => {
          axios.get(baseurl).then((response)=> {
              setPost(response.data);
          });
        },[]);
        const classes = useStyles();
  return (
    <div>
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          React Material UI Example{" "}
        </Typography>
        <Grid container spacing={3}>
          {post.map((post) => (
            <Grid item xs={12} sm={4} key={post.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={post.img_url}
                />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {post.id}.{post.name}
                  </Typography>

                  <Typography color="textSecondary" variant="subtitle2">
                    {post.status}
                  </Typography>
           
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
      
    
  )
}

export default Header