<script>
  import { IconMoon, IconSearch, IconSun } from "../icons";
  import { Card, TextField } from "../luna";
</script>

<section>
  <Card style="margin: 32px">
    <div class="container">
      <h1>Customization</h1>
      <h2 class="subtitle">COLORS</h2>
      <TextField
        theme="accent"
        placeholder="Accent theme"
        message="Message..."
      />
      <TextField
        theme="danger"
        placeholder="Danger theme"
        message="Message..."
        style="margin-top: 16px"
      />
      <TextField
        theme="warning"
        placeholder="Warning theme"
        message="Message..."
        style="margin-top: 16px"
      />
      <TextField
        theme="success"
        placeholder="Success theme"
        message="Message..."
        style="margin-top: 16px"
      />
      <h2 class="subtitle">VARIANTS</h2>
      <TextField placeholder="Transparent" transparent />
      <TextField
        placeholder="Outlined"
        theme="danger"
        outline
        style="margin-top: 16px"
      />
      <TextField
        placeholder="Transparent & Outlined"
        transparent
        outline
        theme="warning"
        style="margin-top: 16px"
      />
    </div>
  </Card>
  <div class="container" style="margin: 32px">
    <h1>Sizes</h1>
    <TextField theme="accent" placeholder="Default" />
    <TextField
      theme="accent"
      placeholder="Compact"
      style="margin-top: 16px"
      compact
    />
    <h1 style="margin-top: 32px">Accessory Contents</h1>
    <h2>Left content</h2>
    <TextField theme="accent" placeholder="Search">
      <svelte:fragment slot="left">
        <IconSearch size={20} />
      </svelte:fragment>
    </TextField>
    <h2>Right content</h2>
    <TextField theme="accent" placeholder="Amount">
      <span style="font-size: 20px;" slot="right">€</span>
    </TextField>
    <h2>Left & Right contents</h2>
    <TextField theme="accent" placeholder="Both">
      <svelte:fragment slot="left">
        <IconSun size={20} />
      </svelte:fragment>
      <svelte:fragment slot="right">
        <IconMoon size={20} />
      </svelte:fragment>
    </TextField>
    <h1 style="margin-top: 32px">Text Alignment</h1>
    <h2>textAlign = "start" (default)</h2>
    <TextField theme="accent" placeholder="Start" message="message" />
    <h2>textAlign = "end"</h2>
    <TextField
      theme="accent"
      placeholder="End"
      textAlign="end"
      message="message"
    />
    <h2>textAlign = "center"</h2>
    <TextField
      theme="accent"
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
  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  h2 {
    font-size: 0.75rem;
    color: var(--luna-accent-text-color);
    margin: 16px 8px 8px;
    white-space: nowrap;
  }
  h2.subtitle {
    text-align: center;
    margin-bottom: 12px;
  }
  h1 + h2 {
    margin-top: 0;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
