<template>
  <v-carousel :show-arrows="true" :height="carouselHeight">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
  <script setup>
import { reactive, computed } from "vue";

const items = reactive([
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
]);

const carouselHeight = computed(() => {
  return "calc(100vh - 64px)"; //toolbar默认高度是64px，这样刚好可以填满整个屏幕
});
</script>
