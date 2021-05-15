<script>
  import { Button, Card, Switch } from "../luna";

  let checked = [
    [true, true, true],
    [true, true, true, true],
  ];
  let disabled = [false, false];

  function onChange(group, index) {
    checked[group][index] = !checked[group][index];
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
    <div class="container container2">
      <h1>SIZES</h1>
      <div class="wrapper">
        <span>Compact</span>
        <Switch
          size="compact"
          checked={checked[0][0]}
          disabled={disabled[0]}
          on:change={() => onChange(0, 0)}
        />
      </div>
      <div class="wrapper">
        <span>Normal</span>
        <Switch
          checked={checked[0][1]}
          disabled={disabled[0]}
          on:change={() => onChange(0, 1)}
        />
      </div>
      <div class="wrapper">
        <span>Large</span>
        <Switch
          size="large"
          checked={checked[0][2]}
          disabled={disabled[0]}
          on:change={() => onChange(0, 2)}
        />
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
      <h1>THEMES</h1>
      <div class="wrapper">
        <Switch
          checked={checked[1][0]}
          disabled={disabled[1]}
          on:change={() => onChange(1, 0)}
        />
        <span>Accent</span>
      </div>
      <div class="wrapper">
        <Switch theme="danger" checked={checked[1][1]} disabled={disabled[1]} on:change={() => onChange(1, 1)} />
        <span>Danger</span>
      </div>
      <div class="wrapper">
        <Switch
          theme="warning"
          checked={checked[1][2]}
          disabled={disabled[1]}
          on:change={() => onChange(1, 2)}
        />
        <span>Warning</span>
      </div>
      <div class="wrapper">
        <Switch
          theme="success"
          checked={checked[1][3]}
          disabled={disabled[1]}
          on:change={() => onChange(1, 3)}
        />
        <span>Success</span>
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

<style>
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
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 32px;
  }
  .container2 {
    width: 230px;
  }
  .container2 > .wrapper > span {
    margin-right: auto;
  }
  .wrapper {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  .wrapper:last-of-type {
    margin-bottom: auto;
  }
  .wrapper span {
    margin-left: 8px;
    color: var(--luna-text-color-secondary);
    font-size: 0.875rem;
    user-select: none;
    white-space: nowrap;
  }
</style>
