/*



                            ,
              ,-.       _,---._ __  / \
             /  )    .-'       `./ /   \
            (  (   ,'            `/    /|
             \  `-"             \'\   / |
              `.              ,  \ \ /  |
               /`.          ,'-`----Y   |
              (            ;        |   '
              |  ,-.    ,-'         |  /
              |  | (   |        hjw | /
              )  |  \  `.___________|/
              `--'   `--'
*/



import React from 'react'
import { render } from 'react-dom'
import ReactRouter from 'react-router';
import { createHashHistory } from 'history'
import { useRouterHistory, Router, IndexRoute, Route, Link } from 'react-router'
import d3 from 'd3'
import Home from './components/home/index.jsx';
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

const App = React.createClass({
  getInitialState() {
      return {
        quote: 'theQuote'
      };
  },

  componentDidMount(){
    console.log('%c hello ', "background:rgb(36, 221, 154)");
    console.log("%c I'm Daisy ", "background:rgb(36, 221, 154)");
    console.log("%c A creative coder ", "background:#E83FFF; color:white");
    console.log("%c Please excuse some of my code ", "background:yellow");
    console.log("%c I built this very quickly and cut a few corners. ", "background:yellow");
    console.log("");
    console.log("%c Try some code ", "background:dodgerblue; color:white;");
    console.log("%c A cat says? ", "background:dodgerblue; color:white;");

    window.meow = function() {
      var css = "text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%); font-size: 40px;";
      console.log("%c    Meow", css);
      console.log("");
      console.log("");
      console.log("%c Now try another function: ", "background:rgb(36, 221, 154)");
      console.log("%c Try calling bribe() and pass in what you think you would need to bribe me with to come work for you. ", "background:rgb(36, 221, 154)");
      console.log("%c Hint read the portfolio. . . it's pretty obvious. ", "background:rgb(36, 221, 154)");
    }

    window.bribe = function(something) {
      var kitten = document.getElementById('kittens').innerHTML;
      var tryAgain = document.getElementById('wrong').innerHTML;
      console.log(something)
      if (something == "kittens" || something == "cats" || something == "cat" || something == "kitten") {
        console.log('%c THATS A BINGO! ', "background:#E83FFF; color:white");
        console.log(kitten);
        console.log('%c THATS A BINGO! ', "background:#E83FFF; color:white");
      } else {
        console.log(tryAgain);
        console.log('%c TRY AGAIN ', "background:yellow;");
      }
    }
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
      <IndexRoute component={Home}/>
      <Route path="home" component={Home} onEnter={App.routerWillLeave}/>
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



