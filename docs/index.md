---
home: true
footer: MIT Licensed | Copyright © 2021-present varHarrie
---

<script setup>
  import Gallery from './components/Gallery.vue';
</script>

<style lang="less">
  h3 {
    margin: 2em 0;
    text-align: center;

    &::before,
    &::after {
      margin: 0 12px;
      display: inline-block;
      content: "";
      border-top: 1px solid #ccc;
      width: 120px;
      vertical-align: middle;
    }
  }
</style>

### Demo

<Gallery />

### Install

```bash
npm i --save vue-quick-preview
```

### Usage

```vue{6,11}
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
