/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Playgoogle from "../../assets/googleplay.png"
import Appstore from "../../assets/appstore.png"


const Download = () => {
    return(
        <Container>
            <Row>
            <Col lg='12'>
              <div id="download" className="Download">
                <h6 className="Title_dwn">Download</h6>
                <h1 className="txt_unduh">Unduh Aplikasi Sekarang!</h1>
                <p className="subt_unduh">Segera unduh dan nikmati fitur-fitur unggulan kami! <br />
                Tetap bergabung untuk menggali potensi terbaik dalam diri Anda!</p>
                <div className="download_btn">
                <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                  <button className="playgoogle__btn">
                    <img src={Playgoogle} alt="google-img" />
                  </button>
                </a>

                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <button className="apple-btn">
                    <img src={Appstore} alt="apple-img" />
                  </button>
                </a>
                </div>
              </div>
            </Col>
            </Row>
        </Container>
    )
}

export default Download