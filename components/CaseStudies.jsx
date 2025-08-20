import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abla from '../projects/Group 54.png';
import character from '../projects/Group 28.png';
import parameter_desktop from '../projects/parameter_desktop.png';
import React from 'react';

function CaseStudies() {
    const [expandedStates, setExpandedStates] = React.useState({});
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
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

    const projects = [
        {
            src: abla,
            alt: 'Abla',
            caption: 'Abla is a mobile app I designed as a passion project. The app aims to help women, especially younger women, learn about menstrual and sexual health by offering guides and articles, as well as chat with professionals in case of questions that are not covered in articles. In Turkey, many adolescents feel embarrassed to talk about these topics and they are usually considered taboo, especially sexual life questions. This app will help women with these issues by providing a safe space for information and support.',
        },
        {
            src: character,
            alt: 'Lucid Dreams',
            caption: 'Lucid Dreams is a 2D game project developed by a team of five. I was responsible for the user interface related tasks, including character design/animation, background art, fonts used in the game, and overall visual aesthetics.'
        },
        {
            src: parameter_desktop,
            alt: 'Para-Meter',
            caption: 'Para-Meter is my capstone project for my computer science degree. It was developed as a team of four. I was mainly responsible for the user interface design and implementation. We used Figma to design our web application.'
        }
    ];

    const toggleReadMore = (index) => {
        setExpandedStates(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div style={{ width: '90vw', margin: '0 auto', paddingBottom: '10vh' }} className='projects'>
            <h2>UI/UX Projects</h2>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <div className='project-content'>
                            <div className='row-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className='col-4'>
                                    <h4>{project.alt}</h4>
                                </div>
                                <div className='col-4'>
                                    <button style={{borderRadius:"5px", border: '1px solid #007bff', color: '#007bff', backgroundColor: 'transparent'}}>View Details</button>
                                </div>
                            </div>
                            <img
                                className='project-image'
                                src={project.src}
                                alt={project.alt}
                                style={{
                                    width: '100%',
                                    height: '50%'
                                }}
                            />
                            <p style={{ textAlign: 'justify' }}>
                                {expandedStates[index] 
                                    ? project.caption 
                                    : (isMobile ? `${project.caption.slice(0,60)}...`:`${project.caption.slice(0, 200)}...`)}
                                <span 
                                    onClick={() => toggleReadMore(index)}
                                    style={{ color: '#007bff', cursor: 'pointer', marginLeft: '5px' }}
                                >
                                    {expandedStates[index] ? 'Read Less' : 'Read More'}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default CaseStudies;