import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologiesList = technologies.map(technology => {
    return <span key={technology}>{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{technologiesList}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
