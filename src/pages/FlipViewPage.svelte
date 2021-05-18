<script>
  import { Card, Button, FlipView } from "../luna";
  import { IconArrowRight, IconX } from "../icons";

  let flippedX = false;
  let flippedY = false;

  const flipX = () => (flippedX = !flippedX);
  const flipY = () => (flippedY = !flippedY);
</script>

<section>
  <div>
    <h1>FLIP VERTICALLY</h1>
    <FlipView flipped={flippedX}>
      <Card hasShadow slot="front">
        <div class="wrapper">
          <div class="img-wrapper">
            <img src="./assets/mando.jpg" alt="mando" />
          </div>
          <div class="card-content">
            <h2>MANDO</h2>
            <Button rounded size="compact" on:click={flipX}>
              <IconArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Card>
      <Card class="flip-card" hasShadow slot="back">
        <div class="detail">

          <Button rounded size="compact" on:click={flipX}>
            <IconX size={16} />
          </Button>
          <h2>Something cool</h2>
        </div>
      </Card>
    </FlipView>
  </div>

  <div>
    <h1>FLIP HORIZONTALLY</h1>
    <FlipView axis="y" flipped={flippedY}>
      <Card hasShadow slot="front">
        <div class="wrapper">
          <div class="img-wrapper">
            <img src="./assets/grogu.jpg" alt="The Child" />
          </div>
          <div class="card-content">
            <h2>GROGU</h2>
            <Button rounded size="compact" on:click={flipY}>
              <IconArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Card>
      <Card class="flip-card" hasShadow slot="back">
        <div class="detail">
          <Button rounded size="compact" on:click={flipY}>
            <IconX size={16} />
          </Button>
          <h2>Something cool</h2>
        </div>
      </Card>
    </FlipView>
  </div>
  <div>
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
  h1 {
    font-size: 1.25rem;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  .wrapper {
    position: relative;
    padding-top: 200px;
  }
  .wrapper:hover img {
    transform: scale(1.2);
  }
  .img-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    will-change: transform;
  }
  .card-content {
    position: relative;
    width: 300px;
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: var(--luna-bkg-color);
  }
  .card-content > h2 {
    margin-right: auto;
  }
  :global(.flip-card) {
    height: 100%;
  }
  .detail {
    height: 100%;
    display: flex;
    align-items: center;
    background-color: var(--luna-bkg-color);
  }
</style>
