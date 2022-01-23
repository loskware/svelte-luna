<script>
  import { Button, Card, Menu, Divider, MenuItem } from "../luna";
  import Radio from "../luna/Radio.svelte";

  let option1;

  /** @type {"bottom-left" | "bottom-right" | "top-left" | "top-right"} */
  let anchorOption = "bottom-left";
</script>

<section>
  <Card outlined backgroundColor="transparent" style="margin: 32px">
    <div class="container">
      <h1 class="title">Anchor</h1>
      <p class="description">
        Menu anchor edge can be customized through the
        <i><b>anchor</b></i>property.<br />
      </p>
      <p class="extra">Automatic positioning is a work in progress.</p>
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
          <Menu
            anchor={anchorOption}
            onAction={(_, action) => (option1 = action)}
          >
            <svelte:fragment slot="target">
              <Button outlined>Left Click</Button>
            </svelte:fragment>
            <MenuItem action="add">Add</MenuItem>
            <MenuItem action="delete">Delete</MenuItem>
            <Divider />
            <MenuItem action="edit">Edit</MenuItem>
          </Menu>
          <Menu
            style="margin-left: 8px;"
            anchor={anchorOption}
            showOn="context-menu"
            onAction={(_, action) => (option1 = action)}
          >
            <svelte:fragment slot="target">
              <Button outlined>Right Click</Button>
            </svelte:fragment>
            <MenuItem compact action="add">Add</MenuItem>
            <MenuItem compact action="delete">Delete</MenuItem>
            <Divider />
            <MenuItem compact action="edit">Edit</MenuItem>
          </Menu>
        </div>
        <p class="selected-option">
          Option Clicked: <span>{option1 || ""}</span>
        </p>
      </div>
    </div>
  </Card>
  <Card outlined backgroundColor="transparent" style="margin: 32px">
    <div class="container">
      <h1 class="title">Target</h1>
      <p class="description">
        Menus can be linked to any Svelte component or standard HTML element.
        Just assign them the <i><b>target slot</b></i>
      </p>
      <p class="extra">
        <b>Tip</b>: Wrap a svelte component into a {"<svelte:fragment slot='target' />"}
        element.
      </p>
    </div>
    <hr />
    <div class="container">
      <h1 class="title">{"<MenuItems />"}</h1>
      <p class="description">
        To add actions to the menu insert a <b><i>MenuItem</i></b> for each
        action required.
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
        If you want to add a divider between MenuItems use the <b><i>Divider</i></b> component (can be customized in multiple ways) or a plain <b><i>hr</i></b> with your own style.
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
