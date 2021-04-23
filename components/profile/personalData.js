import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import { gql, useMutation  } from "@apollo/client";
import InputMask from 'react-input-mask';

export const ADD_USER = gql`
    mutation createUser ($user: UserInput) {
      createUser (input: $user)
      user {
        id
        firstname
      }
    }
  `;

const PersonalData = () => {
  const { user, isAuthenticated } = useAuth0();

  const [CPF, setCPF] = useState("")
  const [phone, setPhone] = useState("")
  const [bio, setBio] = useState("")

  const save = () => {
    useMutation(ADD_USER, {variables: {
      user:{
        firstname: user.given_name,
        lastname: user.family_name,
        email: user.email,
        phone: phone
      } 
    }}).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
      <Grid container sx={12} className="personal-container">
        <Grid item xs={5} className="personal-input">
          <label>Nome</label>
          <br></br>
          <input text="text" disabled="disabled" value={user.given_name}></input>
          <br></br>
          <label>Email</label>
          <br></br>
          <input type="text" disabled="disabled" value={user.email}></input>
          <br></br>
          <label>CPF</label>
          <br></br>
          <InputMask
            mask="999.999.999-99"
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
            id="cpf"
          ></InputMask>
          <br></br>
          <label>Telefone</label>
          <br></br>
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
          ></InputMask>
          <br></br>
          <Button color="primary" variant="contained" style={{float: 'left'}} onClick={save}>Salvar Alterações</Button>
        </Grid>
        <Grid item xs={5} className="personal-input">
          <label>Sobrenome</label>
          <br></br>
          <input disabled="disabled" type="text" value={user.family_name}></input>
          <br></br>
          <label>Bio</label>
          <br></br>
          <textarea id="bio" maxLength="240"></textarea>
        </Grid>
      </Grid>
    )
};

export default PersonalData;