<script>
  import { modal } from "../luna/actions/modal";
  import { fly } from "svelte/transition";

  import { Button, Card } from "../luna";

  let openModal = false;

  const toggleModal = () => (openModal = !openModal);
  const onClickOutside = () => toggleModal();
</script>

<section>
  <Card>
    <div class="container">
      <h1 class="title">Modal Views</h1>
      <p class="description">
        In Luna elements can be made modal via the modal action. No special
        components are required, just attach the <span>use:modal</span>
        directive to the element
      </p>
      <Button solid on:click={toggleModal}>Open Modal</Button>
    </div>
  </Card>

  {#if openModal}
    <div
      use:modal={{ onClickOutside: onClickOutside }}
      in:fly={{ y: -40, duration: 300 }}
    >
      <Card hasShadow>
        <div class="container">
          <img
            height="300px"
            width="300px"
            src="./assets/panda.svg"
            decoding="async"
            alt="happy panda"
          />
          <a href="https://www.freepik.com/vectors/food"
            >created by catalyststuff www.freepik.com</a
          >
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
  p.description {
    color: var(--luna-accent-text-color);
    margin-top: 8px;
    margin-bottom: 32px;
  }
  span {
    border-radius: 4px;
    padding: 0 4px;
    background-color: var(--luna-bkg-color-alpha2);
  }
  a {
    margin-bottom: 32px;
    text-align: center;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
