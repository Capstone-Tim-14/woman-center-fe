// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "reactstrap"; // Added Col
import imgkonseling from '../assets/Group 27173.png'
import '../styles/konselingpage.css'
import imgkonseling2 from '../assets/masalah.png'
import imgkonseling3 from '../assets/img-konseling4.png'
import imgkonseling4 from '../assets/hal.png'
import Playgoogle from "../assets/googleplay.png"
import Appstore from "../assets/appstore.png"
import {Link} from "react-router-dom"

const KonselingPage = () => {
    return (
     <section>
        <div className="Hero-konseling">
            <Container>
                <Row>
                        <Col lg="6">
                            <div className="konseling">
                                <h1 className="title-konseling">Bicarakan Masalah Anda dengan Para Profesional</h1>
                                <p className="txt-konseling">Punya Masalah Kesehatan Mental? Hubungan? Krisis Pribadi? dan Masalah Pengembangan Karier? Konsultasikan Bersama Women Center!</p>
                            </div>
                        </Col>

                        <Col lg='6' style={{ position: 'center' }}>
                            <div className="img-konseling">
                            <img src={imgkonseling} alt="img-karir" />
                            
                            </div>
                        </Col>
                </Row>
            </Container>
                </div>
                <div className="button-konseling">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <a href="#" className="btn-ksl">Apa itu Konseling?</a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#" className="btn-ksl">Paket Konseling</a>
                            </div>
                            <div className="col-lg-4">
                                <a href="#" className="btn-ksl">Konselor Women Center</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="abt-konseling">
                    <h1 className="txt-abt-ksl">Konseling itu ngapain sih?</h1>
                    <div className='img-ksl' >
                        <img src={imgkonseling2} alt="img-ksl" />
                    </div>
                    <div className="img-ksl2"> 
                        <img src={imgkonseling3} alt="img-ksl" style={{ width: '30%', height: 'auto'}}/>
                    </div>
                </div>

        
                <div>
                    <h3 className="title-hal">Kamu bisa konsultasiin <br />masalah ini dan lainnya bersama konselor kami</h3>
                    <p className="txt-hal">Kamu juga bisa lakuin hal lain seperti : </p>
                        <div className="img-hal">
                            <img src={imgkonseling4} alt="img-ksl" style={{ width: '70%', height: 'auto'}} />
                        </div>
                </div>

                <div className="paket">
                    <h3 className="title-paket">Temukan Paket yang Sesuai!</h3>
                    <p className="txt-paket">Kamu bisa membeli paket konseling sesuai dengan keinginanmu. <br />
                    Kemudian, pilihlah paket yang sesuai dengan kebutuhanmu untuk mendapatkan dukungan yang tepat dan personal. </p>
    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-paket">
                                    <div className="txt-box">
                                        <h6 className="title-pkt">Paket Voice Call</h6>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Durasi Konsultasi 1 Jam/Sesi <br />
                                                1on1 Dengan Konselor <br />
                                                Privasi Dijamin 100% Aman <br />
                                                Tes Kesehatan Mental <br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Tes Kepribadian <br />
                                                Tes Minat Karir <br />
                                                Masa Aktif Paket Selama 1 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-6">
                                <div className="box-paket">
                                    <div className="txt-box">
                                        <h6 className="title-pkt">Paket Voice Call</h6>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Durasi Konsultasi 1 Jam/Sesi <br />
                                                1on1 Dengan Konselor <br />
                                                Privasi Dijamin 100% Aman <br />
                                                Tes Kesehatan Mental <br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Tes Kepribadian <br />
                                                Tes Minat Karir <br />
                                                Masa Aktif Paket Selama 1 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-6">
                                <div className="box-paket">
                                    <div className="txt-box">
                                        <h6 className="title-pkt">Paket Voice Call</h6>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Durasi Konsultasi 1 Jam/Sesi <br />
                                                1on1 Dengan Konselor <br />
                                                Privasi Dijamin 100% Aman <br />
                                                Tes Kesehatan Mental <br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Tes Kepribadian <br />
                                                Tes Minat Karir <br />
                                                Masa Aktif Paket Selama 1 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-6">
                                <div className="box-paket">
                                    <div className="txt-box">
                                        <h6 className="title-pkt">Paket Voice Call</h6>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Durasi Konsultasi 1 Jam/Sesi <br />
                                                1on1 Dengan Konselor <br />
                                                Privasi Dijamin 100% Aman <br />
                                                Tes Kesehatan Mental <br />
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="benefit">
                                                Tes Kepribadian <br />
                                                Tes Minat Karir <br />
                                                Masa Aktif Paket Selama 1 Minggu
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
        
              <div className="Download">
                <h6 className="Title_dwn">Download</h6>
                <h1 className="txt_unduh">Unduh Aplikasi Sekarang!</h1>
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
       
        </div>
        
    </section>
    )
}

export default KonselingPage;
