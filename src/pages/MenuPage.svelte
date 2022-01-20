<script>
  import { Button, Card, Menu, MenuItem } from "../luna";
  import Radio from "../luna/Radio.svelte";

  let option1;

  /** @type {"bottom-left" | "bottom-right" | "top-left" | "top-right"} */
  let anchorOption = "bottom-left";
</script>

<section>
  <Card
    outlined
    backgroundColor="transparent"
    style="grid-column: 2; grid-row: 2;"
  >
    <div class="container">
      <h1 class="title">Menu</h1>
      <p class="description">
        Popover anchor position can be customized through the <i
          ><b>anchor</b></i
        >
        property.<br />
        You can also customize various aspect as the transition (and the transition
        parameters), the spacing and the behavior on click outside.
      </p>
      <p class="wip">Automatic positioning is a work in progress.</p>
    </div>
    <hr />
    <div class="container">
      <div class="anchor-option-grid">
        <h2>Anchor</h2>
        <div>
          <Radio
            label="Bottom Left"
            value="bottom-left"
            bind:group={anchorOption}
          />
          <br />
          <Radio
            label="Bottom Right"
            value="bottom-right"
            bind:group={anchorOption}
          />
          <br />
          <Radio label="Top Left" value="top-left" bind:group={anchorOption} />
          <br />
          <Radio
            label="Top Right"
            value="top-right"
            bind:group={anchorOption}
          />
        </div>
      </div>
      <div class="menu-wrapper">
        <Menu
          anchor={anchorOption}
          onAction={(_, action) => (option1 = action)}
        >
          <svelte:fragment slot="target">
            <Button outlined>Context Menu</Button>
          </svelte:fragment>
          <MenuItem action="add">Add</MenuItem>
          <MenuItem action="delete">Delete</MenuItem>
          <hr class="divider" />
          <MenuItem action="edit">Edit</MenuItem>
        </Menu>
        <p class="selected-option">
          Option Clicked: <span>{option1 || ""}</span>
        </p>
      </div>
    </div>
  </Card>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 300px auto 300px;
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
  hr {
    border-bottom-width: 0;
    border-color: var(--luna-border-color);
  }
  hr.divider {
    border-color: var(--luna-border-color-soft);
    margin: 8px 0;
  }
  p.selected-option {
    margin-top: 16px;
  }
  p.selected-option > span {
    color: var(--luna-success-color);
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
    max-width: 450px;
  }
  .anchor-option-grid {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    margin-bottom: 24px;
  }
  .anchor-option-grid > h2 {
    margin-right: 16px;
    align-self: center;
  }
  .menu-wrapper {
    text-align: center;
  }
</style>
