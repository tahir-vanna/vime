# vime-icons

Loads an SVG sprite and inserts it into the document. By default it loads the Vime icons sprite 
from the JSDELIVR CDN.

<!-- Auto Generated Below -->


## Usage

### Angular

```html {5} title="example.html"
<vime-player>
  <!-- ... -->
  <vime-ui>
    <!-- ... -->
    <vime-icons href="/icons/sprite.svg"></vime-icons>
  </vime-ui>
</vime-player>
```


### Html

```html {5}
<vime-player>
  <!-- ... -->
  <vime-ui>
    <!-- ... -->
    <vime-icons href="/icons/sprite.svg"></vime-icons>
  </vime-ui>
</vime-player>
```


### React

```tsx {2,10}
import React from "react";
import { VimePlayer, VimeUi, VimeIcons } from "@vime/react";

function Example() {
  return (
    <VimePlayer>
      {/* ... */}
      <VimeUi>
        {/* ... */}
        <VimeIcons href="/icons/sprite.svg">
      </VimeUi>
    </VimePlayer>
  );
}
```


### Svelte

```html {5,10} title="example.svelte"
<VimePlayer>
  <!-- ... -->
  <VimeUi>
    <!-- ... -->
    <VimeIcons href="/icons/sprite.svg">
  </VimeUi>
</VimePlayer>

<script lang="ts">
  import { VimePlayer, VimeUi, VimeIcons } from '@vime/svelte';
</script>
```


### Vue

```html {6,12,18} title="example.vue"
<template>
  <VimePlayer>
    <!-- ... -->
    <VimeUi>
      <!-- ... -->
      <VimeIcons href="/icons/sprite.svg">
    </VimeUi>
  </VimePlayer>
</template>

<script>
  import { VimePlayer, VimeUi, VimeIcons } from "@vime/vue";

  export default {
    components: {
      VimePlayer,
      VimeUi,
      VimeIcons,
    },
  };
</script>
```



## Properties

| Property | Attribute | Description                       | Type     | Default                                                             |
| -------- | --------- | --------------------------------- | -------- | ------------------------------------------------------------------- |
| `href`   | `href`    | The URL to an SVG sprite to load. | `string` | `'https://cdn.jsdelivr.net/npm/@vime/core@latest/icons/sprite.svg'` |


## Dependencies

### Used by

 - [vime-default-ui](../default-ui)

### Graph
```mermaid
graph TD;
  vime-default-ui --> vime-icons
  style vime-icons fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
