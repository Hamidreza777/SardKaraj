import React from "react";
import Logo from "../../Pic/Logo.png";
import Headcss from "./Headcss.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Head = () => {
  return (
    <header>
      <nav>
        <img className={Headcss.logo} src={Logo}></img>
        <ul className={Headcss.menu}>
          <li>خانه</li>
          <li>نمایندگی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
        <GiHamburgerMenu className={Headcss.hamburger}/>
        <input  placeholder="جستجو"></input>
      
      </nav>
      <div className={Headcss.tel}>
        <p>اعزام فوری سرویسکار به تمام نقاط کرج</p>
        <a href="tel:02636778250">026-36778250</a>
        <a href="tel:02636778251">026-36778251</a>

      </div>
    </header>
  );
};

export default Head;
