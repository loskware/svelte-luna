<script>
  import { Card } from "../luna";
  import Select from "../luna/components/Select.svelte";

  const themes = ["plain", "accent", "danger", "warning", "success"];

</script>

<section>
  <Card>
    <div class="container">
      <h1 class="title mb16">THEMES</h1>
      <Select class="mb16" theme="plain" onclick="log()" />
      <Select class="mb16" theme="accent" />
      <Select class="mb16" theme="danger" />
      <Select class="mb16" theme="warning" />
      <Select class="mb16" theme="success" />
      <Select class="mb16" theme="success" disabled />
      <div class="colorful">
        <Select theme="soft" style="width: 100%;" />
      </div>
    </div>
  </Card>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
    min-width: 250px;
  }
  .colorful {
    background-color: #be00ff;
    padding: 16px;
    border-radius: 8px;
  }
  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
