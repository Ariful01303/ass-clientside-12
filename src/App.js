import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Home from './components/Home/Home';

import AuthProvider from './components/Authcontext/AuthProvider';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRout/PrivateRoute';
import DashBoard from './components/DashBoard/DashBoard';
import Detail from './components/Detail/Detail';
import Service from './components/Services/Service';
function App() {
  return (
    <div className="App">
      <AuthProvider>
       <Router>
         <Header></Header>
       <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/detail/:dtl">
            <Detail></Detail>
          </PrivateRoute>
          <Route path="/serv">
            <Service></Service>
          </Route>
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
