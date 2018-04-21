import React from 'react'
import { connect } from 'react-redux';

export default class login extends React.Component {
   render() {
       return(
        <div className="container">
            <h2 className="pageTitle">Login</h2>
            <div className="row form">
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" type="email" className="validate"/>
                    <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate"/>
                    <label for="password">Password</label>
                    </div>
                </div>
                </form>
            </div>
        </div>
       )
   }
}