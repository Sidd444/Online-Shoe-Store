import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <div>
        <img
          id="logo"
          src="https://th.bing.com/th/id/OIF.qlhD1HbHWp9hhAI4nLqUHg?rs=1&pid=ImgDetMain"
        />
      </div>
      <Link to='/'><button>Home</button></Link>
      <Link><button>Categories</button></Link>
      <Link><button>About Us</button></Link>
    </div>
  );
}
