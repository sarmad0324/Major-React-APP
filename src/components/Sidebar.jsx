import dp from '../assets/logo.png'
import { IoHomeSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
const Sidebar = (props) => {

    function handleclick(tabname) {
        props.settab(tabname)
    }
    return (
        <div className="side bg-black ">
            <a href="/" className="d-flex  align-items-center mb-3 mb-md-0 me-md-auto  text-warning  text-decoration-none pb-2">
                <img src={dp} alt="" height={50} width={50} className='rounded-circle p-1'/>
                <h3 className="p-1 pt-3 fw-bold ">Social Hub</h3>
            </a>
            <hr />
            <ul className="nav nav-pills mb-auto  bar text-center">
                <li onClick={() => { handleclick("Home") }} >
                    <a href="#" className={`nav-link text-white d-flex  align-items-center justify-content-center ho ${props.tab === 'Home' && "active bg-warning "}`} aria-current="page">
                        <IoHomeSharp className='  mx-2'/>
                        <span className='d-none d-md-block'>Home</span>
                    </a>
                </li>
                <li onClick={() => { handleclick("New Post") }}>
                    <a href="#" className={`nav-link text-white d-flex  align-items-center justify-content-center ho ${props.tab === 'New Post' && "active bg-warning"}`}>
                        <IoMdAddCircle className=' mx-2'/>
                        <span className='d-none d-md-block'>New Post</span>
                    </a>
                </li>

            </ul>
            <hr />
            <div className="dropdown d-none d-lg-block">
                <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACUCAMAAADBJsndAAAAQlBMVEX///+ZmZmVlZXz8/OSkpL6+vqPj4/MzMyLi4ufn5/39/fw8PCcnJy4uLjR0dHn5+evr6/e3t7FxcWlpaXX19e+vr6tq5vXAAAFY0lEQVR4nO1c7ZarKgytEfX4VVT0/V/1atuZVouwCajjXe5f56yZSXdDSEISuN0uXLhw4cKFCxcu7IdkRDFh+sfRZLQoZNt3dZNH4okob+qub2VxNLFPyGxiSIIoGlFFT9DItmrqTB5N74GirSt6EtRj/FndHqzWoh2q1MDxpV5Kq+FAqkWmImEm+QsRqWxkesDmKoeI3sYIYSj3Z9nBqvxUarfvpkqy3GKVK6A825Fmn7vr8leneb8Ty3JI2SwnpPuYac9c8jdoB5UWnsr8UenGDko2fMv8hGg23fiy8l3zH1C1IdF7GGU+Ie5b0cxCKfMJ2siVBqY5anQTol3IRX8R7cLTDK7NbYjet6A52mhgj99vQzM0UQmnmSIdT0k0HeRABPWjClMnCdW1soxL2XYKZEp5sBCa1ITok1QWf/xVnDXQt6M6FFFoD1F+X57UijuUWlGgwFQiHyZqXVIZ18jqU5h8FDLONUfYITybEDSRVZ+WbsXK0D/3RQnYmDH1QZKs3H/lAQsTtVHCAHzRwZemBI4ZKjaKiJVdROrr7Rv7Z0S20AcEXd+t1AI07R+BOPzWh2YCWGdq/4TWbjx+UUkirhOQA0ghHwutActCtiqw5cnsNIxIANcnEMNqAUEpv5CbAeKh/BHJX/lnkARwfJFCQgniQiPF3UmIU6LG7ORfPBHPVHFdU4fs9gYxqwJKmZkLXyCxKCBPgkR9A3KeEbjuiChmvozsdnAflcg+4lbGsGNYBPklSBIzGcFoCqRQ0GOHZMGhWUIF7gpSArY01T+OgfZgIR6IdwUqilPEGcCCBlDFzECeUE6zBORKJlS21Srh6hRjI0HB/akFWxyB4toDjBBf5qhwm2vCnNIDjPMxXkqMKDJtpaKCqmgPMIqMrUNn3RSZi0Y4SHJPmZwqyBNRvWkVwNHlA+6Oya0gL1bCfFk5dUkYhSbHxoF+AAArgHrxdO7DkFpsgkSC5fIPGe6dL0a/KFWZjF9mGstMuXfA9+E5dYFVM3RZN9SqEgwBLJ5OIz/vjyKKTONhoXlu1ICz8Nxyvz/1LtL03xJp6ti7ZfB08PPjb+ZN1457aIaikH02zTE6rIy7n0eKDC+WTSfX85xEdg3O1D1uSixfItFYJxEL2diGGl9g5CFgXldjkkvshMTI65A8mRRuTz0SnDilMPu5I62RWsgP4toenzgHeHsN2NWJ3G0CWec467nYfW/afAhUs1jCUmcA2hwaomYPxaozWOo2vKKqWaPEkmlyJewOr6kry6yD3dcX3tJ5NcHw7VPel1+v0xK75D/55XWxvDqtoVjtM3TUr9Jk1r1X6y2ezd21r2+t/6xhreAi/KYP1uZi+BNX+hDv04l8YEWhfKPXj1IK39kDqRfLn13U9mGp8Z3fSrQKFR4XanTFoQDjurqOj5c16VxogAFDXc3Sa04g0SjUe9mnhdeo00vsd97gvdsn1N/69Jpj0WT1QabJv4pC3iN2X3NW3hNRWqnevu6rjZSGGIJc5uCsA8dC5OJ8nIaYfk0WPAPMAS4LTam/xBFznmEmaudRntXT/cKMJ6kgMuf5zQb6DDT3O1/58DxDzVHPo1Jwnv55zRsfZxoRh8BbXiDjfGKWOFAAvKWFvX92knsop7nXs8l1rm2uyJ3k3hk6H+aAzS4cnoPmae6Znube7mnuQZ/mXvntLPf0b6d592BE77GdqNrrHYnbad7lGCFP8c7JhLKOHIeTosGlHxoOSaZgqhSp7rgXg+J2QOZ/Dn7X6AHbO1Hjz6rD34l64fnulhAz1RKN/83/zLtbL3y/Y6b+3jtmv5jGgaZj7999F+7ChQsXLly4cOH/iv8AcChD4Ipt9UMAAAAASUVORK5CYII=" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>Sarmad Irfan</strong>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
