<script>
    export let _id;
    export let productName;
    export let images;
    export let brand;
    export let price;
    export let sizes;
    export let productParam;
</script>

<style>
  article {
    padding: 1em;
    box-shadow: 10px 10px rgba(15, 14, 13, 0.3);
    margin: 10px;
    background-color: rgb(207, 207, 201);;
  }
  img {
    border: solid 2px grey;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
</style>

<article>
  <h3>
    <a href="products/{productParam}">{productName}</a>
  </h3>
  <a href="products/{productParam}"><img src="https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/{images[0].url}" alt={images[0].alt} width="200px" ></a>
  <!-- <img src="https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/{images[0].url}" alt={images[0].alt} width="200px" > -->
</article>
