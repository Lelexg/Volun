import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import { gql, useMutation  } from "@apollo/client";
import InputMask from 'react-input-mask';
import Link from 'next/link';
import questionMark from '../../public/images/question-mark.svg'

const Quiz = () => {

  return (
      <Grid container sx={12} className="personal-container">
        <Grid item xs={5} className="quiz-profile">
          <h1>O que falta para você se destacar no mercado?</h1>
          <br></br>
          <h2>A Volun te ajuda a descobrir!</h2>
          <br></br>
          <br></br>
          <Link href="/"><Button color="primary" variant="contained" style={{float: 'left', width: '70%'}}>Iniciar Quiz</Button></Link>
        </Grid>
        <Grid item xs={5} className="personal-input">
          <img className="question-mark" src={questionMark} alt="people question mark" />
        </Grid>
      </Grid>
    )
};

export default Quiz;