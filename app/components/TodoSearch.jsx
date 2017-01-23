import React, { Component } from 'react';

var arrow_path = 'images/arrow.jpg';

class TodoSearch extends Component {
	handleSearch() {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	}
	render() {
		return (
			<div className="container-add-todo">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)}/>
				</div>
				<div className="checkbox">
					<label>	
						<input type="checkbox" id="checkbox1"  ref="showCompleted" onChange={this.handleSearch.bind(this)} />
						<span className="custom-checkbox"><i className="icon-check"></i></span>
						<img id="arrow" src={arrow_path} />
						<span className="checkbox-text">
						Click this box to see what you and the minions have finished.
						</span>
					</label>
				</div>
			</div>
		);
	}
}

export default TodoSearch;