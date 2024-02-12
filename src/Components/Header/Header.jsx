import "./Header.scss";
import Logo from "../img/Logo.png"
import React from "react";

function Header() {
    const xRef = React.useRef()

    return (
        <>
        <header className="header">
            <div className="container">
                <a className="header__link__logo" href="#link">
                    <img className="header__logo" src={Logo} alt="logo"  width={189} height={40}/>
                </a>

                <ul className="list">
                    <li className="item">
                        <a className="header__link" href="https://my-first-real-proekt-1t5z5eiou-muslimbeksalimovs-projects.vercel.app/">Features</a>
                    </li>

                    <li className="item">
                        <a className="header__link" href="https://myportfolio-five-flame.vercel.app/">Pricing & Plans</a>
                    </li>

                    <li className="item">
                        <a className="header__link" href="https://our-proekt-hn5dii91u-muslimbeksalimovs-projects.vercel.app/">Support</a>
                    </li>

                    <li className="item">
                        <a className="header__link" href="https://4-oy-imtixon-gzng43942-muslimbeksalimovs-projects.vercel.app/login.html">About Us</a>
                    </li>
                </ul>

                <div className="modal__none">
                    
                </div>

                <button  className="header__button" onClick={() => {
                    xRef.current.classList.add("sign__modal")
                }}>Contact Us</button>


                <div className="modal__sign" ref={xRef}>
                    <button className="modal__exit" ref={xRef} onClick={() => {
                        xRef.current.classList.remove("sign__modal")
                    }}>X</button>
                        <h2 className="modal__heading">Hisobga kirish ushun</h2>
                        <form className="form">
                            <input className="login" type="text" placeholder="Login"/>
                            <input className="pasword" type="password" placeholder="Password"/>

                            <button type="submit" className="modal__button">Log in</button>
                        </form>
                </div>

            </div>
        </header>
        </>
    )
}
export default Header;