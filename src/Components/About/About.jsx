import React from "react"
import "./About.scss"

function About() {

    const [ArrayApi] = React.useState([
        {
            id: 0, 
            poster: "https://assets-global.website-files.com/621c8d7ad9e04933c4e51ffb/624fd2870c9d7634deb2576c_The%20Slack%20logo.svg"
        },
        {
            id:1,
            poster:"https://logowik.com/content/uploads/images/descript1968.logowik.com.webp"
        },
        {
            id:2,
            poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/1280px-Etsy_logo.svg.png"
        },
        {
            id:2,
            poster:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png",
        },
        {
            id:3,
            poster:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/1200px-Logitech_logo.svg.png"
        }
    ]) 


    return (
        <>
        <section className="about">
            <div className="container">
                <h2 className="about__heading">OUR TRUSTED CLIENTS</h2>

                <picture  className="pictur">
                    {ArrayApi.map(array => (
                       <img className="about__img" src={array.poster} alt="poster" width={165} height={44} />
                    ))}
                </picture>
            </div>
        </section>
        </>
    )
}

export default About