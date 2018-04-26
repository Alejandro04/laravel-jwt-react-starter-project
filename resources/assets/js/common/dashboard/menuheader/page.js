import React from 'react'
import PropTypes from 'prop-types';

class Page extends React.Component {
   render() {
       return(
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                <a className="navbar-brand brand-logo" href="../../index.html"><img src="../../images/logo.svg" alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" href="../../index.html"><img src="../../images/logo-mini.svg" alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span className="icon-menu"></span>
                </button>
                <ul className="navbar-nav">
                <li className="nav-item dropdown d-none d-lg-flex">
                    <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" href="#" data-toggle="dropdown">
                    <span className="btn">+ Create new</span>
                    </a>
                    <div className="dropdown-menu navbar-dropdown dropdown-left" aria-labelledby="actionDropdown">
                    <a className="dropdown-item" href="#">
                        <i className="icon-user text-primary"></i>
                        User Account
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                        <i className="icon-user-following text-warning"></i>
                        Admin User
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                        <i className="icon-docs text-success"></i>
                        Sales report
                    </a>
                    </div>
                </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item dropdown d-none d-lg-flex">
                    <a className="nav-link dropdown-toggle" id="languageDropdown" href="#" data-toggle="dropdown">
                    <i className="flag-icon flag-icon-gb"></i>
                    English
                    </a>
                    <div className="dropdown-menu navbar-dropdown" aria-labelledby="languageDropdown">
                    <a className="dropdown-item font-weight-medium" href="#">
                        <i className="flag-icon flag-icon-fr"></i>
                        French
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item font-weight-medium" href="#">
                        <i className="flag-icon flag-icon-es"></i>
                        Espanol
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item font-weight-medium" href="#">
                        <i className="flag-icon flag-icon-lt"></i>
                        Latin
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item font-weight-medium" href="#">
                        <i className="flag-icon flag-icon-ae"></i>
                        Arabic
                    </a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i className="icon-bell mx-0"></i>
                    <span className="count"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <a className="dropdown-item">
                        <p className="mb-0 font-weight-normal float-left">You have 4 new notifications
                        </p>
                        <span className="badge badge-pill badge-warning float-right">View all</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                            <i className="icon-info mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-medium">Application Error</h6>
                        <p className="font-weight-light small-text">
                            Just now
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                            <i className="icon-speech mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-medium">Settings</h6>
                        <p className="font-weight-light small-text">
                            Private message
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                            <i className="icon-envelope mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-medium">New user registration</h6>
                        <p className="font-weight-light small-text">
                            2 days ago
                        </p>
                        </div>
                    </a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                    <i className="icon-envelope mx-0"></i>
                    <span className="count"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                    <div className="dropdown-item">
                        <p className="mb-0 font-weight-normal float-left">You have 7 unread mails
                        </p>
                        <span className="badge badge-info badge-pill float-right">View all</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="../../images/faces/face4.jpg" alt="image" className="profile-pic" />
                        </div>
                        <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-medium">David Grey
                            <span className="float-right font-weight-light small-text">1 Minutes ago</span>
                        </h6>
                        <p className="font-weight-light small-text">
                            The meeting is cancelled
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="../../images/faces/face2.jpg" alt="image" className="profile-pic" />
                        </div>
                        <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-medium">Tim Cook
                            <span className="float-right font-weight-light small-text">15 Minutes ago</span>
                        </h6>
                        <p className="font-weight-light small-text">
                            New product launch
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="../../images/faces/face3.jpg" alt="image" className="profile-pic" />
                        </div>
                        <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-medium"> Johnson
                            <span className="float-right font-weight-light small-text">18 Minutes ago</span>
                        </h6>
                        <p className="font-weight-light small-text">
                            Upcoming board meeting
                        </p>
                        </div>
                    </a>
                    </div>
                </li>
                <li className="nav-item nav-settings d-none d-lg-block">
                    <a className="nav-link" href="#">
                    <i className="icon-grid"></i>
                    </a>
                </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="icon-menu"></span>
                </button>
            </div>
        </nav>
       )
   }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;