<script>
  import IconWifiOff from "../icons/IconWifiOff.svelte";
  import IconWifiOn from "../icons/IconWifiOn.svelte";
  import { Card, Segment, SegmentedControl } from "../luna";

  let selected = Array(10).fill(0);
  const tabs = ["A", "B", "C"];
</script>

<section>
  <div class="tab-view">
    <div class="tabs">
      <SegmentedControl>
        {#each tabs as tab, index}
          <Segment value={index} bind:group={selected[0]}>
            <b>{tab}</b>
            TAB {tab}
          </Segment>
        {/each}
      </SegmentedControl>
    </div>
    <div class="tab-content tac">
      <h1 style="margin-top: 24px">CONTENT OF TAB</h1>
      <h1 class="accent">{tabs[selected[0]]}</h1>
    </div>
  </div>
  <Card style="margin: 32px;">
    <div class="container">
      <h1 class="tac">THEMES</h1>
      <SegmentedControl>
        <Segment theme="plain" value={0} bind:group={selected[1]}>Plain</Segment
        >
        <Segment theme="plain" value={1} bind:group={selected[1]}
          >Segment</Segment
        >
      </SegmentedControl>
      <SegmentedControl style="margin-top: 12px">
        <Segment value={0} bind:group={selected[2]}>Accent</Segment>
        <Segment value={1} bind:group={selected[2]}>Segment</Segment>
      </SegmentedControl>
      <SegmentedControl style="margin-top: 12px">
        <Segment theme="danger" value={0} bind:group={selected[3]}
          >Danger</Segment
        >
        <Segment theme="danger" value={1} bind:group={selected[3]}
          >Segment</Segment
        >
      </SegmentedControl>
      <SegmentedControl style="margin-top: 12px">
        <Segment theme="warning" value={0} bind:group={selected[4]}
          >Warning</Segment
        >
        <Segment theme="warning" value={1} bind:group={selected[4]}
          >Segment</Segment
        >
      </SegmentedControl>
      <SegmentedControl style="margin-top: 12px">
        <Segment theme="success" value={0} bind:group={selected[5]}
          >Success</Segment
        >
        <Segment theme="success" value={1} bind:group={selected[5]}
          >Segment</Segment
        >
      </SegmentedControl>
    </div>
  </Card>
  <Card style="margin: 32px;">
    <div class="container">
      <h1 class="tac">SEGMENTS</h1>
      <h2 class="subtitle">SEGMENTS CAN CONTAIN ANYTHING...</h2>
      <SegmentedControl style="align-self: center">
        <Segment value={0} bind:group={selected[6]}>
          <IconWifiOff size={16} />
        </Segment>
        <Segment value={1} bind:group={selected[6]}>
          <IconWifiOn size={16} />
        </Segment>
      </SegmentedControl>
      <SegmentedControl style="margin-top: 12px; align-self: center">
        <Segment theme="plain" value={0} bind:group={selected[7]}>
          <IconWifiOff size={16} />
          <span>WIFI OFF</span>
        </Segment>
        <Segment theme="plain" value={1} bind:group={selected[7]}>
          <IconWifiOn size={16} />
          <span>WIFI ON</span>
        </Segment>
      </SegmentedControl>
      <h2 style="margin-top: 24px">...OTHER COMPONENTS AS WELL</h2>
      <SegmentedControl>
        <Segment
          style="padding: 6px"
          theme="danger"
          value={0}
          bind:group={selected[8]}
        >
          <SegmentedControl>
            <Segment
              selectedStyle="background-color: rgba(255 255 255 / 0.4)"
              theme="danger"
              value={0}
              bind:group={selected[9]}>DARK</Segment
            >
            <Segment
              selectedStyle="background-color: rgba(255 255 255 / 0.4)"
              theme="danger"
              value={1}
              bind:group={selected[9]}>LIGHT</Segment
            >
          </SegmentedControl>
        </Segment>
        <Segment theme="success" value={1} bind:group={selected[8]}>
          SYSTEM
        </Segment>
      </SegmentedControl>
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
    border: 3px solid var(--luna-bkg-color-alpha2);
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
    margin-bottom: 16px;
    white-space: nowrap;
  }
  h2 {
    align-self: center;
    font-size: 0.75rem;
    color: var(--luna-accent-text-color);
    margin: 16px;
    white-space: nowrap;
  }
  h2.subtitle {
    margin-top: -8px;
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
