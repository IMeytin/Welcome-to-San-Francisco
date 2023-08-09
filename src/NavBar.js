import welcome from "./ImgFolder/welcome to San Francisco.png"

function NavBar() {
    return(
        <div>
            <nav>
                <img className="logo" src={welcome} alt="Welcome to San Fracisco" />
                <ul className="nav-links">
                    <li><a className="link" href="#aboutCity">About the City</a></li>
                    <li><a className="link" href="#placesChecklist">Top 5 place to visit</a></li>
                    <li><a className="link" href="#placesChecklist">Checklist</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;