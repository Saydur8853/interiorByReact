import React from "react";
import './Query_area.css';

const Query_Area = () => {
  const [header] = React.useState({
    mainHeader: "Have any project or query?",
    subHeading: "Just say hello Mail Us",
    mail:"support@interior.com",
    phNumber: "+10 673 563 629"
  });
  return (
    <div className="query_area">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.mail}</p>
          <p className="mainContent">{header.phNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Query_Area;
