<script>
  import { Card, Chip } from "../luna";
</script>

<section>
  <Card>
    <div class="container">
      <h1>Chips</h1>
      <h2>
        Chips are small buttons, usefull as labels. Setting the
        <i><b>onDelete</b></i> callback prop will show ad interagible "x" icon.
      </h2>
      <div>
        <Chip>Accent</Chip>
        <Chip theme="plain">Plain</Chip>
        <Chip theme="success">Success</Chip>
        <Chip theme="danger">Danger</Chip>
        <Chip theme="warning">Warning</Chip>
      </div>
      <div>
        <Chip onDelete={() => console.log("delete")}>Accent</Chip>
        <Chip theme="plain" onDelete={() => console.log("delete")}>Plain</Chip>
        <Chip theme="success" onDelete={() => console.log("delete")}
          >Success</Chip
        >
        <Chip theme="danger" onDelete={() => console.log("delete")}>Danger</Chip
        >
        <Chip theme="warning" onDelete={() => console.log("delete")}
          >Warning</Chip
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
    padding: 32px;
    max-width: 500px;
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

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
