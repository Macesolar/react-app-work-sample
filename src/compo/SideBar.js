import React from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const Sidebar = () => {
  return (
    <div className="sidebar bg-black">
      <h2><i class="bi bi-tv"></i></h2>
      <ul className="sidebar-list">
        <li><i class="bi bi-person"></i></li>
        <li><i class="bi bi-people"></i></li>
        <li><i class="bi bi-award"></i></li>
        <li><i class="bi bi-star"></i></li>
        <li><i class="bi bi-database-dash"></i></li>
        <li><i class="bi bi-gem"></i></li>
        <li><i class="bi bi-chat-square-dots"></i></li>
        <li><i class="bi bi-basket"></i></li>
        <li><i class="bi bi-door-closed"></i></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
