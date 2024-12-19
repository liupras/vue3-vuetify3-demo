<!--
<v-app>: Vuetify 的根组件，提供应用的主题和基础布局。
<v-main>: 包裹主要内容的组件，确保应用内容居中且响应式布局。
<router-view />: Vue Router 的占位符组件，显示当前匹配的路由视图。
-->
<template>
  <v-app>
    <nav-bar />
    <v-main >
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
