import React, { ReactNode, useState } from 'react';
import { FaHome, FaRegArrowAltCircleRight, FaUserEdit, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css'

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
    <div className={style.container}>
        <div style={{ width:isOpen ? "200px" : "50px" }} className={style.sidebar}>
            <div className={style.top_section}>
                <div className={style.bars}>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className={style.link}>
                    <div className={style.icon}>{item.icon}</div>
                    <div className={style.link_text}>{item.name}</div>
                    </NavLink>
            ))
            }
        </div>
      {children}
    </div>
  );
};

export default Sidebar;
