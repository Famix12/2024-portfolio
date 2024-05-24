import React from "react";
import "./SkillCardStyle.css";

import {
  SiVisualstudiocode,
  SiReact,
  SiReactrouter,
  SiBootstrap,
  SiFigma,
  SiInkscape,
  SiJavascript,
  SiPython,
  SiPhp,
} from "react-icons/si";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaUbuntu,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSupabase,
  SiMysql,
  SiGnubash,
  SiVmware,
  SiWireshark,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiBurpsuite, SiKalilinux } from "react-icons/si";

const SkillCard = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="skill-container" id={props.id}>
        {/* <div className="skill-container" id={props.id}> */}
          {/* <div className="skill-header">My Skills</div> */}
          <div className="skill-box">
            <h1>Languages</h1>
            <div className="skillset">
              <abbr title="Python">
                <SiPython className="techLogo" />
              </abbr>
              <abbr title="JavaScript">
                <SiJavascript className="techLogo" />
              </abbr>
              <abbr title="Java">
                <FaJava className="techLogo" />
              </abbr>
              <abbr title="PHP">
                <SiPhp className="techLogo" />
              </abbr>
              <abbr title="bash">
                <SiGnubash className="techLogo" />
              </abbr>
            </div>
          </div>

          <div className="skill-box">
            <h1>Cybersecurity</h1>
            <div className="skillset">
              <h3>- Kali Linux</h3>
              <h3>- Wireshark</h3>
              <h3>- Burpsuite</h3>
              <h3>- Web Penetration Testing</h3>
              <h3>- Volatility</h3>

              {/* <abbr title='Wireshark'><SiWireshark  className='techLogo'/></abbr>
              <abbr title='Kalilinux '><SiKalilinux  className='techLogo'/></abbr>
              <abbr title='Inkscape'><SiInkscape className='techLogo'/></abbr> */}
            </div>
          </div>

          <div className="skill-box">
            <h1>Web development :</h1>
            <div className="skillset">
              <abbr title="NextJS">
                <TbBrandNextjs className="techLogo" />
              </abbr>
              <abbr title="ReactJS">
                <SiReact className="techLogo" />
              </abbr>
              <abbr title="CSS 3">
                <FaCss3Alt className="techLogo" />
              </abbr>
              <abbr title="Html5">
                <FaHtml5 className="techLogo" />
              </abbr>
              <abbr title="Bootstrap">
                <SiBootstrap className="techLogo" />
              </abbr>
              <abbr title="Npm">
                <FaNpm className="techLogo" />
              </abbr>
              <abbr title="supabase">
                <SiSupabase className="techLogo" />
              </abbr>
              <abbr title="mysql">
                <SiMysql className="techLogo" />
              </abbr>
            </div>
          </div>
          <div className="skill-box">
            <h1>Tools & Systems</h1>
            <div className="skillset">
              <abbr title="Windows">
                <IoLogoWindows className="techLogo" />
              </abbr>
              <abbr title="Linux Ubuntu">
                <FaUbuntu className="techLogo" />
              </abbr>
              <abbr title="Docker">
                <FaDocker className="techLogo" />
              </abbr>
              <abbr title="Aws ">
                <FaAws className="techLogo" />
              </abbr>
              <abbr title="Vmware">
                <SiVmware className="techLogo" />
              </abbr>
              <abbr title="Visual Stud io Code">
                <SiVisualstudiocode className="techLogo" />
              </abbr>
            </div>
          </div>
        </div>
    // </div>
  );
});

export default SkillCard;

// export default function SkillCard({id}) {
//   return (
//     <>
//         <div className="skill-container" id = {id}>
//           {/* <div className="skill-header">My Skills</div> */}
//           <div className="skill-box">
//             <h1>Languages</h1>
//             <div className="skillset">
//               <abbr title='Python'><SiPython  className='techLogo'/></abbr>
//               <abbr title='JavaScript'><SiJavascript  className='techLogo'/></abbr>
//               <abbr title='Java'><FaJava  className='techLogo'/></abbr>
//               <abbr title='PHP'><SiPhp   className='techLogo'/></abbr>
//               <abbr title='bash'><SiGnubash   className='techLogo'/></abbr>
//             </div>
//           </div>

//           <div className="skill-box">
//             <h1>Cybersecurity</h1>
//             <div className="skillset">
//               <h3>- Kali Linux</h3>
//               <h3>- Wireshark</h3>
//               <h3>- Burpsuite</h3>
//               <h3>- Web Penetration Testing</h3>
//               <h3>- Volatility</h3>

//               {/* <abbr title='Wireshark'><SiWireshark  className='techLogo'/></abbr>
//               <abbr title='Kalilinux '><SiKalilinux  className='techLogo'/></abbr>
//               <abbr title='Inkscape'><SiInkscape className='techLogo'/></abbr> */}
//             </div>
//           </div>

//           <div className="skill-box">
//             <h1>Web development :</h1>
//             <div className="skillset">
//               <abbr title='NextJS'><TbBrandNextjs className='techLogo'/></abbr>
//               <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
//               <abbr title='CSS 3'><FaCss3Alt  className='techLogo'/></abbr>
//               <abbr title='Html5'><FaHtml5 className='techLogo'/></abbr>
//               <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr>
//               <abbr title='Npm'><FaNpm className='techLogo'/></abbr>
//               <abbr title='supabase'><SiSupabase className='techLogo'/></abbr>
//               <abbr title='mysql'><SiMysql className='techLogo'/></abbr>
//             </div>
//           </div>
//           <div className="skill-box">
//             <h1>Tools & Systems</h1>
//             <div className="skillset">
//               <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
//               <abbr title='Linux Ubuntu'><FaUbuntu  className='techLogo'/></abbr>
//               <abbr title='Docker'><FaDocker className='techLogo'/></abbr>
//               <abbr title='Aws '><FaAws  className='techLogo'/></abbr>
//               <abbr title='Vmware'><SiVmware  className='techLogo'/></abbr>
//               <abbr title='Visual Stud io Code'><SiVisualstudiocode className='techLogo'/></abbr>
//             </div>
//           </div>

//         </div>
//     </>

//   )
// }
