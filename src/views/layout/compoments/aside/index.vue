<template>
  <div>
    <div style="color: #ffffff;text-align: center;line-height: 64px">模拟控制台</div>
    <a-menu
      mode="inline"
      theme="dark"
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      @click="selectPath"
      @openChange="selectSubPath"
    >
      <template v-for="item in routers">
        <template v-if="!item.hidden">
          <a-menu-item :key="item.path" v-if="!item.children">
            <router-link :to="item.path">{{item.meta && item.meta.name}}</router-link>
          </a-menu-item>
          <Aside v-else :menu="item" :key="item.path"/>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
  import {reactive, watch, toRef} from 'vue'
  import {useRouter, useRoute} from "vue-router";
  import Aside from './aside'

  export default {
    components: {
      Aside
    },
    setup() {
      const {options} = useRouter()
      const routers = options.routes
      const state = reactive({
        selectedKeys: localStorage.getItem('selectPath') ? [localStorage.getItem('selectPath')] : [],
        openKeys: localStorage.getItem('selectSubPath') ? [localStorage.getItem('selectSubPath')] : [],
      });
      const selectPath = ({item, key, keyPath}) => {
        console.log(123)
        state.selectedKeys = [key]
        localStorage.setItem('selectPath', [key])
      }
      const selectSubPath = (subPath) => {
        console.log(456)
        state.openKeys = subPath
        localStorage.setItem('selectSubPath', subPath)
      }
      return {
        state,
        routers,
        selectPath,
        selectSubPath
      }
    }
  }
</script>
<style scoped>

</style>