import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthService from '../../services';
import {Validator} from 'ree-validate';
import { Redirect } from 'react-router';

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.validator = new Validator({
            name: 'required|min:3',
            email: 'required|email',
            password: 'required|min:6',
            password_confirmation: 'required|min:6|confirmed:password'
        });
        this.state = {
            credentials: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isSuccess: false,
            isLoading: false,
            errors: this.validator.errorBag
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const {credentials} = this.state;
        credentials[name] = value;

        this.validator.validate(name, value)
        .then(() => {
            const {errorBag} = this.validator;
            this.setState({errors: errorBag, credentials})
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const {credentials} = this.state;

        this.validator.validateAll(credentials)
            .then(success => {
                if (success) {
                    this.setState({
                        isLoading: true
                    });
                    this.submit(credentials);
                }
            });
    }

    submit(credentials) {
        this.props.dispatch(AuthService.register(credentials))
            .then((result)  => {
                this.setState({
                    isLoading: false
                });
                this.setState({
                    isSuccess: true,
                });
            })
            .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
                this.setState({
                    isLoading: false
                });
            })
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }


   render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' replace/>
        }
        const {errors} = this.state;

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


Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;

