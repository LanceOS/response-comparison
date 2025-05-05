<script lang="ts">
    let { selectedModels = $bindable(), modelData } = $props();


    const addModel = (model: string) => {
        selectedModels.push(model)
    }
</script>

<section class="">
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
            <h2 class="text-3xl">Search Models</h2>

            <div class="bg-base-300 w-fit px-6 py-4 my-2 rounded-sm">
                <input class="focus:outline-0"/>
            </div>
        </div>

        
        <div class="flex flex-col gap-2">
            <div>
                <button type="button" aria-label="View Models" class="text-2xl font-semibold">View Models</button>
            </div>
    
            <div class="flex gap-2">
                {#each modelData as item}
                    <button type="button" aria-label="Select Model" class="w-56 btn" onclick={() => addModel(item.name)}>{item.name}</button>
                {/each}
            </div>
        </div>


        <div class="flex flex-col gap-2">
            <p class="text-2xl font-semibold">Selected Models</p>

            <div class="flex gap-2">
                {#each selectedModels as item}
                    <p>{item}</p>
                {/each}
            </div>
        </div>
        
    </div>
</section>
