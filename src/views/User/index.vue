<template>
  <!-- 头部制作 -->
  <div class=".box">
    <el-row>
      <el-col :span="16">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="关键字:" style="padding-right: 25px">
            <el-input placeholder="请选择" class="h40"></el-input>
          </el-form-item>
          <el-input v-model="input" placeholder="请输入内容" style="width:180px; padding-left:" class="h40"></el-input>
          <el-button type="danger" class="btn_search h40">搜索</el-button>
        </el-form>
      </el-col>
      <el-col :span="8">
        <el-button class="pull-right h40" type="danger">新增</el-button>
      </el-col>
    </el-row>
    <!-- table表单 -->
    <div class="margin_top">
      <el-table class="tabel-el" :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column prop="user" label="邮箱/用户名" width="323"></el-table-column>
        <el-table-column prop="name" label="真实姓名" width="205"></el-table-column>
        <el-table-column prop="telephone" label="手机号" width="235"></el-table-column>
        <el-table-column prop="address" label="地区" width="250"></el-table-column>
        <el-table-column prop="role" label="角色" width="150"></el-table-column>
        <el-table-column prop="state" label="禁启用状态" width="110">
          <el-switch v-model="state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column prop="operation" label="操作">
          <el-button round size="mini" type="danger">删除</el-button>
          <el-button round size="mini" type="success">编辑</el-button>
        </el-table-column>
      </el-table>
    </div>

    <!-- 批量删除 分页器 -->
    <div class="margin_top">
      <el-row>
        <el-col :span="12">
          <el-button round>批量删除</el-button>
        </el-col>
        <el-col :span="12">
          <el-pagination
            class="pull-right"
            background
            :page-sizes="[10, 20, 30, 40]"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="total ,sizes,prev, pager, next,jumper"
            :total="60"
          ></el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "userIndex",
  setup(props) {
    const input = ref("");
    const state = ref(true);
    const tableData = reactive([
      {
        user: "1819220834@qq.com",
        name: "一葉知秋",
        telephone: "177xxxxxxx1",
        address: "上海市普陀区金沙江路 1518 弄",
        role: "超管"
      },
      {
        user: "1819220834@qq.com",
        name: "一葉知秋",
        telephone: "177xxxxxxx1",
        address: "上海市普陀区金沙江路 1518 弄",
        role: "超管"
      },
      {
        user: "1819220834@qq.com",
        name: "一葉知秋",
        telephone: "177xxxxxxx1",
        address: "上海市普陀区金沙江路 1518 弄",
        role: "超管"
      },
      {
        user: "1819220834@qq.com",
        name: "一葉知秋",
        telephone: "177xxxxxxx1",
        address: "上海市普陀区金沙江路 1518 弄",
        role: "超管"
      }
    ]);
    const handleSizeChange = val => {};
    const handleCurrentChange = val => {};

    return {
      input,
      tableData,
      state,
      handleSizeChange,
      handleCurrentChange
    };
  }
};
</script>
<style lang="scss" scoped>
.pull-right {
  float: right;
}
.margin_top {
  margin-top: 40px;
}
.btn_search{
    margin-left: 20px;
}
.h40{
    height: 40px;
}
// .box>.el-table .cell{
//     text-align: center;
// }
div.el-table td,.el-table th {
    text-align: center;
}
</style>