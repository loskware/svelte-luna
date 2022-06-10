<script lang="ts">
  import { Card, ContextMenu, MenuItem } from "$lib";
</script>

<section>
  <ContextMenu class="stretch" style="display: block">
    <Card class="stretch">
      <div class="stretch menu">Click anywhere!</div>
    </Card>
    <svelte:fragment slot="menu">
      <MenuItem compact action="action1">Action 1</MenuItem>
      <MenuItem compact action="action2">Action 2</MenuItem>
      <MenuItem compact action="action3">Action 3</MenuItem>
      <MenuItem compact action="action4">Action 4</MenuItem>
      <MenuItem compact action="action5">Action 5</MenuItem>
      <MenuItem compact action="action6">Action 6</MenuItem>
      <MenuItem compact action="action7">Action 7</MenuItem>
    </svelte:fragment>
  </ContextMenu>
</section>

<style>
  :global(.stretch) {
    width: 100%;
    height: 100%;
    line-height: 100%;
  } 
  section {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
    height: calc(100vh - 106px);
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    user-select: none;
  }
</style>
