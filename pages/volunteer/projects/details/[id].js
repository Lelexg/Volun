import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import photo1 from '../../../../public/images/photo2.jpg';
import photo3 from '../../../../public/images/photo3.jpg';
import photo2 from '../../../../public/images/photo1.jpg';
import photo4 from '../../../../public/images/photo4.jpg';
import logoONG from '../../../../public/images/logo_ong.svg';
import clock from '../../../../public/images/clock.svg';
import stars from '../../../../public/images/stars.svg';
import hourglass from '../../../../public/images/hourglass.svg';
import location from '../../../../public/images/location.svg';
import Lottie from 'react-lottie';
import animationData from '../../../../components/animation/heart.json'
import { useRouter } from 'next/router'


const Details = () => {
  const { user, isAuthenticated } = useAuth0();
  
  const [rendered, setRendered] = useState(1)
  const [order, setOrder] = useState(true);

  const [isLiked, setIsLiked] = useState(false);
  const [animationState, setAnimationState] = useState({isStopped: false, isPaused: false, direction: -1});

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const router = useRouter()
  const { id } = router.query

  useEffect(() =>{
    if(id){
      
    }
  }, [id])

  return (
      <div>
      <Grid container sx={12} className='container-box'>
        <Grid item xs={5} className='box-section'>
          <h2>Cuidar de Crianças Carentes</h2>
          <h5>Descrição</h5>
          <p>Se você gosta de cuidar de crianças, brincar, mostrar seu carinho, seja um voluntário em orfanatos. 
            É muito valioso para você e para elas! Foi retirado delas o carinho e afeto familiar, muitas crianças e jovens cresceram no orfanato e sua companhia fará toda a diferença, para que possam sentir-se amados novamente.
          </p>
          <h5>Trabalho</h5>
          <p>As tarefas podem incluir mas não se limitam a: Cuidar das crianças à medida que aprendem e brincam; 
            ajudar a equipe com atividades regulares, tais como: Alimentar, dar banho, trocar fralda, etc; 
            aulas de reforço escolar; atividades esportivas com adolescentes; ajudar com projetos seja dentro ou ao redor do centro.
          </p>
          <Grid container sx={12}>
            <Grid item xs={5} className='box-section2' style={{float: 'left'}}>
              <h3><img src={clock} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Frequência</h3>
              <p>1 encontro por semana</p>
              <h3><img src={stars} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Soft Skills</h3>
              <p>Comunicação; Flexibilidade; Empatia</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className='box-section2' style={{float: 'right'}}>
              <h3><img src={hourglass} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Carga Horária</h3>
              <p>3 horas diárias</p>
              <h3><img src={location} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Local</h3>
              <p>São Paulo - SP</p>
            </Grid>
          </Grid>
          {isAuthenticated ? (
          <span>
          <Grid item xs={5} className='box-section2' style={{float: 'left'}}>
            <Button style={{fontSize: '1vw', width: '100%', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff"}}>
              Inscrever!
            </Button>
          </Grid>
          <Grid item xs={5} className='box-section2' style={{float: 'right'}}>
            <div className="round-circle" onClick={() => {
              const reverseAnimation = -1
              const normalAnimation = 1

              setAnimationState({
                ...animationState,
                isStopped: false,
                direction: animationState.direction == normalAnimation
                  ? reverseAnimation
                  : normalAnimation
              });
              setIsLiked(!isLiked);
            }}>
              <Lottie options={defaultOptions}
                height={100}
                width={100}
                direction={animationState.direction}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}/>
            </div>
            {isLiked && <h5 className='favorited'>Favoritei!</h5>}
          </Grid>
          </span>)
          :
          <h3 className="not-logged-text">É necessário estar logado para se inscrever em um projeto</h3>
          }
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5} style={{marginLeft: '3%'}}>
          <img src={photo1} alt='photo 1' className="photo-box"/>
          <img src={photo2} alt='photo 2' className="photo-box2"/>
          <img src={photo3} alt='photo 3' className="photo-box2"/>
          <div style={{position: 'relative', top: '5%'}}>
          <img src={logoONG} alt='logo ONG' className="photo-box3"/>
          <p className="ong-description">A troca de experiências é um dos principais objetivos dos programas 
            visando a fortalecer o entendimento cultural e a abertura de novos horizontes para os beneficiários e voluntários.</p>
            </div>
        </Grid>
      </Grid>
      </div>
  );
};

export default Details;