import React from "react";
import { Link } from "wouter";

export default function Category({ title, options }) {
    return <div>
        <h3>{title}</h3>
        <ul>
            {
                options.map(popularGif => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
}