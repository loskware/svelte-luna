<header class="luna-gradient-bkg">
  <slot name="start" />
  <div class="title"><slot name="middle" /></div>
  <slot name="end" />
</header>

<style>
  header {
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 8px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: var(--luna-elevation-6);
    padding: 8px 16px;
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
  .title {
    flex: 1;
    margin: 0 1em;
    text-align: center;
  }
</style>
