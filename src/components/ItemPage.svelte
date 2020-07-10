<script>
  import Button from "./Button.svelte";
  export let _id;
  export let productName;
  export let images;
  export let brand;
  export let price;
  export let sizes;
  export let productParam;
</script>

<style>
  .image-panel {
    background-color: beige;
  }
  img {
    margin: 0em 2em 0em;
  }
  /* h2 {
      padding: 0.2em;
  } */
  p {
    text-align: center;
  }
  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    list-style: none;
  }
  span {
    text-transform: capitalize;
  }
</style>

<div>
  <div class="top">
    <div class="image-panel">
      <h2>
        <p>{productName}</p>
      </h2>
      <img
        src="https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/{images[0].url}"
        alt="images[0].alt}"
        width={images[0].size.width}
        height={images[0].size.height} />
    </div>
    <div>
      <ul>
        <li>Brand: <span>{brand}</span></li>
        <li>Price: {price}</li>
      </ul>
    </div>
  </div>
  <Button>Add to Cart</Button>
  <!-- <button>Add to Cart</button> -->
</div>
