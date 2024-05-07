import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const messages = {
  'zh_CN': {
    inputUsername: '请输入用户名',
    inputUserPwd: '请输入密码',
    login: '登录',
    noAccount: '没有账号？',
    registerNow: '立即开户',

    inputUserPhone: '请输入手机号',
    inputUserPwdTwice: '请确认密码(长度大于8位)',
    inputUserPaymentPwd: '请输入支付密码',
    inputCaptcha: '请输入验证码',
    register: '注册登录',
    haveAccount: '已有账户，登录'
  },
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh_CN', // 设置地区
  // fallbackLocale: 'zh_CN',
  messages, // 设置地区信息
})

createApp(App).use(i18n).use(router).mount('#app')
