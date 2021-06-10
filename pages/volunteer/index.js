import volunteer from '../../public/images/volunteer.svg';
import colaboracao from '../../public/images/colaboracao.svg'
import flexibilidade from '../../public/images/flexibilidade.svg';
import comunicacao from '../../public/images/comunicacao.svg';
import empatia from '../../public/images/empatia.svg';
import lideranca from '../../public/images/lideranca.svg';
import resiliencia from '../../public/images/resiliencia.svg';
import meioAmbiente from '../../public/images/meio_ambiente.svg';
import criancas from '../../public/images/criancas.svg';
import saude from '../../public/images/saude.svg';
import mulheres from '../../public/images/mulheres.svg';
import animais from '../../public/images/animais.svg';
import idosos from '../../public/images/idosos.svg';
import pobreza from '../../public/images/pobreza.svg';
import construcao from '../../public/images/construcao.svg';
import educacao from '../../public/images/educacao.svg';
import politica from '../../public/images/politica.svg';
import lgbt from '../../public/images/lgbt.svg';
import esporte from '../../public/images/esporte.svg';
import { Button, Grid } from "@material-ui/core";
import Link from 'next/link';
import ProjectBox from '../../components/volunteer/projectBox'
import Loading from '../../components/animation/loading'
import { useAuth0, User } from "@auth0/auth0-react"; 
import { gql, useQuery  } from "@apollo/client";
import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react";

const GET_PROJECTS = gql`
  query getProjects{
    getProjects{
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
      Cause {
        description
      }
    }
  }
`;

const Index = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const router = useRouter()

  useEffect(() =>{
    if(!isLoading && !isAuthenticated){
      router.push("/notLoggedIn")
    }
  }, [isAuthenticated])

  const { loading, error, data } = useQuery(GET_PROJECTS)

  return (
    isAuthenticated ?
    <div className='container'>
      <Grid container sx={12} style={{paddingTop: '10%'}}>
          <Grid item xs={6}>
          <img className="volunteer" src={volunteer} alt="volunteer" style={{width: '60%', marginLeft: '20%'}}/>
          </Grid>
          <Grid item xs={6} style={{paddingRight: '2%'}}>
            <h1>E se você pudesse descobrir exatamente os pontos em que você precisa trabalhar?</h1>
            <h3 style={{maxWidth: '70%', fontWeight: 'normal'}}>
              A Volun desenvolveu um Quiz que te ajuda a entender exatamente onde você precisa aprimorar! 
              E ainda te indicamos para trabalhos Voluntários que são perfeitos para você!
            </h3>
            <div style={{paddingTop: '8%'}}>
            <Link href="/profile/5">
              <Button style={{width: '50%', marginRight: '5%', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff"}}>
                Iniciar Quiz
              </Button>
            </Link>
            </div>
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
        {data ?
        data.getProjects.slice(0, 5).map((project) => {
          return (
            <Grid item xs={2} style={{marginLeft: '2%'}}>
              <ProjectBox project={project}/>
            </Grid>
          )
        })
        :
        <Loading/>
        }
      </Grid>
      <Grid container sx={12} style={{paddingTop: '5%', paddingBottom: '5%'}}>
        <Grid item xs={12}>
          <h1 className="title5">Skills que a Volun te ajuda a  desenvolver</h1>
        </Grid>
        <Grid container item xs={12} alignItems='center' style={{paddingLeft: '10%'}}>
          <Grid item xs={4}>
            <div className="box-skills">
              <img className="image-box" src={colaboracao} alt="colaboração"/>
              <h2>Colaboração</h2>
              <p>Com trabalhos em grupo você consegue desenvolver a habilidade de colaboração e empatia!</p>
            </div>
            <div className="box-skills-2">
              <img className="image-box" src={empatia} alt="colaboração"/>
              <h2>Empatia</h2>
              <p>Com trabalhos com pessoas mais vulneráveias você exercita a capacidade de ser empático.</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="box-skills">
              <img className="image-box" src={flexibilidade} alt="colaboração"/>
              <h2>Flexibilidade</h2>
              <p>Arrisque com trabalhos fora da sua área de conforto. Aprenda felixibilidade e tolerancia!</p>
            </div>
            <div className="box-skills-2">
              <img className="image-box" src={lideranca} alt="colaboração"/>
              <h2>Liderança</h2>
              <p>Se Voluntarie como lider de uma iniciativa ou um grupo! Ajude uma causa na qual você acredita.</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="box-skills">
              <img className="image-box" src={comunicacao} alt="colaboração"/>
              <h2>Comunicação</h2>
              <p>Se voluntarie com trabalhos que farão você se comunicar com pessoas novas e liderar equipes.</p>
            </div>
            <div className="box-skills-2">
              <img className="image-box" src={resiliencia} alt="colaboração"/>
              <h2>Resiliência</h2>
              <p>Com trabalhos mais complexos e delicados você aprende como resistir a todas as situações.</p>
            </div>
          </Grid>
        </Grid>
      </Grid> 
      <Grid container sx={12} style={{paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#EBEAFF'}}>
        <Grid item xs={12}>
          <h1 className="title1" style={{paddingLeft: '10%'}}>Categorias</h1>
          <Link href="/volunteer/projects/Meioambiente">
          <div className="box-category" style={{marginLeft: '10%'}}>
            <img className="image-box-category" src={meioAmbiente} alt="meio-ambiente"/>
            <h4>Meio Ambiente</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Criancas">
          <div className="box-category">
            <img className="image-box-category" src={criancas} alt="crianças"/>
            <h4>Crianças</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Saude">
          <div className="box-category">
            <img className="image-box-category" src={saude} alt="saude"/>
            <h4>Saúde</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Mulheres">
          <div className="box-category">
            <img className="image-box-category" src={mulheres} alt="mulheres" style={{maxHeight: '4.6rem'}}/>
            <h4>Mulheres</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Animais">
          <div className="box-category">
            <img className="image-box-category" src={animais} alt="animais"/>
            <h4>Animais</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Idosos">
          <div className="box-category">
            <img className="image-box-category" src={idosos} alt="idosos"/>
            <h4>Idosos</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Alimentacao">
          <div className="box-category" style={{marginLeft: '10%'}}>
            <img className="image-box-category" src={pobreza} alt="alimentacao"/>
            <h4>Alimentação</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Moradia">
          <div className="box-category">
            <img className="image-box-category" src={construcao} alt="moradia"/>
            <h4>Moradia</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Educacao">
          <div className="box-category" style={{paddingTop: '1.4%'}}>
            <img className="image-box-category" src={educacao} alt="educacao"/>
            <h4>Educação</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Politica">
          <div className="box-category" style={{paddingTop: '0.7%'}}>
            <img className="image-box-category" src={politica} alt="politica"/>
            <h4>Política</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Lgbt">
          <div className="box-category">
            <img className="image-box-category" src={lgbt} alt="lgbt"/>
            <h4>LGBT+</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/Esporte">
          <div className="box-category">
            <img className="image-box-category" src={esporte} alt="esportes"/>
            <h4>Esportes</h4>
          </div>
          </Link>
        </Grid>
      </Grid>
    </div>
    :
    <Loading/>
  )
}

export default Index;