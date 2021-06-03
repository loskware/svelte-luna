<script>
  import { modal } from "../luna/actions/modal";
  import { fly } from "svelte/transition";

  import { Button, Card } from "../luna";

  let openModal = false;

  const toggleModal = () => (openModal = !openModal);
</script>

<section>
  <Card>
    <div class="container">
      <h1>Modal Views</h1>
      <h2>In Luna elements can be made modal via the modal action. No special components are required, just attach the use:modal directive to the element</h2>
      <Button solid on:click={toggleModal}>Open Modal</Button>
    </div>
  </Card>

  {#if openModal}
    <div use:modal in:fly={{ y: -40, duration: 300 }}>
      <Card hasShadow>
        <div class="container">
          <img src="./assets/modal.png" alt="modal">
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
    max-width: 350px;
  }
  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  h2 {
    color: var(--luna-accent-text-color);
    margin-bottom: 32px;
  }
  img {
    margin-bottom: 32px;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
