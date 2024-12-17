<template>
  <v-toolbar density="compact">
    <v-toolbar-title>
      <router-link to="/">
        <v-icon icon="mdi-home" class="mr-4"></v-icon
        >Vuerify3登录演示</router-link
      >
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="changeTheme">
      <v-icon  :icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"></v-icon>
    </v-btn>

    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn icon class="mr-12" v-bind="props">
          <v-badge color="red-darken-2" content="8">
            <v-icon icon="mdi-bell" color="blue-darken-4"></v-icon>
          </v-badge>
        </v-btn>        
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in notifications"
          :key="index"
          :value="index"
        >
          <v-list-item-title><v-icon :icon="item.icon" :color="item.color"></v-icon>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn icon>
      <v-btn variant="outlined" class="mr-12" color="red-darken-2" to="/login">
        登录 <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-btn>
  </v-toolbar>
</template>

<script setup>

import { ref } from "vue";
import {useTheme} from 'vuetify'

const notifications = [
  { title: "消息1",icon:"mdi-email",color:"red" },
  { title: "消息2" ,icon:"mdi-email",color:"blue" },
  { title: "消息3" ,icon:"mdi-email",color:"green" },
  { title: "消息4" ,icon:"mdi-email",color:"yellow" },
];

const darkTheme = ref(true)

const theme = useTheme();

// 切换主题
function changeTheme() {
  darkTheme.value = !darkTheme.value;
  theme.global.name.value = darkTheme.value ? "dark" : "light";
}

</script>