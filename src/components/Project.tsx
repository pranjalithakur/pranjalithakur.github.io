import React from "react";
import mock01 from '../assets/images/projects/soc-mod.png';
import mock02 from '../assets/images/projects/webserver-mod.png';
import mock03 from '../assets/images/projects/intel-mod.png';
import mock04 from '../assets/images/projects/blockchain.png';
import mock05 from '../assets/images/projects/zkp-mod.png';
import mock06 from '../assets/images/projects/attack-mod.png';
import mock07 from '../assets/images/projects/nft_mod.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/pranjalithakur/SOCAutomation" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pranjalithakur/SOCAutomation" target="_blank" rel="noreferrer"><h2>Security Operations Center(SOC) Automation Lab</h2></a>
                <p>Orchestrated a comprehensive SOC automation lab project, integrating SIEM (Wazuh) and SOAR (Shuffle) technologies</p>
            </div>

            <div className="project">
                <a href="https://github.com/pranjalithakur/Password-Manager-Intel-SGX/tree/master" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pranjalithakur/Password-Manager-Intel-SGX/tree/master" target="_blank" rel="noreferrer"><h2>Password Management System Leveraging Intel SGX</h2></a>
                <p>Designed and implemented a secure password management system utilizing Intel SGX to safeguard sensitive data against threats</p>
            </div>

            <div className="project">
                <a href="https://github.com/pranjalithakur/WebServer-Application/tree/master" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pranjalithakur/WebServer-Application/tree/master" target="_blank" rel="noreferrer"><h2>Secure Web Application Server with Docker Deployment</h2></a>
                <p>Developed a secure, scalable Docker-based web server for PHP, focusing on mitigating vulnerabilities like SQL injections</p>
            </div>

            <div className="project">
                <a href="https://github.com/pranjalithakur/Vulnerability-Analysis-of-Smart-Contract" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pranjalithakur/Vulnerability-Analysis-of-Smart-Contract" target="_blank" rel="noreferrer"><h2>Vulnerability Analysis of Smart Contract on Blockchain Platforms</h2></a>
                <p>Conducted comprehensive analysis of smart contract vulnerabilities on blockchain platforms, evaluating various security tools</p>
            </div>

            <div className="project">
                <a href="https://github.com/pranjalithakur/IoTAuthentication-ZKP" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pranjalithakur/IoTAuthentication-ZKP" target="_blank" rel="noreferrer"><h2>Authentication of IoT Devices Using Zero-Knowledge Proofs</h2></a>
                <p>Developed an IoT device authentication protocol using a one-round M-ZKP, enhancing security and efficiency with ZKP principles</p>
            </div>

            <div className="project">
                <a href="https://github.com/pranjalithakur/ADE" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pranjalithakur/ADE" target="_blank" rel="noreferrer"><h2>Cybersecurity Simulation: Attack and Defense Operation</h2></a>
                <p>The ADE project focused on developing offensive and defensive cybersecurity techniques via simulated virtual environment exercises</p>
            </div>

            <div className="project">
                <a href="https://github.com/pranjalithakur/moon_cats_punk" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pranjalithakur/moon_cats_punk" target="_blank" rel="noreferrer"><h2>Decentralized NFT Marketplace</h2></a>
                <p>Built a decentralized application that facilitated the auction of NFT art using ReactJs</p>
            </div>
        </div>
    </div>
    );
}

export default Project;