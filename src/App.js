import './App.css';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './containers/dashboard';
import Chat from './containers/chat';



const App = () => {

  return (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/chat' component={Chat}/>
    </Switch>


  )

}

export default App;
