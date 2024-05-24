import React from 'react';
import "./ProjectCardStyle.css";
import {FaArrowRight,FaLink} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
// import {  } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';


const ProjectCard = React.forwardRef((props, ref) => {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  return (
    <div ref={ref} id={props.id} className={props.className}>
    <div className='project-window' id = {props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>
          <div className="project-date">{props.projectDate}</div>
          <div className="desc">{props.projectDesc}</div>
          <button className='btn' onClick={handleOnClick}><span>Check it up<FaLink className="social" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}/></span></button>
        </div>
        <Tilt className="project-img" gyroscope= {true} >
            <a href={props.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
        </Tilt>

      </div>
    </div>
    </div>
  );
});

export default ProjectCard;


// export default function ProjectCard(props) {
//   const handleOnClick = () => {
//     window.open(`${props.projectLink}`);
//   }

//   return (
//     <div className='project-window' id = {props.id}>
//       <div className={`project-wrapper ${props.className}`}>
//         <div className="about-project">
//           <div className="project-title">{props.projectTitle}</div>
//           <div className="project-date">{props.projectDate}</div>
//           <div className="desc">{props.projectDesc}</div>
//           <button className='btn' onClick={handleOnClick}><span>Check it up<FaLink className="social" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}/></span></button>
//         </div>
//         <Tilt className="project-img" gyroscope= {true} >
//             <a href={props.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
//         </Tilt>

//       </div>
//     </div>
//   )
// }