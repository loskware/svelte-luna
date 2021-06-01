<script>
  import { IconSearch } from "../icons";
  import { TextField } from "../luna";

  let value = "";
  let message = "";
  $: status = message ? "danger" : "accent";
  
  function handleInput(ev) {
    const text = ev.target.value;
    if (text.length > 10) { 
      message = "text exceed max lenght (10 chars)"
    }
  }
</script>

<section>
  <TextField
    theme={status}
    placeholder="text field"
    bind:value
    {message}
    on:input={handleInput}
  >
    <IconSearch size={20} slot="leading" />
  </TextField>
  <h1>{value}</h1>
</section>

<style>
  section {
    display: block;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin: 16px 0;
    white-space: nowrap;
  }
  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
