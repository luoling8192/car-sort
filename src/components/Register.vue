<script setup lang="ts">
import { NButton, NDropdown, NFlex, NForm, NFormItem, NInput } from 'naive-ui';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

const { t, locale } =  useI18n({ useScope: 'global' })

const language = ref('zh_CN')
const languageOptions = [
  {
    label: 'English',
    key: 'en',
  },
  {
    label: 'Vièt Nam',
    key: 'vi',
  },
  {
    label: '繁体',
    key: 'zh_TW',
  },
  {
    label: '中文',
    key: 'zh_CN',
  },
]

const languageDisplay = {
  'zh_CN': '中文',
  'zh_TW': '繁体',
  'en': 'English',
  'vi': 'Vièt Nam',
}

const handleChangeLanguage = (data) => {
  locale.value = data
}
</script>

<template>
  <div class="background-top" />

  <NFlex vertical justfly="center" class="wrapper">
    <div class="language">
      <NFlex justify="right">
        <NDropdown trigger="hover" :options="languageOptions" @change="handleChangeLanguage">
          <NButton class="languageButton">
            {{ languageDisplay[language] }} ▼
          </NButton>
        </NDropdown>
      </NFlex>
    </div>

    <img src="../assets/logo.svg" class="logo">
    <NForm label-placement="left" class="form">
      <NFormItem>
        <NInput :placeholder="$t('inputUsername')" class="input" />
      </NFormItem>
      <NFormItem>
        <NInput :placeholder="$t('inputUserPhone')" class="input" />
      </NFormItem>
      <NFormItem>
        <NInput :placeholder="$t('inputUserPwd')" class="input" type="password"/>
      </NFormItem>
      <NFormItem>
        <NInput :placeholder="$t('inputUserPwdTwice')" class="input" type="password"/>
      </NFormItem>
      <NFormItem>
        <NInput :placeholder="$t('inputUserPaymentPwd')" class="input" type="password"/>
      </NFormItem>
      <NFormItem>
        <NInputGroup>
          <NInput :placeholder="$t('inputCaptcha')" class="input" />
          <img>
        </NInputGroup>
      </NFormItem>
      <NFormItem>
        <NButton class="button"  type="primary">
          {{ $t('register') }}
        </NButton>
      </NFormItem>
      <NFormItem>
        <div style="width: 100%; justify-content: center; display: flex;">
          <RouterLink to="/login" class="a">{{ $t('haveAccount') }}</RouterLink>
        </div>
      </NFormItem>
    </NForm>
  </NFlex>

  <div class="background-bottom" />
</template>

<style>
.logo {
  width: 50%;
  height: 20%;
  margin: 0 auto;
  margin-bottom: 1.5em;
}

.background-top {
  z-index: -1;
  background-image: url('../assets/top.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.background-bottom {
  z-index: -1;
  background-image: url('../assets/bottom.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.wrapper {
  width: 100%;
  margin-top: 5%;

  font-size: 1.5em;
  z-index: 1;
}

.input {
  width: 100%;
  height: 3rem;
  line-height: 1.5rem;
  border-radius: 12px;

  text-align: left;
  padding: .4em;
}

.button{
  width: 100%;
  height: 3rem;

  background: linear-gradient(180deg, #FAE99F 0%, #EED176 100%);
  border-radius: 12px;

  color: black;
  font-size: 1.3rem;
}

.a {
  text-decoration: underline;
  color: #EFD277;
  cursor: pointer;
}

.form {
  width: 80%;
  margin: 0 auto;
}

.language {
  width: 100%;
  height: 2rem;
  margin-bottom: 2rem;

  font-size: 1.2rem;
}

.languageButton {
  margin-right: 1rem;
  color: white;
}

.languageButton > .n-button__border,
.languageButton:hover > .n-button__state-border {
  display: none;
}
</style>
