import React, { ReactNode } from 'react';
import { FaHome, FaRegArrowAltCircleRight, FaUserEdit, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const menuItem = [
    {
        path: '/',
        name: 'home',
        icon: <FaHome />,
    },
    {
        path: 'login',
        name: 'Login',
        icon: <FaRegArrowAltCircleRight />,
    },
    {
        path: 'sign-up',
        name: 'Sign-up',
        icon: <FaUserEdit />,
    },
  ];

  return (
    <div className="container">
        <div className="sidebar">
            <div className="top_section">
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link">
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                    </NavLink>
            ))
            }
        </div>
      {children}
    </div>
  );
};

export default Sidebar;
