<script>
	/** @type {import('./$types').PageData} */
	import { invalidateAll } from '$app/navigation';
	export let data, form;

	async function addTodo(event) {
		const formEl = event.target;
		const data = new FormData(formEl);

		//ping the endpoint
		const response = await fetch(formEl.action, {
			method: 'POST',
			body: data
		});

		const responseData = await response.json();
		//set the form variable

		form = responseData;
		formEl.reset();
		await invalidateAll();
	}

	async function removeTodo(event) {}
</script>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form on:submit|preventDefault={removeTodo} method="POST">
				<!-- USE FORMS INSTEAD OF BUTTONS!!-- HOWEVER SMALL THE FORM MAYBE!!-->
				<input type="hidden" name="id" value={todo.id} />
				<!--HIDDEN INPUT TO SEND ID TO THE SERVER -->
				<button class="delete" type="submit">❌</button>
			</form>
		</li>
	{/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
	<!--<label for="adding a todo">add a todo</label> -->
	<input type="text" name="todo" placeholder="create a todo" />
	<button type="submit">➕ Add Todo</button>
</form>

<!-- NO ACTION FIELD IN THE FORMS BECAUSE WE ARE SUBMITTING TO THE SAME PAGE -->

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}

	.error {
		color: tomato;
	}

	input {
		font-style: italic;
	}
</style>
