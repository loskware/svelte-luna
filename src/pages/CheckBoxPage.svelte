<script>
  import { Button, Card, CheckBox } from "../luna";

  let checked = [true, true];
  let disabled = [false, false];

  function onChange(index) {
    let state = checked[index];
    if (state === true) state = null;
    else if (state === false) state = true;
    else state = false;

    checked[index] = state;
  }
  function toogleDisable(group) {
    disabled[group] = !disabled[group];
  }
</script>

<section>
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-start">
      <h1>STATES</h1>
      <CheckBox label="Checked" checked={true} />
      <CheckBox label="Checked & Disabled" checked={true} disabled={true} />
      <CheckBox label="Unchecked" checked={false} />
      <CheckBox label="Unchecked & Disabled" checked={false} disabled={true} />
      <CheckBox label="Indeterminate" checked={null} />
      <CheckBox
        label="Indeterminate & Disabled"
        checked={null}
        disabled={true}
      />
    </div>
  </Card>
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-end">
      <h1>LEFT LABEL</h1>
      <CheckBox
        label="Accent CheckBox"
        labelPosition="left"
        checked = {checked[0]}
        disabled = {disabled[0]}
        on:change={() => onChange(0)}
      />
      <CheckBox
        theme="danger"
        label="Danger CheckBox"
        labelPosition="left"
        checked = {checked[0]}
        disabled = {disabled[0]}
        on:change={() => onChange(0)}
      />
      <CheckBox
        theme="warning"
        label="Warning CheckBox"
        labelPosition="left"
        checked = {checked[0]}
        disabled = {disabled[0]}
        on:change={() => onChange(0)}
      />
      <CheckBox
        theme="success"
        label="Success CheckBox"
        labelPosition="left"
        checked = {checked[0]}
        disabled = {disabled[0]}
        on:change={() => onChange(0)}
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
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-start">
      <h1>RIGHT LABEL</h1>
      <CheckBox
        label="Accent CheckBox"
        checked = {checked[1]}
        disabled = {disabled[1]}
        on:change={() => onChange(1)}
      />
      <CheckBox
        theme="danger"
        label="Danger CheckBox"
        checked = {checked[1]}
        disabled = {disabled[1]}
        on:change={() => onChange(1)}
      />
      <CheckBox
        theme="warning"
        label="Warning CheckBox"
        checked = {checked[1]}
        disabled = {disabled[1]}
        on:change={() => onChange(1)}
      />
      <CheckBox
        theme="success"
        label="Success CheckBox"
        checked = {checked[1]}
        disabled = {disabled[1]}
        on:change={() => onChange(1)}
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
    flex-wrap: wrap;
    justify-content: space-evenly;
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
  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
