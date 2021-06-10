import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import { gql, useMutation, useQuery } from "@apollo/client";
import InputMask from 'react-input-mask';

export const ADD_USER = gql`
  mutation createUse($user: UserInput){
	  createUser(user: $user){
      firstname
      lastname
      email
      phone
      bio
      document
      photo
  }
}`;

export const GET_USER = gql`
  query getUser ($email: String) {
    getUser (email: $email) {
      firstname
      lastname
      email
      phone
      bio
      document
  }
}`;

const PersonalData = () => {
  const { user, isAuthenticated } = useAuth0();

  const [createUser] = useMutation(ADD_USER);
  
  const { loading, error, data } = useQuery(
    GET_USER,
    {
      variables: { email: user.email }
    },
  );

  const [saved, setSaved] = useState(false);

  const [CPF, setCPF] = useState("")
  const [phone, setPhone] = useState("")
  const [bio, setBio] = useState("")

  const save = () => {

    console.log(user.picture)
    createUser({variables: {
      user:{
        firstname: user.given_name,
        lastname: user.family_name,
        email: user.email,
        phone: phone,
        bio: bio,
        document: CPF,
        photo: user.picture
      } 
    }}).then((result) => {
      console.log(result)

      setSaved(true)

      setTimeout(() => {
        setSaved(false)
      }, 3000);
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    if(data){
      if(data.getUser){
        setCPF(data.getUser.document)
        setBio(data.getUser.bio)
        setPhone(data.getUser.phone)
        localStorage.setItem("OBJ", data.getUser)
      }
    }
  }, [data])

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
            value={CPF}
          ></InputMask>
          <br></br>
          <label>Telefone</label>
          <br></br>
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            value={phone}
          ></InputMask>
          <br></br>
          {saved ?
          <h3 className="saved">Salvo!</h3>
          :
          <Button color="primary" variant="contained" style={{float: 'left', fontSize: '1.3vw'}} onClick={save}>Salvar Alterações</Button>
          }
        </Grid>
        <Grid item xs={5} className="personal-input">
          <label>Sobrenome</label>
          <br></br>
          <input disabled="disabled" type="text" value={user.family_name}></input>
          <br></br>
          <label>Bio</label>
          <br></br>
          <textarea id="bio" maxLength="240" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </Grid>
      </Grid>
    )
};

export default PersonalData;