import React from 'react'

export default class register extends React.Component {
   render() {
       return(
        <div className="container">
            <h2 className="pageTitle">Register</h2>
            <div className="row form">
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                    <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate"/>
                    <label for="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" type="email" className="validate"/>
                    <label for="email">Email</label>
                    </div>
                </div>
                </form>
            </div>
        </div>
       )
   }
}