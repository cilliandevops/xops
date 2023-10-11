<!-- <template>
    <el-row class="login-container  min-h-screen bg-purple-200">
      <el-col :lg="16" :md="12" class="left">
        <div>
          <div class="text-purple-500 font-bold text-2xl mb-4">一切皆有可能！</div>
          <div class="text-blue-800 text-3xl ">xops管理后台系统</div>
        </div>
      </el-col>
      <el-col :lg="8" :md="12" class="right flex items-center justify-center flex-col">
        <h2 class="text-blue-600">欢迎回来</h2>
        <div class="flex items-center justify-center my-5 text-gray-300 space-x-2" >
          <span class="line h-[1px] w-16  bg-black"></span>
          <span class="text-black ">账号密码登录</span>
          <span class="line  h-[1px] w-16  bg-black"></span>
        </div>
        <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px] ">
          <el-form-item prop="username">
            <el-input  v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon><user /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              
              placeholder="请输入密码"
              show-password
            >
              <template #prefix>
                <el-icon><lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              round
              color="#626aef"
              class="w-[250px]"
              type="primary"
              @click="onSubmit"
              :loading="loading"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </template>
<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
// import { toast } from "~/composables/util";
import { useRouter } from "vue-router";
// import { useStore } from "vuex";

// const store = useStore();
const router = useRouter();

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});
const rules = {
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
};

const formRef = ref(null);
const loading = ref(false);
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }
    loading.value = true;

    store
      .dispatch("login", form)
      .then((res) => {
        toast("登录成功");
        router.push("/");
      })
      .finally(() => {
        loading.value = false;
      });
  });
};

// 监听回车事件
function onKeyUp(e) {
  if (e.key == "Enter") onSubmit();
}

// 添加键盘监听
onMounted(() => {
  document.addEventListener("keyup", onKeyUp);
});
// 移除键盘监听
onBeforeUnmount(() => {
  document.removeEventListener("keyup", onKeyUp);
});
</script> -->
<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-30 w-auto" src="@/assets/xops.png" alt="cillian" />
      <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Xops</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Quick Start Now</a>
      </p>
    </div>
  </div>
</template>
