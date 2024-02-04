import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 bg-black text-white">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                    <span className="mb-3 mb-md-0 ">© 2023 Social Hub, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex px-4">
                    <li className="ms-3 "><a className="text-body-secondary" href="#"><FaInstagram  className="text-white ho"/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebook className="text-white ho"/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><FaLinkedin className="text-white ho"/></a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer
