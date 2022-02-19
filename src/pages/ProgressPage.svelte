<script lang="ts">
  import IconMoon from "../icons/IconMoon.svelte";
  import { Button, Card, CircleProgress, LineProgress } from "$lib";

  let percentage = [20, 40];

  function changePerc(group: number, amount: number) {
    const next = (percentage[group] += amount);
    if (next > 100) percentage[group] = next - 100;
    else if (next < 0) percentage[group] = 100 + next;
    else {
      percentage[group] = next;
    }
  }
</script>

<section>
  <Card>
    <div class="grid">
      <div class="span2 title">
        <h1 class="title">CIRCLE PROGRESS</h1>
        <h2 class="subtitle">COLORS</h2>
      </div>
      <div>
        <h3 class="plain">Plain</h3>
        <CircleProgress
          size={120}
          strokeWidth={10}
          percentage={percentage[0]}
        />
      </div>
      <div>
        <h3 class="accent">Accent</h3>
        <CircleProgress color="accent" percentage={percentage[0]} />
      </div>
      <div>
        <h3 class="danger">Danger</h3>
        <CircleProgress color="danger" percentage={percentage[0]} />
      </div>
      <div>
        <h3 class="warning">Warning</h3>
        <CircleProgress color="warning" percentage={percentage[0]} />
      </div>
      <div>
        <h3 class="success">Success</h3>
        <CircleProgress color="success" percentage={percentage[0]} />
      </div>
      <div>
        <h3 class="custom">Custom</h3>
        <CircleProgress color="hsl(278, 76%, 53%)" percentage={percentage[0]} />
      </div>
      <div class="span2" style="margin-top: 16px">
        <Button
          outlined
          theme="danger"
          rounded
          on:click={() => changePerc(0, -20)}
        >
          -20%
        </Button>
        <Button
          outlined
          theme="success"
          rounded
          on:click={() => changePerc(0, 20)}
        >
          +20%
        </Button>
      </div>
    </div>
  </Card>
  <Card>
    <div class="grid">
      <div class="span2 title">
        <h1 class="title">CIRCLE PROGRESS</h1>
        <h2 class="subtitle">CUSTOMIZATION</h2>
      </div>
      <div>
        <h3>Stroke Width</h3>
        <CircleProgress strokeWidth={20} color="accent" percentage={30} />
      </div>
      <div>
        <h3>Linecap</h3>
        <CircleProgress color="success" linecap="square" percentage={30} />
      </div>
      <div>
        <h3>Track Color</h3>
        <CircleProgress
          color="danger"
          percentage={30}
          trackColor="var(--luna-accent-bkg-color)"
        />
      </div>
      <div>
        <h3>Background</h3>
        <CircleProgress
          color="rgb(159, 43, 226)"
          percentage={30}
          trackColor="var(--progress-track)"
          backgroundColor="var(--progress-bkg)"
        />
      </div>
      <div>
        <h3>Label Style</h3>
        <CircleProgress
          color="success"
          percentage={30}
          labelStyle="color:red;background-color: var(--progress-track);padding: 4px 8px;font-size: 32px;border-radius:12px;"
        />
      </div>
      <div>
        <h3>Content</h3>
        <CircleProgress color="danger" percentage={30}>
          <IconMoon size={40} />
        </CircleProgress>
      </div>
      <div>
        <h3>Size</h3>
        <CircleProgress size={60} percentage={30} />
      </div>
    </div>
  </Card>
  <Card>
    <div class="column">
      <div class="title">
        <h1 class="title">LINE PROGRESS</h1>
        <h2 class="subtitle">COLORS</h2>
      </div>
      <div class="block">
        <h3 class="plain">Plain</h3>
        <LineProgress percentage={percentage[1]} />
      </div>
      <div class="block">
        <h3 class="accent">Accent</h3>
        <LineProgress color="accent" percentage={percentage[1]} />
      </div>
      <div class="block">
        <h3 class="danger">Danger</h3>
        <LineProgress color="danger" percentage={percentage[1]} />
      </div>
      <div class="block">
        <h3 class="warning">Warning</h3>
        <LineProgress color="warning" percentage={percentage[1]} />
      </div>
      <div class="block">
        <h3 class="success">Success</h3>
        <LineProgress color="success" percentage={percentage[1]} />
      </div>
      <div class="block">
        <h3 style="color: rgb(159, 43, 226)">Custom</h3>
        <LineProgress color="rgb(159, 43, 226)" percentage={percentage[1]} />
      </div>
      <div class="block" style="text-align: center; margin-top: 40px;">
        <Button
          outlined
          theme="danger"
          rounded
          on:click={() => changePerc(1, -20)}
        >
          -20%
        </Button>
        <Button
          outlined
          theme="success"
          rounded
          on:click={() => changePerc(1, 20)}
        >
          +20%
        </Button>
      </div>
    </div>
  </Card>
  <Card>
    <div class="column">
      <div class="title">
        <h1 class="title">LINE PROGRESS</h1>
        <h2 class="subtitle">CUSTOMIZATION</h2>
      </div>
      <div class="block">
        <h3>Linecap</h3>
        <LineProgress linecap="square" percentage={50} />
      </div>
      <div class="block">
        <h3>Hide Label</h3>
        <LineProgress hideLabel color="accent" percentage={50} />
      </div>
      <div class="block">
        <h3>Track Color</h3>
        <LineProgress
          color="danger"
          percentage={50}
          trackColor="var(--luna-accent-bkg-color)"
        />
      </div>
      <div class="block">
        <h3>Label Color</h3>
        <LineProgress color="success" percentage={50} labelColor="blue" />
      </div>
    </div>
  </Card>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    margin-top: 40px;
  }
  .grid {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    gap: 24px 16px;
    padding: 32px;
  }
  .grid h3 {
    text-align: center;
  }
  .column {
    padding: 32px;
    min-width: 250px;
  }
  .block {
    margin-top: 24px;
    text-align: left;
  }
  h3 {
    margin-bottom: 8px;
  }
  h3.plain {
    color: var(--luna-plain-text-color);
  }
  h3.accent {
    color: var(--luna-accent-text-color);
  }
  h3.danger {
    color: var(--luna-danger-text-color);
  }
  h3.warning {
    color: var(--luna-warning-text-color);
  }
  h3.success {
    color: var(--luna-success-text-color);
  }
  h3.custom {
    color: rgb(159, 43, 226);
  }
  .span2 {
    grid-column: span 2;
  }

  @media (max-width: 767px) {
    .grid {
      padding: 16px;
    }
  }
</style>
