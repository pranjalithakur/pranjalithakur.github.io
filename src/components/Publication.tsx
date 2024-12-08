import React from "react";
import "../assets/styles/Publication.scss";
import pub from '../assets/images/ROS_impl.png';

const publicationsData = [
  {
    title: "ROS-based SLAM Implementation for Autonomous Navigation using Turtlebot",
    description:
      "Published in the ITM Web of Conferences, this paper presents the autonomous navigation of a robot using the SLAM algorithm. The work uses the Robot Operating System (ROS) as a framework, simulating the robot in Gazebo with data visualization in Rviz. The Gmapping package performs mapping using laser and odometry data from various sensors.",
    image: pub,
    date: "2020",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=w13vkYYAAAAJ&authuser=1&citation_for_view=w13vkYYAAAAJ:u5HHmVD_uO8C",
    pdf: "/pdf/conference_SLAM.pdf", 
    ppt: "/pdf/ROS_presentation.pptx",
},
];

function Publication() {
  return (
    <div id="publication" className="publications-container">
      <h1>Publications</h1>
      {publicationsData.map((pub, index) => (
        <div className="publication-item" key={index}>
          <img src={pub.image} alt={pub.title} className="publication-image" />
          <div className="publication-content">
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
            <p className="publication-date">{pub.date}</p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
              Google Scholar
            </a>
            {pub.pdf && (
                <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="publication-link">
                View PDF
                </a>
            )}
            {pub.ppt && (
                <a href={pub.ppt} target="_blank" rel="noopener noreferrer" className="publication-link">
                View Presentation
                </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Publication;
