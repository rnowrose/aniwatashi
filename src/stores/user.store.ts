import type { User } from '@/domains/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, getUser, register } from '@/api/user.api'

interface UserInfo {
  id: number
  username: string
}
export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>(null)

  async function authenticate (username: string, password: string): Promise<void> {
    const user = await login({ username, password })
    userInfo.value = {
      id: user.id,
      username: user.username,
    }

    localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
  }

  async function registerUser (user: User): Promise<void> {
    const registeredUser = await register(user)
    userInfo.value = {
      id: registeredUser.id,
      username: registeredUser.username,
    }

    localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
  }

  return { userInfo, authenticate, registerUser }
})
