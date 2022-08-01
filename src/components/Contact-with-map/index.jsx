import React from "react";
import Link from "next/link";

const ContactWithMap = ({theme}) => {
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>
                <Link href="mailto:contact@zentaweb.com">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Get In Touch</span>
              </a>
            </Link>
                
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <h3 className="custom-font wow" data-splitting>
                  Let&apos;s Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="mailto:contact@zentaweb.com">contact@zentaweb.com</a>
                  </h5>
                  <h5>(+0045) 61209824</h5>
                  <h5>Zentaweb is a part of Nem Digital, Denmark</h5>
                </div>
                
                <div className="social mt-50">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50057.87907929699!2d-0.5075434644797484!3d38.35783559221043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6235da3b9dab4b%3A0x1d7da872ac0b81e3!2sAlicante%2C%20Spanien!5e0!3m2!1sda!2sdk!4v1658837018756!5m2!1sda!2sdk"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>
              © 2022, Zentaweb.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
