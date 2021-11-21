var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Dashboard</title>
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
        <link rel="stylesheet" href="/assets/fonts/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/fonts/material-icons.min.css" type="text/css" />
        <link rel="stylesheet" href="/assets/fonts/fontawesome5-overrides.min.css" />
        <link rel="stylesheet" href="/assets/css/styles.min.css" />
        <div id="wrapper">
          <nav className="
          navbar navbar-dark
          align-items-start
          sidebar sidebar-dark
          accordion
          bg-gradient-primary
          p-0
        " style={{position: 'static'}}>
            <div className="container-fluid d-flex flex-column p-0" style={{zIndex: 1, left: '500px', top: 0, overflowX: 'hidden'}}>
              <a className="
              navbar-brand
              d-flex
              justify-content-center
              align-items-center
              sidebar-brand
              m-0
            " href="#">
                <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-box-open" />
                </div>
                <div className="sidebar-brand-text mx-3"><span>Thehub</span></div>
              </a>
              <hr className="sidebar-divider my-0" />
              <ul className="navbar-nav text-light" id="accordionSidebar">
                <li className="nav-item">
                  <a className="nav-link active" href="./DashBoard.html"><i className="fas fa-tachometer-alt" /><span>Dashboard</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile.html"><i className="fas fa-user" /><span>Profile</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#"><i className="fa fa-exchange" /><span>Transactions</span></a><a className="nav-link" href="./Customer.html"><i className="fa fa-volume-control-phone" /><span>Customers</span></a><a className="nav-link" href="/#"><i className="far fa-envelope" /><span>Messages</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="far fa-user-circle" /><span>Invoice</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-gear" /><span>Settings //move to buttom</span></a>
                </li>
              </ul>
              <div className="text-center d-none d-md-inline">
                <button className="btn rounded-circle border-0" id="sidebarToggle" type="button" />
              </div>
            </div>
          </nav>
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <nav className="
              navbar navbar-light navbar-expand
              bg-white
              shadow
              mb-4
              topbar
              static-top
            ">
                <div className="container-fluid">
                  <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                    <i className="fas fa-bars" />
                  </button>
                  <form className="
                  d-none d-sm-inline-block
                  me-auto
                  ms-md-3
                  my-2 my-md-0
                  mw-100
                  navbar-search
                ">
                    <div className="input-group">
                      <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." /><button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                  <ul className="navbar-nav flex-nowrap ms-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow">
                      <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search" /></a>
                      <div className="
                      dropdown-menu dropdown-menu-end
                      p-3
                      animated--grow-in
                    " aria-labelledby="searchDropdown">
                        <form className="me-auto navbar-search w-100">
                          <div className="input-group">
                            <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                            <div className="input-group-append">
                              <button className="btn btn-primary py-0" type="button">
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                      <div className="nav-item dropdown no-arrow">
                        <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw" /></a>
                        <div className="
                        dropdown-menu dropdown-menu-end dropdown-list
                        animated--grow-in
                      ">
                          <h6 className="dropdown-header">alerts center</h6>
                          <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="me-3">
                              <div className="bg-primary icon-circle">
                                <i className="fas fa-file-alt text-white" />
                              </div>
                            </div>
                            <div>
                              <span className="small text-gray-500">December 12, 2019</span>
                              <p>A new monthly report is ready to download!</p>
                            </div> </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="me-3">
                              <div className="bg-success icon-circle">
                                <i className="fas fa-donate text-white" />
                              </div>
                            </div>
                            <div>
                              <span className="small text-gray-500">December 7, 2019</span>
                              <p>$290.29 has been deposited into your account!</p>
                            </div> </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="me-3">
                              <div className="bg-warning icon-circle">
                                <i className="fas fa-exclamation-triangle text-white" />
                              </div>
                            </div>
                            <div>
                              <span className="small text-gray-500">December 2, 2019</span>
                              <p>
                                Spending Alert: We've noticed unusually high
                                spending for your account.
                              </p>
                            </div> </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                      <div className="nav-item dropdown no-arrow">
                        <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw" /></a>
                        <div className="
                        dropdown-menu dropdown-menu-end dropdown-list
                        animated--grow-in
                      ">
                          <h6 className="dropdown-header">alerts center</h6>
                          <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image me-3">
                              <img className="rounded-circle" src="/assets/img/avatars/avatar4.jpeg" />
                              <div className="bg-success status-indicator" />
                            </div>
                            <div className="fw-bold">
                              <div className="text-truncate">
                                <span>Hi there! I am wondering if you can help me with
                                  a problem I've been having.</span>
                              </div>
                              <p className="small text-gray-500 mb-0">
                                Emily Fowler - 58m
                              </p>
                            </div> </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image me-3">
                              <img className="rounded-circle" src="/assets/img/avatars/avatar2.jpeg" />
                              <div className="status-indicator" />
                            </div>
                            <div className="fw-bold">
                              <div className="text-truncate">
                                <span>I have the photos that you ordered last
                                  month!</span>
                              </div>
                              <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                            </div> </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image me-3">
                              <img className="rounded-circle" src="/assets/img/avatars/avatar3.jpeg" />
                              <div className="bg-warning status-indicator" />
                            </div>
                            <div className="fw-bold">
                              <div className="text-truncate">
                                <span>Last month's report looks great, I am very happy
                                  with the progress so far, keep up the good
                                  work!</span>
                              </div>
                              <p className="small text-gray-500 mb-0">
                                Morgan Alvarez - 2d
                              </p>
                            </div> </a><a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image me-3">
                              <img className="rounded-circle" src="/assets/img/avatars/avatar5.jpeg" />
                              <div className="bg-success status-indicator" />
                            </div>
                            <div className="fw-bold">
                              <div className="text-truncate">
                                <span>Am I a good boy? The reason I ask is because
                                  someone told me that people say this to all dogs,
                                  even if they aren't good...</span>
                              </div>
                              <p className="small text-gray-500 mb-0">
                                Chicken the Dog · 2w
                              </p>
                            </div> </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                      </div>
                      <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown" />
                    </li>
                    <div className="d-none d-sm-block topbar-divider" />
                    <li className="nav-item dropdown no-arrow">
                      <div className="nav-item dropdown no-arrow">
                        <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><img className="border rounded-circle img-profile" src="/assets/img/avatars/avatar1.jpeg" /></a>
                        <div className="
                        dropdown-menu
                        shadow
                        dropdown-menu-end
                        animated--grow-in
                      ">
                          <a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log</a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#"><i className="
                            fas
                            fa-sign-out-alt fa-sm fa-fw
                            me-2
                            text-gray-400
                          " />&nbsp;Logout</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                  <h3 className="text-dark mb-0">Dashboard</h3>
                  <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i className="fas fa-download fa-sm text-white-50" />&nbsp;Generate Report</a>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-primary py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col me-2">
                            <div className="
                            text-uppercase text-primary
                            fw-bold
                            text-xs
                            mb-1
                          ">
                              <span>Earnings (monthly)</span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0">
                              <span>$40,000</span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-success py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col me-2">
                            <div className="
                            text-uppercase text-success
                            fw-bold
                            text-xs
                            mb-1
                          ">
                              <span>Earnings (annual)</span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0">
                              <span>$215,000</span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-info py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col me-2">
                            <div className="text-uppercase text-info fw-bold text-xs mb-1">
                              <span>Tasks</span>
                            </div>
                            <div className="row g-0 align-items-center">
                              <div className="col-auto">
                                <div className="text-dark fw-bold h5 mb-0 me-3">
                                  <span>50%</span>
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm">
                                  <div className="progress-bar bg-info" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                                    <span className="visually-hidden">50%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-start-warning py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col me-2">
                            <div className="
                            text-uppercase text-warning
                            fw-bold
                            text-xs
                            mb-1
                          ">
                              <span>Pending Requests</span>
                            </div>
                            <div className="text-dark fw-bold h5 mb-0">
                              <span>18</span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start: Chart */}
                <div className="row">
                  <div className="col-lg-7 col-xl-8">
                    <div className="card shadow mb-4">
                      <div className="
                      card-header
                      d-flex
                      justify-content-between
                      align-items-center
                    ">
                        <h6 className="text-primary fw-bold m-0">Earnings Overview</h6>
                        <div className="dropdown no-arrow">
                          <button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                            <i className="fas fa-ellipsis-v text-gray-400" />
                          </button>
                          <div className="
                          dropdown-menu
                          shadow
                          dropdown-menu-end
                          animated--fade-in
                        ">
                            <p className="text-center dropdown-header">
                              dropdown header:
                            </p>
                            <a className="dropdown-item" href="#">&nbsp;Action</a><a className="dropdown-item" href="#">&nbsp;Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">&nbsp;Something else here</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-area">
                          <canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}]}}}" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-xl-4">
                    <div className="card shadow mb-4">
                      <div className="
                      card-header
                      d-flex
                      justify-content-between
                      align-items-center
                    ">
                        <h6 className="text-primary fw-bold m-0">Revenue Sources</h6>
                        <div className="dropdown no-arrow">
                          <button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                            <i className="fas fa-ellipsis-v text-gray-400" />
                          </button>
                          <div className="
                          dropdown-menu
                          shadow
                          dropdown-menu-end
                          animated--fade-in
                        ">
                            <p className="text-center dropdown-header">
                              dropdown header:
                            </p>
                            <a className="dropdown-item" href="#">&nbsp;Action</a><a className="dropdown-item" href="#">&nbsp;Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">&nbsp;Something else here</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-area">
                          <canvas data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}}}" />
                        </div>
                        <div className="text-center small mt-4">
                          <span className="me-2"><i className="fas fa-circle text-primary" />&nbsp;Direct</span><span className="me-2"><i className="fas fa-circle text-success" />&nbsp;Social</span><span className="me-2"><i className="fas fa-circle text-info" />&nbsp;Refferal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End: Chart */}
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="text-primary fw-bold m-0">Projects</h6>
                      </div>
                      <div className="card-body">
                        <h4 className="small fw-bold">
                          Server migration<span className="float-end">20%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div className="progress-bar bg-danger" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
                            <span className="visually-hidden">20%</span>
                          </div>
                        </div>
                        <h4 className="small fw-bold">
                          Sales tracking<span className="float-end">40%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div className="progress-bar bg-warning" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                            <span className="visually-hidden">40%</span>
                          </div>
                        </div>
                        <h4 className="small fw-bold">
                          Customer Database<span className="float-end">60%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div className="progress-bar bg-primary" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                            <span className="visually-hidden">60%</span>
                          </div>
                        </div>
                        <h4 className="small fw-bold">
                          Payout Details<span className="float-end">80%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div className="progress-bar bg-info" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                            <span className="visually-hidden">80%</span>
                          </div>
                        </div>
                        <h4 className="small fw-bold">
                          Account setup<span className="float-end">Complete!</span>
                        </h4>
                        <div className="progress mb-4">
                          <div className="progress-bar bg-success" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                            <span className="visually-hidden">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="text-primary fw-bold m-0">Todo List</h6>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                              <h6 className="mb-0"><strong>Lunch meeting</strong></h6>
                              <span className="text-xs">10:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" htmlFor="formCheck-1" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                              <h6 className="mb-0"><strong>Lunch meeting</strong></h6>
                              <span className="text-xs">11:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-2" /><label className="form-check-label" htmlFor="formCheck-2" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                              <h6 className="mb-0"><strong>Lunch meeting</strong></h6>
                              <span className="text-xs">12:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-3" /><label className="form-check-label" htmlFor="formCheck-3" />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <div className="card textwhite bg-primary text-white shadow">
                          <div className="card-body">
                            <p className="m-0">Primary</p>
                            <p className="text-white-50 small m-0">#4e73df</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card textwhite bg-success text-white shadow">
                          <div className="card-body">
                            <p className="m-0">Success</p>
                            <p className="text-white-50 small m-0">#1cc88a</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card textwhite bg-info text-white shadow">
                          <div className="card-body">
                            <p className="m-0">Info</p>
                            <p className="text-white-50 small m-0">#36b9cc</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card textwhite bg-warning text-white shadow">
                          <div className="card-body">
                            <p className="m-0">Warning</p>
                            <p className="text-white-50 small m-0">#f6c23e</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card textwhite bg-danger text-white shadow">
                          <div className="card-body">
                            <p className="m-0">Danger</p>
                            <p className="text-white-50 small m-0">#e74a3b</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-4">
                        <div className="card textwhite bg-secondary text-white shadow">
                          <div className="card-body">
                            <p className="m-0">Secondary</p>
                            <p className="text-white-50 small m-0">#858796</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-white sticky-footer" />
          </div>
          <a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
        </div>
      </div>
    );
  }
});