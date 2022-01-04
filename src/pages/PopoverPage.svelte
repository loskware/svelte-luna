<script>
  import { Button } from "../luna";
  import Card from "../luna/components/Card.svelte";
  import Popover from "../luna/components/Popover.svelte";

  let showPopover = [false, false, false, false];
</script>

<section>
  <Card style="grid-column: 2; grid-row: 2;">
    <div class="container">
      <h1 class="title">Popover</h1>
      <p class="description">
        Popover position can be customized through its property.<br>
        You can also customize various aspect as the transition (and the transition parameters), the spacing and the behavior on click outside.
      </p>
      <p class="wip">Automatic positioning is a work in progress.</p>
    </div>
  </Card>
  <div class="top left">
    <Popover bind:showPopover={showPopover[0]}>
      <div class="popup">
        <p>
          I'm a Popup with<br />
          <code>position = "bottom-right"</code><br />
          (default)
        </p>
      </div>
      <svelte:fragment slot="target">
        <Button solid on:click={() => (showPopover[0] = !showPopover[0])}>
          Click Me!
        </Button>
      </svelte:fragment>
    </Popover>
  </div>
  <div class="top right">
    <Popover bind:showPopover={showPopover[1]} position="bottom-left">
      <div class="popup">
        <p>
          I'm a Popup with<br />
          <code>position = "bottom-left"</code>
        </p>
      </div>
      <svelte:fragment slot="target">
        <Button solid on:click={() => (showPopover[1] = !showPopover[1])}>
          Click Me!
        </Button>
      </svelte:fragment>
    </Popover>
  </div>
  <div class="bottom left">
    <Popover bind:showPopover={showPopover[2]} position="top-right">
      <div class="popup">
        <p>
          I'm a Popup with<br />
          <code>position = "top-right"</code>
        </p>
      </div>
      <svelte:fragment slot="target">
        <Button solid on:click={() => (showPopover[2] = !showPopover[2])}>
          Click Me!
        </Button>
      </svelte:fragment>
    </Popover>
  </div>
  <div class="bottom right">
    <Popover bind:showPopover={showPopover[3]} position="top-left">
      <div class="popup">
        <p>
          I'm a Popup with<br />
          <code>position = "top-left"</code>
        </p>
      </div>
      <svelte:fragment slot="target">
        <Button solid on:click={() => (showPopover[3] = !showPopover[3])}>
          Click Me!
        </Button>
      </svelte:fragment>
    </Popover>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 300px auto 300px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
    max-width: 350px;
  }
  p.description {
    margin-top: 8px;
    color: var(--luna-accent-text-color);
  }
  p.wip {
    font-size: 0.875rem;
    margin-top: 16px;
    color: var(--luna-text-color-tertiary);
  }

  .left {
    justify-self: start;
  }
  .right {
    justify-self: end;
  }
  .top {
    align-self: flex-start;
  }
  .bottom {
    align-self: flex-end;
  }
  .top.left {
    grid-column: 1;
    grid-row: 1;
  }
  .top.right {
    grid-column: 3;
    grid-row: 1;
  }
  .bottom.left {
    grid-column: 1;
    grid-row: 3;
  }
  .bottom.right {
    grid-column: 3;
    grid-row: 3;
  }
  .popup {
    background-color: rgb(248, 124, 52);
    color: var(--luna-soft-text-color);
    border-radius: 8px;
    padding: 16px 32px;
    text-align: center;
  }

  code {
    font-size: 1rem;
    line-height: 2rem;
  }
</style>
