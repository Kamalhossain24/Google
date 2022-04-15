import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import { useStateValue } from './StateProvider';



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={SearchPage} exact />
      </Switch>
    </Router>


  );
}

export default App;