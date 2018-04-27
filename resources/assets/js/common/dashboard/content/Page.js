import React from 'react'
import PropTypes from 'prop-types';

class Page extends React.Component {
   render() {
       return(
        <div className="content-wrapper">
        <div className="row">
          <div className="col-md-6 col-lg-3 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-md-center">
                  <i className="mdi mdi-basket icon-lg text-success"></i>
                  <div className="ml-3">
                    <p className="mb-0">Daily Order</p>
                    <h6>12569</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-md-center">
                  <i className="mdi mdi-rocket icon-lg text-warning"></i>
                  <div className="ml-3">
                    <p className="mb-0">Tasks Completed</p>
                    <h6>2346</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-md-center">
                  <i className="mdi mdi-diamond icon-lg text-info"></i>
                  <div className="ml-3">
                    <p className="mb-0">Monthly Sales</p>
                    <h6>896546</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-md-center">
                  <i className="mdi mdi-chart-line-stacked icon-lg text-danger"></i>
                  <div className="ml-3">
                    <p className="mb-0">Total Revenue</p>
                    <h6>$ 56000</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body pb-0">
                <h6 className="card-title">Reviews</h6>
                <div className="row">
                  <div className="col-12">
                    <div className="wrapper border-bottom py-2">
                      <div className="d-flex">
                        <img className="img-sm rounded-circle" src="./images/faces/face4.jpg" alt="" />
                        <div className="wrapper ml-4">
                          <p className="mb-0">Sarah Graves</p>
                          <small className="text-muted mb-0">Awesome!!! Highly recommend</small>
                        </div>
                        <div className="rating ml-auto d-flex align-items-center">
                          <select id="dashboard-rating-2" name="rating">
                            <option value="1" />1
                            <option value="2" />2
                            <option value="3" />3
                            <option value="4" />4
                            <option value="5" />5
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="wrapper border-bottom py-2">
                      <div className="d-flex">
                        <img className="img-sm rounded-circle" src="./images/faces/face5.jpg" alt="" />
                        <div className="wrapper ml-4">
                          <p className="mb-0">David Grey</p>
                          <small className="text-muted mb-0">Not satisfied with the service.</small>
                        </div>
                        <div className="rating ml-auto d-flex align-items-center">
                          <select id="dashboard-rating-1" name="rating">
                            <option value="1" />1
                            <option value="2" />2
                            <option value="3" />3
                            <option value="4" />4
                            <option value="5" />5
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="wrapper border-bottom py-2">
                      <div className="d-flex">
                        <img className="img-sm rounded-circle" src="./images/faces/face5.jpg" alt="" />
                        <div className="wrapper ml-4">
                          <p className="mb-0">Burno mars</p>
                          <small className="text-muted mb-0">Great!! It's the best</small>
                        </div>
                        <div className="rating ml-auto d-flex align-items-center">
                          <select id="dashboard-rating-3" name="rating">
                            <option value="1" />1
                            <option value="2" />2
                            <option value="3" />3
                            <option value="4" />4
                            <option value="5" />5
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="wrapper py-2">
                      <div className="d-flex">
                        <img className="img-sm rounded-circle" src="./images/faces/face4.jpg" alt="" />
                        <div className="wrapper ml-4">
                          <p className="mb-0">Dobrick</p>
                          <small className="text-muted mb-0">Not worth the money.</small>
                        </div>
                        <div className="rating ml-auto d-flex align-items-center">
                          <select id="dashboard-rating-4" name="rating">
                            <option value="1" />1
                            <option value="2" />2
                            <option value="3" />3
                            <option value="4" />4
                            <option value="5" />5
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="row flex-grow">
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title mb-0">Statistics</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-inline-block pt-3">
                        <div className="d-lg-flex">
                          <h2 className="mb-0">$10,200</h2>
                          <div className="d-flex align-items-center ml-lg-2">
                            <i className="mdi mdi-clock text-muted"></i>
                            <small className="ml-1 mb-0">Updated: 9:10am</small>
                          </div>
                        </div>
                        <small className="text-gray">Raised from 89 orders.</small>
                      </div>
                      <div className="d-inline-block">
                        <div className="bg-success px-3 px-md-4 py-2 rounded">
                          <i className="mdi mdi-buffer text-white icon-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title mb-0">Daily Order</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-inline-block pt-3">
                        <div className="d-lg-flex">
                          <h2 className="mb-0">$2256</h2>
                          <div className="d-flex align-items-center ml-lg-2">
                            <i className="mdi mdi-clock text-muted"></i>
                            <small className="ml-1 mb-0">Updated: 05:42pm</small>
                          </div>
                        </div>
                        <small className="text-gray">hey, let’s have lunch together</small>
                      </div>
                      <div className="d-inline-block">
                        <div className="bg-warning px-3 px-md-4 py-2 rounded">
                          <i className="mdi mdi-wallet text-white icon-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 d-flex flex-column">
            <div className="row flex-grow">
              <div className="col-12 col-md-4 col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">Growth</h6>
                    <div className="row">
                      <div className="col-12 text-center">
                        <div className="row">
                          <div className="col-6 border-right">
                            <h4>63%</h4>
                            <p>Monthly</p>
                          </div>
                          <div className="col-6">
                            <h4>20%</h4>
                            <p>Daily</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center mt-3">
                      <div id="growth-chart">
                          7, 10, 11, 9, 11, 16, 12, 15, 13, 8, 12, 10, 13, 10, 16, 15, 12, 8, 10, 7, 16, 12, 8, 9, 7, 12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-12 grid-margin stretch-card">
                <div className="card bg-info">
                  <div className="text-white py-3 px-4">
                    <h6 className="card-title text-white mb-0">Page View</h6>
                    <p>3669.25</p>
                    <div className="chart-container">
                      <canvas className="w-100 h-100" id="dashboard-lineChart-2" height="50"></canvas>
                    </div>
                    <small className="text-white">View Details</small>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-12 grid-margin stretch-card">
                <div className="card bg-success">
                  <div className="text-white py-3 px-4">
                    <h6 className="card-title text-white mb-0">Donations</h6>
                    <p>$56569</p>
                    <div className="chart-container">
                      <canvas className="w-100 h-100" id="dashboard-lineChart-3" height="50"></canvas>
                    </div>
                    <small className="text-white">View Details</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Daily Sales</h6>
                <div className="w-75 mx-auto">
                  <div className="d-flex justify-content-between text-center">
                    <div className="wrapper">
                      <h4>$2256</h4>
                      <small className="text-muted">Totel sales</small>
                    </div>
                    <div className="wrapper">
                      <h4>584</h4>
                      <small className="text-muted">Compaign</small>
                    </div>
                  </div>
                  <div id="dashboard-donut-chart"></div>
                </div>
                <div id="legend" className="donut-legend"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Total Revenue</h6>
                <div className="w-75 mx-auto">
                  <div className="d-flex justify-content-between text-center mb-5">
                    <div className="wrapper">
                      <h4>6,256</h4>
                      <small className="text-muted">Totel sales</small>
                    </div>
                    <div className="wrapper">
                      <h4>8569</h4>
                      <small className="text-muted">Open Compaign</small>
                    </div>
                  </div>
                </div>
                <div id="morris-line-example" ></div>
                <div className="w-75 mx-auto">
                  <div className="d-flex justify-content-between text-center mt-5">
                    <div className="wrapper">
                      <h4>5136</h4>
                      <small className="text-muted">Online Sales</small>
                    </div>
                    <div className="wrapper">
                      <h4>4596</h4>
                      <small className="text-muted">Store Sales</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row grid-margin">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Order status</h6>
                <div className="d-flex table-responsive">
                  <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-info"><i className="mdi mdi-plus-circle-outline"></i> Add</button>
                  </div>
                  <div className="btn-group mr-2">
                    <button type="button" className="btn btn-light"><i className="mdi mdi-alert-circle-outline"></i></button>
                    <button type="button" className="btn btn-light"><i className="mdi mdi-delete-empty"></i></button>
                  </div>
                  <div className="btn-group mr-2">
                    <button type="button" className="btn btn-light"><i className="mdi mdi-printer"></i></button>
                  </div>
                  <div className="btn-group ml-auto mr-2 border-0">
                    <input type="text" className="form-control" placeholder="Search Here" />
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-light"><i className="mdi mdi-cloud"></i></button>
                    <button type="button" className="btn btn-light"><i className="mdi mdi-dots-vertical"></i></button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table mt-3 border-top">
                    <thead>
                      <tr>
                        <th>Invoice</th>
                        <th>Customer</th>
                        <th>Ship</th>
                        <th>Best Price</th>
                        <th>Purchsed Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>50014</td>
                        <td>David Grey</td>
                        <td>Italy</td>
                        <td>$6300</td>
                        <td>$2100</td>
                        <td><div className="badge badge-success badge-fw">Progress</div></td>
                      </tr>
                      <tr>
                        <td>50015</td>
                        <td>Stella Johnson</td>
                        <td>Brazil</td>
                        <td>$4500</td>
                        <td>$4300</td>
                        <td><div className="badge badge-warning badge-fw">Open</div></td>
                      </tr>
                      <tr>
                        <td>50016</td>
                        <td>Marina Michel</td>
                        <td>Japan</td>
                        <td>$4300</td>
                        <td>$6440</td>
                        <td><div className="badge badge-danger badge-fw">On hold</div></td>
                      </tr>
                      <tr>
                        <td>50017</td>
                        <td>John Doe</td>
                        <td>India</td>
                        <td>$6400</td>
                        <td>$2200</td>
                        <td><div className="badge badge-success badge-fw">Progress</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-column flex-sm-row mt-4">
                  <p className="mb-3 mb-sm-0">Showing 1 to 20 of 20 entries</p>
                  <nav>
                    <ul className="pagination pagination-info mb-0">
                      <li className="page-item"><a className="page-link"><i className="mdi mdi-chevron-left"></i></a></li>
                      <li className="page-item active"><a className="page-link">1</a></li>
                      <li className="page-item"><a className="page-link">2</a></li>
                      <li className="page-item"><a className="page-link">3</a></li>
                      <li className="page-item"><a className="page-link">4</a></li>
                      <li className="page-item"><a className="page-link"><i className="mdi mdi-chevron-right"></i></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Monthly Analytics</h6>
                <p className="card-description">Products that are creating the most revenue and their sales throughout the year and the variation in behavior of sales.</p>
                <div id="js-legend" className="chartjs-legend mt-4 mb-5"></div>
                <div className="demo-chart">
                  <canvas id="dashboard-monthly-analytics"></canvas>                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="card-title">Activity</h6>
                </div>
                <p className="card-description">What's people doing right now</p>
                <div className="list d-flex align-items-center border-bottom py-3">
                  <img className="img-sm rounded-circle" src="./images/faces/face4.jpg" alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0"><b>Dobrick </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">Awesome!</p>
                      </div>
                      <small className="text-muted ml-auto">2 hours ago</small>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom py-3">
                  <img className="img-sm rounded-circle" src="./images/faces/face5.jpg" alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0"><b>Stella </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">Awesome!</p>
                      </div>
                      <small className="text-muted ml-auto">3 hours ago</small>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center border-bottom py-3">
                  <img className="img-sm rounded-circle" src="./images/faces/face7.jpg" alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0"><b>Peter </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">Great!</p>
                      </div>
                      <small className="text-muted ml-auto">1 hours ago</small>
                    </div>
                  </div>
                </div>
                <div className="list d-flex align-items-center pt-3">
                  <img className="img-sm rounded-circle" src="./images/faces/face6.jpg" alt="" />
                  <div className="wrapper w-100 ml-3">
                    <p className="mb-0"><b>Nateila </b>posted in Material</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-clock text-muted mr-1"></i>
                        <p className="mb-0">Awesome!</p>
                      </div>
                      <small className="text-muted ml-auto">1 hours ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Sales Difference</h6>
                <p>Sales difference with last year</p>
              </div>
              <div id="morris-area-example"></div>
            </div>
          </div>
          <div className="col-12 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Sales Chart</h6>
                <p className="card-description">Based on last month analytics.</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-outline-secondary">2015</button>
                  <button type="button" className="btn btn-outline-secondary">2016</button>
                </div>
                <div id="morris-dashboard-bar-chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="wrapper d-md-flex align-items-center justify-content-center text-center text-md-left">
                  <i className="mdi mdi-facebook icon-lg text-facebook"></i>
                  <div className="wrapper ml-md-3">
                    <p className="text-facebook mb-0 font-weight-medium">15k Likes</p>
                    <small className="text-muted mb-0">You main list growing !</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="wrapper d-md-flex align-items-center justify-content-center text-center text-md-left">
                  <i className="mdi mdi-twitter icon-lg text-twitter"></i>
                  <div className="wrapper ml-md-3">
                    <p className="text-twitter mb-0 font-weight-medium">18k followers</p>
                    <small className="text-muted mb-0">There you are !</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="wrapper d-md-flex align-items-center justify-content-center text-center text-md-left">
                  <i className="mdi mdi-linkedin icon-lg text-linkedin"></i>
                  <div className="wrapper ml-md-3">
                    <p className="text-linkedin mb-0 font-weight-medium">5k connections</p>
                    <small className="text-muted mb-0">Going good !</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="wrapper d-flex align-items-center justify-content-start justify-content-sm-center">
                  <img className="img-md rounded" src="./images/faces/face1.jpg" alt="" />
                  <div className="wrapper ml-4">
                    <p className="mb-0 font-weight-medium">Tim Cook</p>
                    <small className="text-muted mb-0">timcook@gmail.com</small>
                    <p className="text-success mb-0 font-weight-medium">Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="wrapper d-flex align-items-center justify-content-start justify-content-sm-center">
                  <img className="img-md rounded" src="./images/faces/face2.jpg" alt="" />
                  <div className="wrapper ml-4">
                    <p className="mb-0 font-weight-medium">Sarah Graves</p>
                    <small className="text-muted mb-0">Sarahgraves@gmail.com</small>
                    <p className="text-success mb-0 font-weight-medium">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="wrapper d-flex align-items-center justify-content-start justify-content-sm-center">
                  <img className="img-md rounded" src="./images/faces/face3.jpg" alt="" />
                  <div className="wrapper ml-4">
                    <p className="mb-0 font-weight-medium">David Grey</p>
                    <small className="text-muted mb-0">David@gmail.com</small>
                    <p className="text-success mb-0 font-weight-medium">Support Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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