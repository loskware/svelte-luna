<script>
  import { Button, Card, Radio } from "../luna";

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
      <Radio label="Checked" checked={true} />
      <Radio label="Checked & Disabled" checked={true} disabled={true} />
      <Radio label="Unchecked" checked={false} />
      <Radio label="Unchecked & Disabled" checked={false} disabled={true} />
    </div>
  </Card>
  <Card style="margin: 64px;">
    <div class="container" style="align-items: flex-end">
      <h1>LEFT LABEL</h1>
      <Radio
        label="Accent Radio"
        labelPosition="left"
        checked = {checked[0] === 0}
        disabled = {disabled[0]}
        on:change={() => onChange(0, 0)}
      />
      <Radio
        theme="danger"
        label="Danger Radio"
        labelPosition="left"
        checked = {checked[0] === 1}
        disabled = {disabled[0]}
        on:change={() => onChange(0, 1)}
      />
      <Radio
        theme="warning"
        label="Warning Radio"
        labelPosition="left"
        checked = {checked[0] === 2}
        disabled = {disabled[0]}
        on:change={() => onChange(0, 2)}
      />
      <Radio
        theme="success"
        label="Success Radio"
        labelPosition="left"
        checked = {checked[0] === 3}
        disabled = {disabled[0]}
        on:change={() => onChange(0, 3)}
      />
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
    <div class="container" style="align-items: flex-start">
      <h1>RIGHT LABEL</h1>
      <Radio
        label="Accent Radio"
        checked = {checked[1] === 0}
        disabled = {disabled[1]}
        on:change={() => onChange(1, 0)}
      />
      <Radio
        theme="danger"
        label="Danger Radio"
        checked = {checked[1] === 1}
        disabled = {disabled[1]}
        on:change={() => onChange(1, 1)}
      />
      <Radio
        theme="warning"
        label="Warning Radio"
        checked = {checked[1] === 2}
        disabled = {disabled[1]}
        on:change={() => onChange(1, 2)}
      />
      <Radio
        theme="success"
        label="Success Radio"
        checked = {checked[1] === 3}
        disabled = {disabled[1]}
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

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }

  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin-bottom: 16px;
    white-space: nowrap;
  }
</style>
