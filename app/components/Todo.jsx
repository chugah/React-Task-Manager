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
		var renderImage = () => {
			return <p>Minion Image</p>
		};
		return (
			<div className={todoClassName} onClick={ () => {
				this.props.onToggle(id);
			}}>
				<div className="list-item"><input type="checkbox" checked={completed} /></div>
				<div className="list-item">{renderImage()}</div>
				<div className="list-item"><p >{text}</p></div>
				<div className="list-item"><p>{renderDate()}</p></div>
			</div>
		);
	}
}

export default Todo;