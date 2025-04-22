<script lang="ts">
    import { onMount } from 'svelte';
    import Comparison from '../lib/components/comparison/Comparison.svelte';
    import ModelHandler from '$lib/tools/ModelHandler.js';
    import ModelList from '$lib/components/lists/ModelList.svelte';

    let modelData = $state([]);
    let selectedModels = $state("")
    
    onMount(async () => {
      modelData = await ModelHandler.retrievers.checkAvailModels();
      console.log(modelData)
    });
</script>

<div class="bg-base-100 px-4 py-24">
    <main class="mx-auto max-w-7xl flex flex-col gap-12">
        <h1 class="text-6xl">Placeholder</h1>
        {#if modelData}
            <ModelList {modelData} bind:selectedModels={selectedModels} />
            <p>{selectedModels}</p>
        {/if}
        <Comparison />

    </main>
</div>
