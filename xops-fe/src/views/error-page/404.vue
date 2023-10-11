<template>

  
    <div>
      <el-result icon="warning" title="404" sub-title="怎么回事，页面不见啦~">
        <template #extra>
          <el-button type="primary" @click="$router.push('/')"
            >回到首页</el-button
          >
        </template>
      </el-result>
    </div>
  </template>
  