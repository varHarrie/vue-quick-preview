<template>
  <ul class="gallery">
    <li v-for="(image, index) of images" :key="index" class="item">
      <img :src="image" @click="onImageClick" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import preview from '../../dist/vue-quick-preview.es';

export default defineComponent({
  data() {
    return {
      images: [
        `https://placeimg.com/400/824/any?v=1`,
        `https://placeimg.com/824/400/any?v=2`,
        `https://placeimg.com/400/400/any?v=3`,
        `https://placeimg.com/400/400/any?v=4`,
        `https://placeimg.com/824/400/any?v=5`,
      ],
    };
  },
  methods: {
    onImageClick(e: MouseEvent) {
      const instance = preview(e.target as HTMLImageElement);
      console.log(instance);
    },
  },
});
</script>

<style lang="less" scoped>
.gallery {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 12px;
  justify-content: center;
  list-style: none;

  .item {
    border-radius: 4px;
    overflow: hidden;
    cursor: zoom-in;

    img {
      display: block;
      width: 100%;
    }

    &:nth-child(1) {
      grid-row: span 2;
    }

    &:nth-child(2) {
      grid-column: span 2;
    }

    &:nth-child(5) {
      grid-column: span 2;
    }
  }
}
</style>
