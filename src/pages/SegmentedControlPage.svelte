<script>
  import { Card, Segment, SegmentedControl } from "../luna";

  let selected = Array(6).fill(0);
  const tabs = ["A", "B", "C"];

  const select = (groupIndex, index) => () => (selected[groupIndex] = index);
</script>

<section>
  <div class="tab-view">
    <div class="tabs">
      <SegmentedControl>
        {#each tabs as tab, index}
          <Segment
            selected={selected[0] === index}
            on:click={select(0, index)}
          >
            <b>{tab}</b>
            TAB {tab}
          </Segment>
        {/each}
      </SegmentedControl>
    </div>
    <div class="tab-content tac">
      <h1>CONTENT OF TAB</h1>
      <h1 class="accent">{tabs[selected[0]]}</h1>
    </div>
  </div>
  <Card style="margin: 32px;">
    <div class="container">
      <h1 class="tac">THEMES</h1>
      <SegmentedControl>
        <Segment
          theme="plain"
          selected={selected[1] === 0}
          on:click={select(1, 0)}>Plain</Segment
        >
        <Segment
          theme="plain"
          selected={selected[1] === 1}
          on:click={select(1, 1)}>Segments</Segment
        >
      </SegmentedControl>
      <SegmentedControl>
        <Segment selected={selected[2] === 0} on:click={select(2, 0)}
          >Accent</Segment
        >
        <Segment selected={selected[2] === 1} on:click={select(2, 1)}
          >Segments</Segment
        >
      </SegmentedControl>
      <SegmentedControl>
        <Segment
          theme="danger"
          selected={selected[3] === 0}
          on:click={select(3, 0)}>Danger</Segment
        >
        <Segment
          theme="danger"
          selected={selected[3] === 1}
          on:click={select(3, 1)}>Segments</Segment
        >
      </SegmentedControl>
      <SegmentedControl>
        <Segment
          theme="warning"
          selected={selected[4] === 0}
          on:click={select(4, 0)}>Warning</Segment
        >
        <Segment
          theme="warning"
          selected={selected[4] === 1}
          on:click={select(4, 1)}>Segments</Segment
        >
      </SegmentedControl>
      <SegmentedControl>
        <Segment
          theme="success"
          selected={selected[5] === 0}
          on:click={select(5, 0)}>Success</Segment
        >
        <Segment
          theme="success"
          selected={selected[5] === 1}
          on:click={select(5, 1)}>Segments</Segment
        >
      </SegmentedControl>
    </div>
  </Card>
  <Card style="margin: 32px;">
    <div class="container">
      <h1 class="tac">CONTENT</h1>
    </div>
  </Card>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 100%;
    padding: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    height: 100%;
  }
  .tab-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 32px;
    border-radius: var(--luna-border-radius-l);
    border: 3px solid var(--luna-bkg-color-alpha1);
  }
  .tabs {
    background-color: var(--page-bkg);
    margin-top: -17px;
  }
  .tab-content {
    margin: auto;
  }
  h1 {
    font-size: 1.25rem;
    margin-bottom: 8px;
    white-space: nowrap;
  }
  h1.accent {
    color: var(--luna-accent-text-color);
    font-size: 3rem;
  }
  b {
    font-size: 1.125rem;
  }
  .tac {
    text-align: center;
  }
</style>
