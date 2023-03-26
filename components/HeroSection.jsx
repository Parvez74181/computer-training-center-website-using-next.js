import Link from "next/link";
import styles from "../src/styles/Home.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";

SwiperCore.use([Navigation, Autoplay]);
const HeroSection = () => {
  let categories = [
    { uri: "", title: "Design & Multimedia", delay: 100 },
    { uri: "", title: "Web & Software", delay: 150 },
    { uri: "", title: "Digital Marketing", delay: 200 },
    { uri: "", title: "Cyber Security", delay: 250 },
    { uri: "", title: "Networking Technology", delay: 300 },
    { uri: "", title: "Film & Media", delay: 350 },
    { uri: "", title: "Robotics & Automation", delay: 400 },
    { uri: "", title: "Clouding Computing", delay: 500 },
    { uri: "", title: "Office Program", delay: 550 },
  ];
  const swiperOptions = {
    grabCursor: true,
    spaceBetween: 55,
    navigation: true,
    slidesPerView: 1,
    centeredSlides: false,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };

  // const slideStyle = {
  //   width: `calc((100% - ${
  //     (swiperOptions.slidesPerView - 1) * swiperOptions.spaceBetween
  //   }px) / ${swiperOptions.slidesPerView})`,
  // };
  return (
    <>
      <section
        style={{
          // background: "linear-gradient(310deg,#7928ca,#ff0080)",
          height: "85vh",
        }}
        className={styles["hero-section-bg"]}
      >
        <div
          className={`${styles["hero-section"]} pt-5 container m-auto row`}
          style={{ position: "relative", height: "100%", width: "100%" }}
        >
          {/* text container */}
          <div
            className={`${styles["text-container"]} col-md-12 col-lg-6 col-12 d-flex justify-content-center align-items-center pt-5 flex-column`}
            data-aos="fade-right"
          >
            <h3 className="h3 text-center">
              Launch Your Career With Essential Skills.
            </h3>
            <Link
              href="/courses"
              className="btn fs-4 px-5 rounded-5 fw-bold my-5"
            >
              Courses <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          {/* img container */}
          <div
            className={`${styles["img-container"]} col-md-12 col-lg-6 col-12 d-flex justify-content-center align-items-center flex-column my-1 mb-5`}
            data-aos="fade-left"
          >
            <img loading="lazy" src="/hero-section-img.svg" alt="..." />
          </div>
        </div>
      </section>

      <section className={`${styles["category-slider"]} flex`}>
        <Swiper {...swiperOptions} className="mySwiper container px-5 py-3">
          {categories.map((item, i) => {
            return (
              <>
                <SwiperSlide
                  key={i}
                  //  style={slideStyle}
                  className="flex"
                >
                  <Link href="#" className="flex">
                    <div
                      className={`${styles["card"]} flex`}
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                    >
                      <h5 className="card-title text-center text-wrap px-2">
                        {item.title}
                      </h5>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default HeroSection;
