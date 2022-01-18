<script>
  import Select from "../luna/Select.svelte";
  let value = "1";
</script>

<section>
  <div class="container" style="margin: 32px">
    <h1 class="title">CUSTOMIZATION</h1>
    <h2 class="subtitle mt16">COLORS</h2>
    <Select class="mb16 mt16" theme="accent" {value}>
      <option value="1" disabled>Accent</option>
      <option value="2">Option 1</option>
      <option value="3">Option 2</option>
      <option value="4">Option 3</option>
    </Select>
    <Select class="mb16" theme="danger" {value}>
      <option value="1" disabled>Danger</option>
      <option value="2">Option 1</option>
      <option value="3">Option 2</option>
      <option value="4">Option 3</option>
    </Select>
    <Select class="mb16" theme="warning" {value}>
      <option value="1" disabled>Warning</option>
      <option value="2">Option 1</option>
      <option value="3">Option 2</option>
      <option value="4">Option 3</option>
    </Select>
    <Select class="mb16" theme="success" {value}>
      <option value="1" disabled>Success</option>
      <option value="2">Option 1</option>
      <option value="3">Option 2</option>
      <option value="4">Option 3</option>
    </Select>
    <Select class="mb16" disabled theme="success" {value}>
      <option value="1" disabled>Disabled</option>
      <option value="2">Option 1</option>
      <option value="3">Option 2</option>
      <option value="4">Option 3</option>
    </Select>
    <h2 class="subtitle" style="margin-top: 24px">VARIANTS</h2>
    <Select class="mb16 mt16" transparent theme="accent" {value}>
      <option value="1" disabled>Transparent</option>
    </Select>
    <Select class="mb16" outline theme="danger" {value}>
      <option value="1" disabled>Outlined</option>
    </Select>
    <Select class="mb16" outline transparent theme="warning" {value}>
      <option value="1" disabled>Transparent & Outlined</option>
    </Select>
    <h2 class="subtitle" style="margin-top: 24px">SIZES</h2>
    <Select class="mb16 mt16" theme="accent" {value}>
      <option value="1" selected>Normal</option>
    </Select>
    <Select class="mb16" compact theme="accent" {value}>
      <option value="1" selected>Compact</option>
    </Select>
  </div>
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
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
