// import React, { useState } from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase, faBook } from '@fortawesome/free-solid-svg-icons';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import '../assets/styles/Timeline.scss'
// import Modal from './Model';

// function Timeline() {

//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [modalContent, setModalContent] = useState({ title: '', description: '' });

//   const handleCardClick = (title: string, ...descriptions: string[]) => {
//     const description = descriptions.join('<br/>');
//     setModalContent({ title, description });
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };


//   return (
//     <div id="history">
//       <div className="items-container">
//         <h1>Career History</h1>
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
//             contentArrowStyle={{ borderRight: '7px solid  white' }}
//             date="May 2024 - present"
//             iconStyle={{ background: '#615297', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//             onTimelineElementClick={() => handleCardClick('Security Engineer Intern', 'Automated Security Testing for Blockchain Projects: Designed and implemented a security testing pipeline integrating GitHub Advanced Security with static analysis, unit testing, and mutation testing tools for Solidity and Rust-based blockchain projects. This setup enabled code scanning across multiple repositories, identifying over 100 vulnerabilities per project and significantly enhancing code quality and security.','Project 2: Implemented GenAI models for security risk assessment.')}
//             style={{ cursor: 'pointer' }}
//           >
//             <h3 className="vertical-timeline-element-title">Security Engineer Intern</h3>
//             <h4 className="vertical-timeline-element-subtitle">Circle Internet Financial, Boston, MA</h4>
//             <p>
//               More...
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Sept 2023 - May 2024"
//             iconStyle={{ background: '#615297', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Graduate Teaching Assistant</h3>
//             <h4 className="vertical-timeline-element-subtitle">Rochester Institue Of Technology, Rochester, NY</h4>
//             <p>
//               Frontend Development, Backend Development, User Experience, Team Leading
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Aug 2022 - Dec 2024"
//             iconStyle={{ background: '#C77189', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBook} />}
//           >
//             <h3 className="vertical-timeline-element-title">Master of Science, Cybersecurity</h3>
//             <h4 className="vertical-timeline-element-subtitle">Rochester Institute of Technology</h4>
//             <p>
//               Full-stack Development, API Development, User Experience
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Dec 2020 - May 2022"
//             iconStyle={{ background: '#615297', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Software Developer</h3>
//             <h4 className="vertical-timeline-element-subtitle">Neosoft Technologies, Mumbai, India</h4>
//             <p>
//               Full-stack Development, API Development, User Experience
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="Aug 2016 - Oct 2020"
//             iconStyle={{ background: '#C77189', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBook} />}
//           >
//             <h3 className="vertical-timeline-element-title">Bachelor of Engineering, Electronics Engineering</h3>
//             <h4 className="vertical-timeline-element-subtitle">Mumbai University</h4>
//             <p>
//               Full-stack Development, API Development, User Experience
//             </p>
//           </VerticalTimelineElement>
//         </VerticalTimeline>
//     {modalIsOpen && (  
//         <Modal open={modalIsOpen} onClose={closeModal} >
//           <h2>{modalContent.title}</h2>
//           <p dangerouslySetInnerHTML={{ __html: modalContent.description }}></p>
//         </Modal>
//     )}
//       </div>
//     </div>
//   );
// }

// export default Timeline;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBook } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import Modal from './Modal';
import experienceData from "./experienceData";

function Timeline() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", projects: [] as string[] });

  const handleCardClick = (title: string, projects: string[]) => {
    setModalContent({ title, projects });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={experience.date}
              iconStyle={{ background: experience.backgroundColor, color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={experience.icon === "faBriefcase" ? faBriefcase : faBook} />}
              onTimelineElementClick={() => handleCardClick(experience.title, experience.projects)}
              style={{ cursor: "pointer" }}
            >
              <h3 className="vertical-timeline-element-title">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
              <p>More...</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        {modalIsOpen && (
          <Modal open={modalIsOpen} onClose={closeModal}>
          <h2>{modalContent.title}</h2>
          {modalContent.projects.length > 0 && (
            <ul>
              {modalContent.projects.map((project, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: project }}></li>
              ))}
            </ul>
          )}
        </Modal>
        )}
      </div>
    </div>
  );
}

export default Timeline;
