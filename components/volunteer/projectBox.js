import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import boyVolunteer from '../../public/images/boy-vonlunteer.svg';
import company from '../../public/images/project-company.svg';
import Link from 'next/link';

const ProjectBox = ({ project }) => {
  const { user, isAuthenticated } = useAuth0();

  return (
      <Grid container sx={12} className="project-box">
        <Grid item xs={12}>
          <img className='images-responsive' src={project.Photo[0].description} alt="boy-volunteer"/>
        </Grid>
        <Grid item xs={3}>
          <img src={company} className='images-responsive-small' alt="company-volunteer"/>
        </Grid>
        <Grid item xs={9}>
          <p>{project.title}</p>
          {project.online ?
          <p style={{marginBottom: '0'}}>Remoto</p>  
          :
          <p style={{marginBottom: '0'}}>{project.locality}</p>
          }
          <p style={{marginTop: '0', marginRight: '20%'}}>{project.workload}</p>
        <Grid item xs={8}>
          <Link href={`/volunteer/projects/details/` + project.id}><Button className="button-sm" color="primary" variant="contained">Ver mais</Button></Link>  
        </Grid>
        </Grid>
      </Grid>
    )
};

export default ProjectBox;