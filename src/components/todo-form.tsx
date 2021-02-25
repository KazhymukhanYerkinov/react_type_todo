import * as React from 'react';
import shortid from 'shortid';


import { TodoInterface, TodoFormInterface } from '../interfaces';


const TodoForm = (props: TodoFormInterface) => {
	// Создать ref для input 
	const inputRef = React.useRef<HTMLInputElement>(null);

	// Создать новое stateForm
	const [formState, setFormState] = React.useState('');

	// Обработка изменения todo input
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		// Обнавить stateForm текстом из inputa
		setFormState(event.target.value);
	}

	// Обработывать 'Enter' при input todo
	function handleInputEnter(event: React.KeyboardEvent) {
		// Проверьте клавиши "Enter"
		if (event.key === 'Enter') {
			// Подготовить новый объект todo
			const newTodo: TodoInterface = {
				id: shortid.generate(),
				text: formState,
				isCompleted: false
			}

			// Создать новую todo item
			props.handleTodoCreate(newTodo);

			// Сбросить input
			if (inputRef && inputRef.current) {
				inputRef.current.value = ''
			}
		}
	}
	


	return (
		<div className = "todo-form">
			<input 
			 ref = {inputRef}
			 type = "text"
			 placeholder = "Enter new todo"
			 onChange = {event => handleInputChange(event)}
			 onKeyPress = {event => handleInputEnter(event)}
			/>
		</div>
	)
}
export default TodoForm;