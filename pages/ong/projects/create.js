import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import logoONG from '../../../public/images/logo_ong.svg';
import clock from '../../../public/images/clock.svg';
import stars from '../../../public/images/stars.svg';
import hourglass from '../../../public/images/hourglass.svg';
import location from '../../../public/images/location.svg';
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
        <Grid item xs={5} className='box-section' style={{marginBottom: '5%'}}>
          <input type="text" className="title-input"></input>
          <h5>Descrição da Oportunidade</h5>
          <textarea className="description-input" maxLength="240"></textarea>
          <h5>Sobre o Trabalho</h5>
          <textarea className="description-input" maxLength="240"></textarea>
          <Grid container sx={12}>
            <Grid item xs={5} className='box-section2' style={{float: 'left'}}>
              <h3><img src={clock} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Frequência</h3>
              <textarea type="text" className="details-input" maxLength="42"></textarea>
              <h3><img src={stars} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Soft Skills</h3>
              <div>
                <input type="checkbox" id="empatia" name="empatia" />
                <label for="empatia">Empatia</label>
                <input type="checkbox" id="empatia" name="empatia" />
                <label for="empatia">Empatia</label>
              </div>
              <div>
                <input type="checkbox" id="empatia" name="empatia" />
                <label for="empatia">Empatia</label>
                <input type="checkbox" id="empatia" name="empatia" />
                <label for="empatia">Empatia</label>
              </div>
              <div>
                <input type="checkbox" id="empatia" name="empatia" />
                <label for="empatia">Empatia</label>
                <input type="checkbox" id="empatia" name="empatia" />
                <label for="empatia">Empatia</label>
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className='box-section2' style={{float: 'right'}}>
              <h3><img src={hourglass} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Carga Horária</h3>
              <textarea type="text" className="details-input"></textarea>
              <h3><img src={location} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Local</h3>
              <textarea type="text" className="details-input"></textarea>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5} style={{marginLeft: '3%'}}>
          {/* <img src={photo1} alt='photo 1' className="photo-box"/>
          <img src={photo2} alt='photo 2' className="photo-box2"/>
          <img src={photo3} alt='photo 3' className="photo-box2"/> */}
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