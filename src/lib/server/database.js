let todos = [
	{
		id: Date.now(),
		text: 'learn how forms work',
		completed: false
	},
	{
		id: Date.now() + 1,
		text: 'my 1st todo',
		completed: false
	}
];

export function getTodos() {
	return todos;
}

export function addTodo(text) {
	const todo = {
		id: Date.now(),
		text,
		completed: false
	};
	todos.push(todo); //hahaha mutating data!!
}

export function removeTodo(id) {
	todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
	todos = [];
}
