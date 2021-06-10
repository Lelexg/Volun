import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import hearth_broken from '../../public/images/hearth_broken.svg';
import Loading from '../animation/loading'
import Link from 'next/link';
import { gql, useQuery  } from "@apollo/client";
import ProjectList from './projectList'

const GET_FAVORITES = gql`
  query getFavorites($email: String){
    getFavorites(email: $email){
      Project {
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
  }
`;

const Favorite = () => {

  const {user} = useAuth0()

  const { loading, error, data } = useQuery(
    GET_FAVORITES,
    {
      variables: { email: user.email }
    },
  )

  return (
    data &&
    !loading ?
    data.getFavorites != null ?
    <Grid item xs={9} style={{marginTop: '5%', marginBottom: '5%'}}>
      {data.getFavorites.map((project) => {
        return <ProjectList project={project.Project} details={true}/>
      })}
    </Grid>
    :
      <Grid container sx={12} className="volunteering-container">
        <Grid item xs={5}>
          <img src={hearth_broken} alt="hearth_broken"/>
          <p className="favorite-p">Você ainda não tem favoritos salvos :(</p>
          <Link href="/"><Button color="primary" variant="contained">Ir Para Projetos</Button></Link>
        </Grid>
      </Grid>
    :
    <Loading/>
    )
};

export default Favorite;