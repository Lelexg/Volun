import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import { gql, useMutation  } from "@apollo/client";
import InputMask from 'react-input-mask';
import Link from 'next/link';
import questionMark from '../../public/images/question-mark.svg'

const Projects = () => {

  return (
    <Grid container sx={12} className="volunteering-container">
      <Grid item xs={5}>
        <img src={hearth_broken} alt="hearth_broken"/>
        <p>Você ainda não criou nenhum projeto :(</p>
        <Link href="/ong/projects/create"><Button color="primary" variant="contained">Criar Projeto</Button></Link>
      </Grid>
    </Grid>
    )
};

export default Projects;