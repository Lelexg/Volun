import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import photo1 from '../../../../public/images/photo1.svg';
import photo3 from '../../../../public/images/photo2.svg';
import photo2 from '../../../../public/images/photo3.svg';
import clock from '../../../../public/images/clock.svg';
import stars from '../../../../public/images/stars.svg';
import hourglass from '../../../../public/images/hourglass.svg';
import location from '../../../../public/images/location.svg';
//import heart from '../../../../public/images/heart.svg';
import { useRouter } from 'next/router'


const Details = () => {
  const { user, isAuthenticated } = useAuth0();
  
  const [rendered, setRendered] = useState(1)
  const [order, setOrder] = useState(true);

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
          <Grid item xs={5} className='box-section2' style={{float: 'left'}}>
          <Button style={{width: '100%', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff"}}>
            Quero me inscrever
          </Button>
          </Grid>
          <Grid item xs={5} className='box-section2' style={{float: 'right'}}>
            <Button>
              
            </Button>
            <Button color="primary" variant="outlined">
              Doar
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5} style={{marginLeft: '3%'}}>
          <img src={photo1} alt='photo 1' className="photo-box"/>
          <img src={photo2} alt='photo 2' className="photo-box2"/>
          <img src={photo3} alt='photo 3' className="photo-box2"/>
        </Grid>
      </Grid>
      </div>
  );
};

export default Details;