<script>
  import { Card } from "../luna";
</script>

<section>
  <div>
    <Card>
      <div class="container">
        <h1>Default</h1>
      </div>
    </Card>
    <Card elevation={2} class="mt16">
      <div class="container">
        <h1>Default with shadow</h1>
      </div>
    </Card>
    <Card outlined class="mt16">
      <div class="container">
        <h1>Default outlined</h1>
      </div>
    </Card>
  </div>
  <div>
    <Card theme="accent">
      <div class="container">
        <h1>Accent</h1>
      </div>
    </Card>
    <Card theme="accent" elevation={2} class="mt16">
      <div class="container">
        <h1>Accent with shadow</h1>
      </div>
    </Card>
    <Card theme="accent" outlined class="mt16">
      <div class="container">
        <h1>Accent outlined</h1>
      </div>
    </Card>
  </div>
  <div>
    <Card theme="danger">
      <div class="container">
        <h1>Danger</h1>
      </div>
    </Card>
    <Card theme="danger" elevation={2} class="mt16">
      <div class="container">
        <h1>Danger with shadow</h1>
      </div>
    </Card>
    <Card theme="danger" outlined class="mt16">
      <div class="container">
        <h1>Danger outlined</h1>
      </div>
    </Card>
  </div>
  <div>
    <Card theme="warning">
      <div class="container">
        <h1>Warning</h1>
      </div>
    </Card>
    <Card theme="warning" elevation={2} class="mt16">
      <div class="container">
        <h1>Warning with shadow</h1>
      </div>
    </Card>
    <Card theme="warning" outlined class="mt16">
      <div class="container">
        <h1>Warning outlined</h1>
      </div>
    </Card>
  </div>
  <div>
    <Card theme="success">
      <div class="container">
        <h1>Success</h1>
      </div>
    </Card>
    <Card theme="success" elevation={2} class="mt16">
      <div class="container">
        <h1>Success with shadow</h1>
      </div>
    </Card>
    <Card theme="success" outlined class="mt16">
      <div class="container">
        <h1>Success outlined</h1>
      </div>
    </Card>
  </div>
  <div>
    <Card class="luna-gradient-bkg custom-card" elevation={2}>
      <div class="container">
        <h1>Customization</h1>
        <h2>
          Cards can be customized via inline styles or css (global) classes.
        </h2>
      </div>
    </Card>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
  section > div {
    margin: 16px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
    max-width: 350px;
  }
  h1 {
    align-self: center;
    font-size: 1.25rem;
    white-space: nowrap;
  }
  h2 {
    margin-top: 16px;
  }

  :global(.custom-card) {
    border-radius: 40px !important;
    border: 4px solid white !important;
  }
  :global(.custom-card h1) {
    color: white !important;
  }
  :global(.custom-card h2) {
    color: white !important;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
