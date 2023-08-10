<slot />

<style>
	/*import picocss in layout*/
	@import 'https://unpkg.com/@picocss/pico@latest/css/pico.min.css';

	:global(body) {
		padding: 2rem;
		font-family: cursive, sans-serif;
	}

	:global(input, button) {
		border-radius: 1rem;
	}
</style>
