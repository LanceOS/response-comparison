<script lang="ts">
    import { onMount } from 'svelte';
    import Comparison from '../lib/components/comparison/Comparison.svelte';
    import ModelHandler from '$lib/tools/ModelHandler.js';
    import Background from '$lib/components/background/Background.svelte';
    import ModelList from '$lib/components/lists/ModelList.svelte';

    let modelData = $state([]);
    
    
    onMount(async () => {
      modelData = await ModelHandler.retrievers.checkAvailModels();
      console.log(modelData)
    });
</script>

<div class="bg-base-100 px-4 py-16">
    <main class="mx-auto max-w-7xl border-2">
        <h1 class="text-4xl">Placeholder</h1>
        {#if modelData}
            <ModelList {modelData} />
        {/if}
        <Comparison />
    </main>
</div>
