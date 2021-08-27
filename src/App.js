
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import styled from "styled-components";

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
            <Route path='/home'>
              <Home />
            </Route>
{/* 
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/logout">
              <Logout />
            </Route> */}

          </Switch>
        </StyledBody>
      </div>
    </Router>
  );
}

export default App;
