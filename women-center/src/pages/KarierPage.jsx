import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/karierlandingpage.css";
import bgvector from "../assets/Vector (7).png";
import imgbot from "../assets/chatbot-img.png";
import imgossel from "../assets/osselnajaya.png"
import imgismaya from "../assets/ismaya.png"
import imggojek from "../assets/gojek.png"
import { FaLocationDot } from "react-icons/fa6";
import vector1 from "../assets/Vector (6).png"

const KarierPage = () => {
  return (
    <div>
      <div className="hero-karirpage">
        <Container>
          <Row>
            <Col lg="6">
              <div className="img-herokarier">
                <img src={bgvector} alt="img-karirpage" />
              </div>
            </Col>
            <Col lg="6">
              <div className="text-herokarier">
                <h1 className="title-herokarier">
                  Temukan Langkah Terbaik untuk Masa Depan Anda
                </h1>
                <p className="subt-herokarier">
                  Temukan langkah terbaik menuju kesuksesan karir Anda dengan
                  fitur Rekomendasi Karir yang cerdas dan inovatif.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="chatbot-karirpage">
        <Container>
          <Row>
            <Col lg="7">
              <div className="txt-chatbot">
                <h1 className="title-chatbot">ChatBot AIS <br /><span>(Artificial Intelligence System)</span></h1>
                <p className="subt-chatbot">
                  Ketemu chatbot cerdas kami! Siap bantu selesain masalah karier
                  kamu dengan ceria. Tanya aja tentang karier, skill, atau
                  lowongan kerja, dia siap memberikan tips dan dukungan untuk
                  perjalanan karier kamu!
                </p>
              </div>
            </Col>

            <Col lg='5'>
            <div className="image-chatbot">
                <img src={imgbot} alt="img-bot" />
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <img src={vector1} alt="vector1" className="vector-2-footer"/>

      <div className="rekomendasi-konseling">
        <Container>
            <Row>
                <Col lg='6'>
                    <img src="" alt="" />
                </Col>
                
                <Col lg='6'>
                    <div className="content-rekomendasikonseling">
                        <h6 className="title-container-karir">Rekomendasi Konseling</h6>
                        <h1 className="title-karirlandingpage">Rekomendasi Karir yang Menginspirasi untuk Wanita!</h1>
                        <p className="subtitle-karirlandingpage">Berkembang dalam karirmu tak pernah semudah ini! Temukan rekomendasi karir yang menginspirasi dan sesuai dengan potensimu di sini. Mulailah petualangan karirmu yang tak terlupakan dengan panduan yang mengarahkan, memberi inspirasi, dan membantu kamu mencapai puncak potensimu!</p>
                        <a href="/#"><button className="karierpage-button">Learn more</button></a>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>

        <h1 className="title-rekomendasi-karir">Temukan Rekomendasi Karier</h1>
      <div className="rekomendasi-karir">
            <Container>
                <Row>
                    <div className="all-box-rekomendasi-karir">
                    <Col lg='4'>
                        <div className="box-rekomendasikarir">
                            <div className="img-ossel">
                                <img src={imgossel} alt="img-ossel" />
                            </div>
                            <div className="contentbox-rekomendasi">
                                <h1 className="posisi-karir">Engineer</h1>
                                <p className="mitra-karir">PT OS SELNAJAYA INDONESIA</p>
                                <p className="lokasi-karir"><FaLocationDot /> Jakarta, Indonesia (On Site)</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="box-rekomendasikarir">
                            <div className="img-ismaya">
                                <img src={imgismaya} alt="img-ossel" />
                            </div>
                            <div className="contentbox-rekomendasi">
                                <h1 className="posisi-karir">Assistant Sales Banquet Manager</h1>
                                <p className="mitra-karir">ISMAYA GROUP</p>
                                <p className="lokasi-karir"><FaLocationDot /> Jakarta, Indonesia (On Site)</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="box-rekomendasikarir">
                            <div className="img-gojek">
                                <img src={imggojek} alt="img-ossel" />
                            </div>
                            <div className="contentbox-rekomendasi">
                                <h1 className="posisi-karir">Data Engineer - Senior Manager</h1>
                                <p className="mitra-karir">Gojek</p>
                                <p className="lokasi-karir"><FaLocationDot /> Jakarta, Indonesia (On Site)</p>
                            </div>
                        </div>
                    </Col>
                    </div>
                </Row>
            </Container>
      </div>
            <a href="/#"><button className="rekomendasikarir-btn">Learn more</button></a>
            <img src={vector1} alt="vector1" className="vector-1-footer"/>
    </div>



  );
};

export default KarierPage;
