<template>
 <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
 </svg>
</template>

<script>
import { reactive,computed, ref, isRef, toRefs, onMounted } from "@vue/composition-api";
export default {
  name: "svgIcon", 
  props:{
    iconClass:{
      type:String,
      default:''
    },
    className:{
      type:String,
      default:''
    }
  },
  setup(props) {
    const msg =ref('一叶知秋!!')
    //计算属性得出最终结果并返回
    const iconName = computed(() => `#icon-${props.iconClass}`);
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      } else {
        return `svg-icon`;
      }
    })
    return {
      iconName,
      svgClass,
      msg
    }
  }
}
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 25px;
  height: 25px;
  fill: currentColor;
  color: #1e1e1e;
}
</style>