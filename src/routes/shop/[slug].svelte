<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`shop/${params.slug}.json`);
    const data = await res.json();
    // console.log(data);
    if (res.status === 200) {
      return { product: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  // import ProductCard from "../../components/ProductCard.svelte";
  import ItemPage from "../../components/ItemPage.svelte";
  export let product;

  $: if (product){
      console.log(product);
  }
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <title>Products</title>
</svelte:head>

<div>
  <!-- {console.log(product[0])} -->
  {#if product}
    <ItemPage {...product} />
  {:else}
    <h3>No products found</h3>
  {/if}
</div>
