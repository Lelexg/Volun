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

const Index = () => {

  return (
    <div className='container'>
      <Grid container sx={12} spacing={3} style={{paddingTop: '10%'}}>
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
      <Grid container sx={12} spacing={3} style={{marginTop: '5%', backgroundColor: '#D2CFFF'}}>
        <Grid item xs={4}>
          <h1 className="title1" style={{paddingLeft: '10%'}}>Descubra seu próximo projeto!</h1>
          <h1 style={{paddingLeft: '10%', fontWeight: 'normal', }}>Destaques</h1>
          <br></br>
          <div style={{width: '45%', float: 'left', marginLeft: '5%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right', marginLeft: '5%'}}><ProjectBox/></div>
        </Grid>
        <Grid item xs={4} style={{marginTop: '11%'}}>
          <div style={{width: '45%', float: 'left'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right'}}><ProjectBox/></div>
        </Grid>
        <Grid item xs={4} style={{marginTop: '2%'}}>
          <Link href="/volunteer/projects">
            <Button style={{marginLeft: '60%'}} color="primary" variant="contained">
              Ver tudo
            </Button>
          </Link>
          <br/><br/><br/><br/><br/><br/>
          <div style={{width: '45%', float: 'left'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right', marginRight: '5%'}}><ProjectBox/></div>
        </Grid>
      </Grid>
      <Grid container sx={12} spacing={3} style={{paddingTop: '5%', paddingBottom: '5%'}}>
        <Grid item xs={12}>
          <h1 className="title5">Skills que a Volun te ajuda a  desenvolver</h1>
        </Grid>
        <Grid container item xs={12} spacing={2} alignItems='center' style={{paddingLeft: '10%'}}>
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
      <Grid container sx={12} spacing={3} style={{paddingTop: '5%', paddingBottom: '5%', backgroundColor: '#EBEAFF'}}>
        <Grid item xs={12}>
          <h1 className="title1" style={{paddingLeft: '10%'}}>Categorias</h1>
          <Link href="/volunteer/projects/meioambiente">
          <div className="box-category" style={{marginLeft: '10%'}}>
            <img className="image-box-category" src={meioAmbiente} alt="meio-ambiente"/>
            <h4>Meio Ambiente</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/criancas">
          <div className="box-category">
            <img className="image-box-category" src={criancas} alt="crianças"/>
            <h4>Crianças</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/saude">
          <div className="box-category">
            <img className="image-box-category" src={saude} alt="saude"/>
            <h4>Saúde</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/mulheres">
          <div className="box-category">
            <img className="image-box-category" src={mulheres} alt="mulheres" style={{maxHeight: '4.6rem'}}/>
            <h4>Mulheres</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/animais">
          <div className="box-category">
            <img className="image-box-category" src={animais} alt="animais"/>
            <h4>Animais</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/idosos">
          <div className="box-category">
            <img className="image-box-category" src={idosos} alt="idosos"/>
            <h4>Idosos</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/alimentacao">
          <div className="box-category" style={{marginLeft: '10%'}}>
            <img className="image-box-category" src={pobreza} alt="alimentacao"/>
            <h4>Alimentação</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/moradia">
          <div className="box-category">
            <img className="image-box-category" src={construcao} alt="moradia"/>
            <h4>Moradia</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/educacao">
          <div className="box-category" style={{paddingTop: '1.4%'}}>
            <img className="image-box-category" src={educacao} alt="educacao"/>
            <h4>Educação</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/politica">
          <div className="box-category" style={{paddingTop: '0.7%'}}>
            <img className="image-box-category" src={politica} alt="politica"/>
            <h4>Política</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/lgbt">
          <div className="box-category">
            <img className="image-box-category" src={lgbt} alt="lgbt"/>
            <h4>LGBT+</h4>
          </div>
          </Link>
          <Link href="/volunteer/projects/esporte">
          <div className="box-category">
            <img className="image-box-category" src={esporte} alt="esportes"/>
            <h4>Esportes</h4>
          </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Index;