<script lang="ts">
    import { onMount } from 'svelte';

    let responseData = $state([]);

    onMount(() => {
        responseData = [
            {
                id: 1,
                text: 'Placeholder response'
            },
            {
                id: 2,
                text: 'Placeholder response'
            }
        ];
    });
</script>

{#snippet Responses(section)}
    {#each section as response}
        <h2>{response.text}</h2>
        <p>{response.id}</p>
    {/each}
{/snippet}

<section>
    <div>
        {@render Responses(responseData)}
    </div>
</section>
