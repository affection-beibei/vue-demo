<template>
    <div id="main-wrap">
        <div class="main-content">
            <div class="content">111111111111</div>
        </div>
      <router-view />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
  #main-wrap {
    height: 100vh;
    // position: fixed;
    // left: $navMenu;
    // top: 75px;
    // right: 0;
    // bottom: 0;
    // border: 30px solid #f7f7f7;
    // border-bottom: none;
    // -webkit-box-sizing: border;
}
.main-content {
    width: 100%;
    height: 100%;
    padding-top: $layoutHeader + 30;
    padding-right: 30px;
    box-sizing:border-box;
    transition: all .3s ease 0s;
}
.content {
    width: 100%;
    height: 100%;
    padding: 30px 30px 0 30px;
    background-color: #fff;
    box-sizing:border-box
}
</style>