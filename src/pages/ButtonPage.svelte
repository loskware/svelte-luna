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
    <Button solid compact disabled>BUTTON</Button>
    <Button compact disabled>BUTTON</Button>
    <Button compact outlined disabled>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid disabled>BUTTON</Button>
    <Button disabled>BUTTON</Button>
    <Button outlined disabled>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid large disabled>BUTTON</Button>
    <Button large disabled>BUTTON</Button>
    <Button large outlined disabled><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- PLAIN theme -->
  <div>
    <h1>PLAIN</h1>
    <Button solid theme="plain" compact>BUTTON</Button>
    <Button theme="plain" compact>BUTTON</Button>
    <Button theme="plain" compact outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="plain">BUTTON</Button>
    <Button theme="plain">BUTTON</Button>
    <Button theme="plain" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="plain" large>BUTTON</Button>
    <Button theme="plain" large>BUTTON</Button>
    <Button theme="plain" large outlined><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- ACCENT theme -->
  <div>
    <h1>ACCENT</h1>
    <Button compact solid>BUTTON</Button>
    <Button compact>BUTTON</Button>
    <Button compact outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid>BUTTON</Button>
    <Button>BUTTON</Button>
    <Button outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid large>BUTTON</Button>
    <Button large>BUTTON</Button>
    <Button large outlined><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- DANGER theme -->
  <div>
    <h1>DANGER</h1>
    <Button solid theme="danger" compact>BUTTON</Button>
    <Button theme="danger" compact>BUTTON</Button>
    <Button theme="danger" compact outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="danger">BUTTON</Button>
    <Button theme="danger">BUTTON</Button>
    <Button theme="danger" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="danger" large>BUTTON</Button>
    <Button theme="danger" large>BUTTON</Button>
    <Button theme="danger" large outlined><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- WARNING theme -->
  <div>
    <h1>WARNING</h1>
    <Button solid theme="warning" compact>BUTTON</Button>
    <Button theme="warning" compact>BUTTON</Button>
    <Button theme="warning" compact outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="warning">BUTTON</Button>
    <Button theme="warning">BUTTON</Button>
    <Button theme="warning" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="warning" large>BUTTON</Button>
    <Button theme="warning" large>BUTTON</Button>
    <Button theme="warning" large outlined><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- SUCCESS theme -->
  <div>
    <h1>SUCCESS</h1>
    <Button solid theme="success" compact>BUTTON</Button>
    <Button theme="success" compact>BUTTON</Button>
    <Button theme="success" compact outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="success">BUTTON</Button>
    <Button theme="success">BUTTON</Button>
    <Button theme="success" outlined>BUTTON</Button>
    <div class="v-spacer" />
    <Button solid theme="success" large>BUTTON</Button>
    <Button theme="success" large>BUTTON</Button>
    <Button theme="success" large outlined><IconMoon size={20} />BUTTON</Button>
  </div>

  <!-- ROUNDED -->
  <div>
    <h1>ROUNDED</h1>
    <Button solid rounded theme="plain" compact>
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <Button rounded theme="plain" compact>
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <Button rounded theme="plain" compact outlined>
      <IconMoon size={18} /><span class="mr-6">BUTTON</span>
    </Button>
    <div class="v-spacer" />
    <Button solid rounded theme="accent"
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent"
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <Button rounded theme="accent" outlined
      ><span class="ml-8">BUTTON</span><IconMoon size={18} /></Button
    >
    <div class="v-spacer" />
    <Button solid rounded theme="danger" large
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
    <Button rounded theme="danger" large
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
    >
    <Button rounded theme="danger" large outlined
      ><IconMoon size={20} /><span class="mr-8">BUTTON</span></Button
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
    <Button icon theme="accent"outlined>
      <IconMoon size={24} />
    </Button>
    <div class="v-spacer" />
    <Button icon solid theme="danger" large>
      <IconMoon size={30} />
    </Button>
    <Button icon theme="danger" large>
      <IconMoon size={30} />
    </Button>
    <Button icon theme="danger" large outlined>
      <IconMoon size={30} />
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
      <IconMoon size={30} />
    </Button>
    <Button icon rounded theme="danger" large>
      <IconMoon size={30} />
    </Button>
    <Button icon rounded theme="danger" large outlined>
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
      <Button solid theme="soft" compact>BUTTON</Button>
      <Button theme="soft" compact>BUTTON</Button>
      <Button theme="soft" compact outlined>BUTTON</Button>
      <div class="v-spacer" />
      <Button solid theme="soft">BUTTON</Button>
      <Button theme="soft">BUTTON</Button>
      <Button theme="soft" outlined>BUTTON</Button>
      <div class="v-spacer" />
      <Button large solid theme="soft">BUTTON</Button>
      <Button large theme="soft">BUTTON</Button>
      <Button large theme="soft" outlined><IconMoon size={20} />BUTTON</Button>
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
