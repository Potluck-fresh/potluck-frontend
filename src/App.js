
import './App.css';
import CreatePotluck from './components/CreatePotluck';
import Login from './components/Login'
import Logout from './components/Logout'
import PotluckPlanner from './components/PotluckPlanner';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <Login />
      {/* <Logout /> */}
      
      <Signup />
      <PotluckPlanner />
      <CreatePotluck/>
    </div>
  );
}

export default App;
