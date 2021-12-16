<script>
  import { Card } from "../luna";
  import Select from "../luna/components/Select.svelte";
</script>

<section>
  <Card>
    <div class="container">
      <h1 class="title mb16">THEMES</h1>
      <Select class="mb16" theme="plain">
        <option value="1" disabled selected>Plain</option>
        <option value="2">Option 1</option>
        <option value="3">Option 2</option>
        <option value="4">Option 3</option>
      </Select>
      <Select class="mb16" theme="accent">
        <option value="1" disabled selected>Accent</option>
        <option value="2">Option 1</option>
        <option value="3">Option 2</option>
        <option value="4">Option 3</option>
      </Select>
      <Select class="mb16" theme="danger">
        <option value="1" disabled selected>Danger</option>
        <option value="2">Option 1</option>
        <option value="3">Option 2</option>
        <option value="4">Option 3</option>
      </Select>
      <Select class="mb16" theme="warning">
        <option value="1" disabled selected>Warning</option>
        <option value="2">Option 1</option>
        <option value="3">Option 2</option>
        <option value="4">Option 3</option>
      </Select>
      <Select class="mb16" theme="success">
        <option value="1" disabled selected>Success</option>
        <option value="2">Option 1</option>
        <option value="3">Option 2</option>
        <option value="4">Option 3</option>
      </Select>
      <Select class="mb16" theme="success" disabled>
        <option value="1" disabled selected>Disabled</option>
        <option value="2">Option 1</option>
        <option value="3">Option 2</option>
        <option value="4">Option 3</option>
      </Select>
      <div class="colorful">
        <Select theme="soft" style="width: 100%;">
          <option value="1" disabled selected>Soft</option>
          <option value="2">Option 1</option>
          <option value="3">Option 2</option>
          <option value="4">Option 3</option>
        </Select>
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
    background-color: var(--luna-accent-bkg-color);
    padding: 16px;
    border-radius: 8px;
  }
  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
