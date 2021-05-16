<script>
  import { Card, Button, FlipView } from "../luna";

  let flippedX = false;
  let flippedY = false;

  $: {
    console.log(`flippedX = ${flippedX}`);
    console.log(`flippedY = ${flippedY}`);
  }
</script>

<section>
  <div>
    <FlipView flipped={flippedX}>
      <Card hasShadow slot="front">
        <img src="./images/mando.jpg" alt="The Mandalorian" />
      </Card>
      <Card hasShadow slot="back">
        <img src="./images/grogu.jpg" alt="The Child" />
      </Card>
    </FlipView>
    <Button
      theme="accent"
      outlined
      on:click={() => (flippedX = !flippedX)}
      style="margin-top: 16px"
    >
      FLIP VERTICALLY
    </Button>
  </div>

  <div>
    <FlipView axis="y" flipped={flippedY}>
      <Card hasShadow slot="front">
        <img src="./images/mando.jpg" alt="The Mandalorian" />
      </Card>
      <Card hasShadow slot="back">
        <img src="./images/grogu.jpg" alt="The Child" />
      </Card>
    </FlipView>
    <Button
      theme="accent"
      outlined
      on:click={() => (flippedY = !flippedY)}
      style="margin-top: 16px"
    >
      FLIP HORIZONTALLY
    </Button>
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
  section > div {
    padding: 32px;
    text-align: center;
  }
  img {
    vertical-align: bottom;
    width: 480px;
    height: 270px;
  }
</style>
