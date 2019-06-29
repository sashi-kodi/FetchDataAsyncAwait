import React from 'react';
const Post = ({post})=>{
    const titleStyle={color:'green', fontWeight:700};
    return(
    <div style={{textAlign:'left'}}>
       <p style={titleStyle}> {post.title} </p>
          <p> {post.body} </p>
    </div>
    )
}
export default Post;