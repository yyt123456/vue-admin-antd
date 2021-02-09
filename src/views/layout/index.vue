<template>
  <div>
    <a-layout style="height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
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
  import {reactive, toRef, ref} from 'vue'
  import Header from './compoments/header'
  import Aside from './compoments/aside'
  import Main from './compoments/main'

  export default {
    components: {
      Header,
      Aside,
      Main,
    },
    setup() {
      const data = reactive({
        selectedKeys: ['1'],
        collapsed: false,
      })
      return {
        ...toRef(data)
      }
    }
  }
</script>
<style lang="scss">

</style>