<script>
  import { FlipView } from "../luna";

  let flippedX = false;
  let flippedY = false;
</script>

<section>
  <div
    on:mouseenter={() => (flippedX = true)}
    on:mouseleave={() => (flippedX = false)}
  >
    <h1>FLIP VERTICALLY</h1>
    <FlipView height={350} width={300} flipped={flippedX}>
      <div class="card" slot="front">
        <div class="image">
          <img src="./assets/mando.jpg" alt="mando" />
        </div>
        <div class="bottom-panel">
          <h2>MANDO</h2>
        </div>
      </div>
      <div class="card" slot="back">
        <p>
          "Mando" was a human male Mandalorian who worked as a bounty hunter
          during the New Republic Era. With his Mandalorian armor, IB-94 blaster
          pistol, Amban sniper rifle, and distinctive beskar helmet, Djarin was
          both well-equipped and enigmatic—a stranger whose past was shrouded in
          mystery to others.
        </p>
        <cite>Wookieepedia</cite>
      </div>
    </FlipView>
  </div>

  <div
    on:mouseenter={() => (flippedY = true)}
    on:mouseleave={() => (flippedY = false)}
  >
    <h1>FLIP HORIZONTALLY</h1>
    <FlipView height={350} width={300} axis="y" flipped={flippedY}>
      <div
        class="card"
        style="box-shadow: var(--luna-elevation-4)"
        slot="front"
      >
        <div class="image">
          <img src="./assets/grogu.jpg" alt="grogu" />
        </div>
        <div class="bottom-panel">
          <h2>GROGU</h2>
        </div>
      </div>
      <div class="card" slot="back">
        <p>
          Grogu, known to many simply as "the Child," was a male Force-sensitive
          Mandalorian foundling that belonged to the same species as Jedi Grand
          Master Yoda and Jedi Master Yaddle. Grogu was born in the year 41 BBY,
          and was raised at the Jedi Temple on Coruscant.
        </p>
        <cite>Wookieepedia</cite>
      </div>
    </FlipView>
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
    margin-bottom: 24px;
    white-space: nowrap;
  }
  cite {
    font-size: 0.75rem;
    color: var(--luna-accent-text-color);
  }

  /* FLIPVIEWS */
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    width: 100%;
    border-radius: var(--luna-border-radius-l);
    background-color: var(--luna-card-bkg-color);
    box-shadow: var(--luna-elevation-4);
  }
  .image {
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
  }
  .card p {
    padding: 16px 32px;
  }
  .bottom-panel {
    position: relative;
    margin-top: auto;
    display: flex;
    align-items: center;
    padding: 20px 16px;
    background-color: var(--luna-card-bkg-color);
  }
</style>
