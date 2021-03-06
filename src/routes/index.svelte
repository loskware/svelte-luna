<script lang="ts">
  import { Button, Card } from "$lib";
  import "$lib/css/global.css";
  import "$lib/css/theme.css";
  import Header from "../components/Header.svelte";
  import { IconMenu, IconMoon, IconOcto, IconSun } from "../icons";
  import {
    BadgePage,
    ButtonPage,
    CardPage,
    CheckBoxPage,
    ChipPage,
    ContextMenuPage,
    DropdownPage,
    DropdownMenuPage,
    FlipViewPage,
    ModalPage,
    ProgressPage,
    RadioPage,
    SegmentedControlPage,
    SelectPage,
    SwitchPage,
    TextFieldPage,
  } from "../pages";
  import { currentPage, theme } from "../stores/prefs";

  const sections = [
    { title: "BUTTON", tag: "<Button />", section: ButtonPage },
    { title: "CHECKBOX", tag: "<CheckBox />", section: CheckBoxPage },
    { title: "RADIO", tag: "<Radio />", section: RadioPage },
    { title: "SWITCH", tag: "<Switch />", section: SwitchPage },
    { title: "TEXTFIELD", tag: "<TextField />", section: TextFieldPage },
    { title: "SELECT", tag: "<Select />", section: SelectPage },
    {
      title: "SEGMENTED CONTROL",
      tag: "<SegmentedControl />",
      section: SegmentedControlPage,
    },
    { title: "DROPDOWN", tag: "<Dropdown />", section: DropdownPage },
    { title: "DROPDOWN MENU", tag: "<Menu />", section: DropdownMenuPage },
    { title: "CONTEXT MENU", tag: "<ContextMenu />", section: ContextMenuPage },
    { title: "PROGRESS", tag: "<{Shape}Progress />", section: ProgressPage },
    { title: "CARD", tag: "<Card />", section: CardPage },
    { title: "FLIPVIEW", tag: "<FlipView />", section: FlipViewPage },
    { title: "CHIP", tag: "<Chip />", section: ChipPage },
    { title: "BADGE", tag: "use:badge", section: BadgePage },
    { title: "MODAL", tag: "use:modal", section: ModalPage },
  ];

  let showSideBar = false;
  const toogleSideBar = () => (showSideBar = !showSideBar);

  $: {
    document.body.className = $theme;
  }
</script>

<main>
  <!-- TITLE BAR -->
  <Header>
    <div class="menu-button" slot="start">
      <Button on:click={toogleSideBar} rounded theme="soft"><IconMenu /></Button
      >
    </div>
    <h1 class="title" slot="middle">{sections[$currentPage].tag}</h1>
    <svelte:fragment slot="end">
      <Button
        rounded
        theme="soft"
        on:click={() => {
          $theme = $theme === "dark-theme" ? "light-theme" : "dark-theme";
        }}
      >
        {#if $theme === "dark-theme"}
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
        rel="noopener"
      >
        <IconOcto />
      </Button>
    </svelte:fragment>
  </Header>

  <!-- SIDE BAR -->
  <div class="side-bar" class:side-bar-show={showSideBar}>
    <Card style="height: 100%" elevation={2} hideOverflow>
      <div
        class="side-bar-card"
        style={`
          background-image: url("/svelte-luna/assets/side-bar-bkg-${$theme}.svg")
        `}
      >
        <h1>SVELTE<br /><span>LUNA</span></h1>
        <img
          src={"/svelte-luna/icons/android-chrome-512x512.png"}
          alt="React Luna Logo"
        />
        <div class="navigator">
          {#each sections as section, index}
            <div
              class="link"
              class:link-selected={index === $currentPage}
              on:click={() => {
                $currentPage = index;
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
  <div class="backdrop acrylic-material" on:click|self={toogleSideBar} />

  <!-- CONTENT -->
  <div class="content">
    <svelte:component this={sections[$currentPage].section} />
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
    color: var(--luna-text-color-primary);
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
      padding: 82px 12px 12px;
    }
  }
</style>
