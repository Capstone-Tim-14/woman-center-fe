import React from "react";
import "../../styles/konseling.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../assets/img-konseling.png'
import Image2 from '../../assets/img-konseling2.png'
import { Container, Row, Col,} from "reactstrap";
import artikel01 from "../../assets/image 2.png"
import artikel02 from "../../assets/image 3.png"
import artikel03 from "../../assets/image 4.png"

const konseling = () => {
  return (
    <section>
    <Container>
      <Row>
      <nav className="component-konseling1">
      <Col lg='6' style={{ alignItems: 'center' }}>
        <div className="img-konseling1">
        <img src={Image} alt="img-konseling1" style={{ width: '50%', height: 'auto' }} />
        </div>
      </Col>  

        <Col lg='6'>
          <div className="konseling1">
          <h6 className="head-konseling1">Konseling Langsung</h6>
          <h1 className="body-konseling1">Bicarakan Masalah Anda dengan Para Profesional</h1>
          <hr  className="garis-konseling1"/>
          <p className="txt-konseling1">Selalu ada saat Anda membutuhkannya. Fitur Konseling kami memungkinkan Anda bertemu secara langsung atau berkomunikasi dengan konselor yang berkompeten untuk membahas masalah apa pun yang sedang Anda hadapi. Temukan dukungan, pemahaman, dan solusi yang Anda butuhkan!</p>
          <button className="konseling1-button">Learn more</button>
          </div>
        </Col>
        </nav>

        <Col lg='6'>
          <div className="konseling2">
          <h6 className="head-konseling2">Konselor Kompeten</h6>
          <h1 className="body-konseling2"> Privasi dan Solusi untuk Masalah Anda</h1>
          <hr  className="garis-konseling2"/>
          <p className="txt-konseling2">Kami menghadirkan tim konselor yang berpengalaman dan berkompeten untuk membantu Anda menemukan solusi dari semua keluhan dan masalah pribadi Anda. Kami menghormati dan melindungi privasi Anda dengan sepenuh hati. Dapatkan bimbingan yang Anda butuhkan tanpa khawatir, karena Anda pantas merasa aman dan didengar!</p>
          <button className="konseling2-button " style={{ alignItems: 'flex-end' }}>Learn more</button>
          </div>
        </Col>

        <Col lg='6' style={{ alignItems: 'center' }}>
        <div className="img-konseling2">
        <img src={Image2} alt="img-konseling2" style={{ width: '50%', height: 'auto' }} />
        </div>
        </Col>  


      </Row>
    </Container>
  </section>
    )
}

export default konseling;