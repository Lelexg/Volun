import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0, User } from "@auth0/auth0-react"; 
import hearth_broken from '../../public/images/hearth_broken.svg';
import { gql, useQuery  } from "@apollo/client";
import ProjectList from './projectList'
import Link from 'next/link'
import Loading from '../animation/loading'

const GET_PROJECTS = gql`
  query getMyProjects($email: String){
    getMyProjects(email: $email){
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
  }
`;

const Projects = ({setView}) => {
  
  const {user} = useAuth0()

  const { loading, error, data } = useQuery(
    GET_PROJECTS,
    {
      variables: { email: user.email }
    },
  )

  return (
      data &&
      !loading ?
      data.getMyProjects != null ?
      <Grid item xs={9} style={{marginTop: '5%'}}>
        {data.getMyProjects.map((project) => {
          return <ProjectList project={project} setView={setView} details={false}/>
        })}
        <Link href="/ong/projects/create"><Button className="button-create" color="primary" variant="contained">Criar Projeto</Button></Link>
      </Grid>
      :
      <Grid container sx={12} className="volunteering-container">
        <Grid item xs={5}>
          <img src={hearth_broken} alt="hearth_broken"/>
          <p>Você ainda não criou nenhum projeto :(</p>
          <Link href="/ong/projects/create"><Button color="primary" variant="contained">Criar Projeto</Button></Link>
        </Grid>
      </Grid>
      :
      <Loading/>
    )
};

export default Projects;