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
        <h3>Without handlers</h3>
        <Chip>Accent</Chip>
        <Chip theme="plain">Plain</Chip>
        <Chip theme="success">Success</Chip>
        <Chip theme="danger">Danger</Chip>
        <Chip theme="warning">Warning</Chip>
      </div>
      <div>
        <h3>With "onDelete" handler</h3>
        <Chip onDelete={() => undefined}>Accent</Chip>
        <Chip theme="plain" onDelete={() => undefined}>Plain</Chip>
        <Chip theme="success" onDelete={() => undefined}>Success</Chip>
        <Chip theme="danger" onDelete={() => undefined}>Danger</Chip>
        <Chip theme="warning" onDelete={() => undefined}>Warning</Chip>
      </div>
      <div>
        <h3>With "onClick" handler</h3>
        <Chip onClick={() => undefined}>Accent</Chip>
        <Chip theme="plain" onClick={() => undefined}>Plain</Chip>
        <Chip theme="success" onClick={() => undefined}>Success</Chip>
        <Chip theme="danger" onClick={() => undefined}>Danger</Chip>
        <Chip theme="warning" onClick={() => undefined}>Warning</Chip>
      </div>
      <div>
        <h3>With "onClick" & "onDelete" handler</h3>
        <Chip onClick={() => undefined} onDelete={() => undefined}>Accent</Chip>
        <Chip theme="plain" onClick={() => undefined} onDelete={() => undefined}
          >Plain</Chip
        >
        <Chip
          theme="success"
          onClick={() => undefined}
          onDelete={() => undefined}>Success</Chip
        >
        <Chip
          theme="danger"
          onClick={() => undefined}
          onDelete={() => undefined}>Danger</Chip
        >
        <Chip
          theme="warning"
          onClick={() => undefined}
          onDelete={() => undefined}>Warning</Chip
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
    margin-bottom: 16px;
    text-align: center;
  }
  h3 {
    color: var(--luna-text-color-secondary);
    margin-top: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
