import { getTodos } from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const todos = getTodos();
	return { todos };
}
