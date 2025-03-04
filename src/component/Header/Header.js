import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    const divRef = useRef(null);
    const iconRef = useRef();
    const [menu, setMenu] = useState(false);

    const handleShowMenu = () => {
        setMenu(!menu);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (iconRef.current && e.target === iconRef.current) {
                setMenu(true);
            } else if (divRef.current && !divRef.current.contains(e.target)) {
                setMenu(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={`header ${menu && "active"}`}>
            <div className="header-container">
                <div className="header-left">
                    <a href="/">
                        <img className="header-left_logo" src={logo} alt="" />
                    </a>
                </div>
                <ul className={`header-left_listmenu ${menu && "active"}`} ref={divRef}>
                    <div className="header-left_listmenu_close" onClick={() => setMenu(!menu)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <li>
                        <Link to="/">TRANG CHỦ</Link>
                    </li>
                    <li>
                        <Link to="/about">VỀ CHÚNG TÔI</Link>
                    </li>
                    <li>
                        <Link to="/contact">LIÊN HỆ</Link>
                    </li>
                    <li>
                        <Link to="/franchise">NHƯỢNG QUYỀN</Link>
                    </li>
                    <li>
                        <Link to="/recruitment">TUYỂN DỤNG</Link>
                    </li>
                </ul>
                <div className="header-iconmenu" onClick={handleShowMenu}>
                    <i className="fa-solid fa-bars-staggered" ref={iconRef}></i>
                </div>
            </div>
        </div>
    );
};

export default Header;
