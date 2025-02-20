import { useState, createRef, useEffect } from 'react'
import './navbar.css'
import navbar_Waffle from '../assets/waffle.png';
import waffle_bk from '../assets/bk_gloop_big.png';
import waffle_bk_dark from '../assets/bk_gloop_big_dark.png';
import { useNavigate } from 'react-router';
import { selectIcon, handleIconClick } from '../libs/button_helper';

let waffle_clicked = false;
let [mininav_status, setMiniNavStatus] = [null, () => { }];
let handleClick = () => { };
let handleIconClickWrapper = () => { };
let navigate = () => { };
let setCurrentPageCallback = () => { };

function MiniNavButton({title}) {
  return (
    <button 
      className={`mini_nav_${title.replaceAll(/\s/g, "_").toLowerCase()} mini_nav_button`}
      onMouseDown={(e) => handleClick(e)} 
    >
      {title}
    </button>
  )
}

function NavButton({title}) {
  return (
    <button 
      className={`navbar_button`}
      onMouseDown={(e) => handleClick(e)} 
    >
      {title}
    </button>
  )
}

function MiniNavIcon({icon_name}) {
  return (
    <div className={`navbar_icon mini_nav_icon_${icon_name}`}>
      <img
        src={selectIcon(icon_name)}
        id={icon_name}
        onMouseDown={(e) => handleIconClickWrapper(e, navigate, setCurrentPageCallback, mininav_status, setMiniNavStatus)} 
      />
    </div>
  )
}

function NavIcon({icon_name}) {
  return (
    <div className='navbar_icon'>
      <img
        src={selectIcon(icon_name)}
        id={icon_name}
        onMouseDown={(e) => handleIconClick(e, navigate, setCurrentPageCallback, mininav_status, setMiniNavStatus)} 
      />
    </div>
  )
}


function Navbar({ setCurrentPage }) {
  setCurrentPageCallback = setCurrentPage;
  const waffle_ref = createRef();
  const mini_home_icon = createRef();
  const mini_home_ref = createRef();
  const x_ref = createRef();
  const x_icon = createRef();
  const waffle_icon = createRef();
  const waffle_bk_img = createRef();

  const navigate = useNavigate();
  [mininav_status, setMiniNavStatus] = useState(false);

    const decide_dark = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return waffle_bk_dark;
      } else {
        return waffle_bk;
      }
    }

  const resetWaffleIcon = () => {
    waffle_ref.current.style.display = "inline";
    x_ref.current.style.display = "none";
    waffle_bk_img.current.style.display = "inline";
    waffle_clicked = false;
  }
  handleIconClickWrapper = (e, navigate, setCurrentPage, mininav_status, setMiniNavStatus) => {
    resetWaffleIcon();
    handleIconClick(e, navigate, setCurrentPage, mininav_status, setMiniNavStatus);
  }

  handleClick = (e) => {
    if (mininav_status) {
      document.body.style.setProperty("overflow",  "visible");
      setMiniNavStatus(!mininav_status);
    }
    resetWaffleIcon();
    setCurrentPageCallback(e.target.textContent);
    navigate("/" + e.target.textContent.trim().replace(" ", "-"));
  }

  const closeMiniNavMenu = () => {
    resetWaffleIcon();
    document.body.style.setProperty("overflow",  "visible");
    setMiniNavStatus(!mininav_status);
  }

  const handleMiniNav = (e) => {
    if (mininav_status) {
      document.body.style.setProperty("overflow",  "visible");
    } else {
      document.body.style.setProperty("overflow",  "hidden");
    }
    waffle_clicked = !waffle_clicked;
    if (waffle_clicked) {
      waffle_ref.current.style.display = "none";
      waffle_bk_img.current.style.display = "none";
      x_ref.current.style.display = "inline";
      // waffle_icon.current.style.display = "none";
    } else {
      resetWaffleIcon();
    }
    setMiniNavStatus(!mininav_status);;
  }

  const navHomeIcon = (
    <div className='nav_home'>
      <div 
        className='nav_home_icon'
        ref={mini_home_ref}
        onClick={(e) => handleIconClickWrapper(e, navigate, setCurrentPageCallback, mininav_status, setMiniNavStatus)}>
        <img src={selectIcon("home")} ref={mini_home_icon} id="home"/>
      </div>
    </div>
  );

  const miniNavHomeIcon = (
    <div 
      className='mini_nav_icon_home'
      ref={mini_home_ref}
      onClick={(e) => handleIconClickWrapper(e, navigate, setCurrentPageCallback, mininav_status, setMiniNavStatus)}>
      <img src={selectIcon("home")} ref={mini_home_icon} id="home"/>
    </div>
  );

  const navXIcon = (
    <div 
      className='x_button'
      ref={x_ref}
      onClick={(e) => closeMiniNavMenu()}>
      <img src={selectIcon("x")} ref={x_icon} id="x"/>
    </div>
  );

  const retrieveNavDOMElements = () => {
    if (mininav_status) {
      return (
        <div className="veil" onClick={() => closeMiniNavMenu()}>
          {miniNavHomeIcon}
          <MiniNavButton title="About Me"/>
          <MiniNavButton title="Background"/>
          <MiniNavButton title="Portfolio"/>
          <MiniNavIcon icon_name="mail"/>
          <MiniNavIcon icon_name="resume"/>
          <MiniNavIcon icon_name="github"/>
          <MiniNavIcon icon_name="linked_in"/>
        </div>
      );
    } else return (<></>);
  }

  return (
    <>
      <nav className='normal_nav'>
        <div className='nav_home'>
          {navHomeIcon}        
        </div>
        <div className='nav_pages'>
          <NavButton title="About Me"/>
          <NavButton title="Background"/>
          <NavButton title="Portfolio"/>
        </div>
        <div className='nav_contact'>
          <NavIcon icon_name="mail"/>
          <NavIcon icon_name="resume"/>
          <NavIcon icon_name="github"/>
          <NavIcon icon_name="linked_in"/>
        </div>
      </nav>
      <nav className='mini_nav'>
        {retrieveNavDOMElements()}
        {navXIcon}
        <img className='waffle_bk' ref={waffle_bk_img} src={decide_dark()}/>
        <button className='nav_waffle' ref={waffle_ref} onClick={(e) => handleMiniNav(e)}>
          <img src={navbar_Waffle} ref={waffle_icon}/>
        </button>
      </nav>
    </>
  )
}

export default Navbar;
