import React from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthService from '../../services';
import {Validator} from 'ree-validate';


class Page extends React.Component {

constructor(props) {
    super(props);
    this.validator = new Validator({
        email: 'required|email',
        password: 'required|min:6'
    });

    this.state = {
        credentials: {
            email: '',
            password: ''
        },
        responseError: {
            isError: false,
            code: '',
            text: ''
        },
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
        })
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
    this.props.dispatch(AuthService.login(credentials))
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

onSocialClick(event, data) {
   window.location.assign(`redirect/${data.as}`);
}

componentDidMount(){
    this.setState({
        isLoading: false
    });
}

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to={from}/>
            )
        }
        const {errors} = this.state;

        return(
         <div className="container">
             <h2 className="pageTitle">Login</h2>
             <div className="row form">
                 <form className="col s12" onSubmit={this.handleSubmit}>
                 <div className="row">
                     <div className="input-field col s12">
                     <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleChange}/>
                     <label for="email">Email</label>
                     </div>
                 </div>
                 <div className="row">
                     <div className="input-field col s12">
                     <input id="password" type="password" className="validate" name="password" value={this.state.password}  onChange={this.handleChange}/>
                     <label for="password">Password</label>
                     </div>
                 </div>
                 <input type="submit" value="Iniciar Sesion" className="btn btn-info" onClick={this.handleSubmit} />
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