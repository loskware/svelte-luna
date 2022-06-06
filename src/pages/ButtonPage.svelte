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
    <Button solid size="thin" disabled>BUTTON</Button>
    <Button size="thin" disabled>BUTTON</Button>
    <Button size="thin" outlined disabled>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="compact" disabled>BUTTON</Button>
    <Button disabled>BUTTON</Button>
    <Button size="compact" outlined disabled>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="default" disabled>BUTTON</Button>
    <Button size="default" disabled>BUTTON</Button>
    <Button size="default" outlined disabled><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- PLAIN theme -->
  <div>
    <h1>PLAIN</h1>
    <Button solid theme="plain" size="thin">BUTTON</Button>
    <Button theme="plain" size="thin">BUTTON</Button>
    <Button theme="plain" size="thin" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="plain" size="compact">BUTTON</Button>
    <Button theme="plain">BUTTON</Button>
    <Button theme="plain" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="plain" size="default">BUTTON</Button>
    <Button theme="plain" size="default">BUTTON</Button>
    <Button theme="plain" size="default" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- ACCENT theme -->
  <div>
    <h1>ACCENT</h1>
    <Button solid size="thin">BUTTON</Button>
    <Button size="thin">BUTTON</Button>
    <Button size="thin" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="compact">BUTTON</Button>
    <Button>BUTTON</Button>
    <Button size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid size="default">BUTTON</Button>
    <Button size="default">BUTTON</Button>
    <Button size="default" outlined><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- DANGER theme -->
  <div>
    <h1>DANGER</h1>
    <Button solid theme="danger" size="thin">BUTTON</Button>
    <Button theme="danger" size="thin">BUTTON</Button>
    <Button theme="danger" size="thin" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="danger" size="compact">BUTTON</Button>
    <Button theme="danger">BUTTON</Button>
    <Button theme="danger" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="danger" size="default">BUTTON</Button>
    <Button theme="danger" size="default">BUTTON</Button>
    <Button theme="danger" size="default" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- WARNING theme -->
  <div>
    <h1>WARNING</h1>
    <Button solid theme="warning" size="thin">BUTTON</Button>
    <Button theme="warning" size="thin">BUTTON</Button>
    <Button theme="warning" size="thin" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="warning" size="compact">BUTTON</Button>
    <Button theme="warning">BUTTON</Button>
    <Button theme="warning" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="warning" size="default">BUTTON</Button>
    <Button theme="warning" size="default">BUTTON</Button>
    <Button theme="warning" size="default" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- SUCCESS theme -->
  <div>
    <h1>SUCCESS</h1>
    <Button solid theme="success" size="thin">BUTTON</Button>
    <Button theme="success" size="thin">BUTTON</Button>
    <Button theme="success" size="thin" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="success" size="compact">BUTTON</Button>
    <Button theme="success">BUTTON</Button>
    <Button theme="success" size="compact" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="success" size="default">BUTTON</Button>
    <Button theme="success" size="default">BUTTON</Button>
    <Button theme="success" size="default" outlined
      ><IconMoon size={20} />BUTTON</Button
    >
  </div>

  <!-- ROUNDED -->
  <div>
    <h1>ROUNDED</h1>
    <Button solid rounded theme="plain" size="thin">
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <Button rounded theme="plain" size="thin">
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <Button rounded theme="plain" size="thin" outlined>
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <div class="v-spacer" />
    <Button solid rounded theme="accent" size="compact"
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent"
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent" size="compact" outlined
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <div class="v-spacer" />
    <Button solid rounded theme="danger" size="default"
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
    <Button rounded theme="danger" size="default"
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
    <Button rounded theme="danger" size="default" outlined
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
  </div>

  <!-- ICON BUTTON-->
  <div>
    <h1>ICON BUTTONS</h1>
    <Button icon solid theme="plain" size="thin">
      <IconMoon size={16} />
    </Button>
    <Button icon theme="plain" size="thin">
      <IconMoon size={16} />
    </Button>
    <Button icon theme="plain" size="thin" outlined>
      <IconMoon size={16} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid theme="accent" size="compact">
      <IconMoon size={24} />
    </Button>
    <Button icon theme="accent">
      <IconMoon size={24} />
    </Button>
    <Button icon theme="accent" size="compact" outlined>
      <IconMoon size={24} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid theme="danger" size="default">
      <IconMoon size={30} />
    </Button >
    <Button icon theme="danger" size="default">
      <IconMoon size={30} />
      </Button>
    <Button icon theme="danger" size="default" outlined>
      <IconMoon size={30} />
    </Button>
  </div>

  <!-- ICON ROUNDED BUTTONS -->
  <div>
    <h1>ICON ROUNDED BUTTONS</h1>
    <Button icon solid rounded theme="plain" size="thin">
      <IconMoon size={16} />
    </Button>
    <Button icon rounded theme="plain" size="thin">
      <IconMoon size={16} />
    </Button>
    <Button icon rounded theme="plain" size="thin" outlined>
      <IconMoon size={16} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid rounded theme="accent" size="compact">
      <IconMoon size={24} />
    </Button>
    <Button icon rounded theme="accent">
      <IconMoon size={24} />
    </Button>
    <Button icon rounded theme="accent" size="compact" outlined>
      <IconMoon size={24} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid rounded theme="danger" size="default">
      <IconMoon size={30} />
    </Button >
    <Button icon rounded theme="danger" size="default">
      <IconMoon size={30} />
      </Button>
    <Button icon rounded theme="danger" size="default" outlined>
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
      <Button solid theme="soft" size="thin">BUTTON</Button>
      <Button theme="soft" size="thin">BUTTON</Button>
      <Button theme="soft" size="thin" outlined>BUTTON</Button>
      <div class="v-spacer" />
      <Button solid theme="soft" size="compact">BUTTON</Button>
      <Button theme="soft">BUTTON</Button>
      <Button theme="soft" size="compact" outlined>BUTTON</Button>
      <div class="v-spacer" />
      <Button solid theme="soft" size="default">BUTTON</Button>
      <Button theme="soft" size="default">BUTTON</Button>
      <Button theme="soft" size="default" outlined
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
