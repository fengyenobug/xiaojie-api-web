<script setup lang="ts">
import { ref } from 'vue'
import { Login } from "@/api/user";
import router from "@/router";
import { useUserStore } from "@/stores/login";
const userStore = useUserStore();

const form = ref({
  username: '',
  password: ''
})
const login = async () => {
  try {
    const res = await Login({ username: form.value.username, password: form.value.password })
    console.log('登录成功', res);
    router.push('/')
  } catch (error) {
    console.error(error)
  }
};

</script>
<template>
  登录页
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="用户名：">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="密码：">
      <el-input v-model="form.password" type="password" />
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="login">登录</el-button>
</template>

<style scoped lang="less"></style>
