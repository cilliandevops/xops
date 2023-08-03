<template>
    <el-row class="login-container">
      <el-col :lg="16" :md="12" class="left">
        <div>
          <div>欢迎光临</div>
          <div>Vue3 + ElementPlus 商城管理后台系统</div>
        </div>
      </el-col>
      <el-col :lg="8" :md="12" class="right">
        <h2 class="title">欢迎回来</h2>
        <div>
          <span class="line"></span>
          <span>账号密码登录</span>
          <span class="line"></span>
        </div>
        <el-form ref="formRef"  class="w-[250px]">
          <el-form-item prop="username">
            <el-input  placeholder="请输入用户名">
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
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </template>