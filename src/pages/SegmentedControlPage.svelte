<script>
  import { Segment, SegmentedControl } from "../luna";
  import { IconSun, IconOcto, IconCircle } from "../icons";

  let selected = 0;
</script>

<section>
  <div>
    <SegmentedControl>
      <Segment selected={selected === 0}>
        <IconSun />
        SUNSHINE
      </Segment>
      <Segment theme="danger" selected={selected === 1}>
        <IconOcto />
        GITHUB
      </Segment>
      <Segment theme="success" selected={selected === 2}>
        <IconCircle />
        CIRCLE
      </Segment>
    </SegmentedControl>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    padding: 0;
  }
  h1 {
    font-size: 1.25rem;
    margin-bottom: 24px;
    white-space: nowrap;
  }
</style>
