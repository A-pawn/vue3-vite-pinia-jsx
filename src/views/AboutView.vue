<template>
  <div class="about">
    <a-button type="primary" @click="info">Display normal message</a-button>
    <div>
      <a-button type="primary" @click="addCounter">addCounter</a-button>
    </div>
    <div>{{ useStore.counter }}</div>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { useCounterStore } from '@/stores/counter'

const useStore = useCounterStore()

const info = () => {
  message.info('This is a normal message')
}
const addCounter = () => {
  useStore.increment()
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
