import React, { useState, useEffect } from 'react';
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

const ZeroOne = () => {
  const [values, setValues] = useState(['010110', '110010', '010011', '101101']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [values]);

  return (
    <span className="name zeroOne">
      {values[currentIndex]}
    </span>
  );
};

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-container" id={props.id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm Abdulkarim, a <span>Computer Science</span> student at Jubail
        Industrial College with a <span>passion for cybersecurity 🔒</span> and{" "}
        <span>web development 💻</span>. My journey has been fueled by hands-on
        experiences, including notable performances in
        <span> Capture The Flag competitions</span> and a background in{" "}
        <span>penetration testing</span>.<br></br>
        <br></br>
        In addition to my studies, I actively contribute to the{" "}
        <span>CSIT club as Co-Leader and lead the Tech Team</span>, where I've
        enjoyed managing software projects 🚀. Collaborating with peers has been
        incredibly rewarding, and it's helped me grow as a team player.
        {/* <a
          className="resume"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          explore my resume.
        </a> */}
        <br></br>
        <br></br>
        Beyond the screen, I enjoy playing Chess ♟️ & Football ⚽, which
        provides a well-rounded perspective to my endeavors. I'm eager to
        connect with fellow enthusiasts, exchange insights, and embark on
        impactful projects together. Let's make a difference in the world of
        technology! 💪
      </div>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="img" src={myProfile} alt="Profile"></img>
      </div>
      <ZeroOne />
    </div>
  );
});

export default AboutMe;