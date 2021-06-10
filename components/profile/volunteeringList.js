import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Link from 'next/link'

const VolunteeringList = ({enrolment}) => {

  console.log(enrolment)

  return (
    <Grid container sx={12} className="project-container">
      <img className="project-photo" src={enrolment.Project.Photo[0].description} alt="project photo"/>
      <h2>{enrolment.Project.title}</h2>
      <br></br><br></br>
      {enrolment.EnrolmentStatus.description == 'Waiting Approval' &&
        <p style={{fontWeight: 'bold'}}>Aguardando Aprovação</p>
      }
      {enrolment.EnrolmentStatus.description == 'Approved' &&
        <p style={{fontWeight: 'bold'}}>Aprovado</p>
      }
      {enrolment.EnrolmentStatus.description == 'Denied' &&
        <p style={{fontWeight: 'bold'}}>Recusado</p>
      }
      <Link href={`/volunteer/projects/details/` + enrolment.Project.id}><Button className="project-button" color="primary" variant="contained">Ver projeto</Button></Link>
    </Grid>
  )
}

export default VolunteeringList;