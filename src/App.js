import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { WizardPage } from './pages/WizardPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App h-100">
      <Router>
        <Switch>
          <Route path="/wizard">
            <WizardPage></WizardPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
