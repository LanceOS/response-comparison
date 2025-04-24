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


<section>


</section>
