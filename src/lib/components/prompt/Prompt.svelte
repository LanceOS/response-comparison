<script lang="ts">
    let prompt = $state("")
	let charLimit = $state(false);
	const { sendPrompt } = $props();

	const submitPrompt = () => {
		if(prompt.length > 1000) {
			charLimit = true;
			return;
		}

		sendPrompt(prompt)
		prompt = "";
	}


</script>



<section>
    <h2 class="text-3xl">Enter Prompt</h2>

    <div class="flex flex-col gap-4 my-2">
        <div class="h-fit flex flex-col items-right relative bg-base-300 px-6 py-6 rounded-sm">
			<textarea
				placeholder="What's on your mind?"
				aria-label="Create your post prompt"
				class={`w-full h-6 focus:outline-0 focus:h-52 ${prompt.length > 0 && 'h-52'}  transition-all duration-150 leading-normal resize-none overflow-hidden`}
				bind:value={prompt}
				onfocus={() => charLimit = false}
			>
			</textarea>
			{#if charLimit}
				<p class="text-error">Exceeded Character Limit</p>
			{/if}
		</div>
        <div>
            <button type="button" class="btn" aria-label="Submit prompt" onclick={() => submitPrompt()} disabled={charLimit}>Submit Prompt</button>
        </div>
    </div>
</section>
