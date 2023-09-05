import React from 'react'
import GitHubIcon from '../images/GitHub Icon.svg'
import TwitterIcon from '../images/Twitter Icon.svg'

export default function Footer(){
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://github.com/elm-Saad" target="_blank">
                        <img src={GitHubIcon} alt="GitHub Icon" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/elm_saad" target="_blank">
                        <img src={TwitterIcon} alt="Twitter Icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}