import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>;
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("NZ is the best", "Top news - 9500 readers")}
      {newsArticle("Tesla Hits new Highs", "Cars & auto - 8000 readers")}
      {newsArticle("Coronavirus outbreak", "Top news - 15000 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 6000 readers")}
      {newsArticle("Is redux too good", "Code - 10000 readers")}
    </div>
  );
}

export default Widgets;
