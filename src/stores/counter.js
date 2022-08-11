import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 1,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'counter', // 自定义存储 key
        storage: sessionStorage, // 存储方式 localStorage/sessionStorage
        paths: ['counter'], // 需要本地存储的数据路径
      },
    ],
  },
})
