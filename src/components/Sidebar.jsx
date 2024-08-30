import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaAngleDown,
    FaAngleUp
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(null); // To manage the dropdown

    const toggle = () => setIsOpen(!isOpen);

    const handleDropdownToggle = (index) => {
        if (dropdownOpen === index) {
            setDropdownOpen(null);
        } else {
            setDropdownOpen(index);
        }
    };

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/services",
            name: "Service",
            icon: <FaShoppingBag />,
            submenu: [
                { path:"/services/listofservice", name: "List of Service" },
            ]
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">PAZL</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <div key={index}>
                            <NavLink to={item.path} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                    {item.name}
                                    {item.submenu && (
                                        <span onClick={() => handleDropdownToggle(index)} style={{ marginLeft: "10px" }}>
                                            {dropdownOpen === index ? <FaAngleUp /> : <FaAngleDown />}
                                        </span>
                                    )}
                                </div>
                            </NavLink>
                            {item.submenu && dropdownOpen === index && isOpen && (
                                <div className="submenu">
                                    {item.submenu.map((subItem, subIndex) => (
                                        <NavLink to={subItem.path} key={subIndex} className="link" activeclassName="active">
                                            <div className="link_text">{subItem.name}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
