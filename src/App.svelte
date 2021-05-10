<script>
  import Button from "./lib/components/Button.svelte";
  import LunaIcon from "./assets/LunaIcon.svelte";

  let counter = 0;

  document.body.classList.add("theme-dark");
  
</script>

<main>
  <h1>Counter: {counter}</h1>
  <Button label="INCREMENT" theme="accent" on:click={() => counter++}>
    <LunaIcon size={20} slot="icon" />
  </Button>
  <Button label="DECREMENT" theme="danger" on:click={() => counter--}>
    <LunaIcon size={20} slot="icon" />
  </Button>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
