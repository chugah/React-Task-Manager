import React, { Component } from 'react';
import Todo from 'Todo';



class TodoList extends Component {
	renderTodos() {
		var { todos } = this.props;
			if (todos.length === 0) {
				return (
					<div>
						<div className="row">
							<div className="large-12 large-centered column">
								<div className="container" id="background-todo-list">
									<p className="container-message">Congratulations! You are all done.</p>
									<img src= "http://i.imgur.com/zt6Na6V.gif" id="plug-minion" width="100%" height="50%" />
								</div>				
							</div>
						</div>
					</div>					
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