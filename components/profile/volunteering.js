import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import hearth_broken from '../../public/images/hearth_broken.svg';
import Link from 'next/link';
import { gql, useQuery  } from "@apollo/client";
import VolunteeringList from './volunteeringList'
import Loading from '../animation/loading'

const GET_ENROLMENTS = gql`
  query getEnrolments($email: String){
    getEnrolments(email: $email){
      Project{
        id
        title
        description
        created
        Organization {
          id
          name
        }
        ProjectStatus {
          description
        }
        Photo {
          description
        }
      }
      EnrolmentStatus{
        description
      }
    }
  }
`;

const Volunteering = () => {

  const {user} = useAuth0()

  const { loading, error, data } = useQuery(
    GET_ENROLMENTS,
    {
      variables: { email: user.email }
    },
  )

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    data &&
    !loading ?
    data.getEnrolments != null ?
    <Grid item xs={9} style={{marginTop: '5%', marginBottom: '5%'}}>
      {data.getEnrolments.map((enrolment) => {
        return <VolunteeringList enrolment={enrolment}/>
      })}
    </Grid>
    :
      <Grid container sx={12} className="volunteering-container">
        <Grid item xs={5}>
          <img src={hearth_broken} alt="hearth_broken"/>
          <p style={{marginLeft: '-10%'}}>Você ainda não se candidatou para nenhum projeto :(</p>
          <Link href="/volunteer/projects"><Button color="primary" variant="contained">Ir Para Projetos</Button></Link>
        </Grid>
      </Grid>
    :
    <Loading/>
    )
};

export default Volunteering;