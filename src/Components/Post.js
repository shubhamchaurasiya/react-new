import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Post = () => {
    const [crypto, setCrypto] = useState([]);

    useEffect( () => {
        axios.get('https://listpro.xyz/wp-json/wp/v2/posts').then((response) => {
            setCrypto(response.data);
            console.log(crypto)
        });

    },[]);

    return(
       <div>  
              {crypto[0].id}
       </div>
    )
}
export default Post;
