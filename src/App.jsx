import React from 'react';
import { BrowserRouter, Switch, Router, Route, Redirect } from 'react-router-dom';
import AddList from '../src/pages/AddList';
import Navbar from '../src/pages/Navbar';
import Home from '../src/pages/Home';
import Blog from './pages/Blog';
import JsProject from './pages/JsProject';
import Login from './pages/LogIn';
import MySkills from './pages/MySkills';
import About from './pages/About';

function App() {
  return (<>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/AddList" component={AddList} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/Jsproject" component={JsProject} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/MySkills" component={MySkills} />
      <Route exact path="/About" component={About} />
      <Redirect exact to="/" />
    
    </Switch>
  </>
  );
}

export default App;
