<template>
  <v-row>
    <v-col v-for="n in 168" :key="n" lg="1" md="2" sm="4" cols="6"
      ><!--根据屏幕尺寸调整每行图片的数量-->
      <v-hover>
        <template v-slot:default="{ isHovering, props }"><!--鼠标悬停特效-->
          <v-card
            class="mx-2 my-1 pa-1"
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 12 : 2"
            v-bind="props"
            @click="
              copyURL(
                `https://picsum.photos/500/300?image=${n * 5 + 10}${
                  p.isWithColor ? '' : '&grayscale'
                }`
              )
            "
            ><!--自带圆角，图片更好看-->

            <v-img
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${
                p.isWithColor ? '' : '&grayscale'
              }`"
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${
                p.isWithColor ? '' : '&grayscale'
              }`"
              aspect-ratio="1"
              class="bg-grey-lighten-2"
              cover
            >
              <template v-slot:placeholder><!--图片加载时显示-->
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>
  
  <script setup>

// 定义属性isWithColor，父控件可以将isWithColor传递给子控件
const p = defineProps({
  isWithColor: {
    type: Boolean,
    default: true,
  },
});

// 将图片的URL复制到剪贴板
const copyURL = (url) => {
  navigator.clipboard.writeText(url);
  alert("图片URL已经拷贝到剪贴板!");
};
</script>
  
  <style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>