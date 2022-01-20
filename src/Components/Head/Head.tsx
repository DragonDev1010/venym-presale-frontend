function Head() {
    return(
        <header className="header_wrap fixed-top">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg"> 
                    <a className="navbar-brand animation" href="index.html" data-animation="fadeInDown" data-animation-delay="1s"> 
                        <img className="logo_light" src="assets/images/logo.png" alt="logo" /> 
                        <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" /> 
                    </a>
                    <button className="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s"> 
                        <span className="ion-android-menu"></span> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.1s">
                                <a data-toggle="dropdown" className="nav-link dropdown-toggle active" href="#">Home</a>
                                    <div className="dropdown-menu">
                                        <ul className="list_none">
                                            <li>
                                                <a className="dropdown-item menu-link dropdown-toggler active" href="index.html">Home Page</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item active" href="index.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-light-blue-pro.html">Landing page Light Blue Pro</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-blue-pro.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-blue-pro-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-blue-pro-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                            <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-blue-pro.html">Landing page Blue Pro</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-pro.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-pro-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-pro-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-blue-light.html">Landing page Light Blue</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-light.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-light-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-light-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-blue.html">Landing page Blue</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-blue-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-light-dark.html">Landing page Light Dark</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-dark.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-dark-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-dark-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-dark.html">Landing page Dark</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-dark.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-dark-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-dark-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-royal-blue.html">Landing page Royal Blue</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-royal-blue.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-royal-blue-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-royal-blue-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-navy-blue.html">Landing page Navy Blue</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-navy-blue.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-navy-blue-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-navy-blue-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-light-purple.html">Landing page Light Purple</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-purple.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-purple-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-light-purple-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="index-cyan-blue.html">Landing page Cyan Blue</a>
                                                <div className="dropdown-menu">
                                                    <ul className="list_none"> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-cyan-blue.html">Default</a></li> 
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-cyan-blue-particle.html">Particle</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="index-cyan-blue-modern.html">modern</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        </ul>
                                    </div>   
                            </li>
                            <li className="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a className="nav-link nav_item" href="about.html">About</a></li>
                            <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.3s">
                                <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu">
                                        <ul className="list_none"> 
                                            <li><a className="dropdown-item nav-link nav_item" href="service.html">Services</a></li> 
                                            <li><a className="dropdown-item nav-link nav_item" href="team.html">Team</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="pricing-table.html">Pricing Table</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="404.html">404 Page</a></li> 
                                        </ul>
                                    </div>
                            </li>
                            <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.4s">
                                <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Blog</a>
                                    <div className="dropdown-menu">
                                        <ul className="list_none"> 
                                            <li><a className="dropdown-item nav-link nav_item" href="blog-right-sidebar.html">Blog Right Sidebar</a></li> 
                                            <li><a className="dropdown-item nav-link nav_item" href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="blog-fullwidth.html">Blog Fullwidth</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="single-post-right-sidebar.html">Single Post Right Sidebar</a></li> 
                                            <li><a className="dropdown-item nav-link nav_item" href="single-post-left-sidebar.html">Single Post Left Sidebar</a></li> 
                                            <li><a className="dropdown-item nav-link nav_item" href="single-post-fullwidth.html">Single Post Fullwidth</a></li> 
                                        </ul>
                                    </div>
                            </li>
                            <li className="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a className="nav-link nav_item" href="faq.html">Faq's</a></li>
                            <li className="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a className="nav-link nav_item" href="contact.html">Contact</a></li>
                        </ul>
                        <ul className="navbar-nav nav_btn align-items-center">
                            <li className="animation" data-animation="fadeInDown" data-animation-delay="1.7s">
                                <div className="lng_dropdown">
                                <select name="countries" id="lng_select">
                                    <option value='en' data-image="assets/images/eng.png" data-title="English">EN</option>
                                    <option value='fn' data-image="assets/images/fn.png" data-title="France">FN</option>
                                    <option value='us' data-image="assets/images/us.png" data-title="United States">US</option>
                                </select>
                                </div>
                            </li>
                            <li className="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a className="btn btn-default nav_item" href="login.html">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Head