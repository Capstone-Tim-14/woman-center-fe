/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/LogoWC.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer id="kontak_us" className="footer">
      <Container>
        <Row>
          <Col lg="7" md="6">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
              <h5>Women Center</h5>
              <div>
                <p>
                  Women Center: Dukungan, Inspirasi, Karier. Temukan <br />
                   yang Anda cari dalam satu aplikasi.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6">
            <div className="footer__column">
              <h5 className="footer__title">Perusahaan</h5>
              <ListGroup className="footer__list">
                  <a href="#">FAQ</a>
                  <a href="#">Help Center</a>
                  <a href="#">About Us</a>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="6">
            <div className="footer__column">
              <h5 className="footer__title">Kontak</h5>
              <ListGroup className="footer__list">
                  <span>+12 4323 4323 23</span>
                  <a href="mailto:womencenter@wc.com">womencenter@wc.com</a>
                  <span>Jl. Fiktif No.57, Fiktif, <br />Kec. Fiktif, Surabaya,<br /> Jawa Timur 60244</span>
              </ListGroup>
            </div>
          </Col>
        </Row>
        <hr className="garis-ftr" />
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright © Women Center. All rights Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="copyright d-flex align-items-center justify-content-end">
              <a href="#">User Terms & Conditions</a>
              <span>|</span>
              <a href="#">Privacy Policy</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
