import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react"; 
import { gql, useMutation, useQuery  } from "@apollo/client";

export const ADD_ADDRESS_USER = gql`
    mutation createUserLocality ($email: String, $locality: AddressInput) {
      createUserLocality (email: $email, input: $locality){
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

export const ADD_ADDRESS_ONG = gql`
mutation createOrganizationLocality ($email: String, $locality: LocalityInput) {
  createOrganizationLocality (email: $email, locality: $locality) {
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

export const GET_ADDRESS = gql`
mutation getLocality ($id: Int) {
  getLocality (id: $id) {
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

  const [userAddress] = useMutation(ADD_ADDRESS_USER);
  const [ongAddress] = useMutation(ADD_ADDRESS_ONG);

  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")

  if(localStorage.getItem("OBJ").locality){
    const { loading, error, data } = useQuery(
      GET_ADDRESS,
      {
        variables: { email: localStorage.getItem("OBJ").locality }
      },
    ).onComplete((data) => {
      console.log(data)
    });
  } 

  const [saved, setSaved] = useState(false);

  const save = () => {
    if(localStorage.getItem('user') == 'false'){
      ongAddress({variables: {
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

        setSaved(true)

        setTimeout(() => {
          setSaved(false)
        }, 3000);
      }).catch((error) => {
        console.log(error)
      })
    } else {
      userAddress({variables: {
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

        setSaved(true)

        setTimeout(() => {
          setSaved(false)
        }, 3000);
      }).catch((error) => {
        console.log(error)
      })
    }
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
          <Button color="primary" variant="contained" style={{float: 'left', fontSize: '1.3vw'}} onClick={save}>Salvar Alterações</Button>
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