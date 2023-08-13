/** @type {import('./$types').RequestHandler} */

import { json } from '@sveltejs/kit';
import { addTodo } from '$lib/server/database';
import { removeTodo } from '$lib/server/database';

export const POST = async ({ request }) => {
	//reuqest is used so we can get theform data
	const formData = await request.formData();
	const todo = formData.get('todo'); // todo is the name on the form data that we want to get

	//create the data object
	const data = {
		success: false,
		errors: {}
	};

	if (!todo) {
		data.errors.todo = 'required'; //assigns 'required' to data error object errors
		//should really throw the error to the frontend but here we won't fo that

		return json(data, { status: 400 });
	}

	addTodo(todo); //from the server/database
	data.success = true;

	return json(data);
};

export const DELETE = async ({ request }) => {
	const formData = await request.formData();
	const todoId = Number(formData.get('id')); // todo is the name on the form data that we want to get
	removeTodo(todoId); //from the server/database
	return json({ success: true });
};
