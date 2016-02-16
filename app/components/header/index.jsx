import React from 'react';
import {Link} from 'react-router';
import './index.scss';

const Header = React.createClass({ 

  render() {
    return <div className="header">
    	<ul>
    		<li><Link to="/">Home</Link></li>
    		<li><Link to="/about">About</Link></li>
    		<li><Link to="/portfolio">portfolio</Link></li>
    		<li><Link to="/skills">skills</Link></li>
    	</ul>

    </div>;
  }
});

export default Header;  


