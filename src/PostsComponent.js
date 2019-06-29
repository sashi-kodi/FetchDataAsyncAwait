import React, {useState, useEffect} from 'react';
import Post from './Post';
const PostsComponent = ()=>{
    const [posts, setPosts]= useState([]);
    
   
    useEffect(()=>{
    
    const getData = async(url)=>{
       const res= await fetch(url);
        const data = await res.json();
        setPosts(data);
    }
    
       getData("https://jsonplaceholder.typicode.com/posts");
        
        
    },[]);
    
    return(
    <React.Fragment>
        <h1>Posts</h1>
        {posts.map(post=>(
        <Post key={post.id} post={post} />
    ))}
    </React.Fragment>
    )
}
export default PostsComponent;