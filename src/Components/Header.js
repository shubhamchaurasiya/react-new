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

const Header = () => {
    const baseurl = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    const [post, setPost] = React.useState([]);

    React.useEffect( () => {
          axios.get(baseurl).then((response)=> {
              setPost(response.data);
          });
        },[]);
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
            
            
              <Card className="">
              <CardMedia
                  className={post.title}
                  image={post.id}
                />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {post.id}.{post.title}
                  </Typography>

                  <Typography color="textSecondary" variant="subtitle2">
                    {post.body}
                  </Typography>
                  <Button variant="contained" color="primary">
                        Hello World
                    </Button>
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