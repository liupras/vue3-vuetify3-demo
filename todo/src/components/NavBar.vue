<template >
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      location="top"
      color="success"
    >
      <span>太棒了，项目添加成功！</span>
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar = false"
          >关闭</v-btn
        >
      </template>
    </v-snackbar>
  </div>

  <v-app-bar prominent density="compact" app>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>待办事项</v-toolbar-title>

    <v-spacer></v-spacer>

    <!--dropdown menu-->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn flat color="grey" v-bind="props"> 下拉菜单 </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in side_links"
          :key="index"
          :to="item.route"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn append-icon="mdi-exit-to-app"> 退出 </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
    v-model="drawer"
    app
  >
    <v-card class="text-center pa-2" flat>
      <v-col class="mt-5">
        <v-avatar size="100">
          <img src="/image/avatar-1.png" />
        </v-avatar>
        <p class="text-grey mt-1 text-subtitle-1">火云</p>
      </v-col>
    </v-card>
    <v-card flat class="text-center">
      <popup @projectAdded="snackbar = true"></popup>
    </v-card>

    <v-list>
      <v-list-item
        v-for="link in side_links"
        :key="link.text"
        :prepend-icon="link.icon"
        :title="link.text"
        :value="link.text"
        :to="link.route"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const snackbar = ref(false);

const side_links = [
  { icon: "mdi-view-dashboard", text: "事项概览", route: "/" },
  { icon: "mdi-folder", text: "我的项目", route: "/projects" },
  { icon: "mdi-account", text: "我的团队", route: "/team" },
];
</script>
