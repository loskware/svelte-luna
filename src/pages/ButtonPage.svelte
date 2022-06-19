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
    <Button solid compact disabled>COMPACT</Button>
    <Button compact disabled>COMPACT</Button>
    <Button compact outlined disabled>COMPACT</Button>
    <div class="v-spacer" />
    <Button solid disabled>DEFAULT</Button>
    <Button disabled>DEFAULT</Button>
    <Button outlined disabled>DEFAULT</Button>
    <div class="v-spacer" />
    <Button solid large disabled>LARGE</Button>
    <Button large disabled>LARGE</Button>
    <Button large outlined disabled><IconMoon size={20} />LARGE</Button>
  </div>

  <!-- PLAIN theme -->
  <div>
    <h1>PLAIN</h1>
    <Button solid theme="plain" compact>COMPACT</Button>
    <Button theme="plain" compact>COMPACT</Button>
    <Button theme="plain" compact outlined>COMPACT</Button>
    <div class="v-spacer" />
    <Button solid theme="plain">DEFAULT</Button>
    <Button theme="plain">DEFAULT</Button>
    <Button theme="plain" outlined>DEFAULT</Button>
    <div class="v-spacer" />
    <Button solid theme="plain" large>LARGE</Button>
    <Button theme="plain" large>LARGE</Button>
    <Button theme="plain" large outlined><IconMoon size={20} />LARGE</Button>
  </div>

  <!-- ACCENT theme -->
  <div>
    <h1>ACCENT</h1>
    <Button compact solid>COMPACT</Button>
    <Button compact>COMPACT</Button>
    <Button compact outlined>COMPACT</Button>
    <div class="v-spacer" />
    <Button solid>DEFAULT</Button>
    <Button>DEFAULT</Button>
    <Button outlined>DEFAULT</Button>
    <div class="v-spacer" />
    <Button solid large>LARGE</Button>
    <Button large>LARGE</Button>
    <Button large outlined><IconMoon size={20} />LARGE</Button>
  </div>

  <!-- DANGER theme -->
  <div>
    <h1>DANGER</h1>
    <Button solid theme="danger" compact>COMPACT</Button>
    <Button theme="danger" compact>COMPACT</Button>
    <Button theme="danger" compact outlined>COMPACT</Button>
    <div class="v-spacer" />
    <Button solid theme="danger">DEFAULT</Button>
    <Button theme="danger">DEFAULT</Button>
    <Button theme="danger" outlined>DEFAULT</Button>
    <div class="v-spacer" />
    <Button solid theme="danger" large>LARGE</Button>
    <Button theme="danger" large>LARGE</Button>
    <Button theme="danger" large outlined><IconMoon size={20} />LARGE</Button>
  </div>

  <!-- WARNING theme -->
  <div>
    <h1>WARNING</h1>
    <Button solid theme="warning" compact>COMPACT</Button>
    <Button theme="warning" compact>COMPACT</Button>
    <Button theme="warning" compact outlined>COMPACT</Button>
    <div class="v-spacer" />
    <Button solid theme="warning">DEFAULT</Button>
    <Button theme="warning">DEFAULT</Button>
    <Button theme="warning" outlined>DEFAULT</Button>
    <div class="v-spacer" />
    <Button solid theme="warning" large>LARGE</Button>
    <Button theme="warning" large>LARGE</Button>
    <Button theme="warning" large outlined><IconMoon size={20} />LARGE</Button>
  </div>

  <!-- SUCCESS theme -->
  <div>
    <h1>SUCCESS</h1>
    <Button solid theme="success" compact>COMPACT</Button>
    <Button theme="success" compact>COMPACT</Button>
    <Button theme="success" compact outlined>COMPACT</Button>
    <div class="v-spacer" />
    <Button solid theme="success">DEFAULT</Button>
    <Button theme="success">DEFAULT</Button>
    <Button theme="success" outlined>DEFAULT</Button>
    <div class="v-spacer" />
    <Button solid theme="success" large>LARGE</Button>
    <Button theme="success" large>LARGE</Button>
    <Button theme="success" large outlined><IconMoon size={20} />LARGE</Button>
  </div>

  <!-- SOFT theme -->
  <Card hideOverflow>
    <div
      class="soft-container"
      style={`background-color: ${colors[colorIndex]}`}
    >
      <h1 style="color: white">SOFT</h1>
      <Button solid theme="soft" compact>COMPACT</Button>
      <Button theme="soft" compact>COMPACT</Button>
      <Button theme="soft" compact outlined>COMPACT</Button>
      <div class="v-spacer" />
      <Button solid theme="soft">DEFAULT</Button>
      <Button theme="soft">DEFAULT</Button>
      <Button theme="soft" outlined>DEFAULT</Button>
      <div class="v-spacer" />
      <Button large solid theme="soft">LARGE</Button>
      <Button large theme="soft">LARGE</Button>
      <Button large theme="soft" outlined><IconMoon size={20} />LARGE</Button>
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

  <!-- ROUNDED -->
  <div>
    <h1>ROUNDED</h1>
    <Button solid rounded theme="plain" compact>
      <IconMoon size={18} /><span class="mr-6">COMPACT</span>
    </Button>
    <Button rounded theme="plain" compact>
      <IconMoon size={18} /><span class="mr-6">COMPACT</span>
    </Button>
    <Button rounded theme="plain" compact outlined>
      <IconMoon size={18} /><span class="mr-6">COMPACT</span>
    </Button>
    <div class="v-spacer" />
    <Button solid rounded theme="accent"
      ><span class="ml-8">DEFAULT</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent"
      ><span class="ml-8">DEFAULT</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent" outlined
      ><span class="ml-8">DEFAULT</span><IconMoon size={18} /></Button
    >
    <div class="v-spacer" />
    <Button solid rounded theme="danger" large
      ><IconMoon size={20} /><span class="mr-8">LARGE</span></Button
    >
    <Button rounded theme="danger" large
      ><IconMoon size={20} /><span class="mr-8">LARGE</span></Button
    >
    <Button rounded theme="danger" large outlined
      ><IconMoon size={20} /><span class="mr-8">LARGE</span></Button
    >
  </div>

  <!-- ICON BUTTON-->
  <div>
    <h1>ICON BUTTONS</h1>
    <Button icon solid theme="plain" compact>
      <IconMoon size={16} />
    </Button>
    <Button icon theme="plain" compact>
      <IconMoon size={16} />
    </Button>
    <Button icon theme="plain" compact outlined>
      <IconMoon size={16} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid theme="accent">
      <IconMoon size={24} />
    </Button>
    <Button icon theme="accent">
      <IconMoon size={24} />
    </Button>
    <Button icon theme="accent" outlined>
      <IconMoon size={24} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid theme="danger" large>
      <IconMoon size={24} />
    </Button>
    <Button icon theme="danger" large>
      <IconMoon size={24} />
    </Button>
    <Button icon theme="danger" large outlined>
      <IconMoon size={24} />
    </Button>
  </div>

  <!-- ICON ROUNDED BUTTONS -->
  <div>
    <h1>ICON ROUNDED BUTTONS</h1>
    <Button icon solid rounded theme="plain" compact>
      <IconMoon size={16} />
    </Button>
    <Button icon rounded theme="plain" compact>
      <IconMoon size={16} />
    </Button>
    <Button icon rounded theme="plain" compact outlined>
      <IconMoon size={16} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid rounded theme="accent">
      <IconMoon size={24} />
    </Button>
    <Button icon rounded theme="accent">
      <IconMoon size={24} />
    </Button>
    <Button icon rounded theme="accent" outlined>
      <IconMoon size={24} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid rounded theme="danger" large>
      <IconMoon size={24} />
    </Button>
    <Button icon rounded theme="danger" large>
      <IconMoon size={24} />
    </Button>
    <Button icon rounded theme="danger" large outlined>
      <IconMoon size={24} />
    </Button>
  </div>

  <!-- ELEVATIONS -->
  <div>
    <h1>ELEVATIONS</h1>
    <Button compact solid elevation={0}>Elevation = 0</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={1}>Elevation = 1</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={2}>Elevation = 2</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={3}>Elevation = 3</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={4}>Elevation = 4</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={5}>Elevation = 5</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={6}>Elevation = 6</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={7}>Elevation = 7</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={8}>Elevation = 8</Button>
    <div class="v-spacer" />
    <Button compact solid elevation={9}>Elevation = 9</Button>
  </div>
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
  div.v-spacer {
    height: 16px;
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
