<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        subtitle="liupras@gmailcom"
        title="火云"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-image"
        title="彩色"
        value="color gallery"
        @click="selectOption(true)"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-dialpad"
        title="黑白"
        value="gray gallery"
        @click="selectOption(false)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
  
  <script setup>

// 定义 selectOption 事件，此事件供父控件订阅，以便它的消息可以发送给父控件。
const emits = defineEmits(["selectOption"]);

// 响应v-list-item的click事件。
const selectOption = (isColor) => {
  // 发送消息给订阅的父控件
  emits("selectOption", isColor);
};
</script>