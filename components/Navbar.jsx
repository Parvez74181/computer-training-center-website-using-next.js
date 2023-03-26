import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../src/styles/Navigation.module.scss";

const Navigation = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const nav_items = [
    { path: "/", value: "Home" },
    { path: "/courses", value: "Courses" },
    { path: "/about", value: "About" },
    { path: "/contact", value: "Contact" },
  ];

  return (
    <>
      <header
        id="header"
        className={`${styles["header"]} ${
          isActive === true ? styles["active"] : ""
        } flex`}
      >
        {/* primary-nav */}
        <nav className={`${styles["primary-nav"]}  flex container-fluid`}>
          <div className={`${styles["logo-box"]}`}>
            <Link href="/" className="fs-3">
              <Image
                src="/hero-section-img.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className={`${styles["nav-links"]}`}>
            <ul className="flex">
              {/* home */}
              <li className={` ${styles["nav-item"]} flex`}>
                <Link
                  className={`${
                    router.pathname === "/" ? styles["active"] : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              {/* courses */}
              <li className={` ${styles["nav-item"]} flex`}>
                <Link
                  className={`${
                    router.pathname === "/courses" ? styles["active"] : ""
                  }`}
                  href="/courses"
                >
                  Courses
                </Link>
              </li>

              {/* about */}
              <li className={` ${styles["nav-item"]} flex`}>
                <Link
                  className={`${
                    router.pathname === "/about" ? styles["active"] : ""
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </li>

              {/* contact */}
              <li className={` ${styles["nav-item"]} flex`}>
                <Link
                  className={`${
                    router.pathname === "/contact" ? styles["active"] : ""
                  }`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* hamburger */}
        <div
          id="hamburger"
          className={`${styles["hamburger"]} ${
            isActive === true ? styles["active"] : ""
          } mx-3 flex flex-column justify-content-around`}
          onClick={() => {
            isActive === true ? setIsActive(false) : setIsActive(true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Navigation;
