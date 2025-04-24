<script lang="ts">
    let prompt = $state("")
    let counter = $state(false)

</script>


<section>
    <h2 class="text-3xl">Enter Prompt</h2>

    <div class="flex flex-col gap-4 my-2">
        <div class="h-fit flex items-center relative bg-base-300 px-2 py-4 rounded-sm">
			<textarea
				placeholder="What's on your mind?"
				aria-label="Create your post prompt"
				class={`w-full h-10 focus:outline-0 focus:h-52 ${prompt.length > 0 && 'h-52'}  transition-all duration-150 leading-normal py-2 px-4 resize-none overflow-hidden`}
				bind:value={prompt}
				onfocus={() => (counter = !counter)}
				onfocusout={() => (counter = !counter)}
			>
			</textarea>
			{#if counter}
				<p
					class={`absolute py-2 px-4 self-end ${prompt.length < 400 ? 'text-info' : 'text-error'} right-0`}
				>
					{prompt.length}/400
				</p>
			{/if}
		</div>
        <div>
            <button type="button" class="btn" aria-label="Submit prompt">Submit Prompt</button>
        </div>
    </div>
</section>