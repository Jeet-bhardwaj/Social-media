import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const SideBar = ({sidebarItem , setSideBarItem}) => {

    return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: 280, height : 918}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">BELLE REVE</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() =>{setSideBarItem('Home')} }>
        <a href="#" className = {`nav-link text-white ${sidebarItem === 'Home' && 'active'}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={() =>{setSideBarItem('Create Post')} }>
        <a href="#" className = {`nav-link text-white ${sidebarItem === 'Create Post' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>
      <li onClick={() =>{setSideBarItem('Setting')} }>
        <a href="#" className = {`nav-link text-white ${sidebarItem === 'Setting' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Setting
        </a>
      </li>

      <li onClick={() =>{setSideBarItem('About')} }>
        <a href="#" className = {`nav-link text-white ${sidebarItem === 'About' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
          About
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </>
}
  
  
export default SideBar;
