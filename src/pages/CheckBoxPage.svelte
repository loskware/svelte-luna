<script>
  import { Button, Card, CheckBox } from "../luna/";

  let checked = true;
  let disabled = false;

  function onChange() {
    checked = !checked;
  }
  function toogleDisable() {
    disabled = !disabled;
  }
</script>

<section>
  <Card>
    <div class="container">
      <h1>RIGHT LABEL</h1>
      <CheckBox
        label="Accent CheckBox"
        {checked}
        {disabled}
        on:change={onChange}
      />
      <CheckBox
        theme="danger"
        label="Danger CheckBox"
        {checked}
        {disabled}
        on:change={onChange}
      />
      <CheckBox
        theme="warning"
        label="Warning CheckBox"
        {checked}
        {disabled}
        on:change={onChange}
      />
      <CheckBox
        theme="success"
        label="Success CheckBox"
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
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
  }
</style>
