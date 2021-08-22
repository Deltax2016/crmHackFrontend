import './App.css';
import {Background} from './Background.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AuthPic from './AuthPic.jsx';
import mySvg from './mySvg.svg';

function socialCircle(props) {

  const {type} = props;

  console.log(type);

  return(
    <div>
        { (type === 'vk') &&
          <image src={`url(vk.png)`} alt='vk' width="96" height="96" />
        }
        {
          type === 'fb' && 
          <image src={`url(vk.png)`} alt='vk' width="96" height="96"/>
        }
        {
          type === 'in' &&
          <image src={'./vk.png'} alt='vk' width="96" height="96"/>
        }
        {
          type === 'tw' && 
          <image src={'./vk.png'} alt='vk' width="96" height="96"/>
        }
    </div>
  );
}




const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '50vw',
    height: '70vh',
    marginTop: '20vh',
    marginLeft: '20vw',
    position: 'absolute',
  },
  content: {
    textAlign: 'left'
  },
  title: {
    fontSize: '28px',
    color: "#000000",
    marginLeft: '5vw',
    marginTop: '1vh',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: '20px',
    color: "#505D8B",
    marginTop: '2vh',
    marginLeft: '6vw',
    fontStyle: 'normal',
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
  textArea: {
    background: '#EAE7E7',
    borderRadius: 2,
    borderWidth: 0,
    width:'35vw',
    height:'6vh',
    marginLeft: '6vw',
    marginTop: '2vh'
  }
});

function Social() {
  const classes = useStyles();

  return (
    <div className="App" style={{backgroundColor: '#E5E5E5', height: '100vh'}}>
      
      <Background />
      <Card className={classes.root}>
      <AuthPic />
      <CardContent>
        <Typography className={classes.title}>
          Почти готово!
        </Typography>
        <Typography className={classes.pos}>
          Подключите свою социальную сеть
        </Typography>
        <div style={{marginTop:'20px'}}>
          <socialCircle type="vk" />
          <socialCircle type="fb" />
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

export default Social;
