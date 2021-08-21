import logo from './logo.svg';
import './App.css';
import { User } from './graph';
import {Background} from './Background.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import mySvg from './mySvg.svg';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '70vw',
    height: '70vh',
    marginTop: '15vh',
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
    fontSize: '80px',
    color: "#000000",
    marginLeft: '5vw',
    marginTop: '2vh',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  naming: {
    fontSize: '32px',
    color: "#FF5757",
    marginLeft: '5vw',
    fontStyle: 'normal',
  },
  pos: {
    fontSize: '22px',
    color: "#636364",
    marginTop: '2vh',
    marginLeft: '5vw',
    fontStyle: 'normal',
    width: '60vw'
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
  }
});

function Main() {
  const classes = useStyles();
  return (
    <div className="App" style={{backgroundColor: '#E5E5E5', height: '100vh'}}>
      <Background />
      <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title}>
          Наш сервис
        </Typography>
        <Typography className={classes.naming}>
          Сервис
        </Typography>
        <Typography className={classes.pos}>
          Для удобства мы разнесли «главные тексты» по 4 условным категориям. Сразу хотим предупредить, что категории это не обособленные: частенько можно встретить работы, которые вбирают в себя признаки сразу нескольких типов.
        </Typography>
      </CardContent>
      <Button className={classes.bntText}>Авторизоваться</Button>
    </Card>
    </div>
  );
}

export default Main;
