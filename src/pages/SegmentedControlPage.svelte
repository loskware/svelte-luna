<script>
  import { Segment, SegmentedControl } from "../luna";

  let selected = 0;
  const tabs = ["A", "B", "C"];

  function select(index) {
    selected = index;
  }
</script>

<section>
  <div class="tab-view">
    <div class="tabs">
      <SegmentedControl>
        {#each tabs as tab, index}
          <Segment selected={selected === index} on:click={() => select(index)}>
            <b>{tab}</b>
            TAB {tab}
          </Segment>
        {/each}
      </SegmentedControl>
    </div>
    <div class="tab-content">
      <h1>
        CONTENT OF TAB {tabs[selected]}
      </h1>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 100%;
    padding: 0;
  }
  .tab-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 500px;
    margin-top: 17px;
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
    margin-bottom: 24px;
    white-space: nowrap;
  }
  b {
    font-size: 1.125rem;
  }
</style>
