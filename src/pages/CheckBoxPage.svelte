<script>
  import { Button, Card, CheckBox } from "../luna";

  let checked = [true, true];
  let disabled = [false, false];
  function onChange(index) {
    let state = checked[index];
    let newState;
    if (state === true) newState = null;
    else if (state === false) newState = true;
    else newState = false;

    let statesCopy = [...checked];
    statesCopy[index] = newState;
    checked = statesCopy;
  }
  function toogleDisable(index) {
    let statesCopy = [...disabled];
    statesCopy[index] = !statesCopy[index];
    disabled = statesCopy;
  }
</script>

<section>
  <Card style="margin: 64px;">
    <div class="container" style="align-items: flex-start">
      <h1>CHECKBOX STATES</h1>
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
  <Card style="margin: 64px;">
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
        theme={disabled[0] ? "accent" : "danger"}
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
        theme={disabled[1] ? "accent" : "danger"}
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
