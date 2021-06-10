import React, {useState, useEffect} from "react";
import Logout from '../../components/login/logout';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import badge from '../../public/images/check-mark-badge.svg';
import Loading from '../../components/animation/loading'

import PersonalData from '../../components/profile/personalData';
import Addresses from '../../components/profile/addresses';
import Volunteering from '../../components/profile/volunteering'
import Favorite from '../../components/profile/favorite'
import Quiz from '../../components/profile/quiz'
import { useRouter } from 'next/router'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const router = useRouter()

  const [view, setView] = useState("1");
  const [rendered, setRendered] = useState(1)

  useEffect(() => {
    if(document.getElementById("1") && view === "1") {
      document.getElementById("1").className = "profile-selected" 
    }
  })

  const setSelected = (e) => {

    let nodes = document.getElementsByClassName("profile-menu")[0].childNodes

    for(let i = 0; i < nodes.length; i++){
      nodes[i].classList.remove("profile-selected")
    }

    document.getElementById(e.toString()).className = "profile-selected" 
    setView(e.toString())
  }

  const { id } = router.query

  useEffect(() =>{
    console.log(id)
    if(id && isAuthenticated){
      setSelected(id)
    }
  }, [id])

  
  useEffect(() =>{
    if(!isLoading && !isAuthenticated){
      router.push("/notLoggedIn")
    }
    if(!isLoading && localStorage.getItem('user') == 'false'){
      router.push("/ong/profile")
    }
  }, [isAuthenticated])
  
  return (
    isAuthenticated ? (
      <div>
      <Grid container sx={12} className='profile-container'>
        <Grid item xs={1}>
          <img className="profile-picture" src={user.picture} alt={user.name} />
        </Grid>
        <Grid item xs={5}>
          <h1 className='profile-name'>{user.name}</h1>
          <p className='profile-email'>{user.email}</p>
        </Grid>
        <Grid item xs={5}>
          <img style={{height: '100px'}} alt="badge" src={badge}></img>
        </Grid>
        <Grid item xs={2} style={{paddingTop: '5%', paddingBottom: '5%'}} className='profile-menu'>
          <p id="1" onClick={(e) => setSelected(e.target.id)}>Dados Pessoais</p>
          <p id="2" onClick={(e) => setSelected(e.target.id)}>Endereços</p>
          <p id="3" onClick={(e) => setSelected(e.target.id)}>Voluntariados</p>
          <p id="4" onClick={(e) => setSelected(e.target.id)}>Favoritos</p>
          <p id="5" onClick={(e) => setSelected(e.target.id)}>Quiz</p>
          <Logout/>
        </Grid>
        <Grid item xs={10}>
          { view === "1" &&
            <PersonalData/>
          }
          { view === "2" &&
            <Addresses/>
          }
          { view === "3" &&
            <Volunteering/>
          }
          { view === "4" &&
            <Favorite/>
          }
          { view === "5" &&
            <Quiz/>
          }
        </Grid>
      </Grid>
      </div>
      )
      :
      <Loading/>
  );
};

export default Profile;