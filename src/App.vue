<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, darkTheme } from 'naive-ui'
import { RouterView } from 'vue-router'
import './main.css'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#EFD277',
    primaryColorHover: '#EFD277',
    primaryColorPressed: '#EFD277',
  },
}
</script>

<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="themeOverrides">
    <div class="main">
      <RouterView />
    </div>
  </NConfigProvider>
</template>

<style>
.main {
  width: 100%;
  z-index: -2;
  position: absolute;
  min-height: 100%;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 1);
  color: white;
}
</style>
