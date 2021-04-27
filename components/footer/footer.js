import React from "react";
import facebook from '../../public/images/facebook_logo.svg'
import instagram from '../../public/images/instagram_logo.svg'
import twitter from '../../public/images/twitter_logo.svg'
import youtube from '../../public/images/youtube_logo.svg'
import { Button, Grid } from "@material-ui/core";
import Link from 'next/link';

const Footer = () => {

  return (
      <Grid container sx={12} spacing={3} className="footer">
        <Grid item xs={6}>
          <p style={{paddingLeft: '25%'}}>Nos siga nas redes sociais</p>
          <hr style={{width: '50%'}}></hr>
          <div className='logos'>
            <Link href="/"><img className="social-network" src={facebook} alt="facebook" /></Link>
            <Link href="/"><img className="social-network" src={instagram} alt="instagram" /></Link>
            <Link href="/"><img className="social-network" src={twitter} alt="twitter" /></Link>
            <Link href="/"><img className="social-network" src={youtube} alt="youtube" /></Link>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>Voluntários</p>
          <hr></hr>
          <Link href="/profile" ><div className='footer-link'>Perfil</div></Link>
          <Link href="/volunteer/projects" ><div className='footer-link'>Projetos</div></Link>
          <Link href="/profile/3" ><div className='footer-link'>Meus projetos</div></Link>
          <Link href="/profile/5"><div className='footer-link'>Quiz</div></Link>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <p>ONGs</p>
          <hr></hr>
          <Link href="/ong/profile" ><div className='footer-link'>Perfil</div></Link>
          <Link href="/ong/projects/create" ><div className='footer-link'>Criar oportunidade</div></Link>
          <Link href="/ong/profile/3" ><div className='footer-link'>Minhas oportunidades</div></Link>
        </Grid>
      </Grid>
  )
};

export default Footer;