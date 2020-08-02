<script>
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  // export let images;
  let visible = false;
  let interval;
  let activeIndex = 0;
  const images = [
    {
      url:
        "https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/sitting-on-concrete.jpg"
    },
    {
      url:
        "https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/two-women-standing-beside-each-other.jpg"
    }
  ];
</script>

<style>
  div {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  img {
    display: block;
    /* margin: auto; */
    /* max-width: 60%; */
    /* position: absolute; */
    border: 2px solid grey;
    border-radius: 2px;
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

<TransitionWrapper>
  <div>
    <img width="400" height="600" src={images[0].url} alt="" />
    <!-- {#each images as image}
      <img width="400" height="600" src={image.url} alt="" />
    {/each} -->
  </div>
</TransitionWrapper>
