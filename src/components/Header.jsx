import style from "./Header.module.css"
import linksNavbar from "./data.jsx"

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="d-flex flex-grow-1 justify-content-center">
                            <a className="navbar-brand" href="#">
                                <img src="img/dc-logo.png" alt="logo navbar" className={style.logoSmall} />
                            </a>
                        </div>


                        <div className="d-flex flex-shrink-1">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-lg-0 d-flex gap-3">

                                    {linksNavbar.map(link => {
                                        let highlightClass = link.state ? style.highlight : "";

                                        return <li className="nav-item">
                                            <a className={`nav-link ${highlightClass}`} href={link.href}>{link.title.toUpperCase()}</a>
                                        </li>
                                    })}

                                    {/* <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header