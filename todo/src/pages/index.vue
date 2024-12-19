<template>
  <h1 class="text-grey">事项概览</h1>

  <v-container fluid class="my-5">
    <v-layout row justify-start class="mb-3">
      <v-btn small flat color="grey" @click="sortBy('title')">
        <v-icon left small>mdi-folder</v-icon>
        <span class="text-lowercase">按事项名称</span>
        <v-tooltip activator="parent" location="top"
          ><span>按事项名称重新排序</span></v-tooltip
        >
      </v-btn>
      <v-btn small flat color="grey" @click="sortBy('person')" class="ml-3">
        <v-icon small left>mdi-account</v-icon>
        <span class="text-lowercase">按人员</span>
        <v-tooltip activator="parent" location="top"
          ><span>按事项负责人重新排序</span></v-tooltip
        >
      </v-btn>
    </v-layout>

    <v-card flat v-for="project in projects" :key="project.title">
      <v-layout :class="`pa-3 project ${project.status}`">
        <v-row wrap>
          <v-col cols="6">
            <div class="text-caption text-grey">事项名称</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="2">
            <div class="text-caption text-grey">负责人</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="2">
            <div class="text-caption text-grey">期限</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="2">
            <div class="text-caption text-grey">状态</div>
            <v-chip :class="`${project.status} text-white my-2`">{{
              project.status
            }}</v-chip>
          </v-col>
        </v-row>
      </v-layout>
      <v-divider />
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// 这是静态数据，请根据实际情况修改
/*
const projects = ref([
  {
    title: "设计网站的新主题",
    person: "火云",
    due: "2024-3-1",
    status: "overdue",
    content:
      "为小微企业客户XXX设计一个新的网站主题，包括首页，产品页，关于页等多个页面。",
  },
  {
    title: "实现首页的产品展示",
    person: "八戒",
    due: "2024-3-10",
    status: "complete",
    content:
      "编码实现首页的产品展示功能。",
  },
  {
    title: "实现二级页面的产品展示",
    person: "悟空",
    due: "2024-3-20",
    status: "ongoing",
    content:
      "编码实现网站的二级页面的产品展示功能。",
  },
  {
    title: "产品测试",
    person: "悟净",
    due: "2024-4-2",
    status: "overdue",
    content:
      "测试产品的新功能，确保产品的稳定性。",
  },
]);
*/

import { getAllProjects } from "@/fb";

const projects = ref([]);

const getAll = () => {
  getAllProjects().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      projects.value.push(doc.data());
    });
  });
};

getAll();

const sortBy = (prop) => {
  projects.value.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #ffaa2c;
}
.project.overdue {
  border-left: 4px solid #f83e70;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
