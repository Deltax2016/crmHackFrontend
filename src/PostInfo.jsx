import logo from './logo.svg';
import React from 'react';
import './App.css';
import { User } from './graph';
import {Background2} from './Background2.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import circle from './circle.png';

import mySvg from './mySvg.svg';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '70vw',
    height: '80vh',
    marginTop: '8vh',
    marginLeft: '15vw',
    position: 'absolute',

  },
  content: {
    textAlign: 'left'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '28px',
    color: "#000000",
    marginLeft: '5vw',
    marginTop: '2vh',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: '16px',
    color: "#505D8B",
    marginTop: '2vh',
    marginLeft: '6vw',
    fontStyle: 'normal',
  },
  pos2: {
    fontSize: '16px',
    color: "#505D8B",
    fontStyle: 'normal',
    marginTop: '16px'
  },
  bntText: {
    fontSize: '26px',
    fontStyle: 'normal',
    color: '#FFFFFF',
    backgroundImage: `url(${mySvg})`,
    width:285,
    height:62, 
    marginTop: 10,
    borderRadius:0,
  },
  btn: {
    zIndex: 6,
    position: 'absolute',
    bottom: '20px',
    right:'40px'

  },
  textArea: {
    background: '#EAE7E7',
    borderRadius: 2,
    borderWidth: 0,
    width:'50vw',
    height:'6vh',
    marginLeft: '6vw',
    marginTop: '2vh'
  },
  image: {
    zIndex: 6,
    position: 'absolute',
    top: '10px',
    right: '5px'
  },
  btn2: {
    zIndex: 6,
    position: 'absolute',
    bottom: '20px',
    left: '20px',

  },
});

function PostInfo(props) {
  const { text } = props;
  const classes = useStyles();

  function handleChange(page) {
    window.history.pushState(page, 'Title', `${page}`);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <div className="App" style={{backgroundColor: '#E5E5E5', height: '100vh'}}>
      <Background2 />
      <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div style={{marginBottom:'1vh'}}>
          <div style={{display:'flex'}}>
            <Typography className={classes.title}>
            <img src={circle} width='24px' height='24px' style={{marginRight: 20}} alt='circle'/>
              Сгенерированный текст
            </Typography>
          </div>
          <Typography className={classes.pos}>
            {text}
          </Typography>
        </div>
      </CardContent>
      <Button className={classes.btn} style={{width:'85px', height:'50'}} onClick={()=>handleChange('/social')}>
        <svg width="85" height="50" viewBox="0 0 105 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 20C2 10.0589 10.0589 2 20 2H103V50C103 59.9411 94.9411 68 85 68H2V20Z" stroke="#505D8B" stroke-width="4"/>
          <path d="M82.4142 36.4142C83.1953 35.6332 83.1953 34.3668 82.4142 33.5858L69.6863 20.8579C68.9052 20.0768 67.6389 20.0768 66.8579 20.8579C66.0768 21.6389 66.0768 22.9052 66.8579 23.6863L78.1716 35L66.8579 46.3137C66.0768 47.0948 66.0768 48.3611 66.8579 49.1421C67.6389 49.9232 68.9052 49.9232 69.6863 49.1421L82.4142 36.4142ZM24 37L81 37V33L24 33V37Z" fill="#505D8B"/>
        </svg>
      </Button>
      <Button className={classes.btn2} style={{width:'85px', height:'50'}} onClick={()=>handleChange('/post') }>
          <svg width="85" height="50" viewBox="0 0 105 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "scale(-1,1)"}}>
            <path d="M2 20C2 10.0589 10.0589 2 20 2H103V50C103 59.9411 94.9411 68 85 68H2V20Z" stroke="#505D8B" stroke-width="4"/>
            <path d="M82.4142 36.4142C83.1953 35.6332 83.1953 34.3668 82.4142 33.5858L69.6863 20.8579C68.9052 20.0768 67.6389 20.0768 66.8579 20.8579C66.0768 21.6389 66.0768 22.9052 66.8579 23.6863L78.1716 35L66.8579 46.3137C66.0768 47.0948 66.0768 48.3611 66.8579 49.1421C67.6389 49.9232 68.9052 49.9232 69.6863 49.1421L82.4142 36.4142ZM24 37L81 37V33L24 33V37Z" fill="#505D8B"/>
          </svg>
        </Button>
    </Card>
    </div>
  );
}

export default PostInfo;
