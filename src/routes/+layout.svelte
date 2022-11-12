<script>
  import Header from "$lib/Header.svelte";
  import Navigation from "$lib/Navigation.svelte";
</script>

<main class="top">
  <Header />
  <Navigation />
</main>

<style>
  :root {
    background-color: #efefef;
    text-align: center;
  }
  .top {
    border: 3px solid #000000
  }
</style>

<slot></slot>