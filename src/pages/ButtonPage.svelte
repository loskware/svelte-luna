<script>
  import Button from "../luna/components/Button.svelte";
  import Card from "../luna/components/Card.svelte";
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
    <Button size="large" outlined disabled>BUTTON</Button>
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
    <Button theme="plain" size="large" outlined>BUTTON</Button>
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
    <Button size="large" outlined>BUTTON</Button>
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
    <Button theme="danger" size="large" outlined>BUTTON</Button>
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
    <Button theme="warning" size="large" outlined>BUTTON</Button>
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
    <Button theme="success" size="large" outlined>BUTTON</Button>
  </div>

  <!-- FAB theme
  <div>
    <Text size="title">FAB</Text>
    <FloatingActionButton
      size="large"
      theme="accent"
     
      onClick={() => null}
      disabled
    />
    <FloatingActionButton
      size="large"
      theme="plain"
     
      onClick={() => null}
    />
    <FloatingActionButton
      size="large"
      theme="accent"
     
      onClick={() => null}
    />
    <FloatingActionButton
      size="large"
      theme="danger"
     
      onClick={() => null}
    >
      ACTION
    </FloatingActionButton>{" "}
    <FloatingActionButton
      size="large"
      theme="warning"
     
      onClick={() => null}
    >
      ACTION
    </FloatingActionButton>
    <FloatingActionButton
      size="large"
      theme="success"
     
      onClick={() => null}
    >
      ACTION
    </FloatingActionButton>
  </div> -->

  <!-- SOFT theme -->
  <Card backgroundColor="hsl(263, 88%, 53%)">
    <h1>SOFT</h1>
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
    <Button theme="soft" size="large" outlined>BUTTON</Button>
  </Card>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 16px 16px 0;
  }
  section > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }
  section > :global(.Card) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }
  section :global(.Button) {
    margin-top: 4px;
  }
  h1 {
    margin-bottom: 16px;
    font-weight: 500;
  }
</style>
