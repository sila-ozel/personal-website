import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bilboard from '../projects/bilboard.png';
import mlproject from '../projects/ml_project.png';
import handcrafted from '../projects/handcrafted.png';
import parameter from '../projects/parameter.png';
import commitsense from '../projects/Logo.jpeg';
function Projects() {
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
            src: bilboard,
            alt: 'BilBoard',
            caption: 'BilBoard is a web application for the Bilkent students or staff to post second-hand items for sale or exchange. It also supports a complaint system for the users to issues they encounter. This project was developed as a team of 5 students in the Software Engineering course at Bilkent University. I worked on some of the pages in the frontend using the React framework.',
            technologies: ['React', 'Bootstrap', 'Django', 'PostgreSQL']
        },
        {
            src: mlproject,
            alt: 'Artwork Classifier',
            caption: 'As a team of 5 students, we implemented and compared the results of three different (CNN, Vision Transformer, ResNET) machine learning models to classify artworks. The project was developed as part of the Introduction to Machine Learning course at Bilkent University. I worked on the data preprocessing and feature extraction using Python. For convolutional neural networks we tried both our own implementation and TinyVGG. I was responsible for the data preprocessing and implementation of the custom CNN model.',
            technologies: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib'],
            link: 'https://github.com/sila-ozel/CS464-Project'
        },
        {
            src: handcrafted,
            alt: 'Website for Handcrafted Products',
            caption: 'This project is developed as a team of 5 students in the Database Management Systems course at Bilkent University. The project is a website for handcrafted products where users can browse and purchase items. I worked both on the frontend and backend of the project. The frontend is developed using React and the backend is developed using Django, however, to learn more about the database management and SQL, we implemented the backend using only SQL queries without any ORM. For the database, we used PostgreSQL.',
            technologies: ['React', 'Django', 'PostgreSQL'],
            link: 'https://github.com/TunaSaygin/CS353-Project'
        },
        {
            src: parameter,
            alt: 'Para-Meter',
            caption: 'This project is our capstone project and it was implemented as a team of 4 students. Para-Meter is a web application that helps retail investors to rebalance their portfolios based on their risk preferences. The application can be used by both experienced and inexperienced investors. Para-Meter utilizes machine learning models to predict the market trends and it recommends rebalancing according to these predictions. It has a user-friendly interface and provides customization of machine learning models for the tech-savvy users.',
            technologies: ['React', 'TimescaleDB', 'FastAPI', 'Docker', 'Digital Ocean'],
            link: 'https://parameter-project.github.io/'
        },
        {
            src: commitsense,
            alt: 'Commit-Sense',
            caption: 'Commit-Sense is a tool for developers which analyzes the code differences and generates three commit messages. Developers can choose one of the generated messages or write their own. The confidence score of each message is also calculated and provided. The users can change the confidence score threshold so that the generated messages all have confidence scores above the threshold. The tool can be installed and deleted from the repository manager part of the desktop application. Also, we provided last k (k can vary from 5-30) commit confidence scores statistics so that the users can make informed decisions on the threshold. The project was developed as a team of 5. I worked on the frontend of the desktop application using Python and GTK library. For the LLM selection, we decided to use OpenAI\'s GPT-4.1 model.',
            technologies: ['Python', 'GTK']
        }
    ];

    return (
        <div style={{ width: '90vw', margin: '0 auto', paddingBottom: '10vh' }} className='projects'>
            <h2>Projects</h2>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <h4>{project.alt}</h4>
                        <img
                            className='project-image'
                            src={project.src}
                            alt={project.alt}
                            style={{
                                width: '90%',
                                height: '300px',
                                padding: '10px'
                            }}
                        />
                        <p style={{width: '90%', textAlign: 'justify'}}>{project.caption}</p>
                        <p><strong>Technologies:</strong> {project.technologies.map((element, index) => (
                            <span style={{margin: '1%'}} className="badge rounded-pill text-bg-dark">{element}</span>
                        ))}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Projects;