import React from "react"
import "./MenuFlyout.css";

export function MenuFlyout(){
    return(
        <div 
        onMouseEnter={() => {
            document.querySelector(".app-menu-flyout").classList.add("app-menu-flyout--hoover");
          }}
          onMouseLeave={() => {
            document.querySelector(".app-menu-flyout--hoover").classList.remove("app-menu-flyout--hoover");
          }}
        className="app-menu-flyout">
           <p>about</p>
           <p>tasks</p>
        </div>
    ) 
}
