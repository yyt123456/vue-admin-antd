<template>
  <a-sub-menu :key="menu.path">
    <template #title>
      <span>{{menu.meta.name}}</span>
    </template>
    <template v-if="menu.children.length > 0">
      <template v-for="item in menu.children">
        <a-menu-item :key="item.path" v-if="!item.children">
          <router-link :to="item.path">{{item.meta && item.meta.name}}</router-link>
        </a-menu-item>
        <Aside v-else :menu="item" :key="item.path"></Aside>
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
  export default {
    name: 'Aside',
    props: {
      menu: {
        type: Object,
        default: () => ({})
      }
    },
    setup() {
    }
  }
</script>
