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


export function EventCard({time, title, speaker, room }) {
    return (<div className="col-1 col-sm-1">
    <div class="card"> </div> <h2>{title}</h2> </div>)
}
