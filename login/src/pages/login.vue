<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="4">
        <v-overlay :model-value="isLoading" class="justify-center align-center">
          <v-progress-circular
            indeterminate
            color="white"
          ></v-progress-circular>
        </v-overlay>
        <v-card class="pa-8 mx-auto">
          <v-card-title class="text-center">登录</v-card-title>
          <v-card-item>
            <v-sheet>
              <v-form @submit.prevent>
                <v-text-field
                  v-model="form_data.email"
                  label="电子邮件地址"
                  variant="solo"
                  prepend-inner-icon="mdi-email"
                  :rules="[rules.required, rules.email, rules.max]"
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="form_data.password"
                  label="密码"
                  variant="solo"
                  prepend-inner-icon="mdi-key"
                  :rules="[rules.required, rules.max]"
                ></v-text-field>
                <v-checkbox
                  v-model="form_data.remember"
                  color="red"
                  label="30天内免登录"
                  hide-details
                ></v-checkbox>
                <v-btn type="submit" color="red-darken-2" @click="submit" block>
                  <span>登录</span>
                </v-btn>
              </v-form>
            </v-sheet>
          </v-card-item>
          <v-card-actions>
            <div class="mx-4">
              <v-btn block to="/register">注册</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup>
import { ref } from "vue";

//表单数据
const form_data = ref({
  email: "",
  password: "",
  remember: false,
});

const isLoading = ref(false);

//提交
function submit() {
  if (form_data.value.email === "" || form_data.value.password === "") {
    return;
  }
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
  alert(JSON.stringify(form_data.value));
}

//校验规则
const rules = {
  required: (value) => !!value || "不能为空。",
  max: (value) => value.length <= 20 || "最多20个字符。",
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
};
</script>