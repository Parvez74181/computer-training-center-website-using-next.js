import { useState } from "react";
import styles from "../../styles/SingleCoursePage.module.scss";

export async function getServerSideProps(context) {
  const { title } = context.params;

  try {
    let files = fs.readdirSync("data", "utf-8"); // read the 'data' directory
    const updated_files = files.filter((file) => file !== "services.json"); // removing the services.json file cause we don't need this in corses section
    let data = []; //* make an empty array to append all the data after reading 'updated_files'

    updated_files.forEach((file) => {
      let file_data = fs.readFileSync(`data/${file}`, "utf-8"); // read the files form 'data' directory
      JSON.parse(file_data).forEach((item) => {
        data.push(item); // add all the data to the 'data' array
      });
    });
    let singleCourse = data.filter((data) => data.title === title);
    console.log(singleCourse);
    return {
      props: { singleCourse },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { course: null },
    };
  }
}

const SingleCoursePage = ({ singleCourse }) => {
  const [course, setCourse] = useState(singleCourse[0]);
  return (
    <>
      <section
        className={`${styles["single-course-page"]} container mt-5 pt-5`}
      >
        <>
          {/*  main heading content */}
          <div
            className="row flex g-5 "
            style={{ minHeight: "70vh", lineHeight: "30px" }}
          >
            <div
              className="col-12 col-md-12 col-lg-6 col-xl-6"
              data-aos="fade-up"
            >
              <h1 className="h1 my-4 fw-bold" style={{ fontSize: "2.4rem" }}>
                {course.title}
              </h1>
              <p
                style={{ fontSize: "18px" }}
                dangerouslySetInnerHTML={{ __html: course.desc }}
              ></p>
              {/* buttons */}
              <div
                className={`buttons flex justify-content-between mt-4 flex-wrap`}
                style={{ gap: "30px" }}
              >
                {/* Admission btn */}
                <button className="btn">Get Admission</button>
                {/* course fee btn */}
                <button className="btn">Course Fee: {course.course_fee}</button>
              </div>
            </div>
            <div
              className="col-10 col-md-10 col-lg-6 col-xl-6 text-center"
              data-aos="fade-down"
            >
              <img
                loading="lazy"
                className="img-fluid"
                style={{
                  position: "relative",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={course.img_uri}
                alt={course.title}
              />
            </div>
          </div>

          {/* career opportunities container */}
          <div
            className="carrer-opportunity-container p-4 my-5 rounded-4"
            style={{
              background: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h1 className="h1 text-center">
              Career opportunities for this course
            </h1>
            <div className="row">
              {course?.career_opportunity?.map((item, i) => {
                return (
                  <div
                    className="col-12 col-md-4 col-lg-4 col-xl-4 my-2 d-flex align-items-start"
                    key={i}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={50 * i}
                    style={{ fontSize: "18px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="22"
                      width="22"
                    >
                      <path
                        fill="#000"
                        d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                      ></path>
                    </svg>
                    &nbsp;
                    {item}.
                  </div>
                );
              })}
            </div>
          </div>

          {/* curriculum container */}
          <div
            className="curriculum-container p-4 my-5 rounded-4"
            style={{
              background: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h1 className="h1 text-center">Course Curriculum</h1>
            <div className="row">
              {course?.curriculum?.map((item, i) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-6 col-xl-6 my-2 d-flex align-items-start"
                    key={i}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={50 * i}
                    style={{ fontSize: "18px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="22"
                      width="22"
                    >
                      <path
                        fill="#000"
                        d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                      ></path>
                    </svg>
                    &nbsp;
                    {item}.
                  </div>
                );
              })}
            </div>
          </div>

          {/* software container */}
          <div
            className="software-container p-4 my-5 rounded-4"
            style={{
              background: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h1 className="h1 text-center">Software</h1>
            <div className="row">
              {course?.software?.map((item, i) => {
                return (
                  <div
                    className="col-6 col-md-6 col-lg-6 col-xl-6 my-2 d-flex align-items-start"
                    key={i}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={50 * i}
                    style={{ fontSize: "18px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="22"
                      width="22"
                    >
                      <path
                        fill="#000"
                        d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                      ></path>
                    </svg>
                    &nbsp;
                    {item}.
                  </div>
                );
              })}
            </div>
          </div>

          {/* who can learn container */}
          <div
            className="software-container p-4 my-5 rounded-4"
            style={{
              background: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h1 className="h1 text-center">Curriculum audiences</h1>
            <div className="row">
              {course?.who_can_learn?.map((item, i) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-6 col-xl-6 my-2 d-flex align-items-start"
                    key={i}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={50 * i}
                    style={{ fontSize: "18px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="22"
                      width="22"
                    >
                      <path
                        fill="#000"
                        d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                      ></path>
                    </svg>
                    &nbsp;
                    {item}.
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default SingleCoursePage;
