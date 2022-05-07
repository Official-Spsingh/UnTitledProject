import React from 'react'
import { Link } from 'react-router-dom'
import { navbar_headerLabel, navbar_navItem1, navbar_navItem2, navbar_themeLabel } from '../../statics/labels'
const NavBar = ({ theme, settheme }) => {
    const toggleTheme = (e) => {
        if (e.target.checked) {
            settheme('dark')
        }
        else {
            settheme('light')
        }
    }
    return (
        <nav className={`navbar ${theme}`}>
            <div className="header">
                <Link to="/">{navbar_headerLabel}</Link>
            </div>
            <div className="navs">
                <ul className='nav-list'>
                    <li className='nav-item'><Link to="/">{navbar_navItem1}</Link></li>
                    <li className='nav-item'>{navbar_navItem2}</li>
                    <li className='nav-item'>
                        <label class="switch">
                            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark' ? true : false} />
                            {navbar_themeLabel}
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar