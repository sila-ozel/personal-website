import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abla from '../projects/Group 54.png';
import character from '../projects/Group 28.png';
import parameter_desktop from '../projects/parameter_desktop.png';
import React from 'react';
import abla_logo from '../projects/Abla_Logo.png';
import abla_mockup from '../projects/Abla_Mockup.png';
import zeynep_user_journey from '../projects/Zeynep_User_Journey.png';
import yasemin_user_journey from '../projects/Yasemin_User_Journey.png';
import amy_user_journey from '../projects/Amy_User_Journey.png';
import abla_ui from '../projects/Abla_UI_2.png';
import abla_wireframe_1 from '../projects/Abla_wireframe_1.png';
import abla_wireframe_2 from '../projects/Abla_wireframe_2.png';
import abla_wireframe_3 from '../projects/Abla_wireframe_3.png';
import fonts from '../projects/Fonts.png';
import characters from '../projects/Characters.png';

function LucidDreamsModal({ show, onClose }) {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        if (!show) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new window.Image();
        img.src = characters;

        // Sprite frame info
        const frameWidth = 32; // update to your sprite width
        const frameHeight = 32; // update to your sprite height
        const firstRowY = 0;
        const secondRowY = frameHeight;

        // Select frames: first 5 from row 1, first 3 from row 2
        const frames = [
            { x: 0 * frameWidth, y: firstRowY },
            { x: 1 * frameWidth, y: firstRowY },
            { x: 2 * frameWidth, y: firstRowY },
            { x: 3 * frameWidth, y: firstRowY },
            { x: 4 * frameWidth, y: firstRowY },
            { x: 0 * frameWidth, y: secondRowY },
            { x: 1 * frameWidth, y: secondRowY },
            { x: 2 * frameWidth, y: secondRowY },
        ];

        let frameIndex = 0;
        let animationId;
        let forward = true;

        function draw() {
            ctx.clearRect(0, 0, frameWidth, frameHeight);
            const frame = frames[frameIndex];
            ctx.drawImage(img, frame.x, frame.y, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
            if (frameIndex === frames.length - 1) forward = false;
            if (frameIndex === 0) forward = true;

            frameIndex = (frameIndex + (forward ? 1 : -1)) % frames.length;
            animationId = requestAnimationFrame(() => setTimeout(draw, 120)); // ~8fps
        }

        img.onload = () => {
            draw();
        };

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [show]);

    if (!show) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(66, 60, 60, 0.63)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: 'var(--background-color-dark)',
                    color: 'var(--text-color-dark)',
                    borderRadius: '15px',
                    maxWidth: '95vw',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '2rem',
                    position: 'relative'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '2rem',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2>Lucid Dreams 🎮</h2>
                {/* Add animated sprite canvas */}
                <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                    <canvas
                        ref={canvasRef}
                        width={32}
                        height={32}
                        style={{ 
                            borderRadius: '8px', 
                            background: '#222',
                            width: '128px',
                            height: '128px',
                            imageRendering: 'pixelated',
                            imageRendering: '-moz-crisp-edges',
                            imageRendering: 'crisp-edges'
                        }}
                    />
                </div>
                <h3>Overview 👓</h3>
                <p>Lucid Dreams is a 2D desktop game that aims to provide players with a unique experience. The name Lucid Dreams comes from the fact that players can create custom levels using the game's level editor. They can choose from different tiles and drag&drop them onto the empty level to create their own levels, as if they are in a lucid dream.</p>
                <h3>My Role 🧑🏻‍💻</h3>
                <p>I came up with the game concept and was responsible for designing the user interface and game graphics of the game. I created characters, backgrounds, and tiles using Aseprite. I also implemented the character animations within the game.</p>
                <h3>Assets Used 🖼️</h3>
                <img src={fonts} alt="Fonts" style={{ height: '90%', width: 'auto' }} />
                <img src={characters} alt="Characters" style={{ height: '80%', width: 'auto' }} />

            </div>
        </div>
    );
}

function AblaModal({ show, onClose }) {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!show) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(66, 60, 60, 0.63)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: 'var(--background-color-dark)',
                    color: 'var(--text-color-dark)',
                    borderRadius: '15px',
                    maxWidth: '95vw',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '2rem',
                    position: 'relative'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '2rem',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                    aria-label="Close"
                >
                    &times;
                </button>
                <img className='abla-logo' src={abla_logo} alt="Abla Logo" />
                <h2>Overview 👓</h2>
                <p>Abla is a mobile app I designed as a passion project. It aims to help women learn about sexual and menstrual health as well as track their cycles and birth controls. I tried to create a user-friendly and warm interface to make users feel at ease.</p>
                <h2>Problem 🔍</h2>
                <p>Abla is a mobile app designed to teach sexual and menstrual health to adults and young adults. The app will provide a safe space for people, especially women, to learn about sexual health and ask intimate questions to professionals. Abla means big sister in Turkish. This app will be like a big sister for those who need it. They can learn about and ask sexual questions without feeling judged.</p>
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
                    <h2>User Journeys</h2>
                    <p>Below are the user journeys for each persona.</p>
                    <h3>Zeynep</h3>
                    <img style={{ height: '80vh', width: 'auto', display: 'block', margin: '2rem auto' }} src={zeynep_user_journey} alt="Zeynep User Journey" />
                    <h3>Yasemin</h3>
                    <img style={{ height: '80vh', width: 'auto', display: 'block', margin: '2rem auto' }} src={yasemin_user_journey} alt="Yasmin User Journey" />
                    <h3>Amy</h3>
                    <img style={{ height: '80vh', width: 'auto', display: 'block', margin: '2rem auto' }} src={amy_user_journey} alt="Amy User Journey" />
                </div>
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
                <h4>Wireframes</h4>
                <p>Below are the wireframes for the Abla app, showcasing the main user flows and features. I created these wireframes to visualize the user experience and ensure that all necessary elements are included in the final design. In the end, I added additional small details to the user interface design.</p>
                <img style={{ height: '80vh', width: 'auto', display: 'block', margin: '2rem auto' }} src={abla_wireframe_1} alt="Abla Wireframe 1" />
                <img style={{ height: '80vh', width: 'auto', display: 'block', margin: '2rem auto' }} src={abla_wireframe_2} alt="Abla Wireframe 2" />
                <img style={{ height: '50vh', width: 'auto', display: 'block', margin: '2rem auto' }} src={abla_wireframe_3} alt="Abla Wireframe 3" />
                <h4>UI Design</h4>
                <p>After creating the wireframes, I focused on the UI design to ensure a calm and friendly design. I chose the fonts and color palette keeping the target audience in mind. I aimed for a bubbly and approachable aesthetic, using soft colors and rounded shapes to create a sense of comfort and safety.</p>
                <img style={{ height: '150vh', width: 'auto', display: 'block', margin: '2rem auto' }} src={abla_ui} alt="Abla UI" />
            </div>
        </div>
    );
}

function CaseStudies() {
    const [expandedStates, setExpandedStates] = React.useState({});
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    const [showAblaModal, setShowAblaModal] = React.useState(false);
    const [showModal, setShowModal] = React.useState(null);
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
            isAbla: true
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
                                        {isMobile ? <button
                                            onClick={() => setShowModal(project.alt)}
                                            style={{fontSize: '8px', borderRadius:"5px", border: '1px solid #007bff', color: '#007bff', backgroundColor: 'transparent'}}
                                        >
                                            View Details
                                        </button>: <button
                                            onClick={() => setShowModal(project.alt)}
                                            style={{borderRadius:"5px", border: '1px solid #007bff', color: '#007bff', backgroundColor: 'transparent'}}
                                        >
                                            View Details
                                        </button>}
                                    
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
            <AblaModal show={showModal === 'Abla'} onClose={() => setShowModal(null)} />
            <LucidDreamsModal show={showModal === 'Lucid Dreams'} onClose={() => setShowModal(null)} />
        </div>
    );
}

export default CaseStudies;