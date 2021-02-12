<template>
  <div class="header">
    <div class="left">
      <menu-unfold-outlined @click="setCollapsed" class="trigger" v-if="isCollapsed"/>
      <menu-fold-outlined @click="setCollapsed" class="trigger" v-else/>
    </div>
    <div class="right">
      <a-dropdown>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="first">
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="small"/>
                <span>15733487639</span>
              </div>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="1" class="center">
              <div>
                <span style="margin-right: 10px" v-for="(item,i) in data.langList" :key="i" @click="setLang(item.value)"
                      :class="item.value === data.lang ? 'lang': ''">
                  {{ item.label }}
                </span>
              </div>
            </a-menu-item>
            <a-menu-item key="2">
              <div class="center">{{ $t("exit") }}</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
  import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons-vue';
  import {reactive, getCurrentInstance, computed} from 'vue'
  import {useI18n} from 'vue-i18n'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    components: {
      MenuUnfoldOutlined,
      MenuFoldOutlined
    },
    setup() {
      const {locale} = useI18n({useScope: 'global'})
      const {ctx} = getCurrentInstance()
      console.log(ctx.$store.getters.isCollapsed, '123')
      const data = reactive({
        langList: [
          {label: '中文', value: 'cn'},
          {label: 'En', value: 'en'},
        ],
        lang: 'cn',
      })
      const setLang = (val) => {
        locale.value = val
        data.lang = val
      }
      const isCollapsed = computed(()=>{
        return ctx.$store.getters.isCollapsed
      })
      const setCollapsed = () => {
        ctx.$store.commit('SETCOLLAPSED')
      }
      return {
        data,
        setCollapsed,
        setLang,
        isCollapsed
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    padding: 0 20px;
    height: 64px;

    .left {
      float: left
    }

    .right {
      float: right;
      margin-top: -5px;
    }

    .trigger {
      font-size: 20px;
    }

  }

  .lang {
    color: #aeaeae
  }


</style>