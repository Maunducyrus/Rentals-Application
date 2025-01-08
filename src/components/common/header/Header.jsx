import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="container flex">
                <div className="logo">

                </div>
                    <img src="./images/logo.png" alt="" />
            </div>
            <div className="nav">
                <ul>
                    {nav.map((list, index) => (
                        <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}