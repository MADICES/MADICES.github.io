import React from "react";
export function Card({ name, link, img, organization }) {
  /* Create Card with name and image */
  return (
    <div className="col-12 col-sm-4">
      <div class="card">
        <a href={link}>
          <h3>{name}</h3>
        </a>
        <h4>{organization}</h4>
        <div class="card-image">
          <div
            class="thumb"
            style={{ backgroundImage: `url(${img})` }}
            title={name}
          >
            {" "}
          </div>
        </div>
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
        <p style={{fontSize: "small"}}>{description} </p>
        <p style={{fontSize: "small"}}>
          Speaker: {speaker} <br></br>
          Room: {room}
        </p>
      </div>
    </div>
  );
}
