import image1 from "../Images/ds.jpg";
// import image2 from "../Images/Images/image2.jpg";
// import image3 from "../Images/Images/image3.jpg";
// import image4 from "../Images/dots.jpg";
import React from "react";
import './AboutUs.css';
import backgroundVideo from "../Videos/abcd.mp4";

export default function AboutUs() {
  return (
    <div>
      <div className="about">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          <p>Your browser does not support the video tag. Please upgrade your browser to view the video content.</p>
        </video>
        <h1>
          <span className="white-text">About</span>{" "}
          <span className="gray-text">Us</span>
        </h1>
        <p className="aboutp">Official Data Science Club</p>
      </div>

      {/* Intro Section */}
      <div className="intro">
        <div className="text">
          <h1>
            <span class="box-decoration-slice bg-gradient-to-r from-custom-blue to-custom-blue text-white px-2 ...">Datum: Data Science Club</span>
          </h1>
          <p>
            Welcome to the Official Data Science Club, the premier hub for aspiring data scientists, analysts, and enthusiasts at our college. Established with the vision of creating a collaborative environment for exploring the transformative power of data, our club is dedicated to nurturing the next generation of data-driven thinkers and innovators.
            <br />
            <br />
            As the official data science organization, we foster a community where students can work on real-world projects, collaborate across disciplines, and gain exposure to industry trends. We encourage our members to think critically, solve complex problems, and use data to create impactful solutions.
            <br />
            <br />
            Join us in this exciting journey of exploration and innovation. Together, let’s unlock the power of data and shape the future of technology.
          </p>
        </div>
        <div className="image">
          <img src={image1} alt="Data Science Club Activities" />
        </div>
      </div>

      {/* What we section Section */}


    </div>
  );
}
