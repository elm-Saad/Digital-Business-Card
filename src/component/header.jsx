import React from 'react'
import logo from '../images/user.png'

export default function Header(){
    return (
        <header>
            <img src={logo} />
            <h2>Saad Elmesaoudi</h2>
            <h4>Frontend Developer</h4>
            <a href="mailto:saad.elm2002@gmail.com?subject=hello">
                <button>
                    Email
                </button>
            </a>
        </header>
    )
}