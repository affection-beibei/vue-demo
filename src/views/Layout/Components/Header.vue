<template>
    <div id="header-warp">
        <div class="pull-left header-icon" @click="navMenu"><svg-icon iconClass='menu' className="menu"></svg-icon></div>
        <div class="pull-right">
            <div class="user-info pull-left">
                <img src="../../../assets/image/admin.jpg" alt="">一葉知秋
            </div>
            <div class="header-icon pull-left"><svg-icon iconClass='exit' className="exit"></svg-icon></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'layoutHeader',
    setup(props,{root}){
        const navMenu =()=>{
            root.$store.commit('SET_COLLAPSE')
        }
        return{
            navMenu
        }
    }
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
        transition: all .3s ease 0s;
    }
    .open{
         #header-warp{
              left: $navMenu;
         }
    }
    .close{
         #header-warp{
              left: $navMenuMin;
         }
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
        img {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-bottom: -15px;
        margin-right: 18px;
        border-radius: 50px;
        }
    }
    
</style>