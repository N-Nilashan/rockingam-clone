export default function Header() {

    return <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a id="logo-bar">
                <img id="logo-icon" src="img/logo.png" alt="Logo" />
            </a>
            <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">Home</a>
                <a className="navbar-item">All Categories</a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Browse Ads</a>
                    <div id="dropdown-items" className="navbar-dropdown">
                        <a className="navbar-item">Personal Ads</a>
                        <a className="navbar-item">Business Ads</a>
                    </div>
                </div>
                <a className="navbar-item">Best Deals</a>
                <a className="navbar-item">Advertise</a>
                <a className="navbar-item">Blog</a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <i
                            id="login-icon"
                            className="fa-solid fa-circle-arrow-right fa-2xl"
                            style={{ color: '#74C0FC' }}
                        ></i>
                        <i
                            id="login-icon2"
                            className="fa-solid fa-retweet fa-2xl"
                            style={{ color: '#74C0FC' }}
                        ></i>
                        <a className="button is-info" id="login-button">
                            <i
                                id="submit-icon"
                                className="fa-solid fa-arrow-up-from-bracket fa-xl"
                                style={{ color: '#74C0FC' }}
                            ></i>
                            <strong>Submit Ad</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}