<template>
  <div id="main-wrap">
    <div class="main-content">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "layoutMain",
  setup(props, { root }) {}
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap {
  height: 100vh;
  //   position: fixed;
  //   left: $navMenu;
  //   top: 75px;
  //   right: 0;
  //   bottom: 0;
  //   border: 30px solid #f7f7f7;
  //   border-bottom: none;
  //   box-sizing: border;
}
.main-content {
  width: 100%;
  height: 100%;
  padding-top: $layoutHeader + 30;
  padding-right: 30px;
  box-sizing: border-box;
  transition: all .3s ease 0s;
}
.open{.main-content{ padding-left: $navMenu + 30;}}
.close{.main-content{ padding-left: $navMenuMin + 30;}}
.content {
  width: 100%;
  height: 100%;
  padding: 30px 30px 0 30px;
  box-sizing: border-box;
  background-color: #fff;
}
</style>