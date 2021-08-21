import './App.css';
import { User } from './graph';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main.jsx';
import SignIn from './SignIn.jsx';
import FormFirst from './FormFirst.jsx';
import FormSecond from './FormSecond.jsx';
import mySvg from './mySvg.svg';
import Route from './Route.jsx';

import { useQuery } from "@apollo/client";

function App() {
  /*const { loading, error, data, refetch, networkStatus } = useQuery(User, {
    variables: { id: "61210499a89723000974f497" },
    notifyOnNetworkStatusChange: true,
    fetchPolicy:"cache-and-network"
  });*/

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
    </div>
  );
}

export default App;
