import React, { Component } from 'react';

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
						Tasks that are finished
					</label>
				</div>
			</div>
		);
	}
}

export default TodoSearch;