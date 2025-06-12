import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCard({photo}) {
    return (
        <div className='photo-card'>
            <img 
                className='photos' 
                src={photo.src} 
                alt={photo.alt}
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    padding: '10px'
                }}
            />
        </div>
    );

}

function Photos() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const photos = import.meta.glob('../photos/*.{jpg,jpeg,png}', { eager: true });
    const photoData = Object.values(photos).map((photo, index) => ({
        src: '/personal-website/' + photo.default,
        alt: `Photo ${index + 1}`,
        caption: `Photo ${index + 1} caption`
    }));
    return (
        <div className='slider-container' style={{ width: '80%', margin: '0 auto', padding: '20px 0' }}>
            <Slider {...settings}>
                {photoData.map((photo, index) => (
                    <PhotoCard key={index} photo={photo} />
                ))}
            </Slider>
        </div>
    );
}

export default Photos;