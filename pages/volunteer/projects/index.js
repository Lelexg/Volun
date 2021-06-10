import React, {useState, useEffect} from "react";
import Logout from '../../../components/login/logout';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import filter from '../../../public/images/filter.svg';
import ProjectBox from "../../../components/volunteer/projectBox";
import Loading from '../../../components/animation/loading'
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
      Cause {
        description
      }
    }
  }
`;
const Index = () => {
  const { user, isAuthenticated } = useAuth0();
  
  const [rendered, setRendered] = useState(1)
  const [order, setOrder] = useState(true);

  const sortData = (a, b) => {
    if(order){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    } else {
      if(a.title < b.title) { return 1; }
      if(a.title > b.title) { return -1; }
      return 0;
    }
  }

  const ordenar = () => {
    setOrder(!order)
  }

  const [getProjects, { data }] = useLazyQuery(GET_PROJECTS);

  useEffect(() =>{
    if (typeof window !== 'undefined' && !data) {
      if(document.getElementById("tudo")){ 
        document.getElementById("tudo").checked = true
      }
      getProjects(
      {
        variables: { email: localStorage.getItem("OBJ").email }
      },
    )}
  },[data])

  const [filterProjects, setFilterProject] = useState("")

  const filterData = data => {
    if (!filterProjects) {
      return true
    }

    if(filterProjects == "tudo"){
      return true
    }

    const filterProject = filterProjects && data.Cause.description == filterProjects;
    
    return filterProject;
  }

  const [filterTitle, setFilterTitle] = useState("")

  const filterTitles = data => {
    if (!filterTitle) {
      return true
    }


    const filterT = filterTitle && data.title.toLowerCase().match(filterTitle.toLowerCase());
    
    return filterT;
  }


  const changeFilter = (name, checked) => {
    if(checked) {
      setFilterProject(name)
    }
  }

  return (
    data ?
      <div>
      <Grid container sx={12} className='container'>
        <Grid item xs={6}>
          <h1 style={{marginLeft: '10%', marginTop: '5%'}}>Oportunidades de projetos</h1>
        </Grid>
        <Grid item xs={6} style={{marginTop: '3%'}}>
          <input className="search" type="text" onChange={(e) => setFilterTitle(e.target.value)} placeholder="  &#128269;  Pesquisar"/>
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
        <Grid item xs={1} style={{marginLeft: '4%', marginRight: '2%'}}>
          <img style={{float: 'left', marginLeft: '10%', marginRight: '1%'}} src={filter} alt="filter"/>
          <h2>Filtros</h2>
          <hr></hr>
          <h3>Categorias</h3>
          <div>
          <input type="radio" id="tudo" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="tudo">Tudo</label>
          </div>
          <div>
          <input type="radio" id="Meioambiente" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Meioambiente">Meio Ambiente</label>
          </div>
          <div>
          <input type="radio" id="Criancas" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Criancas">Crianças</label>
          </div>
          <div>
          <input type="radio" id="Saude" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Saude">Saúde</label>
          </div>
          <div>
          <input type="radio" id="Mulheres" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Mulheres">Mulheres</label>
          </div>
          <div>
          <input type="radio" id="Animais" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Animais">Animais</label>
          </div>
          <div>
          <input type="radio" id="Idoso" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Idoso">Idoso</label>
          </div>
          <div>
          <input type="radio" id="Alimentacao" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Alimentacao">Alimentação</label>
          </div>
          <div>
          <input type="radio" id="Moradia" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Moradia">Moradia</label>
          </div>
          <div>
          <input type="radio" id="Educacao" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Educacao">Educação</label>
          </div>
          <div>
          <input type="radio" id="Politica" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Politica">Política</label>
          </div>
          <div>
          <input type="radio" id="Lgbt" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Lgbt">LGBT+</label>
          </div>
          <div>
          <input type="radio" id="Esporte" name="filtro" onChange={(e) => changeFilter(e.target.id, e.target.checked)}/>
          <label for="Esporte">Esporte</label>
          </div>
        </Grid>
        {data.getMyProjects.sort(sortData).filter(filterData).filter(filterTitles).map((project) => {
          return (
            <Grid item xs={2}>
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