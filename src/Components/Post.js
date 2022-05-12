import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Post = () => {
    const [crypto, setCrypto] = useState([]);
    const styles = {
        box:{
            width:"600px",
            margin: 0,
            padding: 0
            }
    };

    useEffect( () => {
        axios.get('https://listpro.xyz/wp-json/wp/v2/posts').then((response) => {
            setCrypto(response.data); 
            console.log(crypto)
        });
    },[]);
    const [media,setMedia] = useState([]);
    useEffect( () => {
      axios.get('https://listpro.xyz/wp-json/wp/v2/media').then((response) => {
        setMedia(response.data)
      });
    }
    );

    return(
        <div className="container">  
        <h1> Example of React Map Loop </h1>  
     
        <table className="table table-bordered">  
            <tr>  
                <th>ID</th>  
                <th>Title</th>  
                <th>Content</th>  
            </tr>  
            {crypto.map((crypto, index) => (  
             <tr data-index={index}>  
              <td>{crypto.id}</td>  
              <td>{crypto.title.rendered}</td>  
              <td>{crypto.excerpt.rendered}</td>  
             </tr>  
            ))} 
    
        </table>  
    
    </div>  
      
    )
}
export default Post;
