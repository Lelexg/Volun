import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Link from 'next/link'

const ProjectList = ({project, setView, details}) => {
  
  const viewVolunteers = () => {
    localStorage.setItem("enrolments", project.id)
    setView("4")
  }

  console.log(project)

  return (
    <Grid container sx={12} className="project-container">
      <img className="project-photo" src={project.Photo[0].description} alt="project photo"/>
      <h2>{project.title}</h2>
      <br></br><br></br>
      {!details ?
        <p>Criado em: {new Date(project.created).toLocaleDateString()}</p>
        :
        <p></p>
      }
      <h4 className="active">{project.ProjectStatus.description == "Ongoing" ? "Ativo" : "Inativo"}</h4>
      {details ?
      <Link href={`/volunteer/projects/details/` + project.id}><Button className="project-button2" color="primary" variant="contained">Ver projeto</Button></Link>
      :
      <Button className="project-button" color="primary" variant="contained" onClick={viewVolunteers}>Ver Inscritos</Button>
      }
    </Grid>
  )
}

export default ProjectList;