<template>
  <h1 class="text-grey">项目</h1>
  <div class="ma-8">
    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-card>
            <v-card-text class="px-4 text-grey">
              <div class="font-weight-bold">期限 {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>

import { ref,computed } from "vue";

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

//自动筛选项目
const myProjects = computed(() => {
  return projects.value.filter((project) => project.person === "火云");
});

</script>
