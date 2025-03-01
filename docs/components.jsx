import React from "react";
import classNames from "classnames";

export function Sponsor({ name, link, img, className }) {
  const classes = classNames("col-12 col-md-6 d-flex sponsor-box", className);

  return (
    <div className={classes}>
      <a href={link}>
        <img className="sponsor-img" src={img} alt={name} />
      </a>
    </div>
  );
}
