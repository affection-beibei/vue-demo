<template>
  <el-dialog title="新增" :visible.sync="dialog_info_flag" @close="close" width="580px">
    <el-form :model="form" ref="addInfoForm">
      <el-form-item label="类别：" :label-width="formLabelWidth" prop="category">
       <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="标题：" :label-width="formLabelWidth" prop="title">
        <el-input v-model="form.title" placehoder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="概况：" :label-width="formLabelWidth" prop="content">
        <el-input type="textarea" v-model="form.content" placehoder="请输入内容"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="danger" >确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { ref, reactive, watch } from "@vue/composition-api";
export default {
  name: "infopopu",
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const dialog_info_flag = ref(false); // 弹窗标记
    const formLabelWidth = ref("70px");
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    //wacth
    watch(() => {dialog_info_flag.value = props.flag});
    //函数
    const close = (() => {
      dialog_info_flag.value = false;
      emit("update:flag", false);
    });
    // const openDialog = () => {
    //   data.categoryOption = props.category;
    // };
    return {
      formLabelWidth,
      dialog_info_flag,
      form,
      close
    };
  }
};
</script>
<style scoped>
</style>