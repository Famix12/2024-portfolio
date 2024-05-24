import React, { useState, useEffect } from "react";
import "./Achive.css";
import bg from "../images/achive.png";

const Achive = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="achive-container" id={props.id}>
        <img
          className="achive-img"
          src={
            "https://www.thisiscolossal.com/wp-content/uploads/2024/01/spherewave.gif"
          }
          alt="achive-img"
        ></img>
        {/* <div className="achive-card">
        </div> */}
        {/* <div className="achive-card-container"> */}
        <AchieveCard
        title="Blackhat MEA 2023 - CTF"
        date="14-16 Nov 2023"
        description="Black Hat MEA, in collaboration with SAFCSP, will host a Capture The Flag (CTF) Tournament with over 1,000 participants at various skill levels. The jeopardy-style competition covers categories like Web, PWN, Forensics, Reverse Engineering, and Crypto. Around 250 teams will compete in the three-day final for cash prizes and the title of tournament winner. Participants must rank in the top 1,000 in the qualification round to advance to the final."
        rank="37"
        participants="1,000"
      />
      <AchieveCard
        title="Tuwaiq Flagyard Cyber Challenge"
        date="28 Oct 2023"
        description="The Tuwaiq Flagyard Cyber Challenge was a Capture The Flag (CTF) competition featuring 12 web-based challenges. These challenges tested participants' skills in areas such as web application vulnerabilities, SQL injection, cross-site scripting (XSS), and other common web security issues. The event attracted 80 teams and over 300 participants, who competed to demonstrate their proficiency in identifying and exploiting web vulnerabilities. This competition provided an opportunity for ethical hackers to hone their skills and collaborate on solving complex web security problems.."
        rank="11"
        participants="300"
      />
      
      <AchieveCard
        title="CyberHub Network PT Challenge"
        date="1-3 Apr 2024"
        description="The CyberHub Network PT Challenge was the final test for our eJPT/eCCPT bootcamp exam. This challenge involved two machines, providing a comprehensive assessment of participants' penetration testing skills and their ability to apply what they learned throughout the bootcamp.."
        rank="18"
        participants="100"
      />

      </div>

    </>
  );
});

const AchieveCard = ({ title, date, description, rank, participants }) => {
  return (
    <div className="achive-card">
      <h2>{title}</h2>
      <h5>{date}</h5>
      <h4>{description}</h4>
      <div className="achive-card-statbox">
        <span className="achive-card-rankBox">
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="45"
              height="45"
              rx="7.125"
              fill="#15F5BA"
              fillOpacity="0.2"
            ></rect>
            <g clipPath="url(#clip0_5833_8950)">
              <path
                d="M19.5625 20.625H14.0625C13.6978 20.625 13.3481 20.7699 13.0902 21.0277C12.8324 21.2856 12.6875 21.6353 12.6875 22V27.5H19.5625V20.625Z"
                stroke="#15F5BA"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M31.9375 22H26.4375V27.5H33.3125V23.375C33.3125 23.0103 33.1676 22.6606 32.9098 22.4027C32.6519 22.1449 32.3022 22 31.9375 22Z"
                stroke="#15F5BA"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M25.0625 16.5H20.9375C20.5728 16.5 20.2231 16.6449 19.9652 16.9027C19.7074 17.1606 19.5625 17.5103 19.5625 17.875V27.5H26.4375V17.875C26.4375 17.5103 26.2926 17.1606 26.0348 16.9027C25.7769 16.6449 25.4272 16.5 25.0625 16.5Z"
                stroke="#15F5BA"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5833_8950">
                <rect
                  width="22"
                  height="22"
                  fill="white"
                  transform="translate(12 11)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          #{rank}
        </span>
        <span className="achive-card-participantsBox">
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="45"
              height="45"
              rx="7.125"
              fill="#BABBBC"
              fillOpacity="0.2"
            ></rect>
            <g clipPath="url(#clip0_10499_146779)">
              <path
                d="M18.875 22C20.9633 22 22.6562 20.3071 22.6562 18.2188C22.6562 16.1304 20.9633 14.4375 18.875 14.4375C16.7867 14.4375 15.0938 16.1304 15.0938 18.2188C15.0938 20.3071 16.7867 22 18.875 22Z"
                stroke="#F9F9F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12.6875 29.5625C12.6875 27.9215 13.3394 26.3477 14.4998 25.1873C15.6602 24.0269 17.234 23.375 18.875 23.375C20.516 23.375 22.0898 24.0269 23.2502 25.1873C24.4106 26.3477 25.0625 27.9215 25.0625 29.5625"
                stroke="#F9F9F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M28.2495 23.375C29.9581 23.375 31.3433 21.9899 31.3433 20.2812C31.3433 18.5726 29.9581 17.1875 28.2495 17.1875C26.5409 17.1875 25.1558 18.5726 25.1558 20.2812C25.1558 21.9899 26.5409 23.375 28.2495 23.375Z"
                stroke="#F9F9F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M26.4951 24.8125C27.2606 24.5304 28.0829 24.4373 28.8921 24.5413C29.7013 24.6452 30.4734 24.943 31.1428 25.4094C31.8121 25.8758 32.3589 26.497 32.7367 27.2201C33.1144 27.9432 33.3119 28.7469 33.3124 29.5627"
                stroke="#F9F9F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_10499_146779">
                <rect
                  width="22"
                  height="22"
                  fill="white"
                  transform="translate(12 11)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          +{participants}
        </span>
      </div>
      <hr style={{ opacity: "0.25", marginTop: "10px" }}></hr>
    </div>
  );
};

export default Achive;
