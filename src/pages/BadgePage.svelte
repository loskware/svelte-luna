<script>
  import { Card } from "../luna";
  import { badge } from "../luna/actions";
</script>

<section>
  <Card>
    <div class="container">
      <h1>Badges</h1>
      <h2>
        You can attach a badge to any element via the <span> use:badge </span> action
      </h2>
      <div class="hflex">
        <div class="badge-container" use:badge={{ text: "4" }}>
          <p>anchor = "top-right"</p>
          <p>color = "accent"</p>
        </div>
        <div
          class="badge-container"
          use:badge={{ text: "Ok", anchor: "bottom-right", color: "success" }}
        >
          <p>anchor = "bottom-right"</p>
          <p>color = "success"</p>
        </div>
        <div
          class="badge-container"
          use:badge={{ text: "Alert!", anchor: "top-left", color: "danger" }}
        >
          <p>anchor = "top-left"</p>
          <p>color = "danger"</p>
        </div>
        <div
          class="badge-container"
          use:badge={{ text: "23", anchor: "bottom-left", color: "warning" }}
        >
          <p>anchor = "bottom-left"</p>
          <p>color = "warning"</p>
        </div>
        
      </div>
    </div>
  </Card>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
  h1 {
    align-self: center;
    font-size: 1.25rem;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  h2 {
    color: var(--luna-accent-text-color);
    margin-bottom: 32px;
    text-align: center;
  }
  span {
    border-radius: 4px;
    padding: 0 4px;
    background-color: var(--luna-bkg-color-alpha2);
  }
  .hflex {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .badge-container {
    position: relative;
    margin: 24px;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--luna-bkg-color-alpha2);
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
