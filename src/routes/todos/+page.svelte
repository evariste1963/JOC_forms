<script>
	/** @type {import('./$types').PageData} */
	export let data;

	async function addTodo(event) {
		console.log(event.target.todo.value);
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
				<!--HIDDEN INPUT TO SEND TO THE SERVER -->
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

	input {
		font-family: cursive, sans-serif;
		font-style: italic;
	}
</style>
