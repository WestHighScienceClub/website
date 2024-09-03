import "../assets/css/navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <a className="home" href="/">
                    <img src="/static/logos/favicon.png"></img>
                    <p>WHS Science Club</p>
                </a>
                <a href="/board">Board</a>
            </div>

            <div className="right">
                <a href="https://www.instagram.com/whs.scijo/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default Navbar;