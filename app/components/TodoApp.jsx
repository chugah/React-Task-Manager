import React, { Component } from 'react';
import moment from 'moment';
import uuid from 'node-uuid';
import TodoAPI from 'TodoAPI';
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

var header_path = 'images/marching-minions.jpg';
var todo_img_path = 'images/card-minion.jpg';

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	}
	componentDidUpdate() {
		TodoAPI.setTodos(this.state.todos);
	}
	handleAddTodo(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	}
	handleToggle(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			return todo;
		});
		this.setState({todos: updatedTodos});
	}
	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	}
	renderHeaderImage() {
		return (
			<div>
				<div className="expanded row">
					<div className="column large-12">
	    				<img src={header_path} width="100%" />
	    			</div>
	    		</div>
	    	</div>
		);
	}
	render() {
		var { todos, showCompleted, searchText } = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				{this.renderHeaderImage()}
				<div className="row" id="header-row">
					<div className="large-2 column todo-image">
						<div>
							<img src={todo_img_path} />
						</div>
					</div>
					<div className="large-10 column">
						<div className="container">
							<AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="large-8 large-centered column">
						<TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)}/>
					</div>
				</div>	
				<div className="row">
					<div className="large-2 column">
						<img src="http://i.giphy.com/YqTzLj0Vzct9K.gif" id="bounce-minion" />
					</div>
					<div className="large-10 column">
						<div className="container">
							<TodoSearch onSearch={this.handleSearch.bind(this)} />
						</div>
					</div>
				</div>			
			</div>
		)
	}
}

export default TodoApp;