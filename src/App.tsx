// Импортировать зависимости
import * as React from 'react';

// Импортировать компоненты
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

// Импортировать интерфейсы
import { TodoInterface } from './interfaces';

// Импортировать стили
import './styles/styles.css';

// TodoListApp компонент
const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  // Создать новую todo item
  function handleTodoCreate(todo: TodoInterface) {
    // Подготовить новое состояние задач
    const newTodosState: TodoInterface[] = [...todos];

    // Обновить новое состояние задач
    newTodosState.push(todo);

    // Обновить состояние задач
    setTodos(newTodosState);
  }

  // Обновить существующий элемент задачи
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Подготовить новое todos state
    const newTodosState: TodoInterface[] = [...todos];

    // Найдите нужный элемент для обновления
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value;

    // Обновить todos state 
    setTodos(newTodosState);
  }

  // Удалить существующий элемент задачи
  function handleTodoRemove(id: string) {
    // Подготовить новое состояние задач
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

    // Обновить состояние задач
    setTodos(newTodosState);
  }

  // Отметить существующий элемент задачи как завершенный
  function handleTodoComplete(id: string) {
    // Копировать текущее состояние задач
    const newTodosState: TodoInterface[] = [...todos];

    // Найдите нужный элемент задачи и обновите его ключ isCompleted
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted;

    // Обновить todos state
    setTodos(newTodosState);
  }

  // Проверьте, есть ли у элемента дела заголовок
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error');
    } else {
      event.target.classList.remove('todo-input-error');
    }
  }

  return (
    <div className='todo-list-app'>
      <TodoForm 
        todos = { todos }
        handleTodoCreate = { handleTodoCreate }
      />

      <TodoList
        todos = { todos }
        handleTodoUpdate = { handleTodoUpdate }
        handleTodoRemove = { handleTodoRemove }
        handleTodoComplete = { handleTodoComplete }
        handleTodoBlur = { handleTodoBlur }
      />
    </div>
  )
}

export default TodoListApp;
