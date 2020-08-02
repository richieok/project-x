<script context="module">
  export function preload({ params, query }) {
    return this.fetch("shop.json").then(r =>
      r.json().then(products => {
        return { products };
      })
    );
  }
</script>

<script>
  import TransitionWrapper from "../../components/TransitionWrapper.svelte";
  import ProductCard from "../../components/ProductCard.svelte";
  import { onMount } from "svelte";

  export let products;
  let visible = false;

  $: if (products) {
    console.log("Products found");
  }

  onMount(async () => {
    visible = true;
    // console.log(products);
  });
</script>

<style>
  h1 {
    margin: 1rem;
    background-color: cadetblue;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <title>Shop</title>
</svelte:head>

{#if visible && products}
  <TransitionWrapper>
    <div>
      {#each products as product}
        <ProductCard {...product} />
      {/each}
    </div>
  </TransitionWrapper>
{:else}
  <h1>Loading ...</h1>
{/if}
