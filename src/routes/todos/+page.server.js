import { fail } from '@sveltejs/kit';
import { clearTodos, getTodos, addTodo, removeTodo } from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const todos = getTodos();
	return { todos };
}

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const actions = {
	//default: () => {}
	addTodo: async ({ request }) => {
		const formData = await request.formData();
		const todo = String(formData.get('todo'));

		if (!todo) {
			return fail(400, { todo, missing: true });
		}
		await sleep(2000);

		addTodo(todo);
		return { success: true };
	},
	removeTodo: async ({ request }) => {
		const formData = await request.formData();
		const todoId = Number(formData.get('id'));

		removeTodo(todoId);

		return { success: true };
	},
	clearTodos: () => {
		clearTodos();
	}
};
