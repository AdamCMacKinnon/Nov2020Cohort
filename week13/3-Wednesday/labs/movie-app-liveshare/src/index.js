import React from "react";
import ReactDOM from "react-dom";
import BaseLayout from './components/BaseLayout';
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import App from "./App";
const App2 = () => <h1>Home Page</h1>
const About = () => <h1>About us</h1>
const ContactUs = () => <h1>Contact Us</h1>
const Blog = (props) => {

  return (
    <>
      Blogs 
      <br></br>


      {props.match.params.blogid}
      <br></br>

      {props.location.pathname}
      <br></br>
      </>

  )
}
const Comment = () => <h1>Comments</h1>
const NoMatch = () => <h1>This page ain't here</h1>
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={App2} />
        <Route path="/about" component={About} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/blog/:blogid" component={Blog} />
        <Redirect from ="/blog" to="/" />
        <Route path="/blog" component={Blog} />
        <Route path="/comment" component={Comment} />
        <Route path="/sample1" component={Sample1} />
        <Route path="/sample2" component={Sample2} />
        <Route path="/sample2/:id" component={Sample2} />
        <Route component ={NoMatch} />
      </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
