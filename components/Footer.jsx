const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        data-bs-theme="dark"
        className="mt-5 p-5 bg-dark"
        style={{
          color: "white",
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>SkillEdge</h3>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      About us
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Services
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Web Design
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Web Development
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Product Management
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Marketing
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#" style={{ color: "white !important" }}>
                      Graphic Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © {new Date().getFullYear()}{" "}
              <strong>
                <span>Skill Edge</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a
              href="#"
              style={{ color: "white !important" }}
              className="twitter"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="#"
              style={{ color: "white !important" }}
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              style={{ color: "white !important" }}
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="#"
              style={{ color: "white !important" }}
              className="google-plus"
            >
              <i className="bx bxl-skype"></i>
            </a>
            <a
              href="#"
              style={{ color: "white !important" }}
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
