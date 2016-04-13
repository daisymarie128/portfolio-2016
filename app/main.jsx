import React from 'react'
import { render } from 'react-dom'
import ReactRouter from 'react-router';
import { createHashHistory } from 'history'
import { useRouterHistory, Router, IndexRoute, Route, Link } from 'react-router'
import d3 from 'd3'
import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';
import About from './components/about/index.jsx';
import Portfolio from './components/portfolio/index.jsx';
import ProjectsCollection from './components/portfolio/collection.jsx';
import Project from './components/portfolio/project.jsx';
import Skills from './components/skills/index.jsx';
import SkillsCollection from './components/skills/collection.jsx';
import Skill from './components/skills/skill.jsx';
import './index.scss';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

// var theQuote = 'yep, i needed a whole new page to show you this';
const App = React.createClass({
  getInitialState() {
      return {
        quote: 'theQuote'
      };
  },

  componentDidMount(){
    var _this = this
    d3.json('../data/skills.json', function(d){
      _this.setState({skills: d});
    });
  },

  handleClick() {
    
  },

  routerWillLeave() {
  },

  render() {
    return (
      <div className="wrapper">
      <div className="loading-bar"></div>
        <Header />
        <div className="content">
          {this.props.children}
          </div>
        <div className="side-quote">
          <p className="side-quote-text">"yep, i needed a whole new page to show you this"</p>
        </div>
        <Footer />
      </div>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} onEnter={App.routerWillLeave}/>
      <Route path="portfolio" component={Portfolio}>
        <IndexRoute component={ProjectsCollection}/>
        <Route path="/portfolio/:projectId" component={Project}/>
      </Route>
      <Route path="skills" component={Skills}>
        <IndexRoute component={SkillsCollection}/>
        <Route path="/skills/:skillId" component={Skill}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('container'))



