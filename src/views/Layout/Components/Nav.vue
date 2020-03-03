<template>
  <div id="nav-warp">
    <el-menu
      default-active="1-4-1"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <template v-for="(item,index) in routers">
        <el-submenu v-if="!item.hiddle" :key="item.id" :index="index + ''">
          <!-- 一级菜单 -->
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon"></svg-icon>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <!-- 子集菜单 -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
          >{{subItem.meta.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { reactive, ref, isRef, toRefs, onMounted } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    //data数组
    const isCollapse = ref(false);
    const routers = reactive(root.$router.options.routes);
    /**
     * 函数
     */

    const handleOpen = (key, keyPath) => {
      // console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      routers,
      handleOpen,
      handleClose
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#nav-warp {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  background-color: #40576c;
  svg{
    font-size: 20px;
    margin-right: 10px;
  }
}
</style>