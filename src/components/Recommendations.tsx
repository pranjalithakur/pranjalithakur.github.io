import React from "react";
import "../assets/styles/Recommendations.scss";

const recommendationsData = [
  {
    name: "NeoSOFT Technologies",
    file: "/pdf/Neosoft-recommendation.pdf", // Path to the PDF in the public directory
  },
  {
    name: "Aurum PropTech Limited",
    file: "/pdf/Aurum-recommendation.pdf", // Path to the PDF in the public directory
  },
  {
    name: "Prof. Gajanan Birajdar",
    file: "/pdf/Birajdar-recommendation.pdf", // Path to the PDF in the public directory
  },
  {
    name: "Prof. Shilpa Achaliya",
    file: "/pdf/Shilpa-recommendation.pdf", // Path to the PDF in the public directory
  },
  {
    name: "Mrs. Anupama Shenoy",
    file: "/pdf/Shenoy-recommendation.pdf", // Path to the PDF in the public directory
  },
];

function Recommendations() {
  return (
    <div id="recommendations" className="recommendations-container">
      <h1>Recommendations</h1>
      <div className="recommendations-list">
        {recommendationsData.map((rec, index) => (
          <div className="recommendation-item" key={index}>
            <p className="item-name">{rec.name}</p>
            <a
              href={rec.file}
              target="_blank"
              rel="noopener noreferrer"
              className="recommendation-link"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
