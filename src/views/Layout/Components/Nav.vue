<template>
  <div id="nav-warp">
    <h1 class="logo"><img src="../../../assets/Alogo.jpg" alt=""></h1>
    <el-menu
      default-active="1-4-1"
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
import { reactive, ref, isRef, toRefs, onMounted, computed } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    //data數據
    const routers = reactive(root.$router.options.routes);
    /**
     * computed監聽
     */
    const isCollapse =computed(()=> root.$store.state.isCollapse)
    return {
      isCollapse,
      routers,
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
  height: 100vh;
  background-color: #40576c;
  transition: all .3s ease 0s;
  svg{
    font-size: 20px;
    margin-right: 10px;
  }
}
.logo{
 text-align: center;
 img{
   margin: 28px auto 25px;
   width: 100px;
   cursor: pointer;
  transition: all .3s ease 0s;
 }
}
.open{
  #nav-warp{
    width: $navMenu;
  }
}
.close{
   #nav-warp{width: 64px;}
  .logo img{width: 90%;
  }
}
</style>