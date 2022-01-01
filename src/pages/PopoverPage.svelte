<script>
  import { Button } from "../luna";
  import Popover from "../luna/components/Popover.svelte";

  let showPopup = [false, true, true];
</script>

<section>
  <div class="tl">
    <Popover bind:showPopover={showPopup[0]}>
      <div class="popup">I'm a Popup!</div>
      <svelte:fragment slot="target">
        <Button solid on:click={() => (showPopup[0] = !showPopup[0])}>
          Click Me!
        </Button>
      </svelte:fragment>
    </Popover>
  </div>
  <div class="tc">
    <Button solid>Click Me!</Button>
  </div>
  <div class="tr">
    <Button solid>Click Me!</Button>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
  }

  .tl {
    justify-self: start;
  }
  .tc {
    justify-self: center;
  }
  .tr {
    justify-self: end;
  }
  .popup {
    background-color: rgb(248, 124, 52);
    color: var(--luna-soft-text-color);
    border-radius: 8px;
    padding: 64px 128px;
  }
</style>
