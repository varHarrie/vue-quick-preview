# Vue Quick Preview

A lightweight lightbox.

## Install

```bash
npm i --save vue-quick-preview
```

## Usage

```html
<template>
  <img src="https://placeimg.com/400/400/any" @click="onImageClick" />
</template>

<script>
  import preview from 'vue-quick-preview';

  export default {
    methods: {
      onImageClick(e) {
        const instance = preview(e.target);
        console.log(instance);
      },
    },
  };
</script>
```

## License

[MIT](./LICENSE)
