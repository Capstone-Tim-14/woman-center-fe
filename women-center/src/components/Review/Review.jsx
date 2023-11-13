/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/review.css'

const reviews = [
  {
    id: 1,
    name: 'Angelina Christy',
    image: 'Review.jpg',
    review: "Women Center adalah teman setia mahasiswi. Dengan beragam fitur yang relevan, aplikasi ini membantu saya menghadapi tantangan perkuliahan dan rencana karir dengan percaya diri. Privasi yang dijaga dengan baik membuat saya nyaman berbicara tentang masalah pribadi."
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/images/jane-smith.jpg',
    review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  // Add more reviews as needed
];

const ReviewSlider = () => {
  return (
    <div className="review-slider">
      <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={3000}>
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-box">
              <img src={review} alt={review.name} />
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
