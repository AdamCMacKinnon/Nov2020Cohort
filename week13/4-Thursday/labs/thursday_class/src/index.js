import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/layout/BaseLayout';
import Forms from './components/Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './assets/styles.css';
import FormsHooks from './components/Forms-Hooks';
import Parent from './components/liftingState/Parent';
import ParentHooks from './components/liftingState/ParentHooks';
import ProjectManagement from './components/projectManagement/ProjectManagement';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const NoMatch = () => <div>Error: This Page Aint Here</div>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/forms" component={Forms}/>
          <Route path="/forms-Hooks" component={FormsHooks}/>
          <Route path="/liftingState" component={Parent}/>
          <Route path="/liftingStateHooks" component={ParentHooks}/>
          <Route path="/project_management" component={ProjectManagement}/>
          <Route component={NoMatch}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


