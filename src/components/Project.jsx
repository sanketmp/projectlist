import "./Project.css";
import { projectsArray } from "../../data.js";

const Project = () => {
  return (
    <section id="projectsection">
      <div className="projects">
        {projectsArray.map((project, index) => (
          <div key={index} className="project-div">
            <div>
              <img
                className="project-img"
                src={project.imgSrc}
                loading="lazy"
              />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-tech-stack">{project.techStack}</span>
              <p className="project-desc">{project.desc}</p>
              <div className="links">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    style={{ display: "block" }}
                  >
                    github
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    style={{ display: "block" }}
                  >
                    live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
