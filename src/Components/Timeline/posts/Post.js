import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post(props) {
  const { user, postImage, likes, timestamp } = props;

  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar className='just_photo'>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • 
          <span>{timestamp}</span>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className='postIcon' />
            <ChatBubbleOutlineIcon className='postIcon' />
            <SendIcon className='postIcon' />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className='postIcon' />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
}

export default Post;
