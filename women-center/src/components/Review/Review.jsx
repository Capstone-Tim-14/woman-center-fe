import React, { useState } from "react";
import { Container, Row, Col, Carousel, CarouselItem, Button } from "reactstrap";
import imagerev from '../../assets/Ellipse 26.png';
import '../../styles/review.css';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const users = [
    {
        id: 1,
        image: imagerev,
        name: "Angelina Christy",
        occupation: "Mahasiswi",
        text: "Women Center adalah teman setia mahasiswi. Dengan beragam fitur yang relevan, aplikasi ini membantu saya menghadapi tantangan perkuliahan dan rencana karir dengan percaya diri. Privasi yang dijaga dengan baik membuat saya nyaman berbicara tentang masalah pribadi"
    },
    {
        id: 2,
        image: imagerev,
        name: "Maul",
        occupation: "Mahasiswi",
        text: "Women Center adalah teman setia mahasiswi. Dengan beragam fitur yang relevan, aplikasi ini membantu saya menghadapi tantangan perkuliahan dan rencana karir dengan percaya diri. Privasi yang dijaga dengan baik membuat saya nyaman berbicara tentang masalah pribadi"
    },
    {
        id: 3,
        image: imagerev,
        name: "Mail",
        occupation: "Mahasiswi",
        text: "Women Center adalah teman setia mahasiswi. Dengan beragam fitur yang relevan, aplikasi ini membantu saya menghadapi tantangan perkuliahan dan rencana karir dengan percaya diri. Privasi yang dijaga dengan baik membuat saya nyaman berbicara tentang masalah pribadi"
    },
    {
        id: 4,
        image: imagerev,
        name: "Mual",
        occupation: "Mahasiswi",
        text: "Women Center adalah teman setia mahasiswi. Dengan beragam fitur yang relevan, aplikasi ini membantu saya menghadapi tantangan perkuliahan dan rencana karir dengan percaya diri. Privasi yang dijaga dengan baik membuat saya nyaman berbicara tentang masalah pribadi"
    },
];

const Review = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        const nextIndex = activeIndex === users.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        const nextIndex = activeIndex === 0 ? users.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = users.map((user, index) => (
        <CarouselItem
            key={user.id}
            active={index === activeIndex}
        >
            <Row>
                <Col lg='6'>
                    <img src={user.image} alt="img-review" className="image-review" />
                    <div className="ket-review">
                        <h1 className="nama-review">{user.name}</h1>
                        <p className="pekerjaan-review">{user.occupation}</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <p className="text-review">{user.text}</p>
                </Col>
            </Row>
        </CarouselItem>
    ));

    return (
        <section className="review">
            <Container>
                <div className="review-box">
                    <p className="head-review">Review</p>
                    <h1 className="title-review">Review dari user kami</h1>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        {slides}
                    </Carousel>
                </div>
                <div className="slider-buttons">
                    <Button onClick={previous} className="mr-2">
                    <FaLongArrowAltLeft />
                    </Button>
                    <Button onClick={next}>
                    <FaLongArrowAltRight />
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default Review;