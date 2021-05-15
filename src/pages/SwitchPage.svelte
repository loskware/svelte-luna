<script>
  import { Button, Card, Switch } from "../luna";

  let checked = [0, 0];
  let disabled = [false, false];
  function onChange(group, index) {
    checked[group] = index;
  }
  function toogleDisable(group) {
    disabled[group] = !disabled[group];
  }
</script>

<section>
  <Card style="margin: 64px;">
    <div class="container" style="align-items: flex-start">
      <h1>STATES</h1>
      <div class="wrapper">
        <Switch checked={true} />
        <span>Checked</span>
      </div>
      <div class="wrapper">
        <Switch checked={true} disabled />
        <span>Checked & Disabled</span>
      </div>
      <div class="wrapper">
        <Switch checked={false} />
        <span>Unchecked</span>
      </div>
      <div class="wrapper">
        <Switch checked={false} disabled />
        <span>Unchecked & Disabled</span>
      </div>
    </div>
  </Card>
  <Card style="margin: 64px;">
    <div class="container">
      <h1>SIZES</h1>
      <h2>LEFT LABEL</h2>
      <div class="wrapper">
        <span>Compact</span>
        <Switch size="compact" checked={true} />
      </div>
      <div class="wrapper">
        <span>Normal</span>
        <Switch checked={true} />
      </div>
      <div class="wrapper">
        <span>Large</span>
        <Switch size="large" checked={false} />
      </div>
      <Button
        theme={disabled[0] ? "success" : "danger"}
        style="width: 100%; margin-top: 32px;"
        on:click={() => toogleDisable(0)}
      >
        {#if disabled[0]}
          Enable
        {:else}
          Disable
        {/if}
      </Button>
    </div>
  </Card>
  <Card style="margin: 64px;">
    <div class="container">
      <h1>SWITCH STATES</h1>
      <div class="wrapper">
        <Switch checked={true} />
        <span>Checked</span>
      </div>
      <div class="wrapper">
        <Switch checked={true} disabled />
        <span>Checked & Disabled</span>
      </div>
      <div class="wrapper">
        <Switch checked={false} />
        <span>Unchecked</span>
      </div>
      <div class="wrapper">
        <Switch checked={true} disabled />
        <span>Unchecked & Disabled</span>
      </div>
      <Button
        theme={disabled[1] ? "success" : "danger"}
        style="width: 100%; margin-top: 32px;"
        on:click={() => toogleDisable(1)}
      >
        {#if disabled[1]}
          Enable
        {:else}
          Disable
        {/if}
      </Button>
    </div>
  </Card>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  h2 {
    align-self: center;
    color: var(--luna-accent-text-color);
    font-size: 0.75rem;
    margin-bottom: 16px;
    margin-top: -8px;
    white-space: nowrap;
  }
  h1 + h2 {

  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    margin-top: 8px;
    span {
      margin-left: 8px;
      color: var(--luna-text-color-secondary);
      font-size: 0.875rem;
      user-select: none;
      white-space: nowrap;
    }
  }
</style>
