import { useState } from "react";

const SpecialServices = ({ data }) => {
  const [services, setServices] = useState(data);
  return (
    <>
      <section>
        <div className="container text-center mb-5">
          <h1
            className="h1 fw-bold"
            style={{ color: "var(--secondary-color)", fontWeight: "600" }}
            data-aos="fade-up"
          >
            Our Special Services
          </h1>
          <h5
            className="h5 text-center mx-auto"
            style={{ maxWidth: "800px", lineHeight: "30px" }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Our advanced courses offer more than just classes. You receive
            exclusive bonus benefits and round-the-clock assistance to help you
            with any student needs you may have.
          </h5>
        </div>
        <div
          className="container mb-5  flex"
          style={{ gap: "50px", flexWrap: "wrap" }}
        >
          {services.map((item, i) => {
            return (
              <>
                <div
                  className="card p-4 rounded-4"
                  style={{
                    width: "18rem",
                    color: "var(--secondary-color)",
                    background: "rgba(255,255,255,0.9)",
                    border: "none",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  }}
                  data-aos="zoom-in-up"
                  data-aos-delay={item.delay}
                  data-aos-duration="700"
                >
                  <h5
                    className="card-title fs-5 my-3 ps-2"
                    style={{ borderLeft: "2px solid var(--secondary-color)" }}
                  >
                    {item.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "rgb(22,22,22)",
                      lineHeight: "28px",
                      letterSpacing: "0px",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SpecialServices;
