import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
	render() {
		var { id, text, completed, createdAt, completedAt } = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm a');
		};
		return (
			<div className={todoClassName} onClick={ () => {
				this.props.onToggle(id);
			}}>
				<div><input type="checkbox" checked={completed} /></div>
				<div>
					<p>{text}</p>
				 	<p className="todo__subtext">{renderDate()}</p>
				 </div>
			</div>
		);
	}
}

export default Todo;