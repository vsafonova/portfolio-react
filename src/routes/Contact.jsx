export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>My Address</h3>
              <p>Stockholm, Sweden</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a
                  href="https://github.com/vsafonova"
                  className="github"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/viktoriia-safonova-a399291a3/"
                  className="linkedin"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/ViktorySafonova#"
                  className="facebook"
                  target="_blank"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bi-envelope-at"></i>
              <h3>Email Me</h3>
              <p>viktorysafsweden@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bi-whatsapp"></i>
              <h3>Text Me on Telegram/WhatsApp</h3>
              <p>(+46) 768848754</p>
            </div>
          </div>
        </div>
        <form
          action="forms/contact.php"
          method="post"
          role="form"
          className="php-email-form mt-4"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <a href="mailto:viktorysafsweden@gmail.com?subject=Mail from Our Site">
              <button type="submit">Send Message</button>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
