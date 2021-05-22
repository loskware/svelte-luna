<script>
  import { Button, Card, Switch } from "../luna";

  let checked = [
    ["1a", "2a", "3a"],
    ["1b", "2b", "3b", "4b"],
  ];
  let disabled = [false, false];

  function onChange(groupIndex, value) {
    let group = checked[groupIndex];
    const index = group.indexOf(value);
    if (index < 0) group.push(value);
    else group.splice(index, 1);

    checked[groupIndex] = group;
  }
  function toogleDisable(group) {
    disabled[group] = !disabled[group];
  }
</script>

<section>
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-start">
      <h1>STATES</h1>
      <Switch label="Checked" value="a" checked={true} />
      <Switch label="Checked & Disabled" value="b" checked={true} disabled />
      <Switch label="Unchecked" value="c" checked={false} />
      <Switch label="Unchecked & Disabled" value="d" checked={false} disabled />
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
        value="1a"
        group={checked[0]}
        disabled={disabled[0]}
        on:change={() => onChange(0, "1a")}
      />
      <Switch
        label="Normal Switch"
        labelPosition="left"
        value="2a"
        group={checked[0]}
        disabled={disabled[0]}
        on:change={() => onChange(0, "2a")}
      />
      <Switch
        label="Large Switch"
        labelPosition="left"
        size="large"
        value="3a"
        group={checked[0]}
        disabled={disabled[0]}
        on:change={() => onChange(0, "3a")}
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
        value="1b"
        group={checked[1]}
        disabled={disabled[1]}
        on:change={() => onChange(1, "1b")}
      />
      <Switch
        label="Danger Switch"
        theme="danger"
        value="2b"
        group={checked[1]}
        disabled={disabled[1]}
        on:change={() => onChange(1, "2b")}
      />
      <Switch
        label="Warning Switch"
        theme="warning"
        value="3b"
        group={checked[1]}
        disabled={disabled[1]}
        on:change={() => onChange(1, "3b")}
      />
      <Switch
        theme="success"
        label="Success Switch"
        value="4b"
        group={checked[1]}
        disabled={disabled[1]}
        on:change={() => onChange(1, "4b")}
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
