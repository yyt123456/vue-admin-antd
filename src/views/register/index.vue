<template>
  <div class="login">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="formRef" v-bind="layout" @finish="handleFinish" :model="form"
              :rules="rules">
        <a-form-item name="userName">
          <label>用户名</label>
          <a-input type="text" style="width: 300px" v-model:value="form.userName"/>
        </a-form-item>
        <a-form-item name="password">
          <label>密码</label>
          <a-input type="password" v-model:value="form.password" style="width: 300px"/>
        </a-form-item>
        <a-form-item name="passwordConfirm">
          <label>确认密码</label>
          <a-input type="password" v-model:value="form.passwordConfirm" style="width: 300px"/>
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <div style="display: flex;align-items: center;width: 300px;justify-content: space-between">
            <a-input type="password" maxLength="6" v-model:value="form.code" style="width: 250px;margin-right: 10px"/>
            <a-button type="primary" @click="getCode" :disabled="!(button === '获取验证码')">{{button}}</a-button>
          </div>
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
        <a href="" class="white">注册</a>
      </div>
    </div>
  </div>
</template>
<script>
  import {toRefs, reactive, onMounted} from "vue";
  import Captcha from '../../components/Captcha/index.vue'
  import {isPhone, isPassword, isCode} from "../../utils/validateCommon";
  import {message} from 'ant-design-vue'

  export default {
    components: {
      Captcha
    },
    setup(props, context) {
      console.log(context, '123')
      const checkCode = async (rule, value) => {
        if (!value) {
          return Promise.reject('请输入验证码');
        } else if (!isCode(value)) {
          return Promise.reject('请输入正确验证码');
        } else {
          return Promise.resolve()
        }
      };
      const checkUserName = async (rule, value) => {
        if (!value) {
          return Promise.reject('请输入用户名');
        } else if (!isPhone(value)) {
          return Promise.reject('请输入正确手机号');
        } else {
          return Promise.resolve()
        }
      };
      const checkPassword = async (rule, value) => {
        const password = initData.form.passwordConfirm
        if (!value) {
          return Promise.reject('请输入密码');
        } else if (!isPassword(value)) {
          return Promise.reject('请输入正确密码');
        } else if (password && (password !== value)) {
          return Promise.reject('两次密码输入不一致');
        } else {
          return Promise.resolve()
        }
      };
      const checkPasswords = async (rule, value) => {
        const passwords = initData.form.password
        if (!value) {
          return Promise.reject('请再次输入密码');
        } else if (!isPassword(value)) {
          return Promise.reject('请再次输入正确密码');
        } else if (passwords && (passwords !== value)) {
          return Promise.reject('两次密码输入不一致');
        } else {
          return Promise.resolve()
        }
      };
      const initData = reactive({
        layout: {
          labelCol: {span: 4},
          wrapperCol: {span: 14}
        },
        form: {
          userName: '',
          password: '',
          passwordConfirm: '',
          code: '',
        },
        rules: {
          userName: [{validator: checkUserName, trigger: 'change'}],
          password: [{validator: checkPassword, trigger: 'change'}],
          passwordConfirm: [{validator: checkPasswords, trigger: 'change'}],
          code: [{validator: checkCode, trigger: 'change'}],
        },
        button: '获取验证码',
        Interval0: null,
        timmer: 3
      })
      const data = toRefs(initData)

      const handleFinish = (value) => {
        console.log(value)
      }
      const getCode = () => {
        if (!initData.form.userName) {
          message.warning('请填写用户名')
          return
        }
        if (initData.Interval0) clearInterval(initData.Interval0)
        initData.Interval0 = setInterval(() => {
          let s = initData.timmer--
          initData.button = s + '秒'
          if (s === 0) {
            initData.button = '获取验证码'
            initData.timmer = 3
            clearInterval(initData.Interval0)
          }
        }, 1000)
      }
      onMounted(() => {

      })
      return {
        ...data,
        handleFinish,
        getCode,
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import "styles/registger";
</style>
