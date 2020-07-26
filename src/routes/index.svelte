<script context="module">
  export async function preload({ params, query }){
    const res = await this.fetch("splash.json");
    const images = await res.json()
    return { images };
  }
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  export let images;
  let visible = false;
  let interval;
  let activeIndex = 0;

  onMount(() => {
    // visible = true;
    console.log('Mounted');
    interval = setInterval(() => {
      let next = activeIndex + 1;
      activeIndex = next >= images.length ? 0 : next;
    }, 4000);
    
  });

  onDestroy(()=>{
    console.log('Destroyed');
    clearInterval(interval);
  });
</script>

<style>

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  img {
    display: block;
    margin: auto;
    max-width: 60%;
    position: absolute;
    border: 2px solid grey;
    border-radius: 4px;
  }

  /* @media only screen and (min-width: 480px) {
    img {
      display: block;
      margin: auto;
      max-width: 80%;
      position: absolute;
    }
  } */
</style>

<svelte:head>
  <title>Project X</title>
</svelte:head>

<div>
  {#each images as image, i}
    {#if activeIndex == i}
      <img transition:fade={{ delay:1000, duration: 800}} width="400" src={image.url} alt="" />
    {/if}
  {/each}
</div>
