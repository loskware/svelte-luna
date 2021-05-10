<script>
  import Button from "./lib/components/Button.svelte";
  import LunaIcon from "./assets/LunaIcon.svelte";
  import Avatar from "./lib/components/Avatar.svelte";
  import Card from "./lib/components/Card.svelte";

  let counter = 0;

  document.body.classList.add("theme-dark");
</script>

<main>
  <h1>Counter: {counter}</h1>
  <Button
    label="INCREMENT"
    theme="accent"
    on:click={() => counter++}
    on:mousemove={() => console.log("move")}
  >
    <LunaIcon size={20} />
  </Button>
  <Button label="DECREMENT" theme="danger" on:click={() => counter--}>
    <LunaIcon size={20} />
  </Button>
  <hr />
  <Avatar src="images/grogu-portrait.jpg" size={200} alt="grogu portrait" />
  <hr />
  <Card padding={40} hasBorder >Default theme...</Card>
  <hr />
  <Card padding={40} hasBorder theme="accent" >Accent theme...</Card>
  <hr />
  <Card padding={40} hasBorder theme="danger" >Danger theme...</Card>
  <hr />
  <Card padding={40} hasBorder theme="success">Success theme...</Card>
  <hr />
  <Card padding={40} hasBorder theme="warning">Warning theme...</Card>
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
  hr {
    border: none;
    height: 16px;
  }
</style>
