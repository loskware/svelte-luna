<script>
  import IconMoon from "../icons/IconMoon.svelte";
  import { Button, Card, CircleProgress } from "../luna";

  let percentage = 20;

  function changePerc(amount) {
    const next = (percentage += amount);
    if (next > 100) percentage = next - 100;
    else if (next < 0) percentage = 100 + next;
    else {
      percentage = next;
    }
  }
</script>

<section>
  <Card>
    <div class="grid">
      <h1 class="span2">COLORS</h1>
      <div>
        <h2 class="plain">Plain</h2>
        <CircleProgress size="120" strokeWidth={10} {percentage} />
      </div>
      <div>
        <h2 class="accent">Accent</h2>
        <CircleProgress color="accent" {percentage} />
      </div>
      <div>
        <h2 class="danger">Danger</h2>
        <CircleProgress color="danger" {percentage} />
      </div>
      <div>
        <h2 class="warning">Warning</h2>
        <CircleProgress color="warning" {percentage} />
      </div>
      <div>
        <h2 class="success">Success</h2>
        <CircleProgress color="success" {percentage} />
      </div>
      <div>
        <h2 class="custom">Custom</h2>
        <CircleProgress color="rgb(159, 43, 226)" {percentage} />
      </div>
      <div class="span2" style="margin-top: 16px">
        <Button
          outlined
          theme="danger"
          rounded
          on:click={() => changePerc(-20)}
        >
          -20%
        </Button>
        <Button
          outlined
          theme="success"
          rounded
          on:click={() => changePerc(20)}
        >
          +20%
        </Button>
      </div>
    </div>
  </Card>
  <Card>
    <div class="grid">
      <h1 class="span2">CUSTOMIZATION</h1>
      <div>
        <h2 class="accent">Stroke Width</h2>
        <CircleProgress strokeWidth={20} color="accent" percentage={30} />
      </div>
      <div>
        <h2 class="accent">Linecap</h2>
        <CircleProgress color="success" linecap="square" percentage={30} />
      </div>
      <div>
        <h2 class="accent">Track Color</h2>
        <CircleProgress
          color="danger"
          percentage={30}
          trackColor="var(--luna-accent-bkg-color)"
        />
      </div>
      <div>
        <h2 class="accent">Background</h2>
        <CircleProgress
          color="rgb(159, 43, 226)"
          percentage={30}
          trackColor="var(--progress-track)"
          backgroundColor="hsl(36, 80%, 54%)"
        />
      </div>
      <div>
        <h2 class="accent">Label Style</h2>
        <CircleProgress
          color="success"
          percentage={30}
          labelStyle="color:red;background-color: var(--progress-track);padding: 4px 8px;font-size: 32px;border-radius:12px;"
        />
      </div>
      <div>
        <h2 class="accent">Content</h2>
        <CircleProgress color="danger" percentage={30}>
          <IconMoon size={40} />
        </CircleProgress>
      </div>
      <div>
        <h2 class="accent">Size</h2>
        <CircleProgress size="60" percentage={30} />
      </div>
    </div>
  </Card>
</section>

<style>
  section {
    display: flex;
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
  h1 {
    align-self: center;
    font-size: 1.25rem;
    white-space: nowrap;
  }
  h2 {
    text-align: center;
    margin-bottom: 8px;
  }
  h2.plain {
    color: var(--luna-plain-text-color);
  }
  h2.accent {
    color: var(--luna-accent-text-color);
  }
  h2.danger {
    color: var(--luna-danger-text-color);
  }
  h2.warning {
    color: var(--luna-warning-text-color);
  }
  h2.success {
    color: var(--luna-success-text-color);
  }
  h2.custom {
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
