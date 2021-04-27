import React, {useState, useEffect} from "react";
import Logout from '../../../components/login/logout';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import filter from '../../../public/images/filter.svg';
import { useRouter } from 'next/router'

import ProjectBox from '../../../components/volunteer/projectBox'

const Index = () => {
  const { user, isAuthenticated } = useAuth0();
  
  const [rendered, setRendered] = useState(1)
  const [order, setOrder] = useState(true);

  const router = useRouter()
  const { category } = router.query

  useEffect(() =>{
    if(category){
      let input = document.getElementById(category).checked = true;
    }
  }, [category])

  const ordenar = () => {
    setOrder(!order)
  }

  return (
      <div>
      <Grid container sx={12} className='container'>
        <Grid item xs={6}>
          <h1 style={{marginLeft: '10%', marginTop: '5%'}}>Oportunidades de projetos</h1>
        </Grid>
        <Grid item xs={6} style={{marginTop: '3%'}}>
          <input className="search" type="text" placeholder="  &#128269;  Pesquisar"/>
          {order ?
          <Button className='order' color="primary" variant="outlined" onClick={ordenar}>
            &#8593;	&nbsp; Ordenar
          </Button>
          :
          <Button className='order' color="primary" variant="outlined" onClick={ordenar}>
            &#8595;	&nbsp; Ordenar
          </Button>
          }
        </Grid>
      </Grid>
      <Grid container sx={12} className="projects">
        <Grid item xs={1} style={{marginLeft: '5%'}}>
          <img style={{float: 'left', marginLeft: '10%', marginRight: '1%'}} src={filter} alt="filter"/>
          <h2>Filtros</h2>
          <hr></hr>
          <h3>Categorias</h3>
          <div>
          <input type="checkbox" id="meioambiente" name="meioambiente" />
          <label for="meioambiente">Meio Ambiente</label>
          </div>
          <div>
          <input type="checkbox" id="criancas" name="criancas" />
          <label for="criancas">Crianças</label>
          </div>
          <div>
          <input type="checkbox" id="saude" name="saude" />
          <label for="saude">Saúde</label>
          </div>
          <div>
          <input type="checkbox" id="mulheres" name="mulheres" />
          <label for="mulheres">Mulheres</label>
          </div>
          <div>
          <input type="checkbox" id="animais" name="animais" />
          <label for="animais">Animais</label>
          </div>
          <div>
          <input type="checkbox" id="idoso" name="idoso" />
          <label for="idosos">Idoso</label>
          </div>
          <div>
          <input type="checkbox" id="alimentacao" name="alimentacao" />
          <label for="alimentacao">Alimentação</label>
          </div>
          <div>
          <input type="checkbox" id="moradia" name="moradia" />
          <label for="moradia">Moradia</label>
          </div>
          <div>
          <input type="checkbox" id="educacao" name="educacao" />
          <label for="educacao">Educação</label>
          </div>
          <div>
          <input type="checkbox" id="politica" name="politica" />
          <label for="politica">Política</label>
          </div>
          <div>
          <input type="checkbox" id="lgbt" name="lgbt" />
          <label for="lgbt">LGBT+</label>
          </div>
          <div>
          <input type="checkbox" id="esporte" name="esporte" />
          <label for="esporte">Esporte</label>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div style={{width: '45%', float: 'left', marginLeft: '10%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'left', marginLeft: '10%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'left', marginLeft: '10%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'left', marginLeft: '10%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right'}}><ProjectBox/></div>
        </Grid>
        <Grid item xs={5}>
          <div style={{width: '45%', float: 'left'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right', marginRight: '10%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'left'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right', marginRight: '10%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'left'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right', marginRight: '10%'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'left'}}><ProjectBox/></div>
          <div style={{width: '45%', float: 'right', marginRight: '10%'}}><ProjectBox/></div>
        </Grid>
      </Grid>
      </div>
  );
};

export default Index;