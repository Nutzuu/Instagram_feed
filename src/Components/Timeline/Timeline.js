import React, { useState } from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "hordila_radu",
      postImage: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
      likes: 22,
      timestamp: "4d"
    },
    {
      user: "rominacazan",
      postImage: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713744000&semt=ais",
      likes: 67,
      timestamp: "2d"
    },
    {
      user: "vlad_musteata",
      postImage: "https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH",
      likes: 31,
      timestamp: "1d"
    },
    {
      user: "claudiu_vitelaru",
      postImage: "https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg",
      likes: 1,
      timestamp: "1d"
    },
  ]);

  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className="timeline__posts">
          {posts.map((post, index) => (
            <Post 
                  user={post.user} 
                  postImage={post.postImage} 
                  likes={post.likes} 
                  timestamp={post.timestamp} />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
