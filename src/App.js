import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
    return (
      <Router>
        <div className="App" id="app">
          <Header/>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
       
      </Router>
      
    );
}

export default App;
