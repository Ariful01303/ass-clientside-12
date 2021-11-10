import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
