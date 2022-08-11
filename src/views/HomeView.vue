<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue'

const msg = ref('hello world')

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const obj = reactive({ count: 0 })
const changeMsg = () => {
  obj.count++
  if (obj.count > 3) {
    unwatch()
  }
}
// 提供一个 getter 函数
watch(
  () => obj.count,
  count => {
    console.log(`count is: ${count}`)
  }
)
const unwatch = watchEffect(() => {
  console.log('count', obj.count)
})
</script>

<template>
  <main>
    <HelloWorld :msg="msg" />
    <a-button type="primary" @click="changeMsg">changeMsg</a-button>
    <div>{{ publishedBooksMessage }}</div>
    <TheWelcome />
  </main>
</template>
