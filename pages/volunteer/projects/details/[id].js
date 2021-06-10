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
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import Loading from '../../../../components/animation/loading'

const GET_DETAILS = gql`
  query getProjectDetails($id: Int){
    getProjectDetails(id: $id){
      id
      title
      description
      about
      Ability {
        description
      }
      Cause {
        description
      }
      workload
      online
      locality 
      frequency
      Photo {
        description
      }
      Organization {
        description
      }
    }
  }
`;
const FAVORITE = gql`
  mutation favorite($user: String, $project: Int){
    favorite(user: $user, project: $project){
      User {
        id
      }
      Project {
        id
      }
    }
  }
`;
const IS_FAVORITE = gql`
  query getIsFavorite($email: String, $id: Int){
    getIsFavorite(email: $email, id: $id){
      id
    }
  }
`;
const IS_ENROLLED = gql`
  query getIsEnrolled($email: String, $id: Int){
    getIsEnrolled(email: $email, id: $id){
      id
    }
  }
`;

const Details = () => {
  const { user, isAuthenticated } = useAuth0();

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

  const [getProject, { data }] = useLazyQuery(GET_DETAILS);
  const [getIsFavorite, { data: dataLiked }] = useLazyQuery(IS_FAVORITE);
  const [getIsEnrolled, { data: dataEnrolled }] = useLazyQuery(IS_ENROLLED);

  const [favorite] = useMutation(FAVORITE);

  useEffect(() =>{
    if(id){
      getProject(
        {
          variables: { id: parseInt(id) }
        },
      )
    }
  }, [id])

  useEffect(() =>{
    if(data && user){
      console.log(data)
      getIsFavorite(
        {
          variables: { email: user.email, id: parseInt(id) },
        },
      )
      getIsEnrolled(
        {
          variables: { email: user.email, id: parseInt(id) }
        },
      )
    }
  }, [data])

  useEffect(() =>{
    if(isLiked){
      document.getElementById("favorite").style.pointerEvents = "none"
      favorite({ variables: { user: user.email, project: parseInt(data.getProjectDetails.id)}})
    }
  }, [isLiked])

  return (
    data ?
      <div>
      <Grid container sx={12} className='container-box'>
        <Grid item xs={5} className='box-section'>
          <h2>{data.getProjectDetails.title}</h2>
          <h5>Descrição</h5>
          <p>{data.getProjectDetails.description}</p>
          <h5>Trabalho</h5>
          <p>{data.getProjectDetails.about}</p>
          <Grid container sx={12}>
            <Grid item xs={5} className='box-section2' style={{float: 'left'}}>
              <h3><img src={clock} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Frequência</h3>
              <p>{data.getProjectDetails.frequency}</p>
              <h3><img src={stars} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Soft Skills</h3>
              <p>Comunicação; Flexibilidade; Empatia</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className='box-section2' style={{float: 'right'}}>
              <h3><img src={hourglass} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Carga Horária</h3>
              <p>{data.getProjectDetails.workload}</p>
              <h3><img src={location} alt='clock' style={{marginRight: '2%', marginBottom: '-2%'}}/>Local</h3>
              {data.getProjectDetails.online ?
                <p>Remoto</p>
                :
                <p>{data.getProjectDetails.locality}</p>
              }
            </Grid>
          </Grid>
            {isAuthenticated ? (
            localStorage.getItem('user') == 'true' ?
            <span>
            {dataEnrolled ?
            dataEnrolled.getIsEnrolled == null ?
            <Grid item xs={4} className='box-section2' style={{float: 'left'}}>
              <Button style={{fontSize: '1vw', width: '100%', backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)', color: "#fff"}}>
                Inscrever!
              </Button>
            </Grid>
            :
            <></>
            :
            <></>
            }
            {dataLiked ?
            dataLiked.getIsFavorite == null ?
            (<Grid item xs={6} className='box-section2' id="favorite" style={{float: 'right'}}>
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
            </Grid>)
            :
            <h5 className='favorite'>Favoritado!</h5>
            :
            <></>
            }
            </span>
            :
            <></>)
            :
            <h3 className="not-logged-text">É necessário estar logado para se inscrever em um projeto</h3>
          }
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5} style={{marginLeft: '3%'}}>
          <img src={data.getProjectDetails.Photo[0].description} alt='photo 1' className="photo-box"/>
          <img src={data.getProjectDetails.Photo[1].description} alt='photo 2' className="photo-box2"/>
          <img src={data.getProjectDetails.Photo[2].description} alt='photo 3' className="photo-box2"/>
          <div style={{position: 'relative', top: '5%'}}>
          <img src={logoONG} alt='logo ONG' className="photo-box3"/>
          <p className="ong-description">{data.getProjectDetails.Organization.description}</p>
            </div>
        </Grid>
      </Grid>
      </div>
      :
      <Loading/>
  );
};

export default Details;