<template>
    <div id="header-warp">
        <div class="pull-left header-icon"><svg-icon iconClass='menu' className="menu"></svg-icon></div>
        <div class="pull-right">
            <div class="user-info pull-left">
                一葉知秋
            </div>
            <div class="header-icon pull-left"><svg-icon iconClass='exit' className="exit"></svg-icon></div>
        </div>
        <div class="pull-right">
            <div class="header-icon pull-left header-admin"><svg-icon iconClass='admin' className="admin"></svg-icon></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
    #header-warp{
        position: fixed;
        top: 0;
        right: 0;
        left: $navMenu;
        height: 75px;
        background-color: #fff;
        box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .1);
        line-height: 75px;
    }
    .header-icon{
        padding: 0 32px;
        font-size: 25px;
        cursor: pointer;

    }
    .user-info{
        height: 100%;
        padding: 0 32px;
        border-right: 1px solid #fff;
        + .header-icon{
            padding: 0 28px;
        }
    }
    .header-admin{
      margin-right: -50px;
    }
</style>