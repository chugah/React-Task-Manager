import React, { Component } from 'react';

class Translator extends Component {
  	componentWillMount () {
    	const script_one = document.createElement("script");
    	const script_two = document.createElement("script");
    	const script_three = document.createElement("script");
    	
    	script_one.src = "https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.10.2/paper-full.min.js";
    	script_one.async = true;
    	script_two.src = "http://little-waterfall-1312.herokuapp.com/js/library.js";
    	script_two.async = true;
    	script_three.src = "https://cdnjs.cloudflare.com/ajax/libs/minitranslate/1.2.0/minitranslate.min.js";
    	script_three.async = true;
    	
    	document.body.appendChild(script_one);
    	document.body.appendChild(script_two);
    	document.body.appendChild(script_three);
  	}
	render(){
		return (
			<div>
				<div className="container-translator">
			        <div className="row">
			            <div className="large-4 column">
			            	<h3>English</h3>
			                <textarea type="text" className="nixfocus mt-patient" id="mt-input" placeholder="Try it out!" />
			            </div>
			            <hr />
			            <div className="large-4 column">
			            	<h3 align="center">Magic Button</h3>
			                <button id="mt-button" className="expanded hollow button">CLICK ME</button>
			            </div>
			            <hr />
			            <div className="large-4 column">
			                <h3 align="right">Minionese</h3>
			                <textarea type="text" className="nixfocus mt-patient" id="mt-output" placeholder="Click 'Translate it'!" />
			            </div>
			        </div>
				</div>
			</div>
		);
	}
}

export default Translator;