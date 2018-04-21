import React from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
			email : '',
            password : '',
            password_confirmation:  '',
            user: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: target.name,
            email: target.email,
            password: target.password,
            password_confirmation: target.password_confirmation
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
         axios.post('localhost:8000/api/auth/register', {
            value: this.state.value,
         })
         .then(function (response) {
           console.log(response);
         })
         .catch(function (error) {
          console.log(error)
         });
    }


   render() {
        return(
            <div className="container">
                <h2 className="pageTitle">Register</h2>
                <div className="row form">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="name" value={this.state.name} type="text" className="validate" onChange={this.handleChange}/>
                            <label for="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" name="password" type="password" className="validate" value={this.state.password} onChange={this.handleChange}/>
                            <label for="password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" name="password_confirmation" type="password" className="validate" value={this.state.password_confirmation} onChange={this.handleChange}/>
                            <label for="password">Password Confirmation</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" name="email" type="email" className="validate" value={this.state.email} onChange={this.handleChange}/>
                            <label for="email">Email</label>
                        </div>
                    </div>            
                    <input type="submit" value="Registrar" className="btn btn-info" />
                    </form>
                </div>
            </div>
        )
   }
}


const mapStateToProps = state => ({
    name: state.name,
    email: state.email,
    password: state.password,
    password_confirmation: state.password_confirmation,
})

export default connect(mapStateToProps)(register)

