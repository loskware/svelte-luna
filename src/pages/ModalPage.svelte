<script>
  import { modal } from "../luna/actions/modal";
  import { fly } from "svelte/transition";

  import { Button, Card } from "../luna";

  let openModal = false;

  const toggleModal = () => (openModal = !openModal);
</script>

<section>
  <Button solid on:click={toggleModal}>Open Modal</Button>

  {#if openModal}
    <div use:modal in:fly={{y:-40, duration: 300}}>
      <Card hasShadow>
        <div class="container">
          <h1>HI! MY NAME IS MODAL!</h1>
          <Button theme="danger" on:click={toggleModal}>Close</Button>
        </div>
      </Card>
    </div>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin: 16px 0;
    white-space: nowrap;
  }
  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
