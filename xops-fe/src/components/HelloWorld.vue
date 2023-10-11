<script setup lang="ts">
import { ref } from 'vue'


defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    
    <div class=" text-2xl i-logos-python w-4em h-3em transform transition-800"></div>
    <div class=" text-2xl i-logos-go w-4em h-6em transform transition-800 "></div>
    <div class=" text-2xl i-logos-java w-4em h-4em transform transition-800"></div>
    <div class=" text-2xl i-logos-nodejs w-4em h-6em transform transition-800"></div>
    <div class=" text-2xl i-logos-docker w-5em h-3em transform transition-800"></div>
    <div class=" text-2xl i-logos-kubernetes w-4em h-3em transform transition-800"></div>

    <div class="text-5xl  animate-bounce-alt animate-count-infinite animate-duration-2s text-purple-500" >
      Cillian</div>
    <!-- <div class="text-5xl  animate-bounce-alt animate-count-infinite animate-duration-1s text-blue" >
      希里安
    </div> -->
  <h1 class="text-blue-400">Vite+Vue3+Ts+UnoCSS</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div>
  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
  <el-button type="info"><i-ep-InfoFilled />Info</el-button>
  <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
  <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
