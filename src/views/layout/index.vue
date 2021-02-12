<template>
  <div>
    <a-layout style="height: 100vh">
      <a-layout-sider v-model:collapsed="isCollapsed" :trigger="null" collapsible>
        <Aside></Aside>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <Header></Header>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <Main></Main>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
  import {reactive, getCurrentInstance, computed} from 'vue'
  import Header from './compoments/header'
  import Aside from './compoments/aside/index'
  import Main from './compoments/main'

  export default {
    components: {
      Header,
      Aside,
      Main,
    },
    setup() {
      const {proxy} = getCurrentInstance()
      const data = reactive({
        selectedKeys: ['1']
      })
      const isCollapsed = computed(() => {
        return proxy.$store.getters.isCollapsed
      })
      return {
        data,
        isCollapsed
      }
    }
  }
</script>
<style lang="scss">

</style>