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
					<input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)} />
					<label>	
						Tasks that are finished
					</label>
			</div>
		);
	}
}

export default TodoSearch;