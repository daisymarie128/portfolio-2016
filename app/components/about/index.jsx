import React from 'react';
import './index.scss';

let About = React.createClass({ 

  render() {
    console.log('hello')
    return <div className="about-wrapper">
            <div className="my-skills"></div>
            <div className="my-name">DAISY MARIE SMITH —</div>
            <div className="what-i-want"></div>
            <div className="main-content">
	            <div className="line"></div>
            	<div className="long-facts-title">long<br/>boring<br/>facts</div>
            	<div className="long-facts">
            		<p>I'm extremley passionate about programming, design and innovative ideas. In 2014 I completed the Web Development Immersive course at General Assembly. In 2012 I completed a bachelor of Communication Design and specialised in Digital Media and animation. I'm experienced in many different program.</p>
				</div>
            	<div className="skill-set-title">skill set</div>
            	<div className="skill-set">
            		<p>Adobe Suite inparticular PS, Illustrator, After Effects, Flash, ID, AutoDesk Maya and Mudbox, Cinema4D, FinalCut pro + more.</p>
            	</div>
            	<div className="quick-facts-title">quick facts</div>
            	<div className="quick-facts">
            		<p>Im a 20 something year old web developer and i’m as short as 7year old
					I love code and i love design
					I hate birds
					I dont get that much more interesting</p>
            	</div>
	            <div className="line bottom"></div>
            	<div className="contact-title">Drop me a line</div>
            	<div className="contact">
            		<ul>
            			<li>Email</li>
            			<li>Linkdn</li>
            			<li>GitHub</li>
            		</ul>
            	</div>
            </div>
            <div className="contact"></div>
    </div>;
  }
});

export default About;  


