// 创建组合式api仓库
import { tokenKey } from "@/common/config"
import { defineStore } from "pinia"
import { ref } from "vue"

// 创建 & 导出仓库
export const useLoginStore = defineStore('loginStore', () => {
  const token: any = ref(localStorage.getItem(tokenKey) || null)

  const setToken = (tk: any) => {
    token.value = tk // 将数据设置给pinia
    localStorage.setItem(tokenKey, tk) // 将数据同步给缓存
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