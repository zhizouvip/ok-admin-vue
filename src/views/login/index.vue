<template>
  <div class="view-account">
    <div class="view-account-container">
      <div class="view-account-top">
        <img class="img" src="@/assets/head.png" alt="" srcset="" />
        <div class="text">ok-admin-vue通用后台模版解决方案</div>
      </div>
      <div class="view-account-cont">
        <n-input v-model:value="formData.username" type="input" placeholder="基本的 Input" />
      </div>
      <div class="view-account-cont">
        <n-input
          type="password"
          v-model:value="formData.password"
          show-password-toggle
          placeholder="密码"
          :maxlength="8"
        />
      </div>

      <div class="view-account-cont">
        <n-button @click="handleSubmit" class="other" size="large" type="primary">登录</n-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { PersonOutline, LockClosedOutline, LogoGithub, LogoFacebook } from '@vicons/ionicons5';

export default defineComponent({
  name: 'Login',
  components: {
    PersonOutline,
    LockClosedOutline,
    LogoGithub,
    LogoFacebook
  },
  setup() {
    const router = useRouter();
    const formData = reactive({
      username: 'admin',
      password: '123456'
    });
    return {
      formData,
      logo: import('@/assets/logo.png'),
      handleSubmit() {
        router.replace('/dashboard/control');
      },
      rules: {
        username: {
          required: true,
          message: '请输入用户名！',
          trigger: 'blur'
        },
        password: { required: true, message: '请输入密码！', trigger: 'blur' }
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.view-account {
  display: flex;
  height: 100vh;
  overflow: auto;
  &-top {
    padding: 12px 0;
    text-align: center;
    .img {
      width: 80%;
    }
    .text {
      font-size: 16px;
      padding: 12px 0;
      color: #666666;
    }
  }
  &-container {
    padding: 48px 24px;
    max-width: 384px;
    margin: 0 auto;
  }

  &-cont {
    padding: 10px 0;
  }
}
.other {
  width: 100%;
}
@media (min-width: 768px) {
  .view-account {
    background-image: url('@/assets/images/login.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
  }
}
</style>
