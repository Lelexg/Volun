import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import man from '../../public/images/man.png'
import { gql, useMutation  } from "@apollo/client";

const APPROVE = gql`
  mutation approveEnrolment($id: Int){
    approveEnrolment(id: $id){
      id
    }
  }
`;

const DENY = gql`
  mutation denyEnrolment($id: Int){
    denyEnrolment(id: $id){
      id
    }
  }
`;

const CLOSE = gql`
  mutation closeEnrolment($id: Int){
    closeEnrolment(id: $id){
      id
    }
  }
`;

const EnrolmentList = ({enrolment, refresh}) => {
  
  const [acceptUser] = useMutation(APPROVE);
  const [refuseUser] = useMutation(DENY);
  const [closeUser] = useMutation(CLOSE);

  const accept = () => {
    acceptUser({variables: {
      id: parseInt(enrolment.id),
    }}).then((result) => {
      refresh({ variables: { id: parseInt(localStorage.getItem("enrolments")) }})
    }).catch((error) => {
      console.log(error)
    })
  }

  const refuse = () => {
    refuseUser({variables: {
      id: parseInt(enrolment.id),
    }}).then((result) => {
      refresh({ variables: { id: parseInt(localStorage.getItem("enrolments")) }})
    }).catch((error) => {
      console.log(error)
    })
  }

  const conclude = () => {
    closeUser({variables: {
      id: parseInt(enrolment.id),
    }}).then((result) => {
      refresh({ variables: { id: parseInt(localStorage.getItem("enrolments")) }})
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <Grid container sx={12} className="enrolment-container">
      <img className="project-photo" src={enrolment.User.photo ? enrolment.User.photo : man} alt="project photo"/>
      <h2>{enrolment.User.firstname + "  " + enrolment.User.lastname}</h2>
      <br></br>
      <p>{enrolment.User.phone}</p>
      <p className="enrolment-container-p">{enrolment.User.email}</p>
      <h4>{enrolment.User.bio}</h4>
      {enrolment.EnrolmentStatus.description === "Waiting Approval" &&
        <>
        <Button className="enrolment-button-1" color="primary" variant="contained" onClick={accept}>Aceitar Voluntário</Button>
        <Button className="enrolment-button-2" color="primary" variant="contained" onClick={refuse}>Recusar Voluntário</Button>
        </>
      }
      {enrolment.EnrolmentStatus.description === "Approved" &&
        <>
        <h3 className="enrolemnt-status">Aprovado :)</h3>
        <Button className="enrolment-button-4" color="primary" variant="contained" onClick={conclude}>Concluir Voluntariado</Button>
        </>
      }
      {enrolment.EnrolmentStatus.description === "Denied" &&
        <>
        <h3 className="enrolemnt-status">Recusado :(</h3>
        <Button className="enrolment-button-3" color="primary" variant="contained" onClick={accept}>Mudei de ideia!</Button>
        </>
      }
      {enrolment.EnrolmentStatus.description === "Closed" &&
        <>
        <h3 className="enrolemnt-status">Concluido \o/</h3>
        <h3 className="enrolemnt-dates">{new Date(enrolment.startDate).toLocaleDateString() + " - " + new Date(enrolment.endDate).toLocaleDateString()}</h3>
        </>
      }
    </Grid>
  )
}

export default EnrolmentList;