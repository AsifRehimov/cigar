import './header.scss'
import logo from "./media/logo.png"
import search from "./media/search.png"
import btnHamburger from "./media/btnHamburger.png"
import { useState } from 'react'
import Fade from '@successtar/react-reveal/Fade';

export default function Header() {
    const [searchinput, setSearchinput] = useState(false)
    return (
        <>
            <Fade top duration={1000}>
                <div className='w-100 d-none d-lg-block position-absolute white-line'></div>
                <nav className="navbar navbar-expand-lg  container">
                    <div className="container-fluid">

                        <a href="!#" className="navbar-brand">
                            <img src={logo} alt="logo" className="" />
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={btnHamburger} alt="logo" className="" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className='list-nav my-auto'>
                                <li>
                                    <div className={searchinput ? "nav-right-big nav-right" : "nav-right-small nav-right"}>
                                        <select>
                                            <option>En</option>
                                            <option>RU</option>
                                            <option>Az</option>
                                        </select>
                                        {
                                            searchinput ? <input type='text' /> : ""
                                        }
                                        <img src={search} alt="search" onClick={() => setSearchinput(!searchinput)} />
                                    </div>
                                </li>
                                <li className='d-lg-none'>About</li>
                                <li className='d-lg-none'>Contact</li>
                                <li className='d-lg-none'>Cigars</li>
                                <li className='d-lg-none'>Cigarrillos</li>
                                <li className='d-lg-none'>Gift sets</li>
                                <li className='d-lg-none'>Accessories</li>
                                <li className='d-lg-none'>Tobacco</li>

                            </ul>


                        </div>
                        <div className="d-none d-lg-block " id="navbarNav">

                        </div>
                        <div className="collapse navbar-collapse w-100 d-none d-lg-block nav-bottom-div" id="navbarNav">
                            <div className='select-type'>
                                <a href='!#'>Cigars</a>
                                <a href='!#'>Cigarrillos</a>
                                <a href='!#'>Gift sets</a>
                                <a href='!#'>Accessories</a>
                                <a href='!#'>Tobacco</a>
                            </div>
                            <div className='select-menu'>
                                <a href='!#'>About</a>
                                <a href='!#'>Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </Fade>
        </>
    )
}
//   <div className="nav-left">
// <a href="!#">About</a>
// <a href="!#">Contact</a>
// </div>