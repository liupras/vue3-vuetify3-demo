<template>
  <h1 class="text-grey">团队</h1>
  <v-container class="my-5">
    <v-row wrap>
      <v-col xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card flat class="text-center ma-3" elevation="16">
          <v-responsive class="pt-4">
            <v-avatar size="100" color="grey">
              <img :src="person.avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="text-subtitle-1">{{ person.name }}</div>
            <div class="text-grey">{{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon>mdi-message</v-icon>
              <span>消息</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const team = [
  { name: "玄奘", role: "客户经理", avatar: "/image/avatar-1.png" },
  { name: "悟空", role: "主程", avatar: "/image/avatar-2.png" },
  { name: "八戒", role: "程序员", avatar: "/image/avatar-3.png" },
  { name: "悟净", role: "程序员", avatar: "/image/avatar-4.png" },
  { name: "小白龙", role: "测试", avatar: "/image/avatar-5.png" },
];
</script>
