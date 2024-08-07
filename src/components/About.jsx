import './styles/about.css'


const About = () => {

    return (
        <>
            <div className="about-content">
                <div className="about-container">
                    <div className="about-info-container">
                        <h1 className='about-info-heading'>About the Project</h1>
                        <h4 className='about-info-subheading'>How does it work?</h4>
                        <span className='about-info-text'>This website is part of an assignment in The Odin Project, aiming to create a full-stack Blog. This project is a great way to practice and see the benefits of creating an API only-backend. The important exercise here was to set up the API and access it from the outside to demonstrate the power and flexibility of separating the back-end code from the front-end code. To achieve this, I had to create one back-end API and two front-ends websites. As said in The Odin Project: it is set up that way, because we can. Disclaimer: All posts are AI generated.</span>
                    </div>
                    <div className='about-project-layout-header'>
                        <span>One Project. Three Parts.</span>
                    </div>
                    <div className="about-project-layout-container">
                        <div className="project-layout-item">
                            <span>WEBSITE</span>
                        </div>
                        <div className="project-layout-item">
                            <span>API</span>
                        </div>
                        <div className="project-layout-item">
                            <span>CMS</span>
                        </div>
                    </div>
                    <div className='about-project-info-container'>
                        <span className='about-project-info-text'>Find out more about this specific project on <a className='about-project-info-text-link' href="https://www.theodinproject.com/lessons/node-path-nodejs-blog-api">this page</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;