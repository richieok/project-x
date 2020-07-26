<script>
  export let segment;
  let checked = false;

  function resetCheckBox(e){
    checked = false;
  }
</script>

<style>
  nav {
    background-color: rgb(207, 207, 201);
    min-height: 4rem;
  }

  nav > div {
    display: block;
    position: relative;
    top: 30px;
    left: 30px;

    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  a:hover {
    /* color: tomato; */
    font-weight: bold;
    transition: font-weight 0.5s ease-in-out;
  }

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    /* hide this */
    z-index: 2;
    /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: black;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-child(2) {
    transform-origin: 0% 100%;
  }

  input:checked ~ span {
    opacity: 1;
    transform: translateY(-1px) rotate(45deg);
    background: #232323;
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(2) {
    transform: translateY(2px) rotate(-45deg);
  }

  ul {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    /* background: #ededed; */
    background: rgba(207, 207, 201, 0.7);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  li {
    padding: 10px 0;
    font-size: 22px;
  }

  input:checked ~ ul {
    transform: none;
  }

  @media (min-width: 480px) {
  }
</style>

<nav>
  <div>
    <input type="checkbox" bind:checked={checked} />
    <span />
    <span />
    <span />

    <ul>
      <li>
        <a href="#" on:click={resetCheckBox}>Home</a>
      </li>
      <li>
        <a href="shop" on:click={resetCheckBox}>Shop</a>
      </li>
      <li>
        <a href="#" on:click={resetCheckBox}>Contact Us</a>
      </li>

    </ul>
  </div>
</nav>
