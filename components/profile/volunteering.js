import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import hearth_broken from '../../public/images/hearth_broken.svg';

import Link from 'next/link';

const Volunteering = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
      <Grid container sx={12} className="volunteering-container">
        <Grid item xs={5}>
          <img src={hearth_broken} alt="hearth_broken"/>
          <p>Você ainda não se candidatou para nenhum projeto :(</p>
          <Link href="/"><Button color="primary" variant="contained">Ir Para Projetos</Button></Link>
        </Grid>
      </Grid>
    )
};

export default Volunteering;