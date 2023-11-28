import "../../styles/navbar.css"
import logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function navbar() {
    return (
        <>
        <header id="header" style={{ backgroundColor: "#FFFFFFCC" }}>

        <nav>
            <div className="nav-logo-container ">
                <img src={logo} alt="" width='198' height='39,13' />
            </div>
            <div className="navbar-links-container">
                <a href="/">Home</a>
                <a href="#fitur">Fitur</a>
                <a href="#konseling">Konseling</a>
                <a href="#artikel">Artikel</a>
                <a href="#karier" >Karier</a>
                <a href="#review">Review</a>
                <a href="#download">Download</a>
                <a href="#kontak_us">Kontak Us</a>
            </div>
        </nav>
        </header>
        </>
    )
}