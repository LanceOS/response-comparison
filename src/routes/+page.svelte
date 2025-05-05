<script lang="ts">
    import { onMount } from 'svelte';
    import Comparison from '../lib/components/comparison/Comparison.svelte';
    import ModelHandler from '$lib/tools/ModelHandler.js';
    import ModelList from '$lib/components/lists/ModelList.svelte';
	import Prompt from '$lib/components/prompt/Prompt.svelte';
	import type { IResponse } from '$lib/@types/Interfaces.js';

    let modelData = $state([]);
    let selectedModels = $state([])
    let modelResponses: IResponse[] = $state([])

    const sendPrompt = async (prompt: string) => {
        for(let i = 0; i < selectedModels.length; i++) {
            const response = await ModelHandler.creators.createModelMessage(selectedModels[i], prompt);
            modelResponses = [...modelResponses, response]
            console.log(response)
        }
    }
    
    onMount(async () => {
      modelData = await ModelHandler.retrievers.checkAvailModels();
      console.log(modelData)
    });
</script>


<div class=" px-4 py-24 bg-base-100 min-h-dvh">
    <main class="mx-auto max-w-7xl flex flex-col gap-12">
        <h1 class="text-6xl">Placeholder</h1>

        {#if modelData}
            <ModelList {modelData} bind:selectedModels={selectedModels} />
        {/if}
        <Prompt {sendPrompt}/>

        <Comparison {modelResponses}/>

    </main>
</div>
