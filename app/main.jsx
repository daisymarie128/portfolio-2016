import React from 'react'
import { render } from 'react-dom'
import ReactRouter from 'react-router';
import { createHashHistory } from 'history'
import { useRouterHistory, Router, IndexRoute, Route, Link } from 'react-router'
import d3 from 'd3'
import Header from './components/header/index.jsx';
import About from './components/about/index.jsx';
import Portfolio from './components/portfolio/index.jsx';
import ProjectsCollection from './components/portfolio/collection.jsx';
import Project from './components/portfolio/project.jsx';
import Skills from './components/skills/index.jsx';
import SkillsCollection from './components/skills/collection.jsx';
import Skill from './components/skills/skill.jsx';
import './index.scss';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const App = React.createClass({
  getInitialState() {
      return {
        projects: null,
        currentProject: null,
        skills: null
      };
  },

  componentDidMount(){
    var _this = this
    d3.json('../data/skills.json', function(d){
      _this.setState({skills: d});
    });



    // var _this = this;
    // d3.json('../data/projects.json', function(d){
    //   _this.setState({projects: d});
    // })
  },

  // componentDidUpdate(prevProps, prevState) {
  //     console.log('STATE', this.state)
      
  //     projects = this.state.projects
  //     console.log('PROJECTS', projects)  
  // },

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          {this.props.children}
          </div>
      </div>
    )
  }
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
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



