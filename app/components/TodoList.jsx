import React, { Component } from 'react';
import Todo from 'Todo';



class TodoList extends Component {
	renderTodos() {
		var { todos } = this.props;
			if (todos.length === 0) {
				return (
					<p className="container-message">Nothing To Do</p>
				);
			}
			
			return todos.map( (todo) => {
				return (
					<div className="todo-list-container">
						<div className="todo-list-item">
							<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
						</div>
					</div>				
				);
			});
	}
	render() {
		return (
			<div>
				{this.renderTodos()}
			</div>
		);
	}
}

export default TodoList;