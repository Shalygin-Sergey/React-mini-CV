import React from "react";
import { useParams } from "react-router-dom";

import { projects } from "./../helpers/projectsList"; 
import ButtonGitHub from "../components/buttonGitHub/BtnGitHub";


const Project = () => {
  const { id } = useParams();
  let project = id ? projects[id] : null;

  console.log(project);


  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <img 
            src={project.imgBig} alt={project.title} 
            className="project-details__cover" 
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.githubLink && (
            <ButtonGitHub link="https://github.com" />
          )}

        </div>
      </div>
    </main>
  );
}

export default Project;