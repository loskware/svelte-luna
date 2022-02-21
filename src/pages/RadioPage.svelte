<script lang="ts">
  import { Button, Card, Radio } from "$lib";

  let checked = ["accent", "accent"];
  let disabled = [false, false];

  function toogleDisable(group: number) {
    disabled[group] = !disabled[group];
  }
</script>

<section>
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-start">
      <h1>STATES</h1>
      <Radio label="Checked" value="1" checked={true} />
      <Radio
        label="Checked & Disabled"
        value="2"
        checked={true}
        disabled={true}
      />
      <Radio label="Unchecked" value="3" checked={false} />
      <Radio
        label="Unchecked & Disabled"
        value="4"
        checked={false}
        disabled={true}
      />
    </div>
  </Card>
  <Card style="margin: 32px;">
    <div class="container" style="align-items: flex-end">
      <h1>LEFT LABEL</h1>
      <Radio
        label="Accent Radio"
        labelPosition="left"
        value="accent"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <Radio
        theme="danger"
        label="Danger Radio"
        labelPosition="left"
        value="danger"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <Radio
        theme="warning"
        label="Warning Radio"
        labelPosition="left"
        value="warning"
        bind:group={checked[0]}
        disabled={disabled[0]}
      />
      <Radio
        theme="success"
        label="Success Radio"
        labelPosition="left"
        value="success"
        bind:group={checked[0]}
        disabled={disabled[0]}
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
      <Radio
        label="Accent Radio"
        value="accent"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <Radio
        theme="danger"
        label="Danger Radio"
        value="danger"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <Radio
        theme="warning"
        label="Warning Radio"
        value="warning"
        bind:group={checked[1]}
        disabled={disabled[1]}
      />
      <Radio
        theme="success"
        label="Success Radio"
        value="success"
        bind:group={checked[1]}
        disabled={disabled[1]}
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
