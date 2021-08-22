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
import user from './user.png'
import mySvg from './mySvg.svg';
import carding from './Card.png';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '85vw',
    height: '85vh',
    marginTop: '8vh',
    marginLeft: '6vw',
    position: 'absolute',
    display: 'flex',
  },
  content: {
    textAlign: 'left',
    marginTop: '130px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '32px',
    color: "#000000",
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: '16px',
    color: "#505D8B",
    marginTop: '2vh',
    marginLeft: '3vw',
    marginBottom: '1vh',
    fontStyle: 'normal',
  },
  pos2: {
    fontSize: '24px',
    color: "#505D8B",
    fontStyle: 'bold',
    marginTop: '4px',
    marginLeft: '3vw',
  },
  bntText: {
    fontSize: '18px',
    fontStyle: 'normal',
    color: '#FFFFFF',
    backgroundImage: `url(${mySvg})`,
    backgroundSize:'cover',
    marginLeft: '32px',
    width:200,
    height:48, 
    marginTop: 10,
    borderRadius:0,
  },
  btn: {
    zIndex: 6,
    position: 'absolute',
    bottom: '20px',
    marginLeft: '60vw'

  },
  image: {
    zIndex: 6,
    position: 'absolute',
    top: '10px',
    right: '5px'
  },
  card: {
    display: 'flex',
    marginTop: '3vh',
    width: '615px',
    height: '104px',
    alignItems: 'center',
    backgroundImage: `url(${carding})`,
    filter: 'drop-shadow(0px 6px 10px rgba(131, 131, 131, 0.25))',
  }
});

function Account() {

  const classes = useStyles();

  return (
    <div className="App" style={{backgroundColor: '#E5E5E5', height: '100vh'}}>
      <Background2 />
      <Card className={classes.root}>
          <div style={{width:'30vw',height:'100%',backgroundColor:'#F1F0F0',position:'absolute', zIndex:0,}}>
            <svg width="82" height="59" viewBox="0 0 102 79" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute',top:75, zIndex:9, left:32}}>
              <rect width="82" height="59" fill="#FFCA42" />
            </svg>
            <img src={user} alt='user' width='89' height='104' style={{position: 'absolute',top:0, zIndex:10, left:35}} />
        <div style={{marginTop:'130px'}}>
          <div style={{display:'flex'}}>
            <Typography className={classes.pos}>
              <img src={circle} width='24px' height='24px' style={{marginRight: 20}} alt='circle'/>
              Иванов Иван Иванович
            </Typography>
          </div>
          <div style={{display:'flex'}}>
            <Typography className={classes.pos}>
              <img src={circle} width='24px' height='24px' style={{marginRight: 20}} alt='circle'/>
              Возраст
            </Typography>
          </div>
          <div style={{display:'flex'}}>
            <Typography className={classes.pos}>
              <img src={circle} width='24px' height='24px' style={{marginRight: 20}} alt='circle'/>
              Количество активных постов: 2
            </Typography>
          </div>
        </div>
        <svg width="320" height="3" viewBox="0 0 320 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="3" fill="#FFCA42"/>
        </svg>
          <div style={{display:'flex', flexDirection:'column'}}>
            <Button className={classes.bntText}>Мои Визитки</Button>
            <Button className={classes.bntText}>Мои Медиапланы</Button>
            <Button className={classes.bntText}>Мои Лендинги</Button>
          </div>
        </div>
      <CardContent className={classes.content} style={{marginLeft:'32vw', marginTop:'5vh'}}>
        <Typography className={classes.title}>
          Личный кабинет
        </Typography>
        <div className={classes.card}>
          <div style={{marginLeft:'3vw'}}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="10.5" stroke="#505D8B" stroke-width="9"/>
            </svg>
          </div>
          <div>
            <Typography className={classes.pos2}>
              Генерация Визиток
            </Typography>
            <Typography className={classes.pos}>
              импортировать готовый продукт можно через БД
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

export default Account;
