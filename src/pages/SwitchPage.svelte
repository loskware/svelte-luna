<script>
  import { Button, Card, Switch } from "../luna";

  let checked = [
    ["1a", "2a", "3a"],
    ["1b", "2b", "3b", "4b"],
  ];
  let disabled = [false, false];

  function toggleDisable(group) {
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
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <Switch
        label="Normal Switch"
        labelPosition="left"
        value="2a"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <Switch
        label="Large Switch"
        labelPosition="left"
        size="large"
        value="3a"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <Button
        theme={disabled[0] ? "success" : "danger"}
        style="width: 100%; margin-top: auto;"
        on:click={() => toggleDisable(0)}
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
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <Switch
        label="Danger Switch"
        theme="danger"
        value="2b"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <Switch
        label="Warning Switch"
        theme="warning"
        value="3b"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <Switch
        theme="success"
        label="Success Switch"
        value="4b"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <Button
        theme={disabled[1] ? "success" : "danger"}
        style="width: 100%; margin-top: 32px;"
        on:click={() => toggleDisable(1)}
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
