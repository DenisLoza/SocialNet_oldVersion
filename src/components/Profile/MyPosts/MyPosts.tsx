import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div className={c.myPosts}>
        <div>
          Hello!
        </div>
        <Post />
        <Post />
        <Post />
      </div>
    );
}
export default MyPosts;