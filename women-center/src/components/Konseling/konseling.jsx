/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/konseling.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image2 from '../../assets/img-konseling2.png'
import { Container, Row, Col,} from "reactstrap";

const konseling = () => {
  return (
    <section className="konselor-landingpage">
    <Container>
      <Row>
        <Col lg='6'>
          <div className="konseling2">
          <h6 className="head-konseling2">Konselor Kompeten</h6>
          <h1 className="body-konseling2"> Privasi dan Solusi untuk <br /> Masalah Anda</h1>
          <p className="txt-konseling2">Kami menghadirkan tim konselor yang berpengalaman dan berkompeten untuk membantu Anda menemukan solusi dari semua keluhan dan masalah pribadi Anda. Kami menghormati dan melindungi privasi Anda dengan sepenuh hati. Dapatkan bimbingan yang Anda butuhkan tanpa khawatir, karena Anda pantas merasa aman dan didengar!</p>
          <a href="/konselor"><button className="konseling2-button " style={{ alignItems: 'flex-end' }}>Learn more</button></a>
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