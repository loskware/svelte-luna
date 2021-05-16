<script>
  import Header from "./components/Header.svelte";
  import { IconMenu, IconMoon, IconOcto, IconSun } from "./icons";
  import { Button, Card } from "./luna";
  import {
    ButtonPage,
    CheckBoxPage,
    FlipViewPage,
    RadioPage,
    SwitchPage,
  } from "./pages";

  const sections = [
    { title: "BUTTON", tag: "<Button />", section: ButtonPage },
    { title: "CHECKBOX", tag: "<CheckBox />", section: CheckBoxPage },
    { title: "RADIO", tag: "<Radio />", section: RadioPage },
    { title: "SWITCH", tag: "<Switch />", section: SwitchPage },
    {
      title: "SEGMENTED CONTROL",
      tag: "<SegmentedControl />",
      section: null,
    },
    { title: "DRAGGABLE", tag: "<Draggable />", section: null },
    { title: "FLIPVIEW", tag: "<FlipView />", section: FlipViewPage },
    { title: "LOADERS", tag: "<{Variant}Loader />", section: null },
    { title: "MODAL", tag: "<Modal />", section: null },
  ];

  let sectionIndex = 3;
  let showSideBar = false;
  let theme = localStorage.getItem("theme") || "dark";

  const toogleSideBar = () => (showSideBar = !showSideBar);
</script>

<main class={"theme-" + theme}>
  <!-- TITLE BAR -->
  <Header>
    <div class="menu-button" slot="start">
      <Button on:click={toogleSideBar} rounded theme="soft"><IconMenu /></Button
      >
    </div>
    <h1 class="title" slot="middle">{sections[sectionIndex].tag}</h1>
    <svelte:fragment slot="end">
      <Button
        rounded
        theme="soft"
        on:click={() => {
          if (theme === "dark") {
            theme = "light";
          } else {
            theme = "dark";
          }
          localStorage.setItem("theme", theme);
        }}
      >
        {#if theme === "dark"}
          <IconSun />
        {:else}
          <IconMoon />
        {/if}
      </Button>
      <Button
        rounded
        theme="soft"
        href="https://github.com/loskware/svelte-luna"
        target="_blank"
      >
        <IconOcto />
      </Button>
    </svelte:fragment>
  </Header>

  <!-- SIDE BAR -->
  <div class="side-bar" class:side-bar-show={showSideBar}>
    <Card style="height: 100%" hasShadow>
      <div
        class="side-bar-card"
        style={`
          background-image: url("./images/side-bar-bkg-${theme}.svg")
        `}
      >
        <h1>SVELTE<br /><span>LUNA</span></h1>
        <img src={"./icons/android-chrome-512x512.png"} alt="React Luna Logo" />
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
      </div>
    </Card>
  </div>
  <div class="backdrop acrylic" on:click|self={toogleSideBar} />

  <!-- CONTENT -->
  <div class="content">
    <svelte:component this={sections[sectionIndex].section} />
  </div>
</main>

<style>
  main {
    box-sizing: border-box;
    min-height: 100vh;
  }
  .title {
    font-weight: 500;
  }
  .menu-button {
    visibility: hidden;
  }
  .side-bar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 276px;
    padding: 82px 0 24px 24px;
    z-index: 50;
  }
  .side-bar-card {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px 24px 40px;
    overflow-y: auto;
    background-color: var(--side-bar-bkg-color);
    background-repeat: no-repeat;
  }
  .side-bar h1 {
    align-self: center;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
  .side-bar h1 span {
    font-size: 3rem;
    font-weight: 300;
  }

  .side-bar img {
    height: 128px;
    width: 128px;
    align-self: center;
    margin: 32px 16px 32px;
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
    font-weight: 500;
    user-select: none;
  }
  .link:hover:not(.link-selected) {
    background-color: var(--luna-bkg-color-alpha1);
  }
  .link-selected {
    background-color: var(--luna-bkg-color-alpha2);
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
    .menu-button {
      visibility: initial;
    }
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

  @media (max-width: 767px) {
    .content {
      padding: 82px 24px 24px;
    }
  }
</style>
