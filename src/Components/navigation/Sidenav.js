import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowIcon from "@mui/icons-material/Slideshow";
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from '../../contexts/AuthContexts';


function Sidenav() {

  const {logout} = useAuth();

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div className='sidenav__buttons'>
        <button className='sidenav__button'>
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className='sidenav__button'>
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className='sidenav__button'>
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </button>
        <button className='sidenav__button'>
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className='sidenav__button'>
          <TelegramIcon/>
          <span>Messages</span>
        </button>
        <button className='sidenav__button'>
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className='sidenav__button'>
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>
      <div className="sidenav__log">
        <button className='sidenav__button' onClick={logout}>
          <BiLogOut />
          <span>Log out</span>
        </button>
      </div>
    </div> 
  );
}

export default Sidenav;
