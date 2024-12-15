<!--
<v-app>: Vuetify 的根组件，提供应用的主题和基础布局。
<v-main>: 包裹主要内容的组件，确保应用内容居中且响应式布局。
<router-view />: Vue Router 的占位符组件，显示当前匹配的路由视图。
-->
<template>
  <v-app> 
    <side-bar @selectOption="onSelectOption"/>
    <v-main>
      <!--<router-view />-->
      <image-gallery :is-with-color="isWithColor" />   
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup>
  import {ref} from 'vue'

  const isWithColor = ref(true)

  // SideBar中有菜单项被点击时，会触发该方法
  const onSelectOption=(isColor)=>{
    //设置isWithColor后，isColor将传递给ImageGallery
    isWithColor.value = isColor
  }
</script>
