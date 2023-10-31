<script>
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	export let data;
	export let form;
</script>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo" use:enhance>
				<!-- USE FORMS INSTEAD OF BUTTONS!!-- HOWEVER SMALL THE FORM MAYBE!!-->
				<input type="hidden" name="id" value={todo.id} />
				<!--HIDDEN INPUT TO SEND ID TO THE SERVER -->
				<button class="delete" type="submit">❌</button>
			</form>
		</li>
	{/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance>
	<!--<label for="adding a todo">add a todo</label> -->
	<input type="text" name="todo" placeholder="create a todo" />
	{#if form?.missing}
		<!-- the ? is/are for if they don't exist -->
		<p class="error">This field is required</p>
	{/if}
	<button type="submit">➕ Add Todo</button>
	<button formaction="?/clearTodos" class="secondary" type="submit">Clear</button>
</form>

{#if form?.success}
	<p>Added todo! 👍</p>
{/if}

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
