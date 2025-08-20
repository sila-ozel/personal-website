import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abla from '../projects/Group 54.png';
import character from '../projects/Group 28.png';
import parameter_desktop from '../projects/parameter_desktop.png';
import React from 'react';
import abla_logo from '../projects/Abla_Logo.png';
import abla_mockup from '../projects/Abla_Mockup.png';
import abla_ui from '../projects/Abla_UI.png';
import { useNavigate } from 'react-router';

function CaseStudies() {
    const [expandedStates, setExpandedStates] = React.useState({});
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    const navigate = useNavigate();
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
                                    <button onClick={() => navigate(`/personal-website/${project.alt}`)} style={{borderRadius:"5px", border: '1px solid #007bff', color: '#007bff', backgroundColor: 'transparent'}}>View Details</button>
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

export const Abla = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            
            <div className='case-study-container'>
                <img className='abla-logo' src={abla_logo} alt="Abla Logo" />
                <h2>Overview 👓</h2>
                <p>Abla is a mobile app I designed as a passion project. It aims to help women learn about sexual and menstrual health as well as track their cycles and birth controls. I tried to create a user-friendly and warm interface to make users feel at ease.</p>
                <h2>Problem 🔍</h2>
                <p>Abla is a mobile app designed to teach sexual and menstrual health to adults and young adults. The app will provide a safe space for people, especially women, to learn about sexual health and ask intimate questions to professionals. Abla means big sister in Turkish. This app will be like a big sister for those who need it. They can learn about and ask sexual questions without feeling judged.</p>
            </div>
            <div className='case-study-container'>
                <h2>Why is it an important problem? 💫</h2>
                <div>
                    <p>There is a gap in the Turkish national educational system. Adolescents do not have a formal sexual education. They learn about menstruation and overall sexual health during secondary school biology lessons. However, they are never taught about sexuality and safe sex measures.</p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '2rem',
                        alignItems: isMobile ? 'flex-start' : 'center'
                    }}
                    className='row-12'
                >
                    <div className='col-4'>
                        <p style={{color:'pink', fontSize: "5rem"}}>66%</p><p>of girls have no idea what a period is.</p>
                    </div>
                    <div className='col-4'>
                        <p style={{color:'pink', fontSize: "5rem"}}>33%</p><p>of young people does not know how to protect themselves from sexually transmitted infections.</p>
                    </div>
                    <div className='col-4'>
                        <p style={{color:'pink', fontSize: "5rem"}}>3 million</p><p> girls have unsafe abortions due to unwanted pregnancies every year.</p>
                    </div>
                </div>
            </div>
            <div className='case-study-container'>
                <div>
                    <h2>Personas 🧍🏼‍♀️</h2>
                <p>To understand the target audience better, I created 3 personas.</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '2rem',
                        alignItems: isMobile ? 'stretch' : 'center',

                    }}
                    className='row-12'
                >
                    <div
                        className='col-3'
                        style={{
                            width: isMobile ? '100%' : '33%',
                            padding: isMobile ? '1rem' : '0'
                        }}
                    >
                        <h3>Zeynep</h3>
                        <ul>
                            <li>Age: 11</li>
                            <li>Got her first period but she does not know what to do.</li>
                            <li>She heard about periods, but, she is not prepared.</li>
                        </ul>
                    </div>
                    <div
                        className='col-3'
                        style={{
                            width: isMobile ? '100%' : '33%',
                            padding: isMobile ? '1rem' : '0'
                        }}
                    >
                        <h3>Yasemin</h3>
                        <ul>
                            <li>Age: 16</li>
                            <li>She does not know much about sex and safe sex practices.</li>
                            <li>She saw some posts on social media, but, wants to learn from reliable resources.</li>
                            <li>She is afraid to ask questions about sex.</li>
                        </ul>
                    </div>
                    <div
                        className='col-4'
                        style={{
                            width: isMobile ? '100%' : '33%',
                            padding: isMobile ? '1rem' : '0'
                        }}
                    >
                        <h3>Amy</h3>
                        <ul>
                            <li>Age: 22</li>
                            <li>She is sexually active but does not use protection.</li>
                            <li>She wants to learn about contraceptives and safe sex practices.</li>
                            <li>She feels ashamed to ask for help.</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className='case-study-container'>
                <h2>Solution 🛠️</h2>
                <p>There are several femtech apps available that also touch on these topics. However, there are some gaps in the market. To my knowledge many of the period tracking apps do not have a built-in "Chat with a professional" feature. This is a crucial addition that could provide users with immediate access to expert advice and support. Additionally, they do not have a map that shows nearby clinics, pharmacies, or markets that sell sexual health products. Upon these points, I pinpointed distinctive features to include in Abla.</p>
                <h4>Key Features ✨</h4>
                <ol>
                    <li>Talk to a professional.</li>
                    <li>Include a map of nearby clinics and pharmacies.</li>
                    <li>Provide verified guides and articles for educational purposes.</li>
                    <li>Offer an optional period and birth control tracker/reminder.</li>
                    <li>Keep the app as privacy preserving as possible.</li>
                </ol>
                <img style={{ width: '50vh', display: 'block', margin: '2rem auto' }} src={abla_mockup}></img>
            </div>
        </div>
    );
}
export default CaseStudies;