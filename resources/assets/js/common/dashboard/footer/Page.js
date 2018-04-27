import React from 'react'
import PropTypes from 'prop-types';

class Page extends React.Component {
   render() {
       return(
        <footer className="footer">
            <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018 <a href="#">UrbanUI</a>. All rights reserved.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Alejandro Roa<i className="mdi mdi-heart text-danger"></i></span>
            </div>
        </footer>
       )
   }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;