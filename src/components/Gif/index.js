import React from "react";
import './Gif.css'
import { Link } from "wouter";

export default function index({ title, id, url }) {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      {/* <h4>{title}</h4> */}
      <img loading="lazy" alt={title} src={url} />
    </Link>
  );
}
