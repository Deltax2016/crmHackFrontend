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
import Route from './Route.jsx';

import { useQuery } from "@apollo/client";

function App() {
  const { loading, error, data, refetch, networkStatus } = useQuery(User, {
    variables: { id: "61210499a89723000974f497" },
    notifyOnNetworkStatusChange: true,
    fetchPolicy:"cache-and-network"
  });

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
        <PostFirst />
      </Route>
    </div>
  );
}

export default App;
