import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import line from '../../public/images/Line.svg';
import cellphone from '../../public/images/cellphone.svg';
import board from '../../public/images/board.svg';
import Link from 'next/link';
import ProjectBox from '../../components/volunteer/projectBox'
import Loading from '../../components/animation/loading'
import { useRouter } from 'next/router'
import { gql, useLazyQuery  } from "@apollo/client";

const GET_PROJECTS = gql`
  query getMyProjects($email: String){
    getMyProjects(email: $email){
      id
      title
      locality
      online
      workload
      Organization {
        id
        photos {
          description
        }
      }
      Photo {
        description
      }
    }
  }
`;

const Index = ({setSelected}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const router = useRouter()
  
  useEffect(() =>{
    if(!isLoading && !isAuthenticated){
      router.push("/notLoggedIn")
    }
  }, [isAuthenticated])

  const [getProjects, { data }] = useLazyQuery(GET_PROJECTS);

  useEffect(() =>{
    if (typeof window !== 'undefined') {
      getProjects(
      {
        variables: { email: localStorage.getItem("OBJ").email }
      },
    )}
  },[])

  return (
    (isAuthenticated && data) ?
    <div className='container'>
    <Grid container sx={12}>
      <Grid item xs={12} className="welcome-back">
        <h1>Olá, {user.name}!</h1>
        <h3 style={{marginTop: '-2%'}}>Bem vindo de volta!</h3>
      </Grid>
      <Grid container style={{paddingLeft: '10%'}}>
        <Grid item xs={2} style={{marginTop: '5%'}}>
            <img src={cellphone} alt="cellphone" style={{maxHeight: '20vw'}}/>
        </Grid>
        <Grid item xs ={3} style={{paddingLeft: '3%', marginRight: '3%'}}>
          <h1 className="title1">Quero criar um novo projeto!</h1>
          <h3 style={{float: 'right', fontWeight: 'normal', fontSize: '2vw'}}>
            Divulgue o seu trabalho e encontre os melhores voluntários
          </h3>
          <Link href="/ong/projects/create">
            <Button style={{fontSize: '1.1vw', marginRight: '5%', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff", paddingRight:'20%', paddingLeft:'20%'}}>
              Criar Projeto
            </Button>
          </Link>
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={1}>
            <img src={line} alt="line" style={{maxHeight: '30vw'}}/>
          </Grid>
          <Grid item xs={4}>
            <img style={{paddingTop: '10%', maxHeight: '20vw'}} src={board} alt="board" />
          </Grid>
          <Grid item xs={7} style={{paddingLeft: '15%'}}>
            <h1 className="title1">Checar seus projetos abertos</h1>
            <h3 style={{float: 'right', fontWeight: 'normal', fontSize: '2vw'}}>
              Veja como está o andamento dos seus projetos
            </h3>
            <Link href="/ong/profile/3">
              <Button style={{marginTop: '10%', fontSize: '1.1vw', marginRight: '5%', borderColor: '#6C63FF', borderWidth: 'thin', borderStyle: 'solid', color: "#6C63FF", paddingRight:'20%', paddingLeft:'20%'}}>
                Ver Projeto
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid> 
    </Grid> 
    <Grid container sx={12} style={{marginTop: '5%', backgroundColor: '#D2CFFF'}}>
      <Grid item xs={4}>
        <h1 className="title1" style={{paddingLeft: '10%'}}>Descubra seu próximo projeto!</h1>
        <h1 style={{paddingLeft: '10%', fontWeight: 'normal', }}>Destaques</h1>
      </Grid>
      <Grid item xs={8}>
        <Link href="/ong/profile/3">
          <Button style={{marginLeft: '80%', marginTop: '6%'}} color="primary" variant="contained">
            Ver tudo
          </Button>
        </Link>
      </Grid>
    </Grid>
    <Grid container sx={12} style={{backgroundColor: '#D2CFFF'}}>
      {data.getMyProjects.slice(0, 5).map((project) => {
        return (
          <Grid item xs={2} style={{marginLeft: '2%'}}>
            <ProjectBox project={project}/>
          </Grid>
        )
      })}
    </Grid>
  </div>
  :
  <Loading/>
  );
};

export default Index;