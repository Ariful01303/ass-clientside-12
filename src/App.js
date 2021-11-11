import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';

import AuthProvider from './components/Authcontext/AuthProvider';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRout/PrivateRoute';
import DashBoard from './components/DashBoard/DashBoard';
import Detail from './components/Detail/Detail';
function App() {
  return (
    <div className="App">
      <AuthProvider>
       <Router>
         <Header></Header>
       <Switch>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/addProduct">
            <AddAproduct></AddAproduct>
          </Route> */}
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/detail/:dtl">
            <Detail></Detail>
          </PrivateRoute>
          <Route exact path="/login">
              <Login></Login>
            </Route>
        </Switch>
       </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
