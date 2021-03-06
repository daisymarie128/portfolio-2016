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

		var sideQuote = document.getElementsByClassName('side-quote-text')[0];
    sideQuote.innerHTML = "Collection of projects which allow me to afford to feed my kitty cat";
		// set style for the side quote
		var sideElement = document.getElementsByClassName('side-quote')[0];
		var contentElement = document.getElementsByClassName('content')[0];
		sideElement.classList.add('projects-page');
		contentElement.classList.add('projects-page');
		
		var filtersElem = document.getElementsByClassName('filter')[0];

    iso = new Isotope( '.grid', {
			itemSelector: '.element-item',
			layoutMode: 'fitRows'
		});

  	var _this = this;
    d3.json('../data/projects.json', function(d){
      _this.setState({projects: d});
	    
    }) 

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
		      <div className="filter .design" onClick={this.filter.bind(this, '.design')}>design</div>
		      <div className="filter .animation" onClick={this.filter.bind(this, '.animation')}>animation</div>
		      <div className="filter .code" onClick={this.filter.bind(this, '.code')}>code</div>
		      <br/>
		      <div className="filter .javascript small-filter" onClick={this.filter.bind(this, '.javascript')}>javascript</div>
		      <div className="filter .rails small-filter" onClick={this.filter.bind(this, '.rails')}>rails</div>
		      <div className="filter .frameworks small-filter" onClick={this.filter.bind(this, '.frameworks')}>frameworks</div>
		      <div className="filter .threejs small-filter" onClick={this.filter.bind(this, '.threejs')}>threejs</div>
		      <div className="filter .datavis small-filter" onClick={this.filter.bind(this, '.datavis')}>datavis</div>
		      <div className="filter .ux small-filter" onClick={this.filter.bind(this, '.ux')}>ux/ui</div>
		    </div>
			<div className="grid">

				
			{projects.map(t => {
					var bgImage = 'url(/assets/shape-' + this.generateRandomNumber() + '.svg)';
					return [<Link key={t.id} to={`/portfolio/${t.id}`} className={"element-item " + t.filterTags}>
							<h1>{t.title}</h1>
							<p>{t.content}</p>
					</Link>, 
					<Link to={`/portfolio/${t.id}`} style={{backgroundImage: bgImage}} className={"element-item shape " + t.filterTags} >
					</Link>]
			})}

			</div>
				
		</div>
	}
})

export default Projects;