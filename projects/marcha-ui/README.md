# @marchaui/marcha-ui

**Glassmorphism Angular Design System** — 40+ standalone components built with Angular 20, Tailwind CSS and CSS custom properties.

## Installation

```bash
npm install @marchaui/marcha-ui iconify-icon
```

## Setup

### 1. Add styles to your project's `styles.css`

```css
@import "@marchaui/marcha-ui/src/styles/theme.css";     /* Design tokens --m-* (light + dark) */
@import "@marchaui/marcha-ui/src/styles/global.css";    /* Tooltip, ripple, context-menu global CSS */
@import "@marchaui/marcha-ui/src/styles/utilities.css"; /* Pre-compiled Tailwind utilities */
```

### 2. Import and use components

```typescript
import { MButton, MCard, MInput, MTable } from '@marchaui/marcha-ui';

@Component({
  standalone: true,
  imports: [MButton, MCard],
  template: `
    <m-card header="Hello" variant="glass">
      <m-button label="Click me" severity="primary" size="small" />
    </m-card>
  `
})
export class MyComponent {}
```

## Dark mode

Add the class `.my-app-dark` to the `<html>` element to activate dark mode:

```typescript
document.documentElement.classList.toggle('my-app-dark');
```

## Components

| Component | Selector | Description |
|---|---|---|
| MButton | `m-button` | Button with severity variants |
| MCard | `m-card` | Glassmorphism card container |
| MInput | `m-input` | Text input with ControlValueAccessor |
| MPassword | `m-password` | Password input |
| MTextarea | `m-textarea` | Multiline text input |
| MSelect | `m-select` | Dropdown select |
| MCheckbox | `m-checkbox` | Checkbox |
| MRadioGroup | `m-radio-group` | Radio button group |
| MTable | `m-table` | Data table with sorting and actions |
| MDialog | `m-dialog` | Modal dialog |
| MDrawer | `m-drawer` | Side drawer |
| MMenubar | `m-menubar` | Navigation menubar |
| MTabs | `m-tabs` | Tab navigation |
| MAccordion | `m-accordion` | Accordion component |
| MChip | `m-chip` | Status chip/badge |
| MToast | `m-toast` + `MNotificationService` | Toast notifications |
| MCalendar | `m-calendar` | Date picker |
| MColorPicker | `m-color-picker` | Color picker |
| MIcon | `m-icon` | Iconify icon wrapper |
| MAvatar | `m-avatar` | Avatar with image or initials |
| MBadge | `m-badge` | Badge overlay |
| MDivider | `m-divider` | Section divider |
| MToggleSwitch | `m-toggle-switch` | Toggle switch |
| MToggleButton | `m-toggle-button` | Toggle button |
| MCopy | `m-copy` | Copy to clipboard |
| MSortable | `m-sortable` | Drag & drop sortable list |
| MDataview | `m-dataview` | Data view with layout toggle |
| MToolbar | `m-toolbar` | Toolbar container |
| MPanel | `m-panel` | Info panel with severity |
| MFileUpload | `m-file-upload` | File upload with validation |
| MRating | `m-rating` | Star rating |
| MComposer | `m-composer` | Rich text composer |
| MContextMenu | `m-context-menu` | Right-click context menu |
| MTooltip | `m-tooltip` | Tooltip directive |
| MRipple | `m-ripple` | Ripple effect directive |

## Peer dependencies

- `@angular/core` >= 20
- `@angular/common` >= 20
- `@angular/forms` >= 20
- `iconify-icon` >= 3.0.0

## License

MIT


## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build marcha-ui
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/marcha-ui
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
