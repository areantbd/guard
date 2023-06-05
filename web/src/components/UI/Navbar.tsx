
// type Props = {}
// function Navbar({}: Props) {
  import { Link, NavLink } from "react-router-dom"
import icon from "/src/assets/bosque.png"
  function Navbar() {
  return (
    <nav className="navbar fixed-top" style={{backgroundColor: "#58C3BB"}}>
      <div className="container-fluid">
        <div className="mx-auto d-flex gap-5">
          <img src={icon} style={{maxHeight: "50px", filter: "drop-shadow(3px 3px 5px rgba(101,62,19,0.8))"}}></img>
          <Link className="navbar-brand fs-2 fw-bolder" to="/" style={{color: "#5A3810", filter: "drop-shadow(3px 3px 5px rgba(101,62,19,0.8))"}}>A casiña da árbore</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" style={{backgroundColor: "#58C3BB"}} tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fs-3 fw-bolder " id="offcanvasNavbarLabel">A casiña da árbore</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fs-3 fw-bolder' : 'nav-link fs-3 fw-bold'} aria-current="page" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fs-3 fw-bolder' : 'nav-link fs-3 fw-bold'} to="/conocenos">Coñécenos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active fs-3 fw-bolder' : 'nav-link fs-3 fw-bold'} to="/posts">Posts</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link fs-3 fw-bolder  dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Administrador
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/posts/create-post">Crear Post</Link></li>
                  {/* <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar