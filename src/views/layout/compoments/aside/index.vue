<template>
  <div>
    <div style="color: #ffffff;text-align: center;line-height: 64px">模拟控制台</div>
    <a-menu
      mode="inline"
      theme="dark"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="selectPath"
      @openChange="selectSubPath"
    >
      <template v-for="item in routers">
        <template v-if="!item.hidden">
          <a-menu-item :key="item.path" v-if="!item.children">
            <router-link :to="item.path"><span class="anticon"></span><span>{{item.meta && item.meta.name}}</span>
            </router-link>
          </a-menu-item>
          <Aside v-else :menu="item" :key="item.path"/>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
  import {computed, getCurrentInstance} from 'vue'
  import {useRouter, useRoute} from "vue-router";
  import Aside from './aside'

  export default {
    components: {
      Aside
    },
    setup() {
      const {ctx} = getCurrentInstance()
      const {options} = useRouter()
      const routers = options.routes
      const selectedKeys = computed(()=>{
        return ctx.$store.getters.selectedKeys
      })
      const openKeys = computed(()=>{
        return ctx.$store.getters.openKeys
      })
      const selectPath = ({item, key, keyPath}) => {
        ctx.$store.commit('SET_SELECT_KEY', key)
      }
      const selectSubPath = (subPath) => {
        ctx.$store.commit('SET_OPEN_KEY', subPath)
      }
      return {
        openKeys,
        selectedKeys,
        routers,
        selectPath,
        selectSubPath
      }
    }
  }
</script>
<style scoped>

</style>