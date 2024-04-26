<script setup lang="ts">
import { ref } from 'vue'
import router from "@/router";
import { Login } from "@/api/user";
import { useLoginStore } from "@/stores/login";
import { ElMessage } from 'element-plus';
import { loginTimestampKey } from '@/common/config';

const loginStore = useLoginStore()
const username = ref('')
const password = ref('')
const login = async () => {
  try {
    const res: any = await Login({ username: username.value, password: password.value })
    loginStore.setToken(res.token)
    localStorage.setItem(loginTimestampKey, String(Date.now()))
    ElMessage.success('登录成功')
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}

</script>
<template>
  <div class="container">
    <div class="card">
      <div class="top">欢迎登录小杰API</div>
      <div class="bottom">
        <el-input v-model="username" placeholder="请输入账号">
          <template #prefix>
            <i class="iconfont icon-yonghuming"></i>
          </template>
        </el-input>
        <el-input v-model="password" type="password" placeholder="请输入密码" @keyup.enter.native="login" show-password>
          <template #prefix>
            <i class="iconfont icon-mima"></i>
          </template>
        </el-input>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("/src/assets/login/login_bg.jpg") no-repeat;
  background-size: 100% 100%;

  .card {
    position: absolute;
    right: 200px;
    top: 50%;
    transform: translateY(-50%);
    width: 460px;
    height: 320px;
    border-radius: 16px;
    overflow: hidden;

    .top {
      height: 60px;
      background-color: #F0F4F7;
      text-align: center;
      line-height: 60px;
      color: #4e6bec;
      font-size: 24px;
    }

    .bottom {
      height: 260px;
      background-color: #fff;
      padding: 0 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .login_icon {
        width: 20px;
        height: 20px;
      }

      .el-button {
        font-size: 24px;
        color: #fff;
      }
    }
  }
}
</style>