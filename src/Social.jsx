import './App.css';
import {Background} from './Background.jsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AuthPic from './AuthPic.jsx';
import mySvg from './mySvg.svg';
import vk from './vk.png';
import fb from './fb.png';
import tw from './tw.png';
import linked from './in.png'; 

function SocialCircle(props) {

  const { type, link } = props;

  console.log(type);

  function handleChange(page) {
    console.log();
    window.history.pushState(page, 'Title', `${page}`);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return(
    <div style={{marginRight:'15px', marginLeft:'15px'}}>
        { (type === 'vk') &&
        <a href={link}>
          <img src={vk} alt='vk' width="60px" height="60px" />
        </a>
        }
        {
          type === 'fb' && 
          <img src={fb} alt='fb' width="60px" height="60px" onClick={()=>handleChange('/account')}/>
        }
        {
          type === 'in' &&
          <img src={linked} alt='in' width="60px" height="60px"/>
        }
        {
          type === 'tw' && 
          <img src={tw} alt='tw' width="60px" height="60px"/>
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
    marginTop: '1vh',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: '20px',
    color: "#505D8B",
    marginTop: '2vh',
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
  const [link, setLink] = React.useState('/');

  React.useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://da32-178-154-224-187.ngrok.io/vk_outh/')
        .then(response => response.json())
        .then(data => {console.log(data); setLink(data.url);})
    }, []);

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
        <div style={{marginTop:'40px', display: 'flex',justifyContent:'center', alignItems:'center'}}>
          <SocialCircle type="vk" link={link}/>
          <SocialCircle type="fb" />
          <SocialCircle type="in" />
          <SocialCircle type="tw" />
        </div>
        <svg style={{marginTop: '40px'}} width="246" height="28" viewBox="0 0 246 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="246" height="28" fill="url(#pattern0)" fill-opacity="0.15"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0" transform="translate(0 -1.15909) scale(0.00104167 0.00582386)"/>
          </pattern>
            <image id="image0" width="960" height="480" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAHgCAYAAABq5QSEAAAgAElEQVR4Ae3dB7R70UIW+O2MdGFQFFQQlI4FFVREFwqILBkFaWMBQRGsiCNtpFmxjMgsBwdxUEFRrIg4dpdYRhSwgCAoTYrSQaUIUhx11vfe/t7bLy/JTXJz701ufmet//8kubkn5/z2t1tucs4YFgIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAFQn8gDGGfwxkQAZkQAZkQAZkQAZkQAZkQAaeKgNXNIW2qwQIECBAgAABAgQIECBA4MIFMrv/QWOMV/GPgQzIgAzIgAzIgAzIgAzIgAzIwBNkIHPSzE0fbOnGX3GM8RVjjO8YY3z7XOe2fwxkQAZkQAZkQAZkQAZkQAZkQAYeMgOdg2ZOmrlpls5V593zrLrRVxpjfOsY47/7x0AGZEAGZEAGZEAGZEAGZEAGZOAJMpA5aeamWTpXnXfPs+pG8yLfMMb4b2OM/zrXue0fAxmQARmQARmQARmQARmQARmQgYfMQOegmZM+2gT4G+cMPwfmL8EMZEAGZEAGZEAGZEAGZEAGZEAGHiMDnYNmTmoCbELuDQkZkAEZkAEZkAEZkAEZkAEZeLYZMAEW7mcb7sd4B8lreKdSBmRABmRABmRABmRABq4nAybAJsAmwDIgAzIgAzIgAzIgAzIgAzJwExkwARb0mwi6d+Wu5105ZaWsZEAGZEAGZEAGZEAGHioDTzIB/toxxn8ZY3z/XOe2fwxkQAZkQAZkQAZkQAZkQAZkQAYeMgOdg2ZO+ignwfpBY4zv9VdXf3WVARmQARmQARmQARmQARmQARl4ogxkTpq5aZZesnfePc+qG32ZMcYHjDE+cozxYWOMD/ePgQzIgAzIgAzIgAzIgAzIgAzIwCNkIHPQzEUzJ83cNEvnqvOuFQECBAgQIECAAAECBAgQIHCSwA+cs+3MuP1jIAMyIAMyIAMyIAMyIAMyIAMy8JgZyJzUQoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgcNMCP2CMkX//w/z3P44xfuDy72XGGPmXx7ruz/Pc/F63cdOQDv7qBJrbrJPlNftr1tfbyb7cX11R2+FFoLlP271mfrONl/sFzc2rFzgl9+0X+rtZWwhck0Czu6+9T1u/q703xr+m0ravOwVSERLmTmDP3Zh32+k0zr3tnQflBwQOFFjzn4yea2nu21Gca7u2Q+AcAmvuk9FzLXJ/LknbeQiBh8p93zTS3j9EqdnmfQWS+zWj993e+vvZducP8r/KuH1xAmtFyO1tS8L8ymOMHz3GeIsxxjuNMd53jPEbxxgfMsb4qDHGR48xfvcY4yPHGL9pjPGrxhi/bIzxDmOMNxpj/KA5sd7cfivLOQddm6/hPoF9Andl8BXGGD9qjPHWY4xfMsb4lTP7Hz7G+F1L7v/XMcb7jTHec4zx9mOM1x9jvNKON3r6mrvq3L799TMC5xBoBne1va842/yfM8Z4j5ntZPwjZu6T/dxu7vOcPDf9RH5325LXSn8i99t0PPYYAs39tgzmsbTZabvThqctT5uejGdskzFOcp+2P+Of9AXpE9I3pI9IX7FtkfttKh57TIF9GczPMkbPWD1j9ozdM4bPWL65zxg/Y/2M+ZP9zAEyF8icIG1+5ghp27ctrXP+8LVNx2OPKtAwJvSbSyrBTxtjvM9s7D9tjPEvxxj/cYzxPWOM/zbG+O9H/vu+Mca3jDH+2Rjjz4wxPnSM8VZjjFfZePHuV9YWAg8pkIylMd6sAy8/xnjTMcavGWP8kTHGPxxjfO0Y4z8fmfnUke8dY3zTGONzxxh/cnYm6SxSx9ZF7lcNtx9SYFfuM3B/szHG+48xPnmM8Y/HGF8/2/xj2/v0E/ndbCPbyjaz7c3JQeqeAdFDlrZtV2BXG5u2OG1yBvppo9NWp81O231s7tNHpK9In5G+I31I+pL0Kesi96uG2w8psCv3GXtnDJ6xeMbkGZtnjJ6x+rG5z5wgbX7mCJkrZM6QN4oyh8hcYnO8k+NNHfBG6EOWvG2/hMCuivA/jTF+7nxn5y/Pgct/vaMSJPD/3/z3X8YY37/8y/38y8+znX0T5m8eY/zV2fm83kvs7fbJycZT3CVwtEDrwfqLP2T+hetTxhhfNfO7qxNIprdlfzP3u34/9SGTg0+fA6TXWnfEhGBDw91zCWzL/WvMQcqfG2P825nrXbndl/vWh339Rp6T18hrZWCU114Xg6FVw+1zCST3eZNlXdLmZnKaNjht8b4xSnPf9r1jnY5xOs7ZVW/yvPQp6VvyCYn0Nesi96uG2+cS6Jss6/Yyxs4bPRlzZ+y9K7OpD7tyn/yv2d9Xd7L9bCd1LHOL/PU4c43MOdalfVPWFgJnFdhWEfJRnQxCPnWM8Y07KkKC26DndoLef7sqzq7H+3trpdp8bt49/RuzY/phi0D2P/8sBO4jsDkQysDjXcYYf2JHZ5CBTfJ/n+yvuW9d2sz9d44xPmOM8Ss2OgZ/GbtPafvdCmzmPh9Nzkc2/+x8x34zj/fNfTOf9dqHbL5O/lqQfci+rB+XlvuWnPV9BDZzn0F32ti0tWlzN/O4Lfebz9l3/9DcZ+KRPid9T/qgLnJfCev7CGyOlzOWzps9GVtv+xRbxyXrOGdfzrf9bDP7a13a9vzMOTL3yBwkc5F1ST0w3l9F3D5JYLNB/cFjjPcaY/w/Y4zv2tIBtCI0zNuCe87H+jqpLPm3bjsV5GPGGG+4HPnm8Sw/cpPAXoF1oPGqY4xfP8b4go3MdbDejmDN4zlv78v914wxftsY47WXo5H7BcPNgwU2JwD5i2u+u/WlW3Kf9re5PGfW1211+3mt1LH1Z9mn7Nv6V2G5P7ioPXER2Mx92tK0qWlb18x13NFcrj875+1sf+1b1m2nD0pflD6py9pX9TFrAncJbOY+Y+eMoTf/wPVYuW/OW7/yuplj9PGuMxfJnCRzk8xRumweTx+3JrBTYFto8jn/T9xSEdIoJ5QJaMP4lOvsRytn9yPvWP3xMcabLEecgZGFwCECa1byF4CcsCcfw2y+krk0yk9ZB7bl/tvGGP/XPLFEj3M9lj5mTWCbwJqVTCp/z/xeY3N/CW1/c79OhvPdy+zr5kR42zF6jMCmwJr7nJQnbWja0ua+44unbu83+5z0Semb1o+GrseyeZzuE1gF1qxkrJwx8/rX3kvIfetg1tva/jyeyXrmKpmzrEuOL3MbC4GtAtsmvj9vjPHXlsY/AbuEgc9aEXbdTgVZ3y3KR5Zy5sVXm0e/+TGPrSgevGmBtVN47zHGly11IR3COvDelcPHfnwz9zkpxYctJ5FI7nUENx3rvQe/9gO5XmNOPvXvriD37Zda37LP2fccQxYDoAlhtVUgue/HJnPCnbSZaTubp80JZx9/6vVm7tNHpa/qsvZhfcyaQAXWcXDGxhkjrx/vv9Tcr/Vu12Q4c5fMYdZFP7BquP0CgbWRTIV41zHG31sa/4TtGirCWil6e3NC8JXz9Owt+vXY+5j1bQusk8S3nGfkbJ4y8U2mev9S15u5/1djjF+4FKvcLxhuvkBgzcTbzbN6Nt/XlPvsa/c7ZybNsXRZj7GPWd+2wJqJtJFpK5ufaxn3dBLQ/c5ZpNN3ZVkn9/MhKwIvcWK3XLIoY+Pm51py3/3tenPck8czl8mcpm9wpejXOi8KNyqwDvRfdk4Mcwr/NUzrYKKPn2OdoB7671yvtx7LX1i+PJ/K4K9iN1oJNg67DWPWv2U5pX+yc66/+D5l7v/oGOOHzmPusW4QuHuDAs1C/vr1sUsfkNwnr+dqgw/J/rlea23vc0y9lEaP9QaL2SFvCDQLaRPTNjZ715r79S/CuRxN+rAeY9cbBO7emMD6KZ+cQCpj4afM/bn6lx5D15t1OHObTPQz18nijaEJcWurtQLk2N99jPGFSyVYG9GG6dR1wt3t5V2l/Dt2IpFtrL97nwqT1+7r52NyOfYsKsOEuNHVWid+4hjjs5b6sA6kj60Hzf+a30O3kZyuv3eu3Odjcm8/yzmDohy75TYF1tz/jDHG58/cN7eHZnXzef39Nb+bz9l1/9y5b73JseUYs8j9hLjR1Zr7tIX9ess6PtiVz32PX0ru1z4rfVn6tCxyPyFudLX+0Stj33695dy5b5u7r66sP1vb/GQ394/dxrq99Xa318cy1+m4X524sYqwvguYC6znel4Nxn0rQbazdgDZXre9bZ3rgeUMbvnOwb8fY3zdvAh8Lm/xn+aX8NeGfN1GXieDq1MrSX632/u9yyRg9bmxaNzs4WYw1ElgLqmS/CUbyd4p+crv5Hd3ZTfbzkXfk/3vmCcXyskbvn0+lpNP7Ko7efxcuc/33LqsHw/qY9bPW2At81zmIpls7ts2HrNum7wru/n5Zu5z0qrUgdSF/GxXfbtv7lsX8xo51i6rQR+zft4Ca5mnDWzG1zFBHztkfVfuk9206cl42vi09Zu53/U67Ud21Ytdv5fH8zvNffq09G1Z1v5uPmR1AwId26b8M+Ztdu6b+13ZTPaS+4zlk7+vnWP8jPUz5k99yByg+7Ft3XY/612vs+33tj2WbeRff5a5T+ZAXerT+9bPSCCNfhv+Vx5j/I4ZwIRhMxgNyKHrBDOVaA1XfzcDjlw+4G+PMT5ujPGBsyF+m3lm5pytM2cuzMfTci3HVxhjZP/yhfx8POMnz3drPnSM8Qnze2nfvYQ4r9OG/tgKkv1tB5EvzP/wWd4qwjMK/h2H0jqRp/3uJVfNRXN8yHrNU5+fj6F9+RjjT82Po+VU/fkr1I+ZZ6pN9l9pZv9Vxhi55l4uu/FTxxi/aIzxm8cYf2SM8S+WCUq33dc7Jff9nT+9nDlU7u8IyzP6cXP/cmOMP3TP3KeubLb93zvG+OIxxifNs9O+xxjjLeZZyV99jJGsJ/f5l9t5LGfdzXPy3JzRNr+bbWRbzXzWzf362CG31zqdY86xZ6nFvGv1jAXaxqXdTduX3KQt3MzvXXnK72zLfcY7aavTZqftThuetjxtetr2ZD3jnOQ++5DxT/qC9AnpG/KR5fQV6TPSd6z7se311p/vur3mPn1cF7mvxPNfN/cZ4/bEtqfkqbnv+KGZy5g851vIGD1j9fyFNWP3jOEzls+YPmP7ZD9j/WY/Z5zOXCBvzmRukDlC5gqZM6Qudftdp57e5w8A2U620fqeSXjmQtm/LKkT6sXEeC6rhj/Hk5M8fNESrLVxbMgOWbciNEj9nbyzk4/c5DtXv3iM8boz+OeyTDhTqVLBUtn6EY6+/imVowZfMsZ4o7mjq9m59t12LkugDd3LL9+DSRY2G/dma9d683fyLv+njTHed4zxxstA+z5Hn2s7ZoLwS+fEIH9BWPfn2NznGPM72UY6rtecOyf39yml6/jdlnGumfh3ZgY2M7xma9fttpv9ed7Z/9R5FtrXX87AfB+VnMU528qZbbPtvEZfL+vNfVh/tu12+638LMfe60bW5D776ncvW6BlnLYubV4ycJ92s/lKW5w3a9I2p40+x3V48+ZM+o70IelL0qf09dYM97G71uvv5Duf6fOytA+cd62eoUBzn7FtxrjJyintZscLzVrG3hmDZyyeMfk5s5TJcuYOmUNkLpE5xXp26uxD5h6n9Fvd/9UgcyInCX1m4c9HHRr+hOkvLY3oqcFZG9IGKR/pybuWv2IZSG+jzL6kc8g6/1Jh+nGcXes8Z/29ze3m3aQEN436WkHXcHc/9637u7me3o+fL3KOjmxzf92/DIE21snPX18GQ/sysvmzNMCpD308jfT7jTF+5JZDzOslT/mX2/m3K/N5PD/fl/sM3NM5/JXl3czsx6m5z5lP85eILHldy/MUaNnmr1GffWLuNzOWiWQmqNnm5tIMH5L71ovWk+7rus28Rl6rE/fWvc196uO71m3vY9D93vZ662u7fb0CLdu0cT3LczOwKyObj68ZS9uftjdtcN9EWXWa+6wPaevznOY+tzeX9CnpW9LHdL/S92z+AaI/27XuMafPS9+XZdvrzR9ZXblAMpUlY9qMbZOLZmBXRjYfX3Of381YO2Pu5me+xAtWx+R+Heesv7dub72dN64yx8hcI3OOdT+zj+tYbP3Zvtub85nMkTJXypJ9yj5arlBgbdTeZX72PkFIg3lso9nfWytCPvLwF2cHkI8zbC6peGvjv/nzU+930pBt59+6/KQxxh9eLuB9bAfR4/uGMcabzw23AVlfx+3rFmhuXqkT3RAAACAASURBVHWM8ZkndAqbucpA6B02GsvkNNlJPTxHI7ov9z99jPEnl3p9bB1v7vOxuzeYRVuj6y5pe78KtEwzmP7nZ8h9BkJvvb7AzPu5c5861G2uL5fXzj50gJPcHzMI6kAwFn3Tqkbr67h93QIt07RtaeOSl7Z5zc6+9dqe5nba2rS565LXyL+20+vPTrmd7TT3a/+R2+lr0ud0n0/Nffq+9IFZajTvWj0DgY5dM5bNmPaU3Lc9zXd5M7bOGHtdzp37brv5z/Z7HP1Z1plz5M2nzEHWr0SmXqc+tG4cul7reM5FlDlTl3Uu1cesL1igjVk+RrNe0qId/qGhyPPWYOR+Ppv/Ucu7JGVYG+u1we7PH2qd18rxriH9CRsDo2M6uz73W5Yzhm6rgA91PLb7sAKtG7nsRd9NP6ZeNB+pC58zxvifN3Y3WXmM/Df362vl+5P9fk/2b93X3N/3r8/96jHGj5vHJPcbhXvFd5v711m+AnNq7v/u/N5WOZLBx8z95mvlO2TZp+a7We79fesa5CNwsclSq3nX6ooF2oalTUvbliwck4/1uWlb08Z22dYG92fnXreOrdtN35M+qPle97WP7Vo39+kDXRZvVX0et5v7fLc8Y9n75D5vMmZM3SVj7bSR69ijP3uodV6rdWAd6+f18qmOzEkyN2neN+ctffyudetFnpe5U88ToU94qJI943YTkBZUPvLwj2cgTgnD5u/kY0MfsLxjmN3u62V9CUsrZvfl7cYYX3CCQTuSnLnubefG6tptW1+fQBvOnAjin85crA3eXY3jmov3X950aT14KpEcV48t+5CPJ33Fkvu+i3vo8eUd0JzAIovcT4grXrUM813aL525aJbvysT6aYevnyfqKcVm7vr4Y603Xz8nEco+5pjSfx2b+9jEKEvN5l2rKxRoGaYtS5uWXJyS+7Sl6/cDN3P32DQ5ro65si/pi9YrF9xVp/vz9n3pC3sC0GzPct0CzX3GrsfmYh33Z+ycMXSXbPdS8tExV+tB9jGfZsgcpV9xaD+QY2rmD1mvBplD9SuRa72rifWFCKzBzOfkjw1+g5FBw9pJpHH85ctJE3K4eXdpfb0LIXjRbmTfun85u9v/uVSA9dh6zNvWfV6+eN9GoO+qveiF3LgagebhRyxvinQAsK3818fWBjEfG+tfSNsIXwrCmvucXfRTltwf2gk09zmxy0+ZB9YO9VKO034cLtCyy8c/v/LIScCamb+8fEf80nK/Dkzy14Dsa+vvegx9bNu6uY+RrwEcnq9LfWZznzasJwxsGW8r//WxNTNpQ9OWZlnb1/nQk67W3KdP6td5sv/rMazHtnm7fWAmO+kbs7SvnHetrkigY9SMWXvSqENzvz4vY+ZrOTNy8trjTlHlBG+Zs/SPHMl8ju3QN0RbR+qRuVTmVF3Uj0pcyLqNfU4x/seWzr8F2AK9a70+//PHGO+20RgmZOs7Lhdy+Dt3oy55wjsuX5xfj3OfSTuRb1u++7Buc+cL+8FFCSSz+ZdLT/RTEe3495V/frZm5SOXo1ob3OXhi7i5ZvSXLWcQXY9l33H3efmrSc5qmmXd5nzI6sIF2lHnI47/evYLx+Y+lyDKX5i6XHIO1n3LPvfySc3zvsznZ7WJVT8WWsMev/XlCzQHabuO/ctvs5KzLqft7NJt9v4lrde+KH1Uc95j6f1d6+Y+fWP6yPaXl3SM9uVugWY039PNmDXl3THsrrLv481KTi6VsXKXbrP3L3md3K51IW135jCZy2weZ+/fta5Lnpe5VeZYWa7JZe7y81y1IHIa8n84CzqFdsy7HakkfX4a/jSiOQ15l2ub+Ha/s06lqFFOA993hdZg76sEfV7+MtATpRgUrcKXfXst/z8/60c7/H3lnp+17L95jPFO8zBT9tdQ/utx5yOAvfRZj+nQY0/nkRNOZHvXcNyXncbH27uW18suZ0w+NvdfNcZ4q7nLaUOvofyzj23vs+85hrUu35X7GuUs0/n+V7YXS8t1CLS80mZ14Htsm5e2cv0KyDWUf447/7Kkr0qfdUru00dmSR26huOeu3vzq5Z9xqjHftKn9SNj4/UyoNda/tnvdSKcuUzmNL2UWOY6h74xkDqU59coc6zMtbK0n5l3rR5boIWcs7z1O3/twO/q6PvzFmzu5xTgP3Y5iGue+C6H8YKbDWtO3f4ZJ06E/tF8h7Sd7OZruH95Ai33jzmxzNOZ9CPP3dblHeXuPWobkb9o/YMjDdqW5IyjOfb8u9ZOcbfQ8/tJyqhZ/eQTyzwfibzmk0L1+HMMPQ9E89y+b9e6z4tdFrmfEBe+au5TXj1LcstyV1n38T7v7y9//W/beeGH/RK719ynzzp2IlSD9JVZuq151+pCBZL7jEnz1/uMUZPpdVzfjG9bt8wzJu5ljZ5LucdlrcOZ22xeCnabya7HapW5lqvEPGFlaEOfXXjn5eMOLaBdBbg+nndA+i7ItotA5zWe29KKnb+KHPvXwNr+uYmSbT1Ho+dU5i3vX790Cv2kw1oXNm+388hJcV5vgqwN6bUZ1eFVxhh/+8QJ0cfL/dUUe7P6204s6/wloCfF6bau5uCXHe2+n3LSu7b3MczSbc27VhcmsI6J0lalTW8Zbrbvm/f7vLSN/d5j28wLO8yDdqdZTd91zEnv1r90pc/Mcs0O8xCe9WrNfcamp+Q+Y+GMibM8x/JejXKMOaFdPxG3zoM224Vt99tW5CPmmXtliZm5wMR46FWgi/2By0eXO2jfVmibj7UQ8/jvXxr9vIvUj1I89HE81fZ7fAltrucXg9Vj02q93+f9vrnzz7GxeKpyOffrtmx+wXw3NPXjkMlvyzgN5Gs/o3Ju7vMdlmP+OrIOij5kenSAde4ys737C7RschKQtF3H5v65XRal7UA+AXHMZc/W3McyS23nXasLEmjZpI06JfdpE/v9vraVF3R4R+9Kc58+rIP99m3rmGbzdnOfdiN9Z5Zua961uiCBlk3GpCnLQ8p4fV7GwN3Gc8j9vqLJ8fUY80ZX5j7N/6FueX7nWqkrmYNlWedl8yGrcwu08IL9cbPwUgj9S24Lc9e6jVt+/u+W7zVmP1sJzr3Pl7i9OPZNhJ40rKHeZZfHV79fOw/sltwusSy37VPrSU8GcWgdaQY+b/m+93Mq37rku425gHwy3WM+NPfvLvfbIncRjzWrbz3G+J7ZLyT7+8o2P2vnn2vp5lISWbqtefeqVz2WHFuvF9xj3mfTdiOWMc3Sbc27Vhcg0DJJ25TyTJt2SO7b9qUt7PU+20ZewGHdexfqku+Fpk+rzb7M52cZT8ZvPfnnc3K5N+yFbKDlm7Foy/aY3GfsmyVj4Vsq37rl2PN9+cyFjvFb60huZy7W+cQtOb4wPY/0f2FfZozxqbPA0okfEvjNAvsbG2d3beE90qFcxMvEs8f9CUsFiNW+f/FOx/l9Y4xcZDzLWqHmQ1ZPJJByzb+cBKVnvu1AZ1+59jmfO8Z49bnvz7Fc247kLyZ/emlH9tnkZx0U5UQSbzJ9uq0nKmovuwi0LDLYXa+Fe1e5Nvd/c/kk0HPMfY8p7/znWOPSY99n1DeXY+okiEvgLuRmc582KW1T+ueW2b5y7RsgaQP71+Nu60IO7Sy70dynT0vfdmjuWzfSh6Yvjc1z9DkL8hNspOWaMWjGoimvQ+YCLdeMebPc2uR3HvYLjruGOVt85kSpG4e2H31u25HMyTI3y6KeTIhzrQqas5n1S9yF39fI92cNfdYfsexUG/7loZu6uVb+P3XkZCC2/2aM8Wo33IhcWlhSns10J3fNfuvCtnWf8yVjjB82D6qN46Ud4zn2J+1JrHKMf+2I3Nfpn8+PC3Y759gn2zhdoGWZ8uh3vFtW2/Lex/qcz15OgNK+5vS9udzf7LHlZC855jjUoCbb1n1ObLON1JuYW55WIGWQ8shHl9MmHVqeHTul7WtZNhtPe0QP8+rty9K3pY871Km5T1+aJX2r3E+MJ1wlqymHjD0zBk15HvOmT8a6WbqdefcmVx0v5uAzN2rmu97WH2w+1vYkc7NePec5tyePGpQ2Xus71wXfLIht9/vcVJR+jCuFo4BeWIztRBPcnAEyhoeEv8/59JkGncOjVoutL9bGLNcAbTne9a5oO45vWf6y2Tq39UWeyYPt/PKx0H+xeG1rQ9bH2p784enQAeQzYbnKw2hef8csx5bRWm6bt9t+ffUY4zXnUd9Cn9BjzDHn2ONSi02j9X5NY5yl5vOu1SMLpN9uGaQtSlm1jNZy27zdsk6bl7av/f8j7/6jv1yt8pfy9HVxad+3adT76Tvr1WuBt4999APwgi8QSF5bBhl7pqxaRi23bes+J2PcjHXb/2N9oUX7hcyR+qbCIe1Jrfvc5/5JqkfNSxutvNNz7CVMUjAtFNeu2l9sDf9rjDG+7IhGpb4fPDffhmn/q/npQwi0rrzFEd9/7MddvneM8XNusAxr9mOO+NhszJr795pm3c5DlKtt7heo/TvMj29loHPImz55Tj4yul7vdP8rPZ+f1izHfujHZuNV21hn6XbmXatHFKh92qCOdQ7JfZ6bj7OnzcvS7cy7z3rV8Un6uvR5mQDfZZaf53n5Hnz61iy3ZDYP+WJWLcOMOZv7rPf96+Q3Y9uMcbN0zDvvWi25znV+M2c61Lf2HRdlrpY5WxZ1ZUIcu2pAf8QY458cWRhttFIwOctb/yyvMHaXQm1y/bxvnd6HdA5pXPIdjLeam+52dr+Sn5xbIO+K5t8PXt7AOObd7feZO9TO5dz7d8nba15/5hjju44cFH3HGOPHz4Nre3XJx/rc9q3m6bC/cbZZh+Y+7dY7TpBbzH2POQaxyL+72vvaxjrmWVoG867VIwjUPG1P2qCUy11l1zFR2ri0dVna9s27N7Fq7tPnZXx4TO4zgUof2/72JsAu6CCb14w1D/3eb+tFxrQZ22bpduZdq0WgNpkz9Soxh7Qvm5PgzNkyd8vS9mretbpLoGA56cYXHjn5bSedAunHtRTCXeIv/Hk7h5873yE9pnP4qvn90XQOLb/DXtWz7iMQ7zZavbZzyq0N0q51n9M60rK/z75c6+/22H/xCYOifJTwlWbmUxaWxxFo7lN2PbNxM70r8xkM9Tk+0vjijxIe85WJ+sU89ml75P5xMp9XiXX617Q5/erGOubZlv0192njsrTNm3dvatVj71cmmultdn2sz0kfm0XuJ8QjrZL5ZD/f485YM+VyaO7z1/6MabO07Oddqy0C6/i9deQQ79aV/iU4czcnTtwCvO+h4uesfW3gC1rgXetWiHxc5VfMF9FQ7dN+6Z/1TG7HnFq+nUO+BJ+F+YR4hFUb9HUQu6t+9PGWl878xQVUx9+6TILrtWvddmn9PvCLt+jWQwqkjcnSDrplsaus8nif8/Hzd1Pmtzx5y7E39zFZjQ5x7JtnLYvJavWAArU+5Xu/aduytMzn3ZtbJfd1POVNY2+ePW5k1vLqSXA7htnVTq1v+vy6ubsd2z7u3l/nq63mmUtlThXrzrF2uffx9rWZw/WqIp3bXafII+x1gfL58WM/9twK8U3Lya5ufYBzSpGtg6I/ccRkoP5tbNrBnLIPfucwgdaXNz3i47ttwL50+ThXt3PYqz7PZ7XBz7pnhm6m26hvrtdO9t0mi9w/fD6a1589J7Upp5TFZvms91uWnzPGeHl/sX9RISXv8YxJbGJWq9Vvvd3cZ5CTMsjSMpl3rR5AoG1L2pqW06G5T5u2tnEPsHtXtcnkNR75SHP6wni2b1yzvt6OdZ6Tj5Gnz80i9xPiAVfNfcaWzf1aLttutw3LGDaLucCEOGKV+tE3y3JyrMytDvXP8zoJzlyu3wlWX3YUQGFyzbVjv4DdsOeCzj9xbr8Ft+PlPLxHIGWRfznz9r88snP4T74XuUf2fD9aB66HXgKjHfh/HmP8tLkr7VzOt2fXu6W2QTlRRi8Of9egKD+P6zePMV5rHnq3c70Sl7vnyX3+5Qy2X3Fg29Qy+g9jjDdQRi9VuM1rbGLUdmLbwLKPtV6kDHo24ZSL5WEEWkZpY9LWHFNGacuc/Oely6V9X/rC9IltJ5rxbeuONdPneiPtpU3P/Uhzn++7Z2x5SBm1bcrYNWPYbKPbOff+3cL2OpfK3KrjotaDbXVkfayT4MzpMrfLoiwmRFcFyfUJP3MOagq3Ym673YJIR/zGc4MtsG7f+niBlklCf2jD07LIOz4v56PQx6Mf8RvN+MceWF8yYGr59K/03cYRL/vsn9pB0duMMb7/wJOk1DUXk88kINswGXiYqLR8PmXmvvbb+oY8lty3L3n3uUvdxsPs4XVutSYxilvMYrfLNY/XPmWRpduYd63OJLC2KWljVvtd5dP2Pm1Y2rIsymdCLKv2getfF+/KfduT9L1Zuo151+pMAs19xpL9RGjbnH25zwQ4Y9b+Maxj2TPt1k1uphnPHKtvPN9VFi2j1pfM7TLHy6JMJkRCnn8561iuIRW0ghVw17rP++IbPa3/JHywVTvMfAcgZZDA39U5tFL873Ovuo0H28kb3HBNj7n0S8ulF4FPg5Z6Z3lpgTb2v/mI9qht0QfNzXUbL711j5wq0Ny/5wntkcHq3erNbN9Ua5uxq//tJCs/T5lkaRnNu1ZnEGi5pG2JdduaXeWyPidtWJZuY961mgLpA2uTvjF2h+Y++XdJsIeLUtuSjCWPKZc8dz0H0MPt4W1tueWRS6hlzrW2M7m971/brMzxMtfrvO+2BDeONgh5JyANUL/cXqh9mCt8PorSM421gDZext0TBVI+Nf0jRzZCeReuZ97rNk7cDb+2CKS+pFxyYoGvnWXSj/zsqjP9+ReNMV5l1jnvwC2oGzfX3H/GEbmPcz5K92Zze4w3YO9xt5avu3xM964345r7fPzqZWdblrK1bBdo7mPVryHVcFfbkjLIv3x0OmWTpWU171rdQ6CWaVOO/Zhu2q4s6X/lfmJsWcU4/9I3po9M1u/KfX+ePjh9cXxbVltewkNHCnTMmDFkrPOmxF3tfd+4yFg1i9xPiDOuWi6Zc/Wrd8fO2dIuZc6X+nKz7VI725TNJ81G51jIfzxPi96wn7GcbWoKtGF/xTHGFxzZOXz1/PJ7twH1fgJrnfn0Iydm321idhR+G+cfOsb4miNznzMfpr50G0e9sCe/lEBzn863lzzqAHTXxCw/78Qs71hnMUCdEHtWNYrZsd8HTtmkjAw89wAf8aP2m2lLekWMQ3KfOpE2K21Xt3HEy97kU5v7vNGQvrLtx672JY93wpW+OIvcT4h7rtpv5sRJGUPG+tDcZ4yq771nAdzx68l5llySKnOwlM+xc7fM+bLcZJ3pgCYAH3Mi4OeOMX7ICw1fgDhvWj2AQAP/5vN06Md0Dn92KaOUu+V0gZbDr5l1ph3wvk66DdNvmi/bj3udvhe385v1fvsj3oWu98dNpm7jdtTOf6Q1/IgDc5+Jb+vGeyiHowuk3rHrQP/Qv76kjLJ0G/Ou1QkCNUxbcsggs7lP/5w2K0u3Me9a7RFo35i+8hDv1o2s0ydn4T0hTlytc4OMHVfj3N72L7lP5nOpnoxRsyiHCfFAq/pmDpa5WMqlY59tZbQ+1uf9/rlv2dZNzQ3a0HzoEvC7OtgV+PNcW+qBYr17sy2zDzki7B2E/sol6LtfwU/2CfQd6h87xvjOI9+hziUwstxcQzOP+z6r5v73LW3V2phv3u4gNI+/43zhdhb32Y9b/d3a/Ywxxvcd+VG4P87/5NjUPYbJctvyzbz3fnOfMkpZZek25l2rIwRqlzak/neNkVpGaauytO2ad63uEFgnX8dcCi+Tr/TJ6ZuztK+ed62OEGjuM2Zs7tvG7Fp3QpWxaRa5nxAPvGrO8xWAzMlSPi2LXWXVx9tWfdjcx5spsx7oGvC7GvagFSzf0eh3flsAD1zONj/foUnjlE7ibx3YOKVc0zl8+xjjjaaiMjs+Tu2Y8928zz7QPu7xz7XbXtNH4Y5Hn78R+2Q2l7z4p0faf/0Y44ezv7d9vpv3r6d9ct1OdNu6P//yedmFlF3K0HKcQHOfS1fEMta13ea+/jxl1XMNsD/OPc9uZtN2pA1pP7rLPY93fJQ2yuV5jjfvb9Q+fWb6zmPs0zc710Alj1/HPkvGihkzdgxzSO4zJk1b0zHq3JTVAwu0zDIn6/fn2xbtK7fUqz7vV8997NzwgXf56TbfA3zn+U7BIQFfG/cvG2O89tz9vlP0dEdze6/csKcMvvXIzuEfjTFeRgN1Umia9d994ARsbVzeRX05yXz9peb+TccY33Vkx/yXF3+TgVX17tvN/R89Mvd5F/pnLe53v5JnbBOofyxjmgFL2pZ9A5sOalJmWbqNedfqDoEO4vO0tB3r+GeXeydpaZvSRmVpmzXvWh0h0Mym76z/oblPH52l25h3re4QaO4zRsxYse67Mp/HO3/IWLTzArm/A/oBftyspwwyRzuk7PKctlspx3ed+9U54gPs5tNuskhvOa/R1YPfF/AV8quWs0x2W097RLf56rX/RUvQD+0cPnqSPduQP0Ak6v22cwB6zCD0D8/96TYeYPduZpPN7AcsuT+07foNU6nbuBm0exxoM3tKO/Pb5+t2G/fYjZv/1RrGdO2Pd2U/fUEnwSm7LN3GvGu1R6BtRNqMQ7zX56RtytJtzLtWJwg0s+lDV+O7cp/sp6/O0m3Mu1Z7BJrZjBGP8c5ztTN7YB/pR816rgSQudohZZjn9E2MXLc5c8Ms3da8e/2rHtDrjzG+YeLkwAOw71+fk9/JBZizdFvzrtUTCLQM/tiBQe+gSOdwXGHl3cy8M5oTDXzlgfWmdSbXactFx7uN417ZszcF+g51Hv8rR+Q+5ZG/zPzEuUHvUG/KvvT9Gv3oEz5pksv3ZDCVNiplZrmfQHMf014aqRPcXX13Mp82P3+ZSRlmaZnOu1ZbBGqUtuLYT5qkTcoi9xPinqvkPuWRPrTXPG3fui/3+Vn66vTZ3cY9d+XZ/3rHk6e8yZ8xaJZuY961egKBlkHmaqfO8zJHzNJtzbvXu2qjnlNmtyG5qwNNI9LG5tvGGG8xD7/vEl2vxvPY8zbs+Z7Xlxw5Mfu3Y4zXmAzNxvNQOe9RxLh5/4tHTLhSt753qTPPpiE5L+9JW0teUy4/YjbwGeS3nbprUPSFY4xX9obEne7xTWbzUbh/cETuUw753tgbzlfQttxJffATahnbY7+blzL01Ze7qdunpo1IW7GOgfa1LWmDMthMm9Rt3P1qnnGIQPvOjD/Tp6Zvjfeu8sjjHdumz86SPjzlYtku0LYlY8KMDQ/NfZ6XsadzDWx3fapHO2ZNncnc7ZDyXOtN5oi5fFuWZmPevb5VG+RXGGP8vYlxyFnCOrBMo/Pz5mEX9voUnucet3PIGT+//8jO4a/OTiHb0Dlsz0fz/sFH1Jt2vj2zXsto+yt49BSBmr7TLJdjBkU9K7FB0W755r5n3T6kv2ju32dutmW0+1X85FiBmsZ4HbDk9q5/LTtnJd6vnT6wuT/2rNuxT1uUpWU071qdQaCm6VOPzX367iwt23nXagok9/HNOmPCQ3wzN0h7nzGns81fZpSa98zdMofLm9N3vXGUsm9/kbli5oyZAF/t/KDhThH9mRnuHmAOdte/BjzrXzrLt6CXWdy3u1ftHD7qwMZrbeDyO1mU7YRYVnV9qxMu/fJ3ZsPRjmXZrJtnEmj5/MED27W2acn/r5r70G2caZeexWZqkpMktq24q+Ps5Dd9TBa5nxBnXm3rz2t/V1+en6dMs7SM512rxSRtw6G571gqbVAWrhPizKvmPoPx9K0tn12Zz+Nt73NJsPThWZTPhFhWHfvdZ/zIdQG9oJst28zhWh/u6stTd9quXXV/3kYj5fGxBw4S14Yjt99/FmYhL6hs7coUaDmnEepf+O/6SGgrQwZPbze3oxF7caT6rle+MtCTCdxl2nfY/r3v3L0Y8gFvJfcpp1caY3zBbN/uKqPkPs/57jHGm8v9S5VOPLPkJBqHnmG+5l89xni1+W5xtzM3Z3VGgbZNsY55+umWQW5v+5efJ/sp05RtFmU0IZaJUdqEtA312mbZx2qetidtUMvlxVt165wCzWu+z54+tm15y2PbumWUPjx9efuMc+7XNW+rY76MATMWzL+4brPsYzXNWDO/n39xtVymQOdumculDA8p4zyvk+DMHbNcXTn3wD/wxAP/rfPAu5151+oCBdo5ZHDzH2YjdmhD9nXzu0s5rG7nAg/x0XapbyjkBY+5BEYaljQc/cREO5dH2/EbfKHm9c3GGN9zYOPeDvxfLdeo7XZukPBFh9zc5xqan7X0GR34bFunjUnuY+qNtBdRPviNti0xj/0hg5q2Tylb10l9cRGl7udfrrWcNiE5bxuxLfN5rLlPm5O2J4s2ZEI84Kq5Tx+bcjgm9y6F95IF07zme+sZAx6a+2Q/Y0xvpL2k5yXf6xwuc7qUcye3ub3rX9u4/DxzyCzdzrx7uavu6C85oqFYYdZLt3h353LLed2zdg7vuYQ8Id4V8DzeQVEuYJ4GMdu49fJu3fnwxXGf4er4ybNAWhZr+bj9MAItr77Rd0jj3tx/6tylbEPuX4jxB47Ifa1/73SU+4fJ+Lat1jr2aYNaFvvaqj4nZZyldWfevblV6nwN0hasbfkhjlc3MHwGJdzcp689trzSp2dpmc+7N7dK7uOYMV/Gfoc4ZizZ9iNjzCwti3nX6kIFWt7ZvY8/or9YJ8GZS2a5+LrTHXzrMcZ/PvDjPKkADXfeKUuw8+/WB4WzzK9m1QbpE48Iect9/R7TrZZ76867L+/y3/UmQv9a8EXOhvgk9WRt3P/SgZ352uH7HvyLO7Vfu/jdlfu+ifD/OsPwk+Y+Z3dOGayZzu1t/9YBTco6S9u8efemVj32U77/mLYmi3HShHikVdr7TNxy5uH0zELRtgAAIABJREFUucl5++Btmc9jzX3W6duztOzn3ZtZrf3loefPiGHHiRlbZulYc961unCBlnvqzqfPetMy3VVvWndSvzKXzJwyy8XWnYbyx44xvvnAxiEH2cHM58zLhLSRmcdrdSUCLbdXHGP881n+LdtdIW/nkJ9/0DzOiw34A5ZD685PH2PkguBxOaRjzXNyvcifNPctDYzlcQWS+/zL9yL/zYHt3pr79567e4u57zH//DnISZ5js6u9yON9zrf4vvvjBn3j1drW5HuRKYtj2qwMflLmWZqBefcmVj3m1P1kOv3kIbnPc9PG9PvuaXcsjyvQ3KfPPfRazW2z0renj8/SPn/evYlVc5+x3qG57xgyY8qMLeMv99cXl5Zbrqv9j5byTw72/Uvdyc8zp8zcMsvF1Z02CvlM/5cfcXANdxr1HzkPrtuad62uSKBll6D2epEN8K6Qr5OB/2UeaxvKKzr0k3e1lfl1xhhfO+vOMWbvO1+52zl5R/ziyQK1/5lHXC+yE4Z8l+9t5yvfYu4zkMz1Auuxq53I42tb4dIvJ8f1bL/Y3B9zSbBOBlLmfeOu2znbjl3whlrHU+dT9+txSO5zSZG0MVluyWwe8sWsap++N+V2zBsY6ePT12fpdubdZ71q7jPGO8Ys9SNjyU5+OsZ81ljP9OBadqfOEzO3zO9m6bbm3adbdUd+8Bjjnyzh3teg52cd5OfskD9u7v4tNQhPV2IP+8otw2O+D9xBQN4hfcu5e20wH3Zvn3brqTt5NzMnQfm8I+pO3zj6pMXKu6JPW5bNa78P3DLa1w62Dcy7m288d7/152mP5mFfvX1G3vTs2YQP8erHpn7P3L2aP+ze2vo+gZZByiRZbxnty33LOmV/S298t26nrp/yKTnf+92XxMf7Wfra5j59cLLeTB+S+/T16fOznbaFj7f3j/9KtcrY7phPuLUt8b3fxy+zh3rFtoGnflI4c8zMNbM8ed1JBc6/fDThM4/oAPtufz7b/TbzYFpJ5l2rKxVIHhryP3REJjoZ+PrlLH/POROd/Mbqr5zglEtg5OMk3c6VxuXZ7HZy37z+hSPKswOnLxljvPrUaP15NjjLgbTTSnY/ezrV4JDBYy6BEecYxdzytAJt71MmvRTeMeWZDCQLWZqNefdZrVqnU8dT1w+dNHUSkDYlS5zlfmI84SplkLwmu4deCi9l3vJMn9827Dnnvn1iztycsV0MOtbb197XKWPILLWad62uWKCZ+Nknnisqc83MOVMHn6wtbAOQg/mMIwZ868fYetmWglxxmdr1RaDZeIUjPxXQgVMGCD3VfQcOy+av/mY7vOQ+F/xeO8Z9nUL/Uv6dY4yfMBW6ratHeQYHkLJI9vMO5SlfBcm7m895Ety6/MpjjL95xCSgA6ZvGmP8KLm/uJrSNihlkzI6dJDb9j5ZSCayNCPz7rNY9ZhSt4/5lFx90pakTWm/+ixQnsFBNPfpi9Mn9w87+/rwta9P39+xb7f1DFhedAjNfcZyx7zp09ynrmQM2X71RRt24+oFmvtTrxaUOWe28STZSEPccH/KEQP4dfJ7yyc9uvr0HnAAbdBfb4zxjScMir5ijPFG83WatQNe9uKfUpeXX86I1wZ/X8e51p2eFv45uVx8wR24gy2TNx9jfMcRg6Jm4PPHGK85X6vbOvClL/ppPZZXHWP83SP7jEyAv2+M8XOfoctFF9oRO9fyTRmlrPpm3b42bZ0MJBPJRpZua9696lWPJXU6dTvH3Lq+z6Z+aUPSlmTptuZdqwsQaJkcO5BvBnJW3IwFsnRsMO9e9aouGcNlLHdM7vPcjBkzdszynFzmIVktb/6sXxvLOHdfu5if9dMBmXtmSdYyJ32UZZ38HnMq83XHP3bu6aPu+KPoeJFVoI3gWx35UYd2Dl8zxvjxc4N9x2jd/rXdbkOej039tSMmAak7NfmwZ+RxbeV36P429+88JwIpu2Ma9i9eznDcbR362pf4vB7DD13OANlObF9nt77p837zwJ5DO3CJZXSOfWrZpKzaZh2T+5wdNBnJ0szMu1e56jHkTNmp0+sY6JDcZxKcNiRLtzXvWl2QQHOfvrm531e+/VnbwIwFntPXAOqRsVvGcIeapK1I5vPVyIwZs8j9hHiGq3UumTlhctI60Tqya93nPfolVBvI33XiDudjH1mynUebtc/XtHp8gTaG77E0hIcMijrhy/dG3mzudrf1+Edx/1fsvufkF3/nxLrzf8/dUHfuXx4PvYWW9288MfdfNsZ4g7mT3dZD7/NDbL/7nrM3/rMTc//Rz8DhIWwvcZst75TZKQOaZKRn+uy2LvE479qn7nvqcOpyLNqn7RrU5fH1TZ+0HVm6rXnX6sIE1oF8+uhTcp8xQcYGWa65vLvvGbP1O7/H5j5jxWt3mIdgdYfAWnf+9Il1J3PRLJ2bzrvnXzXcH7o06IdMZjpbz8ecfKb//OVy6Vtsbj78yIC34cwZM3v5h2zr2t446fG/xhjjs440aN35G7NjNPm99LS/cP+S0Zb7HziyzJv7r7ryT0D0+H/MGONfHmnQ3P/JWdxyfz2570AkZXfKZCBZSWayNEPz7lWsus/5C1jqcAxap3N737/mPm1Glmzr2vq7ues3tepAPuWVvvqU3GdskDFClmZo3r341drfZazWs5wfm/uMEbNc2/HP3bY6QSDZyacjMzc89utRzVfmpFkeLDfd8K9eGvRDJr/dwX+xfLypHwWd+2z1zAXaOeQwP/HIziEfiUlnktPnv/fi1EHW8tDF3VyP+6eMMf71Unf2DYL6s9adLxxj/JA5EFJ3Lq6Yd+5Qyz/rv3hk7lv23zLGeMf5Cin7ayj/7GPr58868lJH68DxH8zvx2V7MbRch0DKKmWW7zamDNcybdu2a93c5xJJyU6WZOlact/9TJ1N3c1x9ph2HXMf7+Q3bcXadkwGqwsXaDuVvjp99jFl34xkjJCxQpbk/hravbb12eeM0TJWy7F37NZ871o39xkbZrmW4567a3UGgbab+QpM5oqH1p31EzOZm2bpXHXevf+qG8wX/fOCCfYxk998Cd7ZO+9fDte8hXboL3PCO6RrQ/r7xxgvNyEuuaHc7BRylshDK/X6vG9YTgaxbvOas3BL+95BUc5y2zPAtsPfNSDo4x0U5f5HLGiXnIN13379GON7j8x9bfKx0f41pJ3jQuDmhQu0zFKG/Qhwy7b53rVu7pOdZKjLmq0+dinrdd9SV3tsPZbe37WuTdqItBV9E+FSjs9+HCbQHOQETum7U96HZqDPy1jhGt7s75guMhmTZWzWfK9jtj62bd3c56/mGRvG7xom/YelwbOOEWifkbniMSdOW+ekPUFs56zHvP7W53ZDv2AOZvJih0x+WwG+bozxhnPLbRy2vpAHn71AJwO5pMOxfxloyNOIfu4Y46ctWs3o8tCT3cwxtiLnu2z9GGD2u3ViW0ewPtaOMJcU+anzSNSdJyvSe79w85Azwfaake3413LfdjuZaXub69/1pHDr4OPeO3iGDawDl3x8tZfGyzEdm/uv1GecoUSefhNts9L/p0yThbZt27K+PrZmJlnqR6IvOfepm6mjOY61v1qPa9vttgVpG3oG+LYZT1+K9uBYgeY+fXcvC3ZK7jN26Pfh13HFsfvzEM9fx1wZi2VMlmyv/dW2rK+PNfcZC7rM10OU0vVts3UnfUbmjs3Umpttt9Pe5l/eNM1cNcua0fnQcatu4F3nmdnywh2MbduJPtbO6z84hf9x4Dfw7Hbsp5wMKvlqR/I9Y4yPnN8bCFsHRk/17uFmB/Uuy6DvmE6hx5fK/5NnHtoo3EA8nu0hNvc/fIzxT2fD3gFA281967ap3zbG+IDlTZanzn2y2WNL4f3y5S8fp+T+S8cYry/3z6YetO1KmaZs1zZ8X97zs3USmb+mJVtdkrluu4891nqzzmVfUidTN7Pfrat3HV9+3jYgbULahixrfZoPWV2ZQLOZPrwD+fbtd+VizX3eOMpYokuy8VT52Mx9vrOZMVjGYjmmQ49vzf168q+nOq7aWl+GQOtOLv+WOWTyckib2rlpziKeOWuWzmHn3cNX3Yl0Og32oTuRHfmuMcbbzJc7eScO313PvCKBNnQ59f9fnwHvQOCuzmGzoc13bd5t49iTt77Gxo/OenezQ8jG825oL3G0ua93HVvrWS4d8OPmnqo7Zy2yJ91Y29RjLwfU3DQfuf85Y4x32DiaZCWZfOglr7GZy7deTmBxbO5b93OpmNeZO1+rhz4W2394gZZlyvaYywFty31OkpKsrctT5j51MHVx2772sV3r5v65Xf5pLZtbvt02Mn35MZcDal7W9j5jivVTb9vGHg9lnbFUj6WvkTFXv+ec/V33tfu/a93cZ+z3nC7/VBvr+ws0b5lDZi6ZOWUnuLtylcc7R00e+4Zp+5+D9qoVK0/+DbNhzwt3w/tevM/7/jHGO81X64Ec9OKedDMCnaDmRCl/6YRJcLK2Nrr56Nm7bzTUHajntXL7vku20c6g+99tvuX8uHP3KfXlkDrT+tROId99yMXjsxxVcefvWF22QMv0VZcJY8u+Wdi3bhvb5/zVMcbP33jD5zFz/7ZjjL+wTACS+exj9++udY/985ePf9boskvS3h0j0DLNR3xT1slFy/6ujOTnm7lP5pK9dVnb5nO39+v28jqpc6l73fdTc58JfdqCLDWad62egUDLNH16v9d4TO7XcUTGFvlYdMYa6/JYuc9YPmOsfsw/2c8+ndLeZ8yXsV+WzbHUfNjqxgU6d8xcMnPKQ9vY9XmZw2ZJPVzb8PnwS67WIPZEDmsFbGO/bZ1K0MH/e83N9gBe8lXcI/BCgebtZccYf3YOJo5tUDfzmTPI/aYxxutuQe7EILlMhcjr518eX//18Twnz82/7uu62ZztMdesyzuZayfQerCtnmx7rB3ilyz73Y5zfT23n4dAyzYnu/mbJ0wGkqG1kc/9/BXq14wxXmsLUbLbHJ8j9zmx0fuMMf7eMgHIPpya+3x/rCe8qs2Ww/DQlQu0bFPW/c5g275t7eK2xzYzlgwmi83PSnTu3KdupY6tf/HdnJhv2+fNx3rMqftpA7LUZt61ekYCLduMSdLHJw/NwGY2dt1fc5/MZcyRsUfGIJvLfXK/bZKQ/c6YqmfnzT5ujrt27XcfX+cHGetlzJdl27hq/siKwIs+eZA5ZbKUerCOtZuvzfWaz/UEojvz1kr6SmOMT5ovtjnI2nyR3l/D3Rl3BlwWAncJNJDJ3x+buUuekr3m65B1Ksb6O/leSs4smDzmouz5vsp9l5ylMN9lyxkaP2W51l33L53aIZWzz89z2xH+s+VM6a2L991fv3+5As19cvlpRzbuzU/Wmx1CziCad9czUP8Jy7vs95HIYOWNxxi/cr5R9R836uY6OFv3bdfttb/IXxNebe6c3N+nlK7jd1vGKfP+JWkzw7tysz6+mblkMgPrZDRZ7QD7Pir5C1XqUOpS6lTP5J/9WDO87te+2+vvpM63T2pbcJ999buXLdDc5wy36euTk/uMF5qzXG83Y5GMSTI2yRjlvktymTFTxk4ZQ/U7vnnNjLE26173Zdd6nUdkjFcLub9vSd3G73cumTwmY4f2F2lvOyfInDZz2yzN37z74j8N58xbfWf20JCvjXq+EJ+lOzzvWhHYK7C+6/jBS2g7OdzVsG57fFsDnSz/2zHGp48xfs8Y49eOMd5+nlE3ZxfNXw9eZb4bn+9n5rtqGUS91exYfssY45PHGF+0XNalr93XSz3oY4es104hH2vqXwJ0Cnuj8qx+uJb171ryc2jbu+asOVwfS/3JSVQyMfjoMcavGmP8nPn98h89xnj1mbtk74eNMfLYm8zvWGYi8dvHGH9qnrzo+5b9y2tse731tXfdXo/t45eJymrxrArZwbyUQMs6k9RkoFlZs9HH7lrnd5LF9XnJak64lewmw8lyvjecbCfjyXoyn3+pA3ks39NM3UgdSV1JnUnd2eyDtr3e+tq7bq/HlrrepRa9b/18BVrWyV2vDrEO0ndlZ/Pxjrk3c58z4GaMkrFKxiyZFGcMk7FMxjQZ2+S1M9bJmCdjn5y5PGOhjIkyNsoYKWOlNa95/VNz3/qTfc3Yrss65utj1gR2CXROmTlm83jomLtZzty2VyR6Uf5SKfPvnU84W112pAH/mLnnmV2/aOO7jsbjBDYEkpm+M/Pzxhhff0LQ146inUTDv/6st5PdvLuZL9nnDJ75K0Iu4p6zyG0O+Ps7Wacxz+8eWgHX383t1pnc/rDFoR3k8pCbz1wguW97mWvY9Uyyye0p+Tok9/k+zbbc57H8bDOvvZ/cn7pf2UbrYgZqGXB1kftK3M56LfNkIZlYM9LMHbpu7jcnBevvN/dp49PWp66l7b8r98ntqbnvfmU/8nq9TuVa72+n1B3pmvv0/c3nOiboY4esk6/87r7cZyyTMc223O973XPlPmO5jOmymB9MCKujBNb5QeaaqRv7srtZdzr2yBnZM9dNPXxBXcx/CWVOR55f2jfwXze6NuwfOw9FuI8qU0/eItB3evJxnr+1dBAN8JrBQ28nq81rKs0x2+pkt51MtnPo624+L9tqR/Vl853XEKg3W4JwQw+tjftPGmN81pKxY7K6mbdkNXnLNo7NfX/nHLnPtlpvcgKknznLVu5vKORbDnXNfTLRk2O1rd7M86H3m/tk99TcJ7OpO83toa+9Pi/b6P3U6dTtLHI/IW50teY+f33NWCA5WccHzc0x683cd6xxyDba3retPlfuM4bLWC5Lx3bzrhWBowTWepM5Z3LdvB6S8c5tM9dNG/yiCXD2Ihfc/qqlIu7bYCtanpOPGGXJxrKDFgL3FUg4u/zGMcZ3LLk8plHfl+H8LDm+699d2zjk53mNdTD0R+fH8HKM67H2mK1vU6BZyEAhH2Frg33fgdGa0bvy3p+vv3Pq7c3cp9PqZS96rLdZ0o56FWgWko0ObJK5YwY3d2W0ub5rfdd2Dvn5Wl9Th1OXO/jvsa7H7/ZtCjQL+Uh+xgTN1mPnvq973/Wa+4zZMnbr0mPtfWsCpwhkjvmCieuceyazyV3a9X35zXPy88xxM9fN0u286MbPmB8H2rfB9WcfMjeUcJv8TgyrswgknA3omy7XC06I00E00PtC/9Q/S6XMXyC6H1+wXB4sSDqFs0TlWW2kmc9B5XIXf3/Jz7XmPt+9ebullOR+wXDzBQJrJpKVnoskbWfa0LsGOG1jn3KdPil1tPuQurtesmat24qdQATW3OdyLxkjND/XmvucoTpjtizrOG4+ZEXgXgLrX4IzB019Sf+wa07Qn+WrLpnjZnmptrjvUOYkENngtneh1sa93+FKBTb5napWZxdYO4hfOMb4vKWDSOB3hb6dyFOsNwdC3zTGSEVdz/qpzpw9Ks9qg2vu33O5fEbb5mvI/dfMM+j2WPQVzyqiZz+YdWCTrOTsy8lQ2/BLfQNos73PpW5SZ7s0/71vTWAVSO47IM8YIWOFjBmuIfdrP5SxWcZoXeS+EtbnFlj7isxF17rS21ln8tt5a+a2WTrXnXdfuFo32DMzrn+96kYyi27jvnVDL7FVdwjcXyCdQ/KZ5eXGGO8/xvjiJfQJ+VO/W9qKtnYI3zrG+ANjjNee+56VTmHBcHOvQAdFeVLO3Pm/zTPTtoG/1NznRBO/c55htwco95WwvktgzUrO0pwsJVPNfSecyX8fe+z1trqXs0anjqaudlnrcB+zJrBNYM19xgwZO2QM0Wxfau4zFsuYLGOzLOuEfj5kReBBBDoHzZw0c9PUlc5Vc7tz2Mxps6SOdS4xH3rxqpPgXJ6gH73LxrrBr1j+hNwXfvFvu0XgYQXWDiKNbS4E/w+XDiKB78AkncVDDpCy7fxb60c7qtSTnOHxRy4ceyve8jw3CWwKrLnP9yTfd7mWZDOXvKexf4zcr6/V1886l+DI9756Xd8ch9xvlqb7hwh0LNLnJlPJVjK2Zm7N4kO39+trrfuQ67qmTvb77dnntc72GKwJ3CWwmfuMIT58jJExxZq5jjs6Dll/ds7b2X5zv1m/MvbKGKwT3xyb3N9Vwn5+boHORfPx5taT1o/UhcxlM6c9aCzSdyxfc4zxtUuly9nc8lgWIZ8QVo8usNlBZAfynbFPGGP8uyWv7QTaeKdC5PaxHUafv3YE2Va33/W3jzE+bYzxXlsGQtlnC4H7CGzmPm3wO44xcoH3b9ySx2Q0E+L75j51Zt1W8971v5/XW333LQMhub9PifvdCGzmPoPtZC3X+E32msOu16zep72/K/epc6l7qYPreOigQZaiJXCHwGbu8+ZKxhYZY2Ss0bx33dyvmd+csPa529Yd56y5z+3N52aMlbHWek6HHIrc31GgfvygAm2DM0ddrx6TOWznrZ3b3rkj3Vguov2dY4z/Y/mOQn9250Y8gcADCmx2EHmpdBL5DsonjjH+1XJtyc1GPPc7oW3HkWtE5t/mpGHb7+ax/F46gz8/xni/5cxyPeS8K2UCUA3rcwkkU33Hs9t81THGLxpjfPIY48uXs0dvy+59c5/6kTMpZgKSAVnOYLoucr9quH0ugW25T/aSwWQxmUw2t2U+j9039zmbc+pW6ljqWurcusj9quH2uQS25T5nsc2YI2OPjEEyFnmo3Of63BlLZUyVsdX6KYcco4nvuUradu4r0LlpJrqZs2bumjlslv5s3r171cH7Gy5PPXgGvfyOmwQeWiDh3gz4y4wx3mCM8d5jjD84xvjb83p7uRj8tnc2d3UgeTwXkU9Hk4/85F3/3zDGeLPlpFY9vnZWrTt93JrAuQWSsW25z1/I3mR+JDPv1H/mGOPfjDG+a04C9uV882ffPcb46vkRogyAclKinN3z5TcOJv1C9kXuN2DcPbtAc785Fkkmk81kNFnNx96S3WR4M9f77meinLqSOpO6kzqUjzenTq0f9cyBtf7J/dmL2QY3BJKxbW+y5KRZGYtkTJKxScYoGatkzLIv55s/y5goY6NckzhjpYyZMnbKGCpjqXVp7tfH3CZwCQJrv9C568ntc38x696+hIO0DwS2CSSj+xrnfA8gfzX4KWOMd54nc/vVY4wPHGN81Bjjt44xPniM8etm45+P2uUdpNfaMtnt66fCbeuY+nNrAg8t0Nyvjf/6mhm4v8YY4y3GGO86xvhlc6LwQfMapblOaXKfsynmL2rvNs/1kL80bE52u125r4T1Uwkk92l7d+U+2U2G892wZDrZTsaT9WQ+/1IHMmlOnUjdSB1JXdmc7PYY81re7KmG9VMI3JX7TIozZsnYJWOYTGQzpknuM8bJWCdjnox9cvKgjIUyJsrYKGOkbUvHVXltC4FLFkhGm9OuT97fXZ3LyRv0iwQeQSDB7yA9jfe5lmyrg657V65z7ZTtEJgCci8Ktygg97dY6o5Z7mWAwHYBc9ftLh69UYF0Fu0wOpHNZDb/8jGf/Ov9rNd3Pfu7N0rnsK9UoLk9NvfpPNbfvdLDt9s3KrBmN1k+tL2X+xsNzDM57DX3Hb+sY5pd45w198+EwmEQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAmQeSuAAAG2ElEQVSAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAg8jcD/D4ftoNepT8UfAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>

      </CardContent>
    </Card>
    </div>
  );
}

export default Social;
