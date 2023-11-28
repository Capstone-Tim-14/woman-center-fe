/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/konselinglangsung.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../assets/img-konseling.png'
import { Col, Row} from "reactstrap";

const konselinglangsung = () => {
  return (
    <header id="header" >
        <section id="herokonseling" >
            <Row>
        <Col lg='6' style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div id="konseling" className="img-konselingone">
            <img src={Image} alt="img-konselingone" style={{ width: '70%', height: 'auto' }} />
            </div>
          </Col>  

          <Col lg='6'>
          <div className="konseling1">
          <h6 className="head-konseling1">Konseling Langsung</h6>
          <h1 className="body-konseling1">Bicarakan Masalah Anda dengan Para Profesional</h1>
          <hr  className="garis-konseling1"/>
          <p className="txt-konseling1">Selalu ada saat Anda membutuhkannya. Fitur Konseling kami memungkinkan Anda bertemu secara langsung atau berkomunikasi dengan konselor yang berkompeten untuk membahas masalah apa pun yang sedang Anda hadapi. Temukan dukungan, pemahaman, dan solusi yang Anda butuhkan!</p>
          <a href="/konseling"><button className="konseling1-button">Learn more</button></a>
          </div>
          </Col>
            </Row>
            </section>
    </header>
    )
}

export default konselinglangsung;