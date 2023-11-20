/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header/header";
import Fitur from "../components/Fitur/fitur";
import Konseling from "../components/Konseling/konseling";
import { Container, Row, Col,} from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Playgoogle from "../assets/googleplay.png"
import Appstore from "../assets/appstore.png"
import ReviewSlider from "../components/Review/Review.jsx";
import Karir from "../assets/karir.png"
import artikel01 from "../assets/image 2.png"
import artikel02 from "../assets/image 3.png"
import artikel03 from "../assets/image 4.png"


const Home = () => {
  return (
      <section>
        <Header />
        <Fitur />
        <Konseling />
        <Container>
          <Row>
          <div className="artikel">
          <Col lg='12'>
            <div className="head-artikel">
            <h6 className="ttl-artikel">Artikel terkini</h6>
            <h1 className="title-art">Temukan Artikel Terkini</h1>
            <hr  className="garis"/>
            <p className="subt-art">Jelajahi beragam artikel informatif dan inspiratif yang membantu Anda mendapatkan wawasan baru <br />
             dan solusi praktis untuk berbagai topik.</p>
            </div>          
          </Col>

            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel01} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="#" className="btn-readmore">
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel02} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="#" className="btn-readmore">
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel03} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="#" className="btn-readmore"> 
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="learnmore-btn justify-content-center">Learn more </a>
          </div>

          <Col lg='6' style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="img-karir">
            <img src={Karir} alt="img-karir" style={{ width: '50%', height: 'auto' }} />
            </div>
          </Col>  

            <Col lg='6'>
              <div className="karir">
              <h6 className="title-karir">Karier</h6>
              <h1 className="subt-karir">Rekomendasi Karir  <br /> Khusus untuk Anda</h1>
              <p className="txt-karir">Jelajahi masa depan karier Anda dengan bantuan AI kami. Fitur Karier kami memungkinkan Anda untuk berbicara dengan AI yang cerdas, yang akan memberikan rekomendasi berharga terkait rencana karir bagi wanita. Temukan peluang, identifikasi potensi, dan rancang perjalanan karier Anda dengan percaya diri!</p>
              <button className="karir-btn">Learn more</button>
              </div>
            </Col>

            <Col lg="12" md="6">
              <ReviewSlider />
            </Col>

            <Col lg='12'>
              <div className="Download">
                <h6 className="Title_dwn">Download</h6>
                <h1 className="txt_unduh">Unduh Aplikasi Sekarang!</h1>
                <hr  className="garis"/>
                <p className="subt_unduh">Segera unduh dan nikmati fitur-fitur unggulan kami! <br />
                Tetap bergabung untuk menggali potensi terbaik dalam diri Anda!</p>
                <div className="download_btn">
                  <button className="playgoogle__btn">
                   <Link to='/playgoogle'><img src={Playgoogle} alt="google-img" /></Link> 
                  </button>

                  <button className="apple-btn">
                  <Link to='/appstore'><img src={Appstore} alt="apple-img" /></Link> 
                  </button>
                </div>

              </div>
            </Col>

          </Row>
        </Container>
      </section>
  );
};

export default Home;