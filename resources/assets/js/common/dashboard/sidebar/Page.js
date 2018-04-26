import React from 'react'
import PropTypes from 'prop-types';

class Page extends React.Component {
   render() {

       return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <div className="nav-link">
                <div className="profile-image">
                  <img src="../../images/faces/face10.jpg" alt="image" />
                  <span className="online-status online"></span>
                </div>
                <div className="profile-name">
                  <p className="name">
                    Marina Michel
                  </p>
                  <p className="designation">
                    Super Admin
                  </p>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../index.html">
                <i className="icon-rocket menu-icon"></i>
                <span className="menu-title">Dashboard</span>
                <span className="badge badge-success">New</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../widgets.html">
                <i className="icon-shield menu-icon"></i>
                <span className="menu-title">Widgets</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
                <i className="icon-check menu-icon"></i>
                <span className="menu-title">Page Layouts</span>
                <span className="badge badge-danger">3</span>
              </a>
              <div className="collapse" id="page-layouts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item d-none d-lg-block"> <a className="nav-link" href="./boxed-layout.html">Boxed</a></li>
                  <li className="nav-item"> <a className="nav-link" href="./rtl-layout.html">RTL</a></li>
                  <li className="nav-item d-none d-lg-block"> <a className="nav-link" href="./horizontal-menu.html">Horizontal Menu</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false" aria-controls="sidebar-layouts">
                <i className="icon-layers menu-icon"></i>
                <span className="menu-title">Sidebar Layouts</span>
                <span className="badge badge-warning">5</span>
              </a>
              <div className="collapse" id="sidebar-layouts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="./compact-menu.html">Compact menu</a></li>
                  <li className="nav-item"> <a className="nav-link" href="./sidebar-collapsed.html">Icon menu</a></li>
                  <li className="nav-item"> <a className="nav-link" href="./sidebar-hidden.html">Sidebar Hidden</a></li>
                  <li className="nav-item"> <a className="nav-link" href="./sidebar-hidden-overlay.html">Sidebar Overlay</a></li>
                  <li className="nav-item"> <a className="nav-link" href="./sidebar-fixed.html">Sidebar Fixed</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i className="icon-target menu-icon"></i>
                <span className="menu-title">Basic UI Elements</span>
                <span className="badge badge-success">10</span>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/accordions.html">Accordions</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/buttons.html">Buttons</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/badges.html">Badges</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/dropdowns.html">Dropdowns</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/modals.html">Modals</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/progress.html">Progress bar</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/pagination.html">Pagination</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/tabs.html">Tabs</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/typography.html">Typography</a></li>
                </ul>
                </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                <i className="icon-cup menu-icon"></i>
                <span className="menu-title">Advanced Elements</span>
                <span className="badge badge-primary">8</span>
              </a>
              <div className="collapse" id="ui-advanced">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/dragula.html">Dragula</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/clipboard.html">Clipboard</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/context-menu.html">Context menu</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/slider.html">Sliders</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/carousel.html">Carousel</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../ui-features/tour.html">Tour</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                <i className="icon-flag menu-icon"></i>
                <span className="menu-title">Form elements</span>
                <span className="badge badge-danger">3</span>
              </a>
              <div className="collapse" id="form-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><a className="nav-link" href="../forms/basic_elements.html">Basic Elements</a></li>
                  <li className="nav-item"><a className="nav-link" href="../forms/advanced_elements.html">Advanced Elements</a></li>
                  <li className="nav-item"><a className="nav-link" href="../forms/validation.html">Validation</a></li>
                  <li className="nav-item"><a className="nav-link" href="../forms/wizard.html">Wizard</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                <i className="icon-anchor menu-icon"></i>
                <span className="menu-title">Editors</span>
                <span className="badge badge-info">3</span>
              </a>
              <div className="collapse" id="editors">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><a className="nav-link" href="../forms/text_editor.html">Text editors</a></li>
                  <li className="nav-item"><a className="nav-link" href="../forms/code_editor.html">Code editors</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                <i className="icon-pie-chart menu-icon"></i>
                <span className="menu-title">Charts</span>
                <span className="badge badge-warning">8</span>
              </a>
              <div className="collapse" id="charts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../charts/chartjs.html">ChartJs</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../charts/morris.html">Morris</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../charts/flot-chart.html">Flot</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../charts/google-charts.html">Google charts</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../charts/sparkline.html">Sparkline js</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../charts/c3.html">C3 charts</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../charts/chartist.html">Chartists</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../charts/justGage.html">JustGage</a></li>
                </ul>
                </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">Tables</span>
                <span className="badge badge-info">4</span>
              </a>
              <div className="collapse" id="tables">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../tables/basic-table.html">Basic table</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../tables/data-table.html">Data table</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../tables/js-grid.html">Js-grid</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../tables/sortable-table.html">Sortable table</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../ui-features/popups.html">
                <i className="icon-diamond menu-icon"></i>
                <span className="menu-title">Popups</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../ui-features/notifications.html">
                <i className="icon-bell menu-icon"></i>
                <span className="menu-title">Notifications</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i className="icon-globe menu-icon"></i>
                <span className="menu-title">Icons</span>
                <span className="badge badge-info">4</span>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../icons/flag-icons.html">Flag icons</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../icons/font-awesome.html">Font Awesome</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../icons/simple-line-icon.html">Simple line icons</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../icons/themify.html">Themify icons</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
                <i className="icon-location-pin menu-icon"></i>
                <span className="menu-title">Maps</span>
                <span className="badge badge-success">2</span>
              </a>
              <div className="collapse" id="maps">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../maps/mapeal.html">Mapeal</a></li>
                  <li className="nav-item"> <a className="nav-link" href="../maps/vector-map.html">Vector Map</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i className="icon-bubbles menu-icon"></i>
                <span className="menu-title">User Pages</span>
                <span className="badge badge-danger">5</span>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../samples/login.html"> Login </a></li>
                  <li className="nav-item"> <a className="nav-link" href="../samples/register.html"> Register </a></li>
                  <li className="nav-item"> <a className="nav-link" href="../samples/lock-screen.html"> Lockscreen </a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                <i className="icon-support menu-icon"></i>
                <span className="menu-title">Error pages</span>
                <span className="badge badge-primary">2</span>
              </a>
              <div className="collapse" id="error">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../samples/error-404.html"> 404 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="../samples/error-500.html"> 500 </a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                <i className="icon-user menu-icon"></i>
                <span className="menu-title">General Pages</span>
                <span className="badge badge-warning">6</span>
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../samples/blank-page.html"> Blank Page </a></li>
                  <li className="nav-item"> <a className="nav-link" href="../samples/landing-page.html"> Landing Page </a></li>
                  <li className="nav-item"> <a className="nav-link" href="../samples/faq.html"> FAQ </a></li>
                  <li className="nav-item"> <a className="nav-link" href="../samples/portfolio.html"> Portfolio </a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                <i className="icon-briefcase menu-icon"></i>
                <span className="menu-title">E-commerce</span>
                <span className="badge badge-info">3</span>
              </a>
              <div className="collapse" id="e-commerce">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="../samples/pricing-table.html"> Pricing Table </a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../apps/email.html">
                <i className="icon-cursor menu-icon"></i>
                <span className="menu-title">E-mail</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../apps/calendar.html">
                <i className="icon-calendar menu-icon"></i>
                <span className="menu-title">Calendar</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../apps/gallery.html">
                <i className="icon-picture menu-icon"></i>
                <span className="menu-title">Gallery</span>
              </a>
            </li>
            <li className="nav-item nav-doc">
              <a className="nav-link bg-primary" href="../documentation.html">
                <i className="icon-magnet menu-icon"></i>
                <span className="menu-title">Documentation</span>
              </a>
            </li>
            <li className="mt-4 nav-item nav-progress">
              <h6 className="nav-progress-heading mt-4 font-weight-normal">
                Today's Sales
                <span className="nav-progress-sub-heading">
                  50 sold
                </span>
              </h6>
              <div className="progress progress-sm">
                <div className="progress-bar bg-info" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6 className="nav-progress-heading mt-4 font-weight-normal">
                Customer target
                <span className="nav-progress-sub-heading">
                  500
                </span>
              </h6>
              <div className="progress progress-sm">
                <div className="progress-bar bg-danger" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </li>
          </ul>
        </nav>
       )
   }
}

Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;