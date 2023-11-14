import React from "react";
import "../../styles/fitur.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from "reactstrap";

import konselor from '../../assets/konselor.png'
import artikel from '../../assets/artikel.png'
import karier from '../../assets/karir-logo.png'
import konseling from '../../assets/konseling.png'
import worksheet from '../../assets/worksheet.png'


const fitur = () => {
  return (
    <section>
    <Container>
      <Row>
      <div className="fitur">
      <Col lg='12'>
        <div className="fiturs">
        <h6 className="head-fitur">Fitur</h6>
        <h1 className="body-fitur">Fitur Terbaik Kami</h1>
        <hr  className="garis"/>
        <p className="text-fitur">Menghadirkan empati dan kekuatan bersama dalam satu aplikasi.</p>
        <p className="text-fitur2">Temukan solusi dan inspirasi yang Anda butuhkan dalam satu aplikasi yang dapat Anda andalkan.</p>
        </div>          
      </Col>
      </div>
      </Row>
    </Container>
  </section>
    )
}

export default fitur;