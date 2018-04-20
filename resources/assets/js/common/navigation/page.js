import React from 'react'

export default class PageNavigation extends React.Component {
   render() {
       return(
        <nav>
            <div class="nav-wrapper grey darken-3">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#/login">Login</a></li>
                <li><a href="#/register">Register</a></li>
            </ul>
            </div>
        </nav>
       )
   }
}