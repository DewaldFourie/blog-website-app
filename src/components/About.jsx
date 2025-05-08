import './styles/about.css'


const About = () => {

    return (
        <>
            <div className="about-content">
                <div className="about-container">
                    <div className="about-info-container">
                        <h1 className='about-info-heading'>About the Project</h1>
                        <h4 className='about-info-subheading'>How does it work?</h4>
                        <span className='about-info-text'>This website was built as part of an Odin Project assignment focused on creating a full-stack blog with an API-only backend. The goal was to demonstrate the flexibility of separating backend and frontend logic. To achieve this, I built one backend API and two independent frontend sites. Disclaimer: All posts are AI-generated.</span>
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