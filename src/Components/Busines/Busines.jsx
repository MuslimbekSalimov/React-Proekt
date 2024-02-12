import "./Busines.scss"
import Nishon from "../img/nishonla.png"
import Seo from "../img/Seo.png"
import nima from "../img/hhh.png"
import Play from "../img/pl.png";

function Busines() {
    return (
        <>
        <section className="busines">
            <div className="container">
                <div className="busines__info">
                    <h3 className="busines__heading"> What we do</h3>
                    <h3 className="busines__headings">We Are Here To Help You <br /> Build Your Business</h3>
                    <p className="busines__text">Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.</p>
                    <button className="busines__button">Explore all service</button>
                </div>

                <div className="busines__div">
                    <ul className="busines__list">
                        <li className="busines__item">
                            <img className="busines__nishon" src={Nishon} alt="Nishon" width={71} height={71}/>
                            <h4 className="busines__h4">Digital Marketing</h4>
                            <p className="busines__p">That is the simply dummy text the printing and typesetting industry. </p>
                            <button className="button__busines">Read more</button>
                        </li>

                        <li className="busines__item">
                            <img className="busines__nishon" src={Seo} alt="Nishon" width={71} height={71}/>
                            <h4 className="busines__h4">SEO</h4>
                            <p className="busines__p">That is the simply dummy text the printing and typesetting industry.  </p>
                            <button className="button__busines">Read more</button>
                        </li>

                        <li className="busines__item">
                            <img className="busines__nishon" src={nima} alt="Nishon" width={71} height={71}/>
                            <h4 className="busines__h4">UI UX Design</h4>
                            <p className="busines__p">That is the simply dummy text the printing and typesetting industry. </p>
                            <button className="button__busines">Read more</button>
                        </li>

                        <li className="busines__item">
                            <img className="busines__nishon" src={Play} alt="Nishon" width={71} height={71}/>
                            <h4 className="busines__h4">Web Development</h4>
                            <p className="busines__p">That is the simply dummy text the printing and typesetting industry. </p>
                            <button className="button__busines">Read more</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Busines;