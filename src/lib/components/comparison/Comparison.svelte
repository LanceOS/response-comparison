<script lang="ts">
    let { modelResponses } = $props();
</script>


{#snippet Responses(section: any)}
    {#each section as item}
        <div class="w-96 space-y-2 shadow-lg rounded-sm p-8 bg-base-200">
            <h3 class="text-2xl text-center">{item.model}</h3>
            <p>{item.response}</p>
        </div>
    {/each}
{/snippet}

<section>
    <div class="min-h-[24rem] flex justify-center gap-8">
        {@render Responses(modelResponses)}
    </div>
</section>
