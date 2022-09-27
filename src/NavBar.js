import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
      display: "inline-block",
      width: "50px",
      padding: "12px",
      margin: "0 6px 6px",
      background: "blue",
      textDecoration: "none",
      color: "white",
    };
    
      return (
        <div>
          <NavLink
            to="/signupform"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >Sign Up
          </NavLink>
          <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >Home
          </NavLink>
          <NavLink
            to="/about"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >About
          </NavLink>
          <NavLink
            to="/login"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          > Login
          </NavLink>
        </div>
      );
    }

export default NavBar