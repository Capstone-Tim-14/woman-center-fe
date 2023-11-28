import "../../styles/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../assets/hero-img.png'

export default function header() {
    return (
        <>
        <header id="header" >
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Wanita Kuat, Perjalanan Hebat</h1>
                            <h2>Women Center sebagai garda terdepan pemberdayaan wanita hadir dengan platform online yang inovatif dan aman, membantu wanita meraih potensi terbaik dan menciptakan perubahan positif dalam hidup wanita. Bergabunglah dengan kami dan wujudkan impian Anda bersama Women Center! </h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                            <a href="/home"><button onClick={() => navigate("/fitur")} style={{ border: "none" }} className="learn-more">Learn More</button></a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                    <img src={Image} style={{ width: "500px" }} className="img-fluid animated" alt="" />
                    </div>
                    </div>
                </div>
            </section>
            </header>
            
        </>
    )
}