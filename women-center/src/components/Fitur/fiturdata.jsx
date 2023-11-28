import React from "react";
import { Card, Button } from "react-bootstrap";
import konselor from '../../assets/konselor.png'
import artikel from '../../assets/artikel.png'
import karier from '../../assets/karir-logo.png'
import konseling from '../../assets/konseling.png'
import worksheet from '../../assets/worksheet.png'
import "../../styles/fiturdata.css";

function fiturdata() {
  return (
      <section id="tentang">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <Card style={{ width: "20.2rem", height:'19.8rem', float: "left", padding: "20px", Gap:'32px', fontFamily:'Raleway', margin: "20px"}}>
              <Card.Img variant="left" src={konselor} style={{ width: '37%', height: 'auto' }}/>
              <Card.Body>
                <Card.Title><h1 className="title-fitur">Konselor Kompeten</h1></Card.Title>
                <Card.Subtitle><p className="text-fitur">Konselor berpengalaman untuk membantu Anda menyelesaikan tantangan yang Anda hadapi.</p></Card.Subtitle>
              </Card.Body>
            </Card>

            <Card style={{ width: "20.2rem", height:'20rem', float: "left", padding: "20px", Gap:'32px', fontFamily:'Raleway', margin: "20px"}}>
              <Card.Img variant="left" src={artikel} style={{ width: '37%', height: 'auto' }} />
              <Card.Body>
                <Card.Title><h1 className="title-fitur">Artikel</h1></Card.Title>
                <Card.Subtitle><p className="text-fitur">Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.</p></Card.Subtitle>
              </Card.Body>
            </Card>

            <Card style={{ width: "20.2rem", height:'20rem', float: "left", padding: "20px", Gap:'32px', fontFamily:'Raleway', margin: "20px"}}>
              <Card.Img variant="left" src={karier} style={{ width: '37%', height: 'auto' }}/>
              <Card.Body>
                <Card.Title><h1 className="title-fitur">Karier</h1></Card.Title>
                <Card.Subtitle><p className="text-fitur">Eksplorasi kemampuan Anda dan temukan perjalanan karier yang cocok dengan hidup Anda.</p></Card.Subtitle>
              </Card.Body>
            </Card>

            <Card style={{ width: "20.2rem", height:'20rem', float: "left", padding: "20px", Gap:'32px', fontFamily:'Raleway', margin: "20px"}}>
              <Card.Img variant="left" src={konseling} style={{ width: '37%', height: 'auto' }}/>
              <Card.Body>
                <Card.Title><h1 className="title-fitur">Konseling Fleksibel</h1></Card.Title>
                <Card.Subtitle><p className="text-fitur">Berkomunikasi dengan konselor secara langsung dan fleksibel, baik secara online maupun offline.</p></Card.Subtitle>
              </Card.Body>
            </Card>

            <Card style={{ width: "20.2rem", height:'20rem', float: "left", padding: "20px", Gap:'32px', fontFamily:'Raleway', margin: "20px"}}>
              <Card.Img variant="left" src={worksheet} style={{ width: '37%', height: 'auto' }} />
              <Card.Body>
                <Card.Title><h1 className="title-fitur">Worksheet Konseling</h1></Card.Title>
                <Card.Subtitle><p className="text-fitur">Dapatkan worksheet hasil konseling yang memberikan solusi yang tepat dan melacak perkembangan Anda.</p></Card.Subtitle>
              </Card.Body>
            </Card>

          </div>
          <a href="/fitur" className="learnmore-btn justify-content-center">Learn more </a>
        </div>
      </section>
  );
}

export default fiturdata;