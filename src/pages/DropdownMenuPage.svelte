<script lang="ts">
  import { Button, Card, Divider, DropdownMenu, MenuItem, Radio } from "$lib";

  let selectedOption: string;
  let anchorOption: "bottom-left" | "bottom-right" | "top-left" | "top-right" =
    "bottom-left";
</script>

<section>
  <Card style="margin: 32px">
    <div class="container">
      <h1 class="title">Anchor</h1>
      <p class="description">
        DropdownMenu anchor edge can be customized through the
        <i><b>anchor</b></i> property.<br />
      </p>
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
        <div>
          <DropdownMenu
            anchor={anchorOption}
            onAction={(action, _) => (selectedOption = action)}
          >
            <Button outlined>Left Click</Button>
            <svelte:fragment slot="menu">
              <MenuItem action="add">Add</MenuItem>
              <MenuItem action="delete">Delete</MenuItem>
              <Divider />
              <MenuItem action="edit">Edit</MenuItem>
            </svelte:fragment>
          </DropdownMenu>
        </div>
        <p class="selected-option">
          Option Clicked: <span>{selectedOption || ""}</span>
        </p>
      </div>
    </div>
  </Card>
  <Card style="margin: 32px">
    <div class="container">
      <h1 class="title">Target</h1>
      <p class="description">
        Menus can be linked to any Svelte component or standard HTML element.
        Just wrap them inside a <i><b>{"<DropdownMenu />"} tag</b></i>
      </p>
    </div>
    <hr />
    <div class="container">
      <h1 class="title">{"<MenuItems />"}</h1>
      <p class="description">
        To add actions to the menu insert a <b><i>MenuItem</i></b> for each
        action required inside a
        <br />
        <b>{`<svelte:fragment slot="menu" />`}</b>
        <br />
        Every MenuItem must have an unique value for the <b><i>action</i></b> prop
        (unless you want to associate the same action with multiple options. ).
      </p>
      <p class="extra">
        MenuItem can contain anything you want. Simple text, SVGs, images, as
        well as other components. MenuItem is a simple flex container with some
        styles.
      </p>
      <p class="extra">
        If you want to add a divider between MenuItems use the <b
          ><i>Divider</i></b
        >
        component (can be customized in multiple ways) or a plain
        <b><i>hr</i></b> with your own style.
      </p>
    </div>
  </Card>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  p.description {
    margin-top: 8px;
    color: var(--luna-accent-text-color);
  }
  p.extra {
    font-size: 0.875rem;
    margin-top: 16px;
  }
  hr {
    border-bottom-width: 0;
    border-color: var(--luna-border-color);
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
    max-width: 350px;
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
