import React from "react";
import parse from "html-react-parser";
export function Card({ name, link, img, organization, imgcr }) {
  /* Create Card with name and image */
  let imagecredit = "";
  if (imgcr) {
    imagecredit = parse(imgcr);
  }
  let talk_title = "";
  if (title) {
     talk_title = title;
  }

  return (
    <div className="col-12 col-sm-4">
      <div class="card">
        <a href={link}>
          <h3 style={{ width: "300px" }} >{name}</h3>
        </a>
        <h4 style={{ width: "300px" }}>{organization}</h4>
        <h5 style={{ width: "300px", fontStyle: "italic" }}>{talk_title}</h5>
        <div class="card-image">
          <div
            class="thumb"
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

export function EventCard({ time, title, description, speaker, room }) {
  return (
    <div className="row" style={{ paddingBottom: "10px" }}>
      <div class="card" style={{ width: "100%" }}>
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
