

//SASS
import "./ContactMain.scss"

function ContactMain() {

    const formFunc = e => {
        e.preventDefault()

        let { first_name, last_name, email, phone, product, message } = e.target.elements
        console.log(first_name.value, last_name.value, email.value, phone.value, product.value, message.value);
    }
    return (
        <main>
            <section className="contact">
                <div className="container">
                    <div className="contact__wrapper">
                        <div className="contact__box">
                            <h1 className="contact__title">Get In Touch</h1>
                            <form onSubmit={formFunc} className="contact__form">
                                <div className="contact__subbox">
                                    <label className="contact__label">
                                        <p className="contact__text">First name</p>
                                        <input className="contact__input" type="text" name="first_name" placeholder="Your firstname" required />
                                    </label>
                                    <label className="contact__label">
                                        <p className="contact__text">Last name</p>
                                        <input className="contact__input" type="text" name="last_name" placeholder="Your lastname" required />
                                    </label>
                                </div>
                                <label className="contact__label">
                                    <p className="contact__text">Email</p>
                                    <input className="contact__input" type="email" name="email" placeholder="Your email address" required />
                                </label>
                                <label className="contact__label">
                                    <p className="contact__text">Phone number</p>
                                    <input className="contact__input" type="text" name="phone" placeholder="Your phone number" required />
                                </label>
                                <label className="contact__label">
                                    <p className="contact__text">Name of product</p>
                                    <input className="contact__input" type="text" name="product" placeholder="Name of product" required />
                                </label>
                                <label className="contact__label">
                                    <p className="contact__text">Name of product</p>
                                    <textarea className="contact__textarea" type="text" name="message" placeholder="Say somthing about us" />
                                </label>

                                <button className="contact__btn">Send Message</button>
                            </form>
                        </div>
                        <div className="contact__mapbox">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29722242.637146458!2d116.05313374777324!3d-24.58217404571375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2z0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2s!4v1660239233433!5m2!1sru!2s" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactMain