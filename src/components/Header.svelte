<header>
  <div class="start"><slot name="start" /></div>
  <div class="title"><slot name="middle" /></div>
  <div class="end"><slot name="end" /></div>
</header>

<style lang="scss">
  header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: var(--luna-elevation-6);
    padding: 8px 16px;
    background-color: hsl(263, 88%, 53%);
    color: white;
    font-size: 18px;
    font-weight: 500;
    :global(.Button + .Button) {
      margin-left: 8px;
    }
  }
  .start {
    visibility: hidden;
  }
  .title {
    flex: 1;
    margin: 0 1em;
    text-align: center;
  }
  
  @media (max-width: 1280px) {
    .start {
      visibility: initial;
    }
  }
</style>
