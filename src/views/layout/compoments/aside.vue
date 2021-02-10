<template>
  <div>
    <a-menu
      mode="inline"
      theme="dark"
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      :inline-collapsed="state.collapsed"
    >
      <template v-for="item in routers">
        <template v-if="!item.hidden">
          <a-menu-item :key="item.path" v-if="!item.children">
            <span>{{item.meta && item.meta.name}}</span>
          </a-menu-item>

          <a-sub-menu :key="item.path" v-else>
            <template #title>
          <span>
            <span>Navigation One</span>
          </span>
            </template>

            <template v-if="item.children.length > 0">
              <a-menu-item :key="child.path" v-for="child in item.children">
                <span>{{child.meta && child.meta.name}}</span>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
  import {reactive, watch, toRef} from 'vue'
  import {useRouter, useRoute} from "vue-router";

  export default {
    setup() {
      const {options} = useRouter()
      const routers = options.routes
      console.log(routers)
      const state = reactive({
        collapsed: false,
        selectedKeys: ['1'],
        openKeys: ['sub1']
      });
      return {
        state,
        routers
      }
    }
  }
</script>
<style scoped>

</style>