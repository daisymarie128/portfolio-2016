import React from 'react';
import {Link} from 'react-router';
import './index.scss';

const Header = React.createClass({ 

  handleClick(location, event) {
    var sideElement = document.getElementsByClassName('side-quote')[0];
    var contentElement = document.getElementsByClassName('content')[0];
    var loadingElement = document.getElementsByClassName('loading-bar')[0];
    var pageLinks = document.getElementsByClassName('page-link');

    for (var i = 0; i < pageLinks.length; i++) {
      pageLinks[i].classList.remove('selected');
    };

    var runAnimation = function() {
      loadingElement.classList.remove('run-animation');
      setTimeout(function() {

        loadingElement.classList.add('run-animation');
      }, 100)
    }

    var thisEl = event.target;
    thisEl.classList.add('selected');
    // this adds the style for the changing layouts of the side quote for the portfolio page
    if (location == 'portfolio') {
      sideElement.classList.add('projects-page');
      contentElement.classList.add('projects-page');
    } else {
      sideElement.classList.remove('projects-page');
      contentElement.classList.remove('projects-page');
    }

    if (location == '/') {
      loadingElement.style.background = "#E83FFF";
      runAnimation();
    } else if (location == 'about') {
      loadingElement.style.background = "#0686F9";
      runAnimation();
    } else if (location == 'portfolio') {
      loadingElement.style.background = "#E83FFF";
      runAnimation();
    } else if (location == 'skills') {
      loadingElement.style.background = "#24DD9A";
      runAnimation();
    }
  },

  render() {
    return <div className="header">
    	<ul>
        <li className="menu-icon"></li>
    		<li><Link to="/" className="page-link" onClick={this.handleClick.bind(this, '/')} >Home</Link></li>
    		<li><Link to="/about" className="page-link" onClick={this.handleClick.bind(this, 'about')} >stalk</Link></li>
    		<li><Link to="/portfolio" className="page-link" onClick={this.handleClick.bind(this, 'portfolio')} >portfolio</Link></li>
    		<li><Link to="/skills" className="page-link" onClick={this.handleClick.bind(this, 'skills')} >skills</Link></li>
    	</ul>

    </div>;
  }
});

export default Header;  


