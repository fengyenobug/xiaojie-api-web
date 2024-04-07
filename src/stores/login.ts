const TokenKey: string = import.meta.env.VITE_TOKEN_KEY

// 创建组合式api仓库
import { defineStore } from "pinia"
import { ref } from "vue"

// 创建 & 导出仓库
export const useUserStore = defineStore('userStore', () => {
  const token: any = ref(localStorage.getItem(TokenKey) || null)

  const setToken = (tk: any) => {
    token.value = tk // 将数据设置给pinia
    localStorage.setItem(TokenKey, tk) // 将数据同步给缓存
  }

  const logout = () => {
    token.value = null // 将pinia的token数据置空
    localStorage.clear() // 清空所有缓存
  }
  return {
    token,
    setToken,
    logout
  }
})