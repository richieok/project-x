<script>
    export let type = 'submit';
</script>

<style>
    button {
        width: 5rem;
        padding: 0.5rem 0px;
        margin: 0.5rem 0px;
        border-radius: 6px;
        background-color: beige;
    }
</style>

<button {type}>
    <slot></slot>
</button>