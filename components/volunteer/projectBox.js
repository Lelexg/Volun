import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import boyVolunteer from '../../public/images/boy-vonlunteer.svg';
import company from '../../public/images/project-company.svg';
import Link from 'next/link';

const ProjectBox = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
      <Grid container sx={12} className="project-box">
        <Grid item xs={12}>
          <img className='images-responsive' src={boyVolunteer} alt="boy-volunteer"/>
        </Grid>
        <Grid item xs={3}>
          <img src={company} className='images-responsive-small' alt="company-volunteer"/>
        </Grid>
        <Grid item xs={9}>
          <p>Cuide de Crianças Carentes</p>
          <p style={{marginBottom: '0'}}>São Paulo</p>
          <Grid container item xs={12}>
            <p style={{marginTop: '0', marginRight: '20%'}}>Semanal</p>
            <Link href="/"><Button className="button-sm" color="primary" variant="contained">Ver mais</Button></Link>
          </Grid>
        </Grid>
      </Grid>
    )
};

export default ProjectBox;