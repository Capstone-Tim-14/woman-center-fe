/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import imagerev from '../../assets/Ellipse 26.png'
import '../../styles/review.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "react-slick";


const reviews = [
    {
        id: 1,
        image: imagerev,
        name: "Angelina Christy",
        occupation: "Mahasiswi",
        text: "Women Center adalah teman setia mahasiswi. Dengan beragam fitur yang relevan, aplikasi ini membantu saya menghadapi tantangan perkuliahan dan rencana karir dengan percaya diri. Privasi yang dijaga dengan baik membuat saya nyaman berbicara tentang masalah pribadi"
    },
    
];

const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


const Review = () => {
    return (
        <section>
            <Container>
                <div className="review">
                <Row>
                    <Col lg='12'>
                    <div className="review-box">
                        <p className="head-review">Review</p>
                        <h1 className="title-review">Review dari user kami</h1>
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={review.image} alt="img-review" className="image-review" />
                                <div className="ket-review">
                                <h1 className="nama-review">{review.name}</h1>
                                <p className="pekerjaan-review">{review.occupation}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="text-review">{review.text}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
                    </div>
                    </Col>
                </Row>
                </div>
            </Container>

        </section>
    )
}

export default Review