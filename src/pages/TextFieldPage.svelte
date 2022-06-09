<script lang="ts">
  import { IconMoon, IconSearch, IconSun } from "../icons";
  import { TextField } from "$lib";
</script>

<section>
  <div class="container" style="margin: 32px">
    <h1 class="title">CUSTOMIZATION</h1>
    <h2 class="subtitle mt16">COLORS</h2>
    <TextField
      theme="accent"
      placeholder="Accent theme"
      message="Message..."
      class="mt16"
    />
    <TextField
      theme="danger"
      placeholder="Danger theme"
      message="Message..."
      class="mt16"
      disabled
    />
    <TextField
      theme="warning"
      placeholder="Warning theme"
      message="Message..."
      class="mt16"
    />
    <TextField
      theme="success"
      placeholder="Success theme"
      message="Message..."
      class="mt16"
    />
    <div class="mt16 soft-container">
      <TextField
      theme="soft"
      placeholder="Soft theme"
      message="Message..."
      style="padding: 16px"
    />
    </div>
  </div>
  <div class="container" style="margin: 32px">
    <h1 class="title">VARIANTS</h1>
    <TextField
    placeholder="Disabled"
    class="mt16"
    disabled
    />
    <TextField theme="accent" placeholder="Disabled with icons" class="mt16" disabled>
      <svelte:fragment slot="left">
        <IconSun size={16} />
      </svelte:fragment>
      <svelte:fragment slot="right">
        <IconMoon size={16} />
      </svelte:fragment>
    </TextField>
    <TextField
    placeholder="Outlined"
    theme="danger"
    outline
    class="mt16"
    />
    <TextField
    placeholder="Transparent & Outlined"
    transparent
    outline
    theme="warning"
    class="mt16"
    />
    <TextField class="mt16" placeholder="Transparent" transparent />
    <h1 class="title mt32 mb16">ACCESSORY CONTENTS</h1>
    <h2 class="subtitle mb8">LEFT CONTENT</h2>
    <TextField theme="accent" placeholder="Search">
      <svelte:fragment slot="left">
        <IconSearch size={16} />
      </svelte:fragment>
    </TextField>
    <h2 class="subtitle mt16 mb8">RIGHT CONTENT</h2>
    <TextField theme="accent" placeholder="Amount">
      <span style="font-size: 16px;" slot="right">€</span>
    </TextField>
    <h2 class="subtitle mt16 mb8">LEFT & RIGHT CONTENTS</h2>
    <TextField theme="accent" placeholder="Both">
      <svelte:fragment slot="left">
        <IconSun size={16} />
      </svelte:fragment>
      <svelte:fragment slot="right">
        <IconMoon size={16} />
      </svelte:fragment>
    </TextField>
  </div>
  <div class="container" style="margin: 32px">
    <h1 class="title mb16">SIZES</h1>
    <TextField theme="accent" placeholder="Default" />
    <TextField
      theme="accent"
      placeholder="Large"
      class="mt16 mb16"
      large
    />
    <h1 class="title mt32">TEXT ALIGNMENT</h1>
    <h2 class="subtitle mt16 mb8">START (default)</h2>
    <TextField theme="danger" placeholder="Start" message="message" />
    <h2 class="subtitle mt16 mb8">END</h2>
    <TextField
      theme="warning"
      placeholder="End"
      textAlign="end"
      message="message"
    />
    <h2 class="subtitle mt16 mb8">CENTER</h2>
    <TextField
      theme="success"
      placeholder="Center"
      textAlign="center"
      message="message"
    />
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
  .soft-container {
    background-color: #be00ff;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
