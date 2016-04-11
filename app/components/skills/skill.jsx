import React from 'react';
import {Link} from 'react-router';
const Skill = React.createClass({

	getInitialState() {
      return {
          skills: null,
          currentSkills: null,
          skillId: null
      };
  },


  componentDidMount() {

    // hange the side quote depending on the page
    // i am so annoyed at react
    var sideQuote = document.getElementsByClassName('side-quote-text')[0];
    sideQuote.innerHTML = "yep, i needed a whole new page to show you this";

    var _this = this;
    var current;
    var index = this.props.params.skillId;
    index = parseInt(index);
    _this.setState({skillId: index});
    d3.json('../data/skills.json', function(d){
      _this.setState({skills: d});
      
      const skills = _this.state.skills || []
      var hello = _this.state.skillId - 1
      current = skills[hello]
      _this.setState({
        currentSkills: current
      });
    });
  },

  render() {
    var currentSkill = this.state.currentSkills || [];
    var images = currentSkill.image || [];
  	var buildTags = currentSkill.tags || [];
    var divStyle = {
      backgroundImage: ''
    }
    // console.log('meow', Header);
    return (
      <div>
        <div id="skill-container">
          <div className="grey-bar">
            <p>SKILLS     /</p>
            <p>{currentSkill.catergory}</p>
          </div>
          <div className="content-wrapper">
            <div className="section">
              <div className="number-icon"><strong>{'0' + currentSkill.id}</strong></div>
              <ul>
              <Link to='/skills'>Back</Link>
                <h3>LINK</h3>
                {buildTags.map(function(result) {
                    return <li>---- {result}</li>;
                  })}
              </ul>
            
            </div>
            <div className="section">
              {images.map(function(result) {
                    divStyle.backgroundImage = 'url(' + result + ')';
                    return <div className="image-holder" style={divStyle}></div>;
                  })}
              <h2>{currentSkill.title}</h2>
              <p>{currentSkill.content}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Skill;