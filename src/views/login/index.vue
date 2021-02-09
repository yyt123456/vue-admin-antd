<template>
  <div class="login">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="formRef" v-bind="layout">
        <a-form-item name="age" autocomplete="off">
          <label>用户名</label>
          <a-input type="text" style="width: 300px"/>
        </a-form-item>
        <a-form-item name="pass">
          <label>密码</label>
          <a-input type="password" autocomplete="off" style="width: 300px"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block style="width: 300px"
          >登录
          </a-button
          >
        </a-form-item>

        <a-form-item>
          <Captcha></Captcha>
        </a-form-item>
      </a-form>
      <div class="center fs-12">
        <a href="" class="white">忘记密码</a> |
        <router-link to="/register" class="white">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import {toRefs, reactive} from "vue";
  import Captcha from "../../components/Captcha/index.vue";

  export default{
    name: "Login",
    components: {
      Captcha
    },
    setup() {
      const initData = reactive({
        layout: {
          labelCol: {span: 4},
          wrapperCol: {span: 14}
        }
      })
      const data = toRefs(initData)
      return {
        ...data
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import "styles/login";
</style>
