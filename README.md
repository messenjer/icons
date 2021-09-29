# [Funda Icons][4]

[![semantic-release][0]][1]

This package contains optimized SVG icons to be used on Funda

## Usage

### Installation

```sh
npm install @funda/icons
```

### ESM import

```js
import { ThumbsDown } from "@funda/icons/lib/esm";
import Alert from "@funda/icons/lib/esm/alert";
```

### CJS import

```js
const { ThumbsDown } = require("@funda/icons/lib/cjs");
const Alert = require("@funda/icons/lib/cjs/alert");
```

Both ESM and CJS format will return:

```txt
{
    title: 'thumbs-down',
    svg: '<svg role="img" viewBox="0 0 24 24" ...'
}
```

### Vue import

```js
import { ThumbsDown } from "@funda/icons/lib/vue";
import Alert from "@funda/icons/lib/vue/alert";

export default {
    ...,
    components: { ThumbsDown }
    ...,
}
```

### Alternative

You might not want to use the icons directly into your JS application.
In that case the raw SVG icons are also available on the package, you just need to copy to you project.

```sh
cp node_modules/@funda/icons/assets/* src/SPECIFY_YOUR_PATH
```

## Adding new icons

1. Create a new branch
1. Add the svg of the new icon in the assets folder
1. Commit your changes, following the rules of [commitlint]
1. `npm run build`
1. Create a pull request against the master branch
1. Get approval from a colleague
1. Merge the pull request
1. Github will automatically create a release for you

### Committing changes

This repo uses [commitlint], which means that it follows specific commit message rules, If the messages are not on the expected format it wont be possible to commit/push your changes.
These commits will automatically release new versions to NPM based on the rules of [semantic-release].

Examples of commit messages

- `feat(branch_name): commit message`
- `fix(branch_name): commit message`

PS: It is recommended to use the terminal for commit, if you use any GUI it might be necessary to update you local variable PATH on your GUI.
Reference: [Husky issues][2]

## Creating new icons

### Using Illustrator

Most of our icons are designed in Illustrator. For these instructions I take the file with all icons as the reference. You can find this file in the shared UX folder. Designing and exporting icons using Illustrator is preferred, since this will result in the properly aligned icons and optimized exports.

1. Hide all unnecessary layers, like the Grid
1. Go to File > Export > Export for Screens...
1. Select 'SVG' as format and set a export location to your likings
1. Give the icon a proper name in the left panel
1. Click Export Artboard. The folder with the exported SVG appears automatically

### Using Sketch

If a icon is originally designed in Sketch, you'll need to do some manual steps for a proper export. This is because exporting in Sketch works in a different way.

1. Select the artboard of the icon you want to export, hide all unnecessary if needed.
1. Make sure 'SVG' is selected as a preset in the right panel
1. Export the icon with Export Selected... and select the location where you want to store te file
1. After exporting, open de SVG file using your favorite code editor
1. Remove the width and height properties from the `<svg />` tag, but leave the viewbox property untouched

## Other information

We have a pre-commit hook that will optimize the svg icons using [svgo]

- All default configuration from svgo are applied, including make everything inline;
- `role="img"` is added;
- Dimensions, i.e: `width` and `height` are removed

## Latest

[https://funda-frontend.github.io/icons/latest/][5]

[0]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[1]: https://github.com/semantic-release/semantic-release
[2]: https://typicode.github.io/husky/#/?id=command-not-found
[4]: https://npmjs.org/package/@funda/icons
[5]: https://funda-frontend.github.io/icons/latest/

[semantic-release]: https://github.com/semantic-release/semantic-release
[commitlint]: https://github.com/conventional-changelog/commitlint
[svgo]: https://github.com/svg/svgo
