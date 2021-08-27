
import './App.css';
import CreatePotluck from './components/CreatePotluck';
import Login from './components/Login'
import Logout from './components/Logout'
import PotluckPlanner from './components/PotluckPlanner';
import Signup from './components/Signup';
import Home from './components/Home';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"

const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  header {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  header nav a {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  header nav a:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
function App() {
  return (
    <Router>
      <div className="App">
        <StyledBody className="App">
          <Switch>
            <PrivateRoute path="/planner"><PotluckPlanner /></PrivateRoute>
            <PrivateRoute path="/CreatePotluck"><CreatePotluck /></PrivateRoute>
            <Route path="/"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/logout"><Logout /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route></Route>
          </Switch>
        </StyledBody>
      </div>
    </Router>
  );
}

export default App;
