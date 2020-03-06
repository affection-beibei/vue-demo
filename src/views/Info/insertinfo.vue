<template>
<div class="box">
  <el-form :inline="true" class="demo-form-inline">
    <el-form-item label="信息分类:" class="mt">
      <el-select class="ml" v-model="value" placeholder="请选择" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <div class="warp-center mt" >
      <el-form-item label="新闻标题:">
        <el-input class="ml" placeholder="请输入内容" v-model="input" clearable style="width:360px"></el-input>
      </el-form-item>
    </div>
    <div class="thumbnail mt">
      <el-form-item label="缩略图:">
        <el-upload
        class="ml_th"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
    </div>
    <div>
      <el-form-item label="发布日期:" class="mt">
        <div class="block">
          <el-date-picker class="ml" v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </el-form-item>
    </div>
  </el-form>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  name: "insrtInfo",
  setup(props, { root }) {
    const value = ref("");
    const value1 = ref("");
    const input = ref("");
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const options = reactive([
      {
        value: "选项1",
        label: "国内信息"
      },
      {
        value: "选项2",
        label: "行业信息"
      },
      {
        value: "选项3",
        label: "国内信息"
      }
    ]);
    //方法methods
    const handleRemove = (file, fileList) => {};
    const handlePictureCardPreview = file => {
      root.dialogImageUrl = file.url;
    };
    return {
      value,
      value1,
      input,
      dialogVisible,
      dialogImageUrl,
      options,
      handleRemove,
      handlePictureCardPreview
    };
  }
};
</script>
<style lang="scss" scoped>
.box{
    margin-left: 80px;
    .mt{
        margin-bottom: 35px;
    }
    .ml{
        margin-left: 20px;
    }
    .ml_th{
        margin-left: 37px;
    }
}
</style>