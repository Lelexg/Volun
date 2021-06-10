import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@material-ui/core";
import logoONG from '../../../public/images/logo_ong.svg';
import clock from '../../../public/images/clock.svg';
import stars from '../../../public/images/stars.svg';
import hourglass from '../../../public/images/hourglass.svg';
import location from '../../../public/images/location.svg';
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import Loading from '../../../components/animation/loading'
import aws from 'aws-sdk'

export const GET_ONG = gql`
  query getONG($email: String) {
    getONG(email: $email) {
      id
      description
    }
}`;

export const CREATE_PROJECT = gql`
  mutation createProject($project: ProjectInput){
    createProject(project: $project){
      id
      title
      Organization {
        description
      }
    }
}`;

const Details = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() =>{
    if(!isLoading && !isAuthenticated){
      router.push("/notLoggedIn")
    }
    if(!isLoading && localStorage.getItem('user') == 'true'){
      router.push("/notAllowed")
    }
  }, [isAuthenticated])
  
  const [rendered, setRendered] = useState(true)
  const [order, setOrder] = useState(true);
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");

  const [loading, setLoading] = useState(false)

  const [getONG, { data }] = useLazyQuery(GET_ONG);

  if(user && rendered){
    getONG({
      variables: { email: user.email }
    })
    setRendered(false)
  };

  const Upload = (file, type) => {
    
    aws.config.update({
      "accessKeyId": process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
      "secretAccessKey": process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
      "region": 'sa-east-1'
    })
    
    aws.config.getCredentials((err) => {
      if (err) {
        console.log(err);
        return ""
      }
      else {
        new aws.S3.ManagedUpload({
          params: {
            Bucket: 'volun',
            Key: file.name,
            Body: file,
          },
          accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
          secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
          region: 'sa-east-1'
        }).promise().then(
          function(data) {
            if(type == 1)
              setFile1(data.Location);
            if(type == 2)
              setFile2(data.Location);
            if(type == 3)
              setFile3(data.Location);
          },
          function(err) {
            alert("Error: ", err.message);
            console.log(err)
          }
        );
      }
    });
  }
  
  const upload1 = (e) => {
    Upload(e.target.files[0], 1)
  }
  const upload2 = (e) => {
    Upload(e.target.files[0], 2)
  }
  const upload3 = (e) => {
    Upload(e.target.files[0], 3)
  }

  const clear = () => {
    setFile1("")
    setFile2("")
    setFile3("")
  }

  const setVisible = () => {
    console.log(document.getElementById("online").checked)
    if(document.getElementById("online").checked){
      document.getElementById("locality").style.visibility = "hidden";
    } else {
      document.getElementById("locality").style.visibility = "visible";
    }
  }

  const [error, setError] = useState(false)
  const [create] = useMutation(CREATE_PROJECT);

  const submit = () => {
    if(validate()){

      setLoading(true)

      let abilities = []

      var checkbox = document.getElementsByClassName("checkbox-input");
      if(checkbox.length > 1){
        for(var i = 0; i < checkbox.length; i++){
          if(checkbox[i].checked){
            abilities.push(checkbox[i].name)
          }
        }
      }
      create({variables: {
        project: {
          title: document.getElementById("title").value,
          description: document.getElementById("description").value,
          about: document.getElementById("about").value,
          workload: document.getElementById("workload").value,
          frequency: document.getElementById("frequency").value,
          online: document.getElementById("online").checked,
          organization: user.email,
          locality: document.getElementById("online").checked ? "" : document.getElementById("locality").value,
          abilities: abilities,
          cause: 1,
          photos: [
            file1,
            file2,
            file3
          ]
        }
      }}).then((result) => {
        console.log(result)

        setLoading(false)
        window.location.href = "/ong/profile/3"
      }).catch((error) => {
        console.log(error)
      })
    } else {
      setError(true)
    }
  }

  const validate = () => {
    let isValid = true

    if(noValue("title")){
      isValid = false
    }
    if(noValue("description")){
      isValid = false
    }
    if(noValue("about")){
      isValid = false
    }
    if(noValue("frequency")){
      isValid = false
    }
    if(noValue("workload")){
      isValid = false
    }
    if(!document.getElementById("online").checked){
      if(noValue("locality")){
        isValid = false
      }
    }
    if(file1 === "" || file2 === "" || file3 === ""){
      isValid = false
    }

    return isValid
  }

  const noValue = (id) => {
    if(document.getElementById(id).value !== ""){
      return false
    } else {
      return true
    }
  }

  return (
      (isAuthenticated && !loading) ?
      <div>
      {error &&
        <p className="error">&raquo; Algum campo não foi preenchido.<br></br>
          &raquo; São necessárias 3 fotos.</p>
      }
      <Button style={{float: 'right', marginRight: '10%', maxHeight: '3vw', marginBottom: '2%'}} onClick={submit} color="primary" variant="contained">
        Criar Projeto
      </Button>
      <Grid container sx={12} className='container-box'>
        <Grid item xs={5} className='box-section' style={{marginBottom: '5%'}}>
          <input type="text" id="title" className="title-input"></input>
          <h5>Descrição da Oportunidade</h5>
          <textarea className="description-input" id="description" maxLength="240"></textarea>
          <h5>Sobre o Trabalho</h5>
          <textarea className="description-input" id="about" maxLength="240"></textarea>
          <Grid container sx={12}>
            <Grid item xs={5} className='box-section2' style={{float: 'left'}}>
              <h3><img src={clock} alt='clock' style={{maxHeight: '2vw', marginRight: '2%', marginBottom: '-2%'}}/>Frequência</h3>
              <textarea type="text" id="frequency" className="details-input" maxLength="42"></textarea>
              <h3><img src={stars} alt='clock' style={{maxHeight: '2vw', marginRight: '2%', marginBottom: '-2%'}}/>Soft Skills</h3>
              <div>
                
                <label className="label-input" for="empatia">
                <input className="checkbox-input" type="checkbox" id="empatia" name="empatia" />Empatia</label>
                <br></br>
                <input className="checkbox-input" type="checkbox" id="flexibilidade" name="flexibilidade" />
                <label className="label-input" for="flexibilidade">Flexibilidade</label>
                <br></br>
                <input className="checkbox-input" type="checkbox" id="comunicacao" name="comunicacao" />
                <label className="label-input" for="comunicacao">Comunicação</label>
                <br></br>
                <input className="checkbox-input" type="checkbox" id="resiliencia" name="resiliencia" />
                <label className="label-input" for="resiliencia">Resiliência</label>
                <br></br>
                <input className="checkbox-input" type="checkbox" id="lideranca" name="lideranca" />
                <label className="label-input" for="lideranca">Liderança</label>
                <br></br>
                <input className="checkbox-input" type="checkbox" id="colaboracao" name="colaboracao" />
                <label className="label-input" for="colaboracao">Colaboração</label>
                <br></br>
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className='box-section2' style={{float: 'right'}}>
              <h3><img src={hourglass} alt='clock' style={{maxHeight: '2vw', marginRight: '2%', marginBottom: '-2%'}}/>Carga Horária</h3>
              <textarea type="text" id="workload" className="details-input"></textarea>
              <h3><img src={location} alt='clock' style={{maxHeight: '2vw', marginRight: '2%', marginBottom: '-2%'}}/>Local</h3>
              <input style={{marginTop: '8%', marginBottom: '8%'}} type="checkbox" id="online" name="online" onChange={setVisible}/>
              <label className="label-input" for="online">À distância</label>
              <textarea id="locality" type="text" className="details-input"></textarea>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5} style={{marginLeft: '3%', marginTop: '2%'}}>
          {(file1 !== "" || file2 !== "" || file3 !== "") &&
            <Button color="secondary" className="clear-files" onClick={clear}>Limpar fotos</Button>
          }
          <br></br>
          {file1 === "" ?
          <>
            <input type="file" id="file1" hidden onChange={(e) => upload1(e)}/>
            <label className="file-label" for="file1">Escolha uma imagem</label>
          </>
          :
            <img src={file1} alt='photo 1' className="photo-box4"/>
          }
          {file2 === "" ?
          <>
            {file1 !== "" &&
            <>
              <input type="file" id="file2" hidden onChange={(e) => upload2(e)}/>
              <label className="file-label" for="file2">Escolha uma imagem</label>
            </>
            }
          </>
          :
            <img src={file2} alt='photo 2' className="photo-box2"/>
          }
          {file3 === "" ?
          <>
            {file2 !== "" &&
            <>
              <input type="file" id="file3" hidden onChange={(e) => upload3(e)}/>
              <label className="file-label2" for="file3">Escolha uma imagem</label>
            </>
            }
          </>
          :
            <img src={file3} alt='photo 3' className="photo-box2"/>
          }
          <div style={{position: 'relative', top: '5%'}}>
          <img src={user.picture} alt='logo ONG' className="photo-box3"/>
          {data &&
          <p className="ong-description">{data.getONG.description}</p>
          } 
          </div>
        </Grid>
      </Grid>
      </div>
      :
      <Loading/>
  );
};

export default Details;