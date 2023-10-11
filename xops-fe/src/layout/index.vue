<!-- 2023年10月11日15:27:39 -->
<template>
    <div class="common-layout h-screen-lg w-screen-lg">
      <el-container>
        <el-aside width="200px" class="text-xl bg-blue h-screen-lg">Aside</el-aside>
        <el-container>
          <el-header class="text-blue bg-red-300 " >Header</el-header>
          <el-main class="bg-orange-200">Main
                <el-calendar ref="calendar">
                    <template #header="{ date }">
                    <span>示范日历应用</span>
                    <span>{{ date }}</span>
                    <el-button-group>
                        <el-button class="bg-purple-200" size="small" @click="selectDate('prev-year')">
                        上一年
                        </el-button>
                        <el-button size="small" @click="selectDate('prev-month')">
                        上月
                        </el-button>
                        <el-button size="small" @click="selectDate('today')">今日</el-button>
                        <el-button size="small" @click="selectDate('next-month')">
                        下月
                        </el-button>
                        <el-button size="small" @click="selectDate('next-year')">
                        下一年
                        </el-button>
                    </el-button-group>
                    </template>
                </el-calendar>
            
          </el-main>
          <el-footer class="bg-blue-300">Footer</el-footer>
        </el-container>
      </el-container>
    </div>
  </template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarDateType, CalendarInstance } from 'element-plus'

const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>