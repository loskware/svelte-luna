<script lang="ts">
  import { Button, Card, Dropdown } from "$lib";
  let showDropdown = [false, false, false, false];
</script>

<section>
  <Card style="grid-column: 2; grid-row: 2;">
    <div class="container">
      <h1 class="title">Dropdown</h1>
      <p class="description">
        Dropdown anchor position can be customized through the <i><b>anchor</b></i> property.<br>
        You can also customize various aspect as the transition (and the transition parameters), the spacing and the behavior on click outside.
      </p>
    </div>
  </Card>
  <div class="top left">
    <Dropdown bind:show={showDropdown[0]} anchor="bottom-left">
      <Button solid on:click={() => (showDropdown[0] = !showDropdown[0])}>
        Click Me!
      </Button>
      <svelte:fragment slot="dropdown">
        <div class="popup">
          <p>
            I'm a Dropdown with<br />
            <code>anchor = "bottom-left"</code><br />
            (default)
          </p>
        </div>
      </svelte:fragment>
    </Dropdown>
  </div>
  <div class="top right">
    <Dropdown bind:show={showDropdown[1]} anchor="bottom-right">
      <Button solid on:click={() => (showDropdown[1] = !showDropdown[1])}>
        Click Me!
      </Button>
      <svelte:fragment slot="dropdown">
        <div class="popup">
          <p>
            I'm a Dropdown with<br />
            <code>anchor = "bottom-right"</code>
          </p>
        </div>
      </svelte:fragment>
    </Dropdown>
  </div>
  <div class="bottom left">
    <Dropdown bind:show={showDropdown[2]} anchor="top-left">
      <Button solid on:click={() => (showDropdown[2] = !showDropdown[2])}>
        Click Me!
      </Button>
      <svelte:fragment slot="dropdown">
        <div class="popup">
          <p>
            I'm a Dropdown with<br />
            <code>anchor = "top-left"</code>
          </p>
        </div>
      </svelte:fragment>
    </Dropdown>
  </div>
  <div class="bottom right">
    <Dropdown bind:show={showDropdown[3]} anchor="top-right">
      <Button solid on:click={() => (showDropdown[3] = !showDropdown[3])}>
        Click Me!
      </Button>
      <svelte:fragment slot="dropdown">
        <div class="popup">
          <p>
            I'm a Dropdown with<br />
            <code>anchor = "top-right"</code>
          </p>
        </div>
      </svelte:fragment>
    </Dropdown>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 100px auto 100px;
    justify-content: center;
    padding-top: 36px;
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
