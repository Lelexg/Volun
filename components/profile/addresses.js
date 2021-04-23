import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import { gql, useMutation  } from "@apollo/client";
import InputMask from 'react-input-mask';

export const ADD_ADDRESS = gql`
    mutation createAddress ($id: String, $address: AddressInput) {
      createAddress (id: $id, input: $address)
      address {
        id
        street
        number
        neighborhood
        city
        state
        country
      }
    }
  `;

const Addresses = () => {
  const { user, isAuthenticated } = useAuth0();

  const address = {};

  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")

  const save = () => {
    useMutation(ADD_ADDRESS, {variables: {
      id: user.id,
      address:{
        street: street,
        number: number,
        neighborhood: neighborhood,
        city: city,
        state: state,
        country: country
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
          <label>Rua</label>
          <br></br>
          <input text="text" value={address.street}></input>
          <br></br>
          <label>Número</label>
          <br></br>
          <input type="text" value={address.number}></input>
          <br></br>
          <label>Bairro</label>
          <br></br>
          <input type="text" value={address.Bairro}></input>
          <br></br>
          <Button color="primary" variant="contained" style={{float: 'left'}} onClick={save}>Salvar Alterações</Button>
        </Grid>
        <Grid item xs={5} className="personal-input">
          <label>Cidade</label>
          <br></br>
          <input  type="text" value={user.city}></input>
          <br></br>
          <label>Estado</label>
          <br></br>
          <input type="text" value={user.state}></input>
          <br></br>
          <label>País</label>
          <br></br>
          <input type="text" value={user.country}></input>
          <br></br>
        </Grid>
      </Grid>
    )
};

export default Addresses;