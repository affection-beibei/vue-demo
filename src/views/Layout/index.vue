<template>
    <div id="layout" :class="[ navToggle ? 'close':'open']">
        <LayoutHeader />
        <LayoutMain />
        <LayoutNav />
    </div>
</template>
<script>
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
import LayoutNav from './Components/Nav'
import { computed } from '@vue/composition-api'
export default {
    name:'layout',
    components:{LayoutHeader,LayoutMain,LayoutNav},
    setup(props,{root}){
        const navToggle = computed(()=> root.$store.state.isCollapse)
        return {
            navToggle
        }
}  
}
</script>
<style lang="scss" scoped>
</style>