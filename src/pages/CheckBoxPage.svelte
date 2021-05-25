<script>
  import { Button, Card, CheckBox } from "../luna";

  let checked = [
    ["1a", "2a", "3a", "4a"],
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
      <CheckBox label="Checked" checked={true} />
      <CheckBox label="Checked & Disabled" checked={true} disabled={true} />
      <CheckBox label="Unchecked" checked={false} />
      <CheckBox label="Unchecked & Disabled" checked={false} disabled={true} />
      <CheckBox label="Indeterminate" indeterminate={true} />
      <CheckBox
        label="Indeterminate & Disabled"
        indeterminate={true}
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
        value="1a"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <CheckBox
        theme="danger"
        label="Danger CheckBox"
        labelPosition="left"
        value="2a"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <CheckBox
        theme="warning"
        label="Warning CheckBox"
        labelPosition="left"
        value="3a"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <CheckBox
        theme="success"
        label="Success CheckBox"
        labelPosition="left"
        value="4a"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <Button
        theme={disabled[0] ? "success" : "danger"}
        style="width: 100%; margin-top: 32px;"
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
      <h1>RIGHT LABEL</h1>
      <CheckBox
        label="Accent CheckBox"
        value="1b"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <CheckBox
        theme="danger"
        label="Danger CheckBox"
        value="2b"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <CheckBox
        theme="warning"
        label="Warning CheckBox"
        value="3b"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <CheckBox
        theme="success"
        label="Success CheckBox"
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
