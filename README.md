# LUNA

Luna is a simple, elegant and beautiful UI component library for Svelte.

_Remember that Luna is still in an `EARLY STAGE`. Many aspects could change in the future._

## Get started

Install the package:

```bash
npm i svelte-luna
```

Then import luna in your project:

```js
import {
  Avatar,
  Button,
  Card,
  CheckBox,
  FlipView,
  Icon,
  LineProgress,
  CircleProgress,
  Popover,
  Radio,
  Segment,
  SegmentedControl,
  Select,
  Switch,
  TextField,
} from "svelte-luna";
```

Remember to import the required css files (rollup-plugin-css-only is required):

```js
import "svelte-luna/css/theme.css";
import "svelte-luna/css/global.css";
```

If you prefer you can copy the css files from the package folder into your project and import them directly into your html.
Finally select the desired theme (`dark-theme` or `light-theme`):
```html
<body class="dark-theme"></body>
<!-- OR -->
<body class="light-theme"></body>

<!-- You can assign the desired theme wherever you want -->
<MyComponent class="dark-theme"></MyComponet>

<!-- dynamic theme example -->
<script>
  import {theme} from "stores/theme";

  $: {
    document.body.className = $theme;
  }
</script>
```

### Actions
Luna provides some Svelte actions.
```js
import {
  autofocus,
  badge,
  modal,
  pannable,
} from "svelte-luna/actions";
```

## Styling

To customize the appearance of the components you can override the CSS variables found in `svelte-luna/css/theme.css`.

## Project Showcase
There is currently no documentation for Luna but you can find a components showcase at https://loskware.github.io/svelte-luna