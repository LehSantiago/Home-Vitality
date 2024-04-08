import React from 'react';
import './menu.css'; // Importando o CSS global
function Menu() {
  return (
    <div className="menu">
      <nav className="nav-bar">
        <div className="logo">
          <img className="logo" src="../logo.png" alt="Logo" />
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item"><a href="#" className="nav-link"> HOME </a></li>
            <li className="nav-item"><a href="#" className="nav-link"> CADASTRE-SE </a></li>
            <li className="nav-item"><a href="#" className="nav-link"> SOBRE-NÓS </a></li>
          </ul>
        </div>

   

      </nav>
    </div>
  );
}

export default Menu;
