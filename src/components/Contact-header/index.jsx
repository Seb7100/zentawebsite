import React from "react";
import addParlx from "../../common/addParlx";
import Link from "next/link";

const ContactHeader = ({ sliderRef, theme }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx()
    }
  }, [pageLoaded])
  return (
    <header ref={sliderRef} className="works-header fixed-slider hfixd valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 static">
            <div className="capt mt-50">
              <div className="parlx">
                <h2 className="custom-font">
                  <span>Let&apos;s</span>Talk About Your project.
                </h2>
                <p>
                  Feel free to ask us any questions or let&apos;s talk
                  about our future collaboration.
                </p>
                <br></br>
              <Link href="mailto:contact@zentaweb.com">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Send us an email</span>
              </a>
            </Link>
              </div>
              

              <div className="bactxt custom-font valign">
                <span className="full-width">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
