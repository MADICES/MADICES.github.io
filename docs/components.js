import React from "react";
import parse from "html-react-parser";
import classNames from 'classnames';

export function Card({ name, link, img, organization, imgcr, talkTitle, className }) {
  /* Create Card with name and image */
  let imagecredit = "";
  if (imgcr) {
    imagecredit = parse(imgcr);
  }
  let talkT = "Title TBC";
  if (talkTitle) {
    talkT = talkTitle;
  }
  const cardClasses = classNames("col-12 col-sm-4", className);

  return (
    <div className={cardClasses} style={{width: "320px"}}>
      <div className="card">
        <a href={link}>
          <h3 style={{ width: "300px"}} >{name}</h3>
        </a>
        <h4 style={{ width: "300px", height: "2.5em" }}>{organization}</h4>
        <h4 style={{ width: "300px", height: talkT.length > 0 ? "3.5em" : "0em", fontWeight: "normal", fontStyle: "italic" }}>{talkT}</h4>
        <div className="card-image">
          <div
            className="thumb"
            style={{ backgroundImage: `url(${img})` }}
            title={name}
          >
            {" "}
          </div>
        </div>
        {<div style={{ color: ":#808080", fontSize: ".3em", width: "300px"  }}>{imagecredit}</div>}
      </div>
    </div>
  );
}

export function KeynoteCard({ name, link, img, organization, imgcr, talkTitle, className }) {
  /* Create Card with name and image */
  let imagecredit = "";
  if (imgcr) {
    imagecredit = parse(imgcr);
  }
  let talkT = "Title TBC";
  if (talkTitle) {
    talkT = talkTitle;
  }
  const cardClasses = classNames("col-12 col-sm-4", className);

  return (
    <div className={cardClasses} style={{width: "80%", textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
      <div className="card">
        <a href={link}>
          <h3 style={{ fontSize: "1.5em", textAlign: "center" }} >{name}</h3>
        </a>
        <h4 style={{ fontSize: "1.5em", height: "2.5em", textAlign: "center" }}>{organization}</h4>
        <h4 style={{ fontSize: "1.5em", height: "3.5em", textAlign: "center", fontWeight: "normal", fontStyle: "italic" }}>{talkT}</h4>
        <div className="card-image">
          <div
            className="thumb"
            style={{ backgroundImage: `url(${img})`, width: "700px" }}
            title={name}
          >
            {" "}
          </div>
        </div>
        {<div style={{ color: ":#808080", fontSize: ".3em", width: "300px"  }}>{imagecredit}</div>}
      </div>
    </div>
  );
}

export function EventCard({ time, title, description, speaker, room }) {
  return (
    <div className="row" style={{ paddingBottom: "10px" }}>
      <div className="card" style={{ width: "100%" }}>
        {" "}
        <h5>
          {" "}
          {time} | {title}
        </h5>{" "}
        <p style={{ fontSize: "small" }}>{description} </p>
        <p style={{ fontSize: "small" }}>
          Speaker: {parse(speaker)} <br></br>
          Room: {room}
        </p>
      </div>
    </div>
  );
}
