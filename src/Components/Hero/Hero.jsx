import "./Hero.scss"
import Player from "../img/Play.png"
import HappyGirl from "../img/happygirl.png"
import Links from "../img/links.png"
import Price from "../img/price.png"
import k50k from "../img/50k.png"
import Client from "../img/Client.png"
import React from "react"


function Hero() {

    
    const refX = React.useRef()
    const xRef = React.useRef()


    return (
        <>
        <section className="hero">
            <div className="container">
                <div className="hero__info">
                <h1 className="heading">Best
                     <span className="heading__span">Marketing

                        <span className="spanQ">•</span>
                        <span className="spanL">•</span>
                        <span className="spanF">•</span>
                        <span className="spanH">•</span>

                         </span>
                         <br></br>
                         Digital Agency
                    </h1>
                  <p className="text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>

                <div className="button__div">
                    <button className="start__button" onClick={() => {xRef.current.classList.add("comewl")}}> Get Started</button>
                    <button className="video__button" onClick={() => {refX.current.classList.add("edd")}}>
                        <span>
                        <img  className="player__img" src={Player} alt="player" width={15} height={19}/>
                        </span>
                        Watch Video
                        </button>
                </div>
                </div>

                <picture>
                    <img className="hero__links" src={Links} alt="Links" width={408} height={212} />
                    <img className="hero__prise" src={Price} alt="Price" width={137} height={38}/>
                    <img className="hero__img" src={HappyGirl} alt="happyGirl" width={600} height={592} />  
                    <img className="hero__k59" src={k50k} alt="k50k" />
                    <img className="hero__client" src={Client} alt="Client" width={185} height={65}/>
                </picture>

                <div className="wlecome" ref={xRef}>
                    <button className="exit__button" onClick={() => {xRef.current.classList.remove("comewl")}}>X</button>
                    <h1 className="welecome__heading">Welecome our web site</h1>
                    <p className="wlcome__text">Veb (inglizcha Web) so'zi aslida o'rgimchak to'ri degan ma'noni bildiradi, internet tarmog'i hozirda xuddi o'rgimchak to'ri kabi bir-biriga ulanib ketgan millionlab komp`yuterlardan iboratdir. Sayt esa, ana shu tarmoqda joylashgan va o'zida biror ma'lumotni jamlagan sahifadir. Bu sahifalarda asosan matnlar (tekst), rasm, audio, video kabi ma'lumotlar joylangan bo'ladi. Dunyoning istagan eridan bularni ochish va ko'rish imkoni mavjud bo'ladi.</p>
                </div>

                <div className="watch" ref={refX}>
                    <button onClick={() => {refX.current.classList.remove("edd")}}>X</button>
                    <h3 className="watch__video">Mana video</h3>
                    <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/HhjHYkPQ8F0?si=1cVn5DXcvuCctOkT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;