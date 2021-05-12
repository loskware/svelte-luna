<script>
  import Header from "./components/Header.svelte";
  import { IconMenu, IconMoon, IconOcto, IconSun } from "./icons";
  import { Button, Card } from "./luna";
  import { ButtonPage } from "./pages";

  const LightTheme = {
    className: "theme-light",
    toogleIcon: IconMoon,
  };
  const DarkTheme = {
    className: "theme-dark",
    toogleIcon: IconSun,
  };

  const sections = [
    { title: "BUTTON", tag: "<{Type}Button />", section: ButtonPage },
    { title: "CHECKBOX", tag: "<CheckBox />", section: null },
    { title: "RADIO", tag: "<Radio />", section: null },
    { title: "SWITCH", tag: "<Switch />", section: null },
    {
      title: "SEGMENTED CONTROL",
      tag: "<SegmentedControl />",
      section: null,
    },
    { title: "DRAGGABLE", tag: "<Draggable />", section: null },
    { title: "FLIPVIEW", tag: "<FlipView />", section: null },
    { title: "LOADERS", tag: "<{Variant}Loader />", section: null },
    { title: "MODAL", tag: "<Modal />", section: null },
  ];

  let sectionIndex = 0;
  let showSideBar = false;
  let theme = DarkTheme;

  const toogleSideBar = () => (showSideBar = !showSideBar);
</script>

<main class={theme.className}>
  <!-- TITLE BAR -->
  <Header>
    <Button on:click={toogleSideBar} rounded theme="soft" slot="start"
      ><IconMenu /></Button
    >
    <h1 class="title" slot="middle">{sections[sectionIndex].tag}</h1>
    <svelte:fragment slot="end">
      <Button
        rounded
        theme="soft"
        on:click={() => {
          if (theme === DarkTheme) {
            theme = LightTheme;
          } else {
            theme = DarkTheme;
          }
        }}
      >
        {#if theme === DarkTheme}
          <IconSun />
        {:else}
          <IconMoon />
        {/if}
      </Button>
      <Button
        rounded
        theme="soft"
        href="https://github.com/loskware/svelte-luna"><IconOcto /></Button
      >
    </svelte:fragment>
  </Header>

  <!-- SIDE BAR -->
  <div class="side-bar" class:side-bar-show={showSideBar}>
    <Card padding={16} hasShadow>
      <h1>LUNA</h1>
      <img src={"/icons/android-chrome-512x512.png"} alt="React Luna Logo" />
      <div class="navigator">
        {#each sections as section, index}
          <div
            class="link"
            class:link-selected={index === sectionIndex}
            on:click={() => {
              sectionIndex = index;
              showSideBar = false;
            }}
          >
            {section.title}
          </div>
        {/each}
      </div>
    </Card>
  </div>
  <div class="backdrop acrylic" on:click|self={toogleSideBar} />

  <!-- CONTENT -->
  <div class="content">
    <svelte:component this={sections[sectionIndex].section} />
  </div>
</main>

<style lang="scss">
  main {
    box-sizing: border-box;
    min-height: 100vh;
  }
  .title {
    font-weight: 500;
  }
  .side-bar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 276px;
    padding: 82px 0 24px 24px;
    z-index: 50;
    :global(.Card) {
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 40px;
      overflow-y: auto;
      background-color: var(--side-bar-bkg-color);
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 300;
      align-self: center;
    }
    img {
      height: 128px;
      width: 128px;
      align-self: center;
      margin: 16px 16px 24px;
    }
    .navigator {
      width: 100%;
    }
    .link {
      border-radius: var(--luna-border-radius-l);
      margin: 8px 0;
      padding: 8px 16px;
      color: var(--luna-text-color-secondary);
      font-size: 14px;
      user-select: none;
      &:hover:not(.link-selected) {
        background-color: var(--luna-bkg-color-alpha1);
      }
      &-selected {
        background-color: var(--luna-bkg-color-alpha2);
      }
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 49;
  }

  .content {
    min-height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 82px 24px 24px 300px;
  }

  @media (max-width: 1280px) {
    .side-bar {
      transition: transform ease-in-out 0.2s;
      transform: translate3d(-300px, 0, 0);
    }
    .backdrop {
      transition: opacity ease-in-out 0.2s;
    }
    .side-bar-show {
      transform: translate3d(0px, 0, 0);
    }
    .side-bar-show + .backdrop {
      opacity: 1;
      visibility: visible;
    }
    .content {
      padding: 82px 64px 32px;
    }
  }
</style>
