<script lang="ts">
  import { Button, Card } from "$lib";
  import { IconMoon } from "../icons";

  const colors = ["#be00ff", "#ff8200", "#0088ff"];
  let colorIndex = 0;
</script>

<section>
  <!-- DISABLED theme -->
  <div>
    <h1>DISABLED</h1>
    <Button solid size="compact" disabled>BUTTON</Button>
    <Button size="compact" disabled>BUTTON</Button>
    <Button size="compact" outlined disabled>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="normal" disabled>BUTTON</Button>
    <Button disabled>BUTTON</Button>
    <Button size="normal" outlined disabled>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="large" disabled>BUTTON</Button>
    <Button size="large" disabled>BUTTON</Button>
    <Button size="large" outlined disabled><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- PLAIN theme -->
  <div>
    <h1>PLAIN</h1>
    <Button solid theme="plain" size="compact">BUTTON</Button>
    <Button theme="plain" size="compact">BUTTON</Button>
    <Button theme="plain" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="plain" size="normal">BUTTON</Button>
    <Button theme="plain">BUTTON</Button>
    <Button theme="plain" size="normal" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="plain" size="large">BUTTON</Button>
    <Button theme="plain" size="large">BUTTON</Button>
    <Button theme="plain" size="large" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- ACCENT theme -->
  <div>
    <h1>ACCENT</h1>
    <Button solid size="compact">BUTTON</Button>
    <Button size="compact">BUTTON</Button>
    <Button size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="normal">BUTTON</Button>
    <Button>BUTTON</Button>
    <Button size="normal" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="large">BUTTON</Button>
    <Button size="large">BUTTON</Button>
    <Button size="large" outlined><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- DANGER theme -->
  <div>
    <h1>DANGER</h1>
    <Button solid theme="danger" size="compact">BUTTON</Button>
    <Button theme="danger" size="compact">BUTTON</Button>
    <Button theme="danger" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="danger" size="normal">BUTTON</Button>
    <Button theme="danger">BUTTON</Button>
    <Button theme="danger" size="normal" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="danger" size="large">BUTTON</Button>
    <Button theme="danger" size="large">BUTTON</Button>
    <Button theme="danger" size="large" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- WARNING theme -->
  <div>
    <h1>WARNING</h1>
    <Button solid theme="warning" size="compact">BUTTON</Button>
    <Button theme="warning" size="compact">BUTTON</Button>
    <Button theme="warning" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="warning" size="normal">BUTTON</Button>
    <Button theme="warning">BUTTON</Button>
    <Button theme="warning" size="normal" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="warning" size="large">BUTTON</Button>
    <Button theme="warning" size="large">BUTTON</Button>
    <Button theme="warning" size="large" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- SUCCESS theme -->
  <div>
    <h1>SUCCESS</h1>
    <Button solid theme="success" size="compact">BUTTON</Button>
    <Button theme="success" size="compact">BUTTON</Button>
    <Button theme="success" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="success" size="normal">BUTTON</Button>
    <Button theme="success">BUTTON</Button>
    <Button theme="success" size="normal" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="success" size="large">BUTTON</Button>
    <Button theme="success" size="large">BUTTON</Button>
    <Button theme="success" size="large" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- ROUNDED -->
  <div>
    <h1>ROUNDED</h1>
    <Button solid rounded theme="plain" size="compact">
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <Button rounded theme="plain" size="compact">
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <Button rounded theme="plain" size="compact" outlined>
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <div class="v-spacer" />
    <Button solid rounded theme="accent" size="normal"
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent"
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent" size="normal" outlined
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <div class="v-spacer" />
    <Button solid rounded theme="danger" size="large"
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
    <Button rounded theme="danger" size="large"
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
    <Button rounded theme="danger" size="large" outlined
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
  </div>

  <!-- ROUNDED ICON ONLY-->
  <div>
    <h1>ROUNDED (ICON ONLY)</h1>
    <Button solid rounded theme="plain" size="compact">
      <IconMoon size={18} />
    </Button>
    <Button rounded theme="plain" size="compact">
      <IconMoon size={18} />
    </Button>
    <Button rounded theme="plain" size="compact" outlined>
      <IconMoon size={18} />
    </Button>
    <div class="v-spacer" />
    <Button solid rounded theme="accent" size="normal">
      <IconMoon size={24} />
    </Button>
    <Button rounded theme="accent">
      <IconMoon size={24} />
    </Button>
    <Button rounded theme="accent" size="normal" outlined>
      <IconMoon size={24} />
    </Button>
    <div class="v-spacer" />
    <Button solid rounded theme="danger" size="large">
      <IconMoon size={30} />
    </Button >
    <Button rounded theme="danger" size="large">
      <IconMoon size={30} />
      </Button>
    <Button rounded theme="danger" size="large" outlined>
      <IconMoon size={30} />
    </Button>
  </div>

  <!-- SOFT theme -->
  <Card hideOverflow>
    <div
      class="soft-container"
      style={`background-color: ${colors[colorIndex]}`}
    >
      <h1 style="color: white">SOFT</h1>
      <Button solid theme="soft" size="compact">BUTTON</Button>
      <Button theme="soft" size="compact">BUTTON</Button>
      <Button theme="soft" size="compact" outlined>BUTTON</Button>
      <div class="v-spacer" />
      <Button solid theme="soft" size="normal">BUTTON</Button>
      <Button theme="soft">BUTTON</Button>
      <Button theme="soft" size="normal" outlined>BUTTON</Button>
      <div class="v-spacer" />
      <Button solid theme="soft" size="large">BUTTON</Button>
      <Button theme="soft" size="large">BUTTON</Button>
      <Button theme="soft" size="large" outlined
        ><IconMoon size={20} />BUTTON</Button
      >
      <div class="mt-32">
        {#each colors as color, index}
          <span
            class="color-selector"
            style={`background-color: ${color}`}
            on:click={() => (colorIndex = index)}
          />
        {/each}
      </div>
    </div>
  </Card>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 16px 0;
  }
  section > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }
  section :global(.Button) {
    margin-top: 8px;
  }
  h1 {
    margin-bottom: 16px;
    font-weight: 500;
  }
  .ml-8 {
    margin-left: 8px;
  }
  .mr-6 {
    margin-right: 6px;
  }
  .mr-8 {
    margin-right: 8px;
  }
  .mt-32 {
    margin-top: 32px;
  }

  .soft-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 32px;
    transition: background-color ease-out 0.6s;
  }
  .color-selector {
    display: inline-block;
    height: 32px;
    width: 32px;
    border: 1px solid white;
    border-radius: 50%;
    box-shadow: var(--luna-elevation-4);
    transition: transform ease-out 0.2s;
    cursor: pointer;
  }
  .color-selector:not(:first-child) {
    margin-left: 8px;
  }
  .color-selector:hover {
    transform: scale(1.2);
  }
</style>
