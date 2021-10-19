
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import ServiceMore from './Pages/ServiceMore/ServiceMore';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceMain from './Pages/ServiceMain/ServiceMain';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <ServiceMain></ServiceMain>
          </Route>
          <PrivateRoute path="/serviceMore/:serviceId">
            <ServiceMore></ServiceMore>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
