// import React from "react";
// import "./index.css";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import HomeBanner from "./components/HomeBanner";
// import ProjectCard from "./components/ProjectCard";
// import AboutMe from "./components/AboutMe";
// import SkillCard from "./components/SkillCard";
// import ContactForm from "./components/ContactForm";
// import AnimatedCursor from "react-animated-cursor";

// function App() {
//   return (
//     <>
//       <AnimatedCursor
//         color="#fff"
//         innerSize={8}
//         outerSize={30}
//         innerScale={1}
//         outerScale={2.2}
//         outerAlpha={0}
//         outerStyle={{
//           background: "#ffffff",
//           mixBlendMode: "exclusion",
//         }}
//         innerStyle={{
//           backgroundColor: "#15F5BA",
//         }}
//       />
//       <div>
//         <Navbar />
//         <HomeBanner id="home" />

//         <AboutMe id="about" />

//         <div className="SectionTitle">
//           <div className="staticTitle">
//             <div className="hrLine"></div>
//             Projects
//             <div className="hrLine"></div>
//           </div>
//         </div>

//         <ProjectCard
//           id="project"
//           className="odd"
//           projectTitle="CSIT Club Registration Website"
//           projectDate="Jan 2024 - Feb 2024"
//           projectDesc="The CSIT club developed a dedicated registration website to replace the previous Google Forms process. Designed by the Tech Team, this user-friendly and visually appealing platform enhances the registration experience, reflecting the club's spirit and values. It aims to make new members feel welcomed and excited from the start."
//           projectLink="https://jiccot.club/"
//           deployedProjectLink="https://jiccot.club/"
//           projectImg={require("./images/jiccot.png")}
//         />

//         <ProjectCard
//           id="project"
//           projectTitle="University Events"
//           projectDate="Feb 2024 - May 2024"
//           projectDesc="In our Human-Computer Interaction course, we designed a mobile app prototype using Figma to boost student participation in campus activities and events. The app helps student clubs manage data, promote events, and communicate with members, while allowing students to discover and register for events. It aims to improve student satisfaction, foster community, and connect students to job opportunities, enhancing the overall campus experience."
//           projectLink="https://www.figma.com/proto/7okPoM3nddWZl2JQoM4VjI/HCI"
//           deployedProjectLink="https://www.figma.com/proto/7okPoM3nddWZl2JQoM4VjI/HCI"
//           projectImg={require("./images/UniversityEvents.jpg")}
//         />

//         <ProjectCard
//           id="project"
//           className="odd"
//           projectTitle="CSIT Club Event Management API"
//           projectDate="Jan 2024 - Feb 2024"
//           projectDesc="The CSIT club API streamlines event management and member participation. It features user authentication, event creation, enrollment, attendance tracking, and member communication. This API simplifies organizing club activities and enhances member engagement."
//           projectLink="https://github.com/Famix12/JICCOT-api-qr-attendance"
//           deployedProjectLink="https://github.com/Famix12/JICCOT-api-qr-attendance"
//           projectImg={
//             "https://raygun.com/blog/wp-content/uploads/2015/04/express1.png"
//           }
//         />

//         <div className="SectionTitle">
//           <div className="staticTitle">
//             <div className="hrLine"></div>
//             My Skills
//             <div className="hrLine"></div>
//           </div>
//         </div>

//         <SkillCard id="skills" />

//         {/* later add atchivements section */}

//         <ContactForm id="contact" />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useRef } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import AnimatedCursor from "react-animated-cursor";
import useIntersectionObserver from "./useIntersectionObserver"; // Import the custom hook

function App() {
  const observe = useIntersectionObserver((element, isIntersecting) => {
    if (isIntersecting) {
      element.classList.add("fadeIn");
    } else {
      element.classList.remove("fadeIn");
    }
  });

  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      observe(section);
    });
  }, [observe]);

  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#15F5BA",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" ref={(el) => (sectionsRef.current[0] = el)} />

        <AboutMe id="about" ref={(el) => (sectionsRef.current[1] = el)} />
        <div
          className="SectionTitle"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div className="staticTitle">
            <div className="hrLine"></div>
            Projects
            <div className="hrLine"></div>
          </div>
        </div>
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="CSIT Club Registration Website"
          projectDate="Jan 2024 - Feb 2024"
          projectDesc="The CSIT club developed a dedicated registration website to replace the previous Google Forms process. Designed by the Tech Team, this user-friendly and visually appealing platform enhances the registration experience, reflecting the club's spirit and values. It aims to make new members feel welcomed and excited from the start."
          projectLink="https://jiccot.club/"
          deployedProjectLink="https://jiccot.club/"
          projectImg={require("./images/jiccot.png")}
          ref={(el) => (sectionsRef.current[3] = el)}
        />
        <ProjectCard
          id="project"
          projectTitle="University Events"
          projectDate="Feb 2024 - May 2024"
          projectDesc="In our Human-Computer Interaction course, we designed a mobile app prototype using Figma to boost student participation in campus activities and events. The app helps student clubs manage data, promote events, and communicate with members, while allowing students to discover and register for events. It aims to improve student satisfaction, foster community, and connect students to job opportunities, enhancing the overall campus experience."
          projectLink="https://www.figma.com/proto/7okPoM3nddWZl2JQoM4VjI/HCI"
          deployedProjectLink="https://www.figma.com/proto/7okPoM3nddWZl2JQoM4VjI/HCI"
          projectImg={require("./images/UniversityEvents.jpg")}
          ref={(el) => (sectionsRef.current[4] = el)}
        />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="CSIT Club Event Management API"
          projectDate="Jan 2024 - Feb 2024"
          projectDesc="The CSIT club API streamlines event management and member participation. It features user authentication, event creation, enrollment, attendance tracking, and member communication. This API simplifies organizing club activities and enhances member engagement."
          projectLink="https://github.com/Famix12/JICCOT-api-qr-attendance"
          deployedProjectLink="https://github.com/Famix12/JICCOT-api-qr-attendance"
          projectImg={
            "https://raygun.com/blog/wp-content/uploads/2015/04/express1.png"
          }
          ref={(el) => (sectionsRef.current[5] = el)}
        />
        <div
          className="SectionTitle"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <div className="staticTitle">
            <div className="hrLine"></div>
            My Skills
            <div className="hrLine"></div>
          </div>
        </div>
        <SkillCard id="skills" ref={(el) => (sectionsRef.current[7] = el)} />
        {/* later add atchivements section */}
        <ContactForm id="contact" ref={(el) => (sectionsRef.current[8] = el)} />
        <Footer />
      </div>
    </>
  );
}

export default App;
