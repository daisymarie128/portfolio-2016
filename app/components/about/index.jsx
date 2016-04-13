import React from 'react';
import './index.scss';

let About = React.createClass({ 

  componentDidMount() {

    // change the side quote depending on the page
    // i am so annoyed at react
    var sideQuote = document.getElementsByClassName('side-quote-text')[0];
    sideQuote.innerHTML = "this page isn't really worth reading, <br/> just skip to the bottom to get intouch";

  },

  changeOnHover(newText, e) {
    var divClass = e.target.attributes.class.value;
    var targetDiv = document.getElementsByClassName(divClass)[0];
    targetDiv.innerHTML = newText;

  },

  changeOnMouseOut(oldText, e) {
    var divClass = e.target.attributes.class.value;
    var targetDiv = document.getElementsByClassName(divClass)[0];
    targetDiv.innerHTML = oldText;

  },

  render() {
    console.log('hello')
    return <div className="about-wrapper">
      <div className="section">
        <div className="my-skills"></div>
        <div className="my-name">DAISY MARIE SMITH —</div>
        <div className="what-i-want"></div>
      	<div className="long-facts-title" onMouseOver={this.changeOnHover.bind(this, 'A bit of<br/>back<br/>story' )} onMouseOut={this.changeOnMouseOut.bind(this, 'long<br/>boring<br/>facts' )}>long<br/>boring<br/>facts</div>
      		<p>I'm extremley passionate about programming, design and innovative ideas. In 2014 I completed the Web Development Immersive course at General Assembly. In 2012 I completed a bachelor of Communication Design and specialised in Digital Media and animation. I'm experienced in many different program.</p>
        <div className="skill-set">
        	<div className="skill-set-title" onMouseOver={this.changeOnHover.bind(this, 'meow meow meow' )} onMouseOut={this.changeOnMouseOut.bind(this, 'quick facts' )}>skill set</div>
      		<p>Adobe Suite inparticular PS, Illustrator, After Effects, Flash, ID, AutoDesk Maya and Mudbox, Cinema4D, FinalCut pro + more.</p>
      	</div>
        <div className="quick-facts">
        	<div className="quick-facts-title" onMouseOver={this.changeOnHover.bind(this, 'meow meow meow' )} onMouseOut={this.changeOnMouseOut.bind(this, 'quick facts' )}>quick facts</div>
      		<p>Im a 20 something year old web developer and i’m as short as 7year old
        		I love code and i love design
        		I hate birds
        		I dont get that much more interesting</p>
      	</div>
      </div>
      <div className="section">
        <h3 className="about-toggle">Am i what<br/>youre looking for?</h3>
        <img src="/assets/about-circles-1.svg" />
      </div>
      <div className="section">
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


