import "../assets/css/navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <a href="/">Home</a>
                <a href="/board">Board</a>
            </div>

            <div className="right">
                <a href="https://www.instagram.com/whs.scijo/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default Navbar;