# LUNA

Luna is a simple, elegant and beautiful UI component library for [Svelte](https://svelte.dev). It lives at https://github.com/loskware/svelte-luna.

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
  Radio,
  Segment,
  SegmentedControl,
  Switch,
} from "svelte-luna";
```

Remember to import the required css files (rollup-plugin-css-only is required):

```js
import "svelte-luna/css/theme.css";
import "svelte-luna/css/global.css";
```

If you prefer you can copy the css files from the package folder into your project and import them directly into your html.

### Actions
Luna provides some Svelte actions.
```js
import {
  draggable,
  modal
} from "svelte-luna/actions";
```

## Styling

To customize the appearance of the components you can override the CSS variables found in `svelte-luna/css/theme.css`.

## Showcase
There is currently no documentation for Luna but you can find a components showcase at https://loskware.github.io/svelte-luna