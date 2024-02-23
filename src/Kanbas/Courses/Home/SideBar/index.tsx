import React from "react";
import "./index.css";

function SideBar() {
  return (
    <div className="sidebar me-2 d-none d-xl-block" style={{ width: "250px"}}>
      <h3 className="sidebar-heading">Course Status</h3>
      <div className="button-container">
        <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>Unpublished</button>
        <button className="btn btn-primary" style={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>Published</button>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <ul className="wd-modules sidebar-list list-group" style={{borderLeft: '3px solid black'}}>
                <li className="sidebar-list-item list-group-item"><a href="#">Import Existing Content</a></li>
                <li className="sidebar-list-item list-group-item"><a href="#">Import From Commons</a></li>
                <li className="sidebar-list-item list-group-item"><a href="#">Choose Home Page</a></li>
                <li className="sidebar-list-item list-group-item"><a href="#">View Course Stream</a></li>
                <li className="sidebar-list-item list-group-item"><a href="#">New Announcement</a></li>
                <li className="sidebar-list-item list-group-item"><a href="#">New Analytics</a></li>
                <li className="sidebar-list-item list-group-item"><a href="#">View Course Notifications</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="sidebar-heading-upcoming">Coming Up</h3>
      <a href="#" className="btn btn-primary sidebar-view-calendar" style={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>View Calendar</a>
      <ul className="wd-modules sidebar-list list-group" style={{borderLeft: '3px solid black'}}>
        <li className="sidebar-list-item list-group-item"><a href="#">Lecture 1</a></li>
        <li className="sidebar-list-item list-group-item"><a href="#">Lecture 2</a></li>
        <li className="sidebar-list-item list-group-item"><a href="#">Lecture 3</a></li>
        <li className="sidebar-list-item list-group-item"><a href="#">Lecture 4</a></li>
      </ul>
    </div>
  );
}

export default SideBar;
