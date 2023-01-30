import { Component } from "react"
import './SideNavbar.css';
import Navbar from "./Navbar";
class SideNavBar extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <div class="sidebar">
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

      
      </>

    )
  }
}
export default SideNavBar;
