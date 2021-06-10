import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import { gql, useMutation, useQuery } from "@apollo/client";
import InputMask from 'react-input-mask';

export const ADD_ONG = gql`
  mutation createOrganization($organization: OrganizationInput){
	  createOrganization(organization: $organization){
      name
      email
      phone
      description
      website
  }
}`;

export const GET_ONG = gql`
  query getONG ($email: String) {
    getONG (email: $email) {
      name
      email
      phone
      description
      website
      locality {
        id
      }
  }
}`;

const OngPersonalData = () => {
  const { user, isAuthenticated } = useAuth0();

  const [createONG] = useMutation(ADD_ONG);
  
  const { loading, error, data } = useQuery(
    GET_ONG,
    {
      variables: { email: user.email }
    },
  );

  const [saved, setSaved] = useState(false);

  const [website, setWebsite] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")

  const save = () => {

    createONG({variables: {
      organization:{
        name: user.name,
        email: user.email,
        phone: phone,
        description: description,
        website: website,
        photo: user.picture,
        type: 1
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
      if(data.getONG){
        setWebsite(data.getONG.website)
        setDescription(data.getONG.description)
        setPhone(data.getONG.phone)
        localStorage.setItem("OBJ", data.getONG)
      }
    }
  }, [data])

  return (
      <Grid container sx={12} className="personal-container">
        <Grid item xs={5} className="personal-input">
          <label>Nome</label>
          <br></br>
          <input text="text" disabled="disabled" value={user.name}></input>
          <br></br>
          <label>Email</label>
          <br></br>
          <input type="text" disabled="disabled" value={user.email}></input>
          <br></br>
          <label>Website</label>
          <br></br>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}></input>
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
          <Button color="primary" variant="contained" style={{float: 'left', fontSize: '1.2vw'}} onClick={save}>Salvar Alterações</Button>
          }
        </Grid>
        <Grid item xs={5} className="personal-input">
          <br></br>
          <label>Descrição</label>
          <br></br>
          <textarea id="bio" maxLength="240" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        </Grid>
      </Grid>
    )
};

export default OngPersonalData;