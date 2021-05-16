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
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-start">
      <h1>STATES</h1>
      <Switch label="Checked" checked={true} />
      <Switch label="Checked & Disabled" checked={true} disabled />
      <Switch label="Unchecked" checked={false} />
      <Switch label="Unchecked & Disabled" checked={false} disabled />
    </div>
  </Card>

  <Card style="margin: 32px;">
    <div class="container">
      <h1>SIZES</h1>
      <h2>LEFT LABEL</h2>
      <Switch
        label="Compact Switch"
        labelPosition="left"
        size="compact"
        checked={checked[0][0]}
        disabled={disabled[0]}
        on:change={() => onChange(0, 0)}
      />
      <Switch
        label="Normal Switch"
        labelPosition="left"
        checked={checked[0][1]}
        disabled={disabled[0]}
        on:change={() => onChange(0, 1)}
      />
      <Switch
        label="Large Switch"
        labelPosition="left"
        size="large"
        checked={checked[0][2]}
        disabled={disabled[0]}
        on:change={() => onChange(0, 2)}
      />
      <Button
        theme={disabled[0] ? "success" : "danger"}
        style="width: 100%; margin-top: auto;"
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
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-start">
      <h1>THEMES</h1>
      <h2>RIGHT LABEL</h2>
      <Switch
        label="Accent Switch"
        checked={checked[1][0]}
        disabled={disabled[1]}
        on:change={() => onChange(1, 0)}
      />
      <Switch
        label="Danger Switch"
        theme="danger"
        checked={checked[1][1]}
        disabled={disabled[1]}
        on:change={() => onChange(1, 1)}
      />
      <Switch
        label="Warning Switch"
        theme="warning"
        checked={checked[1][2]}
        disabled={disabled[1]}
        on:change={() => onChange(1, 2)}
      />
      <Switch
        theme="success"
        label="Success Switch"
        checked={checked[1][3]}
        disabled={disabled[1]}
        on:change={() => onChange(1, 3)}
      />
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
  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
    height: 100%;
  }
  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  h2 {
    align-self: center;
    font-size: 0.75rem;
    color: var(--luna-accent-text-color);
    margin-bottom: 16px;
    margin-top: -8px;
    white-space: nowrap;
  }
  @media (max-width: 767px) {
    
  }
</style>
