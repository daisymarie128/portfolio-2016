import React from 'react';
import './index.scss';

let About = React.createClass({

  getInitialState() {
      return {
          bubbles: false
      };
  },

  componentDidMount() {


    // change the side quote depending on the page
    // i am so annoyed at react
    var sideQuote = document.getElementsByClassName('side-quote-text')[0];
    sideQuote.innerHTML = "If you can't be bothered reading, <br/> just skip to the bottom to get in touch";

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

  changeBubble() {
    this.setState({
      bubbles: !this.state.bubbles
    })
  },

  render() {
    return <div className="about-wrapper">
      <div className="section">
        <div className="my-skills"></div>
        <div className="my-name">DAISY MARIE SMITH —</div>
        <div className="what-i-want"></div>
      	<div className="long-facts-title" onMouseOver={this.changeOnHover.bind(this, 'long<br/>boring<br/>facts' )} onMouseOut={this.changeOnMouseOut.bind(this, 'A bit of<br/>back<br/>story' )}>A bit of<br/>back<br/>story</div>
      		<p>I'm a <strong>creative developer</strong>, with a background in animation, 3D and design. I'm extremely passionate about creativity, innovative ideas and the mix of art and technology, and I am always on the look out for the next thing I can learn. I have previously worked at <strong>Arup</strong> in their digital team and have most recently worked in <strong>Google Creative Lab Sydney.</strong>
             In my own time I like to play with different ways of making animations and graphics with code, in particular webGL and threejs. I always enjoy learning new languages and tools and am always <strong>eager to learn</strong> something new.
            I am looking for a role which will allow me to continue to expand my skills and knowledge, in the field of creative technologies. I am also interested in learning more about mobile development and love working in a challenging environment.</p>
        <div className="skill-set">
          <div className="skill-set-title" onMouseOver={this.changeOnHover.bind(this, 'meow' )} onMouseOut={this.changeOnMouseOut.bind(this, 'skill set' )}>skill set</div>
          <p>
            Javascript<br/>
            React.js<br/>
            Node.js<br/>
            Angular.js<br/>
            Backbone.js<br/>
            SASS<br/>
            Three.js<br/>
            Canvas<br/>
            D3<br/>
            Node.js<br/>
            Rails<br/>
            Ruby<br/>
            Adobe CC Suite<br/>
            AutoDesk Maya<br/>
            Cinema4D<br/>
          </p>
        </div>
      </div>
      <div className="section">
        <h3 className="about-toggle" onClick={this.changeBubble}> { this.state.bubbles ? "Are you what im looking for?" : "Am i what you're looking for?" }</h3>
        <img src={this.state.bubbles ? "/assets/about-circles-1.svg" : "/assets/about-circles-2.svg"} />
      </div>
      <div className="section">
      	<div className="contact-title">Drop me a line</div>
      	<div className="contact">
      		<ul>
      			<li><a href="mailto:daisymarie128@gmail.com">daisymarie128@gmail.com</a></li>
            <li><a href="https://twitter.com/daisysmells" target="_blank">@daisysmells</a></li>
      			<li><a href="https://au.linkedin.com/in/daisysmith" target="_blank">Linkedin</a></li>
      			<li><a href="https://github.com/daisymarie128" target="_blank">GitHub</a></li>
      		</ul>
      	</div>
      </div>
      <div className="contact"></div>
    </div>;
  }
});

export default About;
