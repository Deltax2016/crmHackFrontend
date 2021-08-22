import './App.css';
import React from 'react';
import { User } from './graph';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main.jsx';
import SignIn from './SignIn.jsx';
import FormFirst from './FormFirst.jsx';
import FormSecond from './FormSecond.jsx';
import FormThird from './FormThird.jsx';
import Social from './Social.jsx';
import Account from './Account.jsx';
import PostFirst from './PostFirst.jsx'
import mySvg from './mySvg.svg';
import PostInfo from './PostInfo.jsx';
import Route from './Route.jsx';

import { useQuery } from "@apollo/client";

function App() {
  const [text, setText] = React.useState('text');
  const { loading, error, data, refetch, networkStatus } = useQuery(User, {
    variables: { id: "61210499a89723000974f497" },
    notifyOnNetworkStatusChange: true,
    fetchPolicy:"cache-and-network"
  });

  function handleChange(page) {
    console.log(data);
    window.history.pushState(page, 'Title', `${page}`);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  function openPost(text) {
    console.log(text);
    setText(text);
    handleChange('/full');
  }

  console.log(window.location.search);

  React.useEffect(() => {
    if (error) console.error(error);
    if (loading) return(<div>Loading...</div>);
    if (!loading) {
      console.log('okey')
      if (data != null) {
        console.log('dispatch', data);
      }
    }
  
  },[data, error, loading]);


  return (
    <div>
      <Route path="/">
        <Main />
      </Route>
      <Route path="/auth">
        <SignIn />
      </Route>
      <Route path="/form">
        <FormFirst />
      </Route>
      <Route path="/form2">
        <FormSecond />
      </Route>
      <Route path="/form3">
        <FormThird />
      </Route>
      <Route path="/social">
        <Social />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/post">
        <PostFirst openPost={openPost}/>
      </Route>
      <Route path="/full">
        <PostInfo text={text}/>
      </Route>
    </div>
  );
}

export default App;
