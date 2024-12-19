
<!--npm install date-fns-->
<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="success"
        text="添加事项"
        variant="flat"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="添加新事项">
        <v-card-text>
          <v-form class="px-3" @submit.prevent>
            <v-text-field
              v-model="form_data.title"
              label="名称"
              prepend-icon="mdi-folder"
              :rules="[rules.required, rules.min, rules.max]"
            ></v-text-field>
            <v-textarea
              v-model="form_data.content"
              label="详情"
              prepend-icon="mdi-note"
              :rules="[rules.required, rules.min, rules.max]"
            ></v-textarea>

            <v-menu v-model="menu" :close-on-content-click="false">
              <template v-slot:activator="{ props }">
                <v-text-field
                  v-model="formatedDate"
                  label="期限"
                  prepend-icon="mdi-calendar-month"
                  v-bind="props"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker v-model="form_data.due"></v-date-picker>
            </v-menu>

            <div align="right" class="mt-4">
              <v-btn
                type="submit"
                flat
                @click="submit"
                color="success"
                :loading="loading"
                ><span>保存新项目</span></v-btn
              >
              <v-btn
                flat
                text="关闭"
                @click="isActive.value = false"
                class="ml-2"
              ></v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>

import { ref, computed,watch,defineEmits} from "vue";
import format from "date-fns/format";

import { addProject } from "@/fb";

const form_data = ref({
  title: "",
  content: "",
  due: null,
});

const loading = ref(false);
const dialog = ref(false);
const menu = ref(false);

//监控due的数据变化，如果变化了就关闭菜单
watch(
  () => form_data.value.due,
  () => {
    menu.value = false;
  }
);

// 格式化日期
const formatedDate = computed(() => {
  if (form_data.value && form_data.value.due) {
    //console.log(form_data.value.due);
    return format(form_data.value.due, "yyyy-MM-dd");
  } else {
    return "";
  }
});

//校验规则
const rules = {
  required: (value) => !!value || "不能为空",
  min: (value) => value.length >= 3 || "最少3个字符",
  max: (value) => value.length <= 20 || "最多20个字符",
};

const emits = defineEmits(["projectAdded"]);

const submit = () => {
  loading.value = true;

  if (
    !form_data.value.title ||
    !form_data.value.content ||
    !form_data.value.due
  ) {
    loading.value = false;
    return;
  }

  const newProject = {
    title: form_data.value.title,
    content: form_data.value.content,
    person: "火云",
    due: format(form_data.value.due, "yyyy-MM-dd"),
    status: "ongoing",
  };

  addProject(newProject)
    .then(() => {
      console.log("事项添加成功！");
      console.log(JSON.stringify(form_data.value));
      loading.value = false;
      dialog.value = false;
      emits("projectAdded");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      loading.value = false;
    });
};
</script>