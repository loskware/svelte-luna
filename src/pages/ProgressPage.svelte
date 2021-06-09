<script>
  import { Button, Card, Progress } from "../luna";

  let percentage = 0;

  function changePerc(amount) {
    const next = (percentage += amount);
    if (next > 100) percentage = 100;
    else if (next < 0) percentage = 0;
    else {
      percentage = next;
    }
  }
</script>

<section>
  <Card>
    <div class="container">
      <Progress size="150" strokeWidth={15} color="accent" {percentage} />
      <div style="margin-top: 16px">
        <Button theme="danger" rounded on:click={() => changePerc(-20)}
          >-20%</Button
        >
        <Button theme="success" rounded on:click={() => changePerc(20)}
          >+20%</Button
        >
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
    align-items: center;
    padding: 32px;
    max-width: 350px;
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
  }
  span {
    font-size: 40px;
  }
  a {
    margin-bottom: 32px;
    text-align: center;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
