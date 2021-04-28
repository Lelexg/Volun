import habilidades from '../public/images/habilidades.svg';
import freelancer from '../public/images/Freelancer.svg';
import photo from '../public/images/image_teenager.jpg';
import questions from '../public/images/questions.svg';
import marketing from '../public/images/marketing.svg';
import roundCheck from '../public/images/round_check.svg';
import { Button, Grid } from "@material-ui/core";
import missao from '../public/images/missao.svg';
import line from '../public/images/Line.svg';
import Link from 'next/link';
import Login2 from '../components/login/login2'
import teenager2 from '../public/images/teenager2.jpeg';
import teenager3 from '../public/images/teenager3.jpg';

const Index = () => {

  return (
    <div className='container'>
      <Grid container sx={12} spacing={3} style={{paddingTop: '10%'}}>
          <Grid item xs={6}>
          <img style={{maxWidth: '100%', marginLeft: '10%'}} src={freelancer} alt="freelancer" />
          </Grid>
          <Grid item xs={6}>
            <h1>Um novo jeito de fazer trabalho voluntário</h1>
            <h3 style={{width: '70%', fontWeight: 'normal'}}>
              A Volun é uma rede colaborativa para quem busca uma experiência única. 
              A Volun oferece uma conexão única entre a ONG e o Voluntário, indicando você exatamente para o trabalho que você precisa!
            </h3>
            <div style={{paddingTop: '8%'}}>
            <Login2 volunteer={true}/>
            <Login2 volunteer={false}/>
            </div>
          </Grid>
      </Grid> 
      <Grid container sx={12} spacing={3} style={{paddingTop: '5%'}}>
        <Grid item xs={5}>
          <h1 className="title2">O que falta para você se destacar em sua empresa?</h1>
          <h1 style={{float: 'right', fontWeight: 'normal', fontSize: '2vw'}}>A Volun te ajuda a descobrir!</h1>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container item xs={6}>
          <Grid item xs={2}>
            <img src={line} alt="line" style={{maxHeight: '30vw'}}/>
          </Grid>
          <Grid item xs={6}>
            <img style={{paddingTop: '10%', maxWidth: '100%'}} src={questions} alt="questions" />
          </Grid>
        </Grid>
      </Grid> 
      <Grid container sx={12} spacing={3} style={{marginTop: '5%', paddingTop: '5%', backgroundColor: '#6C63FF'}}>
        <Grid item xs={5}>
          <h1 className="title3">A Volun</h1>
          <h4 className="subtitle3">
          Somos uma plataforma online que atua como um facilitador e propagador de conexões entre voluntários dispostos a doar o seu tempo com a execução de atividades físicas ou financeiras e organizações e indivíduos que necessitem desses recursos.
          </h4>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container item xs={6}>
            <img src={marketing} alt="marketing" style={{maxWidth: '100%'}}/>
        </Grid>
      </Grid> 
      <Grid container sx={12} spacing={3} style={{paddingTop: '5%'}}>
        <Grid container item xs={6}>
            <img style={{maxWidth: '100%', marginLeft: '10%'}} src={missao} alt="missao" />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <h1 className="title4">Nossa Missão</h1>
          <h4 className="subtitle4">
          Tornar-se uma empresa capaz de causar transformção social por meio da tenologia, desenvolvendo e incentivando conexões entre esses agentes. Também queremos contribuir para o desenvolvimento do terceiro setor, de forma a que ele atinja mais pessoas de diferentes formas. 
          </h4>
        </Grid>
      </Grid> 
      <Grid container sx={12} spacing={3} style={{marginTop: '5%', paddingTop: '5%', backgroundColor: '#6C63FF'}}>
        <Grid item xs={5}>
          <h1 className="title3">Como aperfeiçoamos suas habilidades</h1>
          <h4 className="subtitle3">
          Com a nossa plataforma, você consegue ter acesso a diversas causas de forma persolizada, que lhe auxiliará a contribuir para a sociedade ao mesmo tempo que desenvolve habilidades emocionais, sociais e amplia o conhecimento a respeito da sociedade em que vivemos. 
          </h4>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
            <img src={habilidades} alt="habilidades" style={{maxWidth: '100%'}} />
        </Grid>
      </Grid> 
      <Grid container sx={12} spacing={3} style={{paddingTop: '5%', paddingBottom: '5%'}}>
        <Grid item xs={12}>
          <h1 className="title5">Nossos Voluntários</h1>
        </Grid>
        <Grid container item xs={12} spacing={2} alignItems='center'>
          <div className="box" style={{marginLeft: '10%'}}>
            <img className="box-photo" src={photo} alt="photo" />
            <p className='box-text'>Wilson Rodrigues</p>
            <p className='box-text'>22 anos</p>
            <br></br>
            <p className='box-text-content'>
            Mais de 15 projetos relaizados na Volun, com enriquecimento de curriculo e muitos prendizados.            
            </p>
          </div>
          <div className="box">
            <img className="box-photo" src={teenager2} alt="photo" />
            <p className='box-text'>Amanda Toledo</p>
            <p className='box-text'>23 anos</p>
            <br></br>
            <p className='box-text-content'>
            Recem formada em administração publica. Conheci a plataforma ainda na faculdade por meio de um projeto social faz 2 anos. 
            </p>
          </div>
          <div className="box">
            <img className="box-photo" src={teenager3} alt="photo" />
            <p className='box-text'>Douglas Pacheco</p>
            <p className='box-text'>26 anos</p>
            <br></br>
            <p className='box-text-content'>
            Líder na ONG do bairro. Uso a plataforma para conquistar novos voluntários para nossos projetos.
            </p>
          </div>
        </Grid>
      </Grid> 
      <Grid container sx={12} spacing={3} style={{paddingTop: '5%', paddingBottom: '5%'}}>
        <Grid item xs={12}>
          <h1 className='title6'>Vamos levar o seu trabalho voluntário para o próximo nível</h1>
          <p className='title6p'>Faça o nosso teste e encontre o Trabalho que mais combina com suas necessidades nesse momento!</p>
        </Grid>
      </Grid>
      <Grid container sx={12} spacing={3} style={{paddingLeft: '5%', paddingTop: '5%', paddingBottom: '10%'}}>
        <Grid item xs={4} className='vertical-line-right' style={{float: 'right'}}>
          <h1 className='title6'><img src={roundCheck} alt="round-check" style={{paddingRight: '5%', maxWidth: '10%'}}></img>135+</h1>
          <p className='title6p'>Empresas utilizam</p>
        </Grid>
        <Grid item xs={3}>
          <h1 className='title6'><img src={roundCheck} alt="round-check" style={{paddingRight: '5%', maxWidth: '10%'}}></img>200+</h1>
          <p className='title6p'>Softskills aprimorados</p>
        </Grid>
        <Grid item xs={4} className='vertical-line-left' style={{float: 'left'}}>
          <h1 className='title6'><img src={roundCheck} alt="round-check" style={{paddingRight: '5%', maxWidth: '10%'}}></img>450+</h1>
          <p className='title6p'>Voluntários trabalhando</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Index;