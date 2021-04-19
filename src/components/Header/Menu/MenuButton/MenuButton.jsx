
import React from 'react';
import "./MenuButton.css"
import menuSvg from "./menu.svg"

export function MenuButton(){
    return(
        <div
        onMouseEnter={() => {
            document.querySelector(".app-menu-flyout").classList.add("app-menu-flyout--hoover");
          }}
          onMouseLeave={() => {
            document.querySelector(".app-menu-flyout--hoover").classList.remove("app-menu-flyout--hoover");
          }}
          className="app-menu-button">
            <img src={menuSvg} alt="menu" className="menu-button"></img>
        </div>
    ) 
}
