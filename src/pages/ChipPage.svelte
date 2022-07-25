<script lang="ts">
  import { Card, Chip } from "$lib";

  const onDelete = () => null;
  const onClick = () => null;
</script>

<section>
  <Card>
    <div class="container">
      <h1>Chips</h1>
      <h2>
        Chips are small buttons, usefull as labels. Setting the
        <i><b>onDelete</b></i> callback prop will show ad interagible "x" icon.
      </h2>
      <h3>
        <span>Without handlers</span>
        <Chip>Chip 1</Chip>
        <Chip color="#8bc34a">Chip 2</Chip>
        <Chip color="#2196f3">Chip 3</Chip>
        <Chip color="#e91e63">Chip 4</Chip>
      </h3>
      <h3>
        <span>With "onDelete" handler</span>
        <Chip {onDelete}>Chip 1</Chip>
        <Chip color="#8bc34a" {onDelete}>Chip 2</Chip>
        <Chip color="#2196f3" {onDelete}>Chip 3</Chip>
        <Chip color="#e91e63" {onDelete}>Chip 4</Chip>
      </h3>
      <h3>
        <span>With "onClick" handler</span>
        <Chip {onClick}>Chip 1</Chip>
        <Chip color="#8bc34a" {onClick}>Chip 2</Chip>
        <Chip color="#2196f3" {onClick}>Chip 3</Chip>
        <Chip color="#e91e63" {onClick}>Chip 4</Chip>
      </h3>
      <h3>
        <span>With "onClick" & "onDelete" handler</span>
        <Chip {onClick} {onDelete}>Chip 1</Chip>
        <Chip color="#8bc34a" {onClick} {onDelete}>Chip 2</Chip>
        <Chip color="#2196f3" {onClick} {onDelete}>Chip 3</Chip>
        <Chip color="#e91e63" {onClick} {onDelete}>Chip 4</Chip>
      </h3>
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
    max-width: 600px;
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
  h3 > span {
    margin-right: 8px;
  }

  @media (max-width: 767px) {
    .container {
      padding: 16px;
    }
  }
</style>
