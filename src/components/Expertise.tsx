import React from "react";
import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faJs, faPython, faRust, faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "React",
    "Rust",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Python",
    "SQL",
    "Nodejs",
    "Bash",
    "Solidity"
];

const labelsSecond = [
    "Github",
    "Linux",
    "Github Actions",
    "Jira",
    "Postman",
    "Docker",
    "Ansible",
    "BitBucket"
];

const labelsThird = [
    "Nmap",
    "Wireshark",
    "Metaslpoit",
    "BurpSuite",
    "Resource Hacker",
    "Strings",
    "PEview",
    "UPX",
    "ProcessMonitor"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3>Language</h3>
                    {/* <FontAwesomeIcon icon={faHtml5} size="3x" style={{ marginRight: '20px' }}/>
                    <FontAwesomeIcon icon={faJs} size="3x" style={{ marginRight: '20px' }}/>
                    <FontAwesomeIcon icon={faPython} size="3x" style={{ marginRight: '20px' }}/>
                    <FontAwesomeIcon icon={faRust} size="3x" style={{ marginRight: '20px' }}/>
                    <FontAwesomeIcon icon={faReact} size="3x" style={{ marginRight: '20px' }}/>
                     */}
                    {/* <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p> */}
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Technology and Tool</h3>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>  
                </div>

                <div className="skill">
                    <h3>Security Tools</h3>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>  
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;