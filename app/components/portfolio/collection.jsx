import React from 'react';
import Isotope from 'isotope-layout';
import ClassNames from 'classnames';
import {Link} from 'react-router';
import './index.scss';


var iso, lastSelected, oldSelectedEl, currentSelectedEl;

var currentSelected = "*";

const Projects = React.createClass({ 

	getInitialState() {
	    return {
	        projects: null,
	        currentProject: null  
	    };
	},

	componentDidMount() {
		
		var filtersElem = document.getElementsByClassName('filter')[0];

    iso = new Isotope( '.grid', {
			itemSelector: '.element-item',
			layoutMode: 'fitRows'
		});

		// $.get(this.props.source, function(result) {
      	var _this = this;
		    d3.json('../data/projects.json', function(d){
		      _this.setState({projects: d});
			    
		    }) 
    // }.bind(this));

	},

	generateRandomNumber() {
		var number = Math.floor(Math.random() * 3);
		return number;
	},

	componentDidUpdate(prevProps, prevState) {
			// need to force isotope to reload after the items have been rendered
			// react sucks.
      iso.reloadItems()
	    iso.arrange({ filter: "*" });
	},

	filter(value) {

		if(!currentSelectedEl) {
			var firstChangeEl = document.getElementsByClassName('selected')[0];
			firstChangeEl.classList.remove('selected')
		}else{
			currentSelectedEl.classList.remove('selected');
		}
		if (value == "*") {
			currentSelected = "all";
			currentSelectedEl = document.getElementsByClassName('filter')[0];
			currentSelectedEl.classList.add('selected')
		}else {
	    currentSelected = value;
			currentSelectedEl = document.getElementsByClassName(currentSelected)[0];
			currentSelectedEl.classList.add('selected')
		}


	    iso.arrange({ filter: value });
	},

	render() {
		const projects = this.state.projects || [];
		return <div className="">
			<div id="filters" className="filters-button-group">
		      <div className="filter all selected" onClick={this.filter.bind(this, '*')}>show all</div>
		      <div className="filter .web" onClick={this.filter.bind(this, '.web')}>Web Development</div>
		      <div className="filter .design" onClick={this.filter.bind(this, '.design')}>Design</div>
		      <div className="filter .javascript" onClick={this.filter.bind(this, '.javascript')}>javascript</div>
		      <div className="filter .illustrator" onClick={this.filter.bind(this, '.illustrator')}>illustrator</div>
		    </div>
			<div className="grid">

				
			{projects.map(t => {
				var string = t.content;
				var maxLength = 70; // maximum number of characters to extract

				//trim the string to the maximum length
				var trimmedString = string.substr(0, maxLength);

				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
					var bgImage = 'url(/assets/shape-' + this.generateRandomNumber() + '.svg)';
					return [<Link to={`/portfolio/${t.id}`} className={"element-item " + t.filterTags} key={t.id}>
							<h1>{'—' + t.title}</h1>
							<p>{trimmedString}</p>
					</Link>, 
					<Link to={`/portfolio/${t.id}`} style={{backgroundImage: bgImage}} className={"element-item shape " + t.filterTags} >
					</Link>]
			})}

			</div>
				
		</div>
	}
})

			// {projects.map(t => 
			// 	<div className="element-item" key={t.id}>{t.name}</div>
			// )}

					// {(() => {
					// 	if(projects){
					// 		projects.map(function(project) {
					// 			return
					// 			<div className="project">bla</div>
					// 		})
					// 	}
					// })()}


export default Projects;