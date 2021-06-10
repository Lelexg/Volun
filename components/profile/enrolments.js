import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import hearth_broken from '../../public/images/hearth_broken.svg';
import { gql, useLazyQuery  } from "@apollo/client";
import Link from 'next/link'
import EnrolmentList from "./enrolmentList";
import Loading from '../animation/loading'

const GET_ENROLMENTS = gql`
  query getProjectEnrolments($id: Int){
    getProjectEnrolments(id: $id){
      id
      startDate
      endDate
      User {
        firstname
        lastname
        phone
        email
        bio
        photo
      }
      EnrolmentStatus {
        description
      }
    }
  }
`;

const Enrolments = () => {

  const [getEnrolments, { data, loading }] = useLazyQuery(GET_ENROLMENTS);
  const [rendered, setRendered] = useState(false)

  if(!rendered){
    getEnrolments({ variables: { id: parseInt(localStorage.getItem("enrolments")) }})
    setRendered(true)
  }

  return (
      data &&
      !loading ?  
      data.getProjectEnrolments != null ?
      <Grid item xs={9} style={{marginTop: '5%'}}>
        {data.getProjectEnrolments.map((enrolment) => {
          return <EnrolmentList enrolment={enrolment} refresh={getEnrolments}/>
        })}
      </Grid>
      :
      <Grid container sx={12} className="volunteering-container">
        <Grid item xs={5}>
          <img src={hearth_broken} alt="hearth_broken"/>
          <p>Ainda não há inscritos no seu projeto :(</p>
        </Grid>
      </Grid>
      :
      <Loading/>
    )
};

export default Enrolments;