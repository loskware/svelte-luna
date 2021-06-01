<script>
  import { IconSearch } from "../icons";
  import { TextField } from "../luna";

  let status = {
    text: "",
    message: "Yeah",
    theme: "success",
  };

  /** @param {KeyboardEvent} ev */
  function handle(ev) {
    if (ev.key !== "a" && ev.key !== "A") return;
    ev.preventDefault();
    status.message = "We don't like 'A' or 'a'";
    status.theme = "danger";
  }
</script>

<section>
  <TextField
    theme={status.theme}
    placeholder="text field"
    message={status.message}
    bind:value={status.text}
    on:keydown={handle}
  >
    <IconSearch size={20} slot="leading" />
  </TextField>
  <h1>{status.text}</h1>
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
