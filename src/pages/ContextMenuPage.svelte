<script lang="ts">
  import { Card, ContextMenu, MenuItem } from "$lib";

  let action = "";
</script>

<section>
  <ContextMenu onAction={(a) => (action = a)} class="fullscreen">
    <Card class="card fullscreen">
      <div class="menu">
        <p>Click anywhere!</p>
        <br />
        {#if action}
          <p>Selected Action: <span>{action}</span></p>
        {/if}
      </div>
    </Card>
    <svelte:fragment slot="menu">
      <MenuItem action="action1">Action 1</MenuItem>
      <MenuItem action="action2">Action 2</MenuItem>
      <MenuItem action="action3">Action 3</MenuItem>
      <MenuItem action="action4">Action 4</MenuItem>
      <MenuItem action="action5">Action 5</MenuItem>
      <MenuItem action="action6">Action 6</MenuItem>
      <MenuItem action="action7">Action 7</MenuItem>
    </svelte:fragment>
  </ContextMenu>
</section>

<style>
  section {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
    height: calc(100vh - 106px);
  }
  section :global(.fullscreen) {
    height: 100%;
    flex: 1;
  }
  section :global(.card) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu {
    font-size: 2rem;
    user-select: none;
    text-align: center;
  }
  p:nth-of-type(2) {
    font-size: 1rem;
  }
  span {
    color: var(--luna-success-text-color);
  }
</style>
