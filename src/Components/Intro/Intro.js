//SASS
import "./Intro.scss";

//Images
import towels_6 from "../../Assets/Images/towels_6.png";

function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__aside">
            <h1 className="intro__title">
            You can find quality and cheap towels only from us
            </h1>
            <p className="intro__text">
            We offer wholesale delivery of towels made of high quality materials from Uzbekistan to Perth Airport (WA) and other states of Australia at low prices. We can produce socks of any composition, design and color according to the wishes of the customer. Our product is made of 100% cotton. Uzbek cotton is of excellent quality. Terms of payment of letter of credit.
            </p>
          </div>
          <div className="intro__bside">
            <img className="intro__pic" src={towels_6} alt="intro_image" />
          </div>
        </div>
      </div>
      <div className="intro__button-bg"></div>
    </section>
  );
}

export default Intro;
