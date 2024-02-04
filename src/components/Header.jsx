
const Header = () => {
  return (
    <>
      <header className="  bg-black px-3 d-lg-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <div className="col-md-3 d-none d-lg-block">
          
        </div>
       

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
          <li><a href="#" className="nav-link px-2 text-warning ho">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white ho">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white ho">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white ho">About</a></li>
        </ul>

        <div className="col-md-3 text-end d-none d-lg-block">
          <button type="button" className="btn btn-outline-warning me-2">Login</button>
          <button type="button" className="btn btn-warning text-white">Sign-up</button>
        </div>
      </header>
    </>
  )
}

export default Header
