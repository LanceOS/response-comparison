<script lang="ts">
    let props = $props();

</script>

<section class="border-2">
    <div class="border-2">
        <h2>Models</h2>

        <div>
            {#each props.modelData as model}
                <p>{model.name}</p>
            {/each}
        </div>
    </div>
</section>
