import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";



const HomeBanner = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id={props.id}>
  <div className="home" id={props.id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Abdulkarim F. Abahusain</div>
              <div className="staticTitle">
              Student
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li><span>Computer Science</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/abdulkarimfouad/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
        </div>
        <div className="mask">
            {/* <img className='bg' src={cartoon} alt="boy-with-laptop" /> */}
            {/* <img className='bg' style={{"opacity":"0.2","mixBlendMode":"luminosity"}} src="https://i.pinimg.com/originals/bc/c8/54/bcc854b36353728426eab383f9a16462.gif" alt="boy-with-laptop" /> */}
            <img className='bg' style={{"opacity":"0.25","mixBlendMode":"luminosity","height":"110vh"}} src="https://i.imgur.com/k0ISwq7.gif" alt="boy-with-laptop" />
            {/* <img className='bg' style={{"opacity":"0.75","height":"100vh"}} src="https://www.thisiscolossal.com/wp-content/uploads/2024/01/spherewave.gif" alt="boy-with-laptop" /> */}
        </div>
    </div>
    </div>
  );
});

export default HomeBanner;


// export default function HomeBanner({id}) {
//   return (
//     <div className="home" id={id}> 
//         <div className='content'>
//             <div className="wrapper">
//               <div className="name">Abdulkarim F. Abahusain</div>
//               <div className="staticTitle">
//               Student
//                 <div className='hrLine'></div>
//               </div>
//               <ul className="dynamicTitle">
//                 <li><span>Computer Science</span></li>
//               </ul>
//               <a className='btn' href="https://www.linkedin.com/in/abdulkarimfouad/" target="_blank" rel="noopener noreferrer">Linkedin</a>
//             </div>
//         </div>
//         <div className="mask">
//             {/* <img className='bg' src={cartoon} alt="boy-with-laptop" /> */}
//             {/* <img className='bg' style={{"opacity":"0.2","mixBlendMode":"luminosity"}} src="https://i.pinimg.com/originals/bc/c8/54/bcc854b36353728426eab383f9a16462.gif" alt="boy-with-laptop" /> */}
//             <img className='bg' style={{"opacity":"0.125","mixBlendMode":"luminosity","height":"100vh"}} src="https://i.imgur.com/k0ISwq7.gif" alt="boy-with-laptop" />
//         </div>
//     </div>
//   )
// }
