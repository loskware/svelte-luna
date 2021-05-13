<script>
  import { Button, Card, CheckBox } from "../luna/";

  export let labelPosition = "left";
  export let title = "";

  let checked = true;
  let disabled = false;

  function onChange() {
    checked = !checked;
  }
  function toogleDisable() {
    disabled = !disabled;
  }
</script>

<Card
  style={`align-items:
    ${labelPosition === "left" ? "flex-end" : "flex-start"}
  `}
>
  <div class="container">
    <h1>{title}</h1>
    <CheckBox
      label="Accent CheckBox"
      {labelPosition}
      {checked}
      {disabled}
      on:change={onChange}
    />
    <CheckBox
      theme="danger"
      label="Danger CheckBox"
      {labelPosition}
      {checked}
      {disabled}
      on:change={onChange}
    />
    <CheckBox
      theme="warning"
      label="Warning CheckBox"
      {labelPosition}
      {checked}
      {disabled}
      on:change={onChange}
    />
    <CheckBox
      theme="success"
      label="Success CheckBox"
      {labelPosition}
      {checked}
      {disabled}
      on:change={onChange}
    />
    <Button
      theme={disabled ? "accent" : "danger"}
      style="width: 100%; margin-top: 32px;"
      on:click={toogleDisable}
    >
      {#if disabled}
        Enable
      {:else}
        Disable
      {/if}
    </Button>
  </div>
</Card>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
  }
</style>
